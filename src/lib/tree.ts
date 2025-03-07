/**
 * Class to store the content of a llm chat with local storage
 * Author: Daniel (DanielZFLiu)
 */

import { v4 } from 'uuid';

type Role = "developer" | "user" | "assistant";

export interface TreeNode {
    id: string;
    role: Role;
    content: string;
    parentId?: string;
    children: TreeNode[];
}

export class Tree {
    public root: TreeNode | null = null;

    // lookup map for nodes by id for quick access.
    private nodesMap: Map<string, TreeNode> = new Map();

    // generate id
    private generateId(): string {
        return v4();
    }

    // given parent role, return child role
    private getNextRole(parentRole: Role): "user" | "assistant" {
        if (parentRole === "developer") return "user";
        if (parentRole === "user") return "assistant";
        if (parentRole === "assistant") return "user";
        throw new Error("Invalid parent role");
    }

    // rebuild the internal nodes map
    private buildMap(): void {
        this.nodesMap.clear();
        const traverse = (node: TreeNode) => {
            this.nodesMap.set(node.id, node);
            for (const child of node.children) {
                traverse(child);
            }
        };
        if (this.root) {
            traverse(this.root);
        }
    }

    /**
     * getBranch
     * Given a node's id, returns an array of nodes starting at the root and ending with that node.
     */
    public getBranch(nodeId: string): TreeNode[] {
        const node = this.nodesMap.get(nodeId);
        if (!node) throw new Error("Node not found");
        const branch: TreeNode[] = [];
        let current: TreeNode | undefined = node;
        while (current) {
            branch.push(current);
            if (current.parentId) {
                current = this.nodesMap.get(current.parentId);
            }
            else {
                break;
            }
        }
        return branch.reverse();
    }

    /**
     * getMessages
     * Given a node's id, returns an array of objects { role, content }
     * for the branch from the root to that node.
     */
    public getMessages(nodeId: string): { role: Role; content: string }[] {
        return this.getBranch(nodeId).map((n) => ({
            role: n.role,
            content: n.content,
        }));
    }

    /**
     * editNode
     * Given a node's id and new content, finds the node's parent and
     * creates a new child for that parent (i.e. a new sibling for the given node).
     * The new node’s role is auto-assigned according to the alternating rules.
     */
    public editNode(nodeId: string, newContent: string): TreeNode {
        const node = this.nodesMap.get(nodeId);
        if (!node) throw new Error("Node not found");
        if (!node.parentId) throw new Error("Cannot edit the root node (it has no parent)");

        const parent = this.nodesMap.get(node.parentId);
        if (!parent) throw new Error("Parent node not found");

        const newNode: TreeNode = {
            id: this.generateId(),
            role: this.getNextRole(parent.role),
            content: newContent,
            parentId: parent.id,
            children: [],
        };

        parent.children.push(newNode);
        this.nodesMap.set(newNode.id, newNode);
        return newNode;
    }

    /**
     * deleteNode
     * Given a node's id, deletes that node and all its children (descendants) from the tree.
     */
    public deleteNode(nodeId: string): void {
        const node = this.nodesMap.get(nodeId);
        if (!node) throw new Error("Node not found");

        // remove the node from its parent's children.
        if (node.parentId) {
            const parent = this.nodesMap.get(node.parentId);
            if (parent) {
                parent.children = parent.children.filter((child) => child.id !== nodeId);
            }
        }
        else {
            this.root = null;
        }

        // recursively remove the node and all descendants
        const removeRecursively = (n: TreeNode) => {
            for (const child of n.children) {
                removeRecursively(child);
            }
            this.nodesMap.delete(n.id);
        };
        removeRecursively(node);
    }

    /**
     * getContent
     * Given a node's id, return that node.
     */
    public getNode(nodeId: string): TreeNode {
        const node = this.nodesMap.get(nodeId);
        if (!node) throw new Error("Node not found");
        return node;
    }

    /**
     * addNode
     * Given a node's id and new content, adds a new child to that node.
     * The role for the new node is automatically determined.
     */
    public addNode(nodeId: string, newContent: string): TreeNode {
        const node = this.nodesMap.get(nodeId);
        if (!node) throw new Error("Node not found");

        const newNode: TreeNode = {
            id: this.generateId(),
            role: this.getNextRole(node.role),
            content: newContent,
            parentId: node.id,
            children: [],
        };

        node.children.push(newNode);
        this.nodesMap.set(newNode.id, newNode);
        return newNode;
    }

    /**
     * loadTree
     * Loads the tree from IndexedDB (if it exists) and rebuilds the internal map.
     */
    public async loadTree(): Promise<void> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open("TreeDB", 1);

            request.onupgradeneeded = () => {
                const db = request.result;
                if (!db.objectStoreNames.contains("treeStore")) {
                    db.createObjectStore("treeStore", { keyPath: "id" });
                }
            };

            request.onsuccess = () => {
                const db = request.result;
                const transaction = db.transaction("treeStore", "readonly");
                const store = transaction.objectStore("treeStore");
                const getRequest = store.get("treeData");

                getRequest.onsuccess = () => {
                    const result = getRequest.result;
                    if (result && result.root) {
                        this.root = result.root;
                        this.buildMap();
                    }
                    resolve();
                };

                getRequest.onerror = (e) => reject(e);
            };

            request.onerror = (e) => reject(e);
        });
    }

    /**
     * saveTree.
     * Saves the current tree into IndexedDB.
     */
    public async saveTree(): Promise<void> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open("TreeDB", 1);

            request.onupgradeneeded = () => {
                const db = request.result;
                if (!db.objectStoreNames.contains("treeStore")) {
                    db.createObjectStore("treeStore", { keyPath: "id" });
                }
            };

            request.onsuccess = () => {
                const db = request.result;
                const transaction = db.transaction("treeStore", "readwrite");
                const store = transaction.objectStore("treeStore");
                const data = { id: "treeData", root: this.root };
                const putRequest = store.put(data);

                putRequest.onsuccess = () => resolve();
                putRequest.onerror = (e) => reject(e);
            };

            request.onerror = (e) => reject(e);
        });
    }

    /**
     * deleteTree
     * Checks if the tree data exists in IndexedDB. If it does, wipes that data.
     */
    public async deleteTree(): Promise<void> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open("TreeDB", 1);

            request.onupgradeneeded = () => {
                const db = request.result;
                if (!db.objectStoreNames.contains("treeStore")) {
                    db.createObjectStore("treeStore", { keyPath: "id" });
                }
            };

            request.onsuccess = () => {
                const db = request.result;
                const transaction = db.transaction("treeStore", "readwrite");
                const store = transaction.objectStore("treeStore");

                const getRequest = store.get("treeData");

                getRequest.onsuccess = () => {
                    const result = getRequest.result;
                    if (result) {
                        const deleteRequest = store.delete("treeData");
                        deleteRequest.onsuccess = () => {
                            this.root = null;
                            this.nodesMap.clear();
                            resolve();
                        };
                        deleteRequest.onerror = (e) => reject(e);
                    } else {
                        resolve();
                    }
                };

                getRequest.onerror = (e) => reject(e);
            };

            request.onerror = (e) => reject(e);
        });
    }

    /**
     * createTree
     * Given a role (must be "developer") and content, creates the first node of the tree.
     */
    public createTree(content: string): TreeNode {
        if (this.root) {
            throw new Error("Tree already exists");
        }

        const newNode: TreeNode = {
            id: this.generateId(),
            role: "developer",
            content,
            children: [],
        };

        this.root = newNode;
        this.nodesMap.set(newNode.id, newNode);
        return newNode;
    }

    /**
     * getWidth
     * Computes the width of the tree (i.e. the maximum number of nodes at any single depth level).
     */
    public getWidth(): number {
        if (!this.root) return 0;

        // bfs
        const queue: { node: TreeNode, depth: number }[] = [{ node: this.root, depth: 1 }];
        const levelCounts: Record<number, number> = {};
        let maxWidth = 0;

        while (queue.length > 0) {
            const { node, depth } = queue.shift()!;
            levelCounts[depth] = (levelCounts[depth] || 0) + 1;
            maxWidth = Math.max(maxWidth, levelCounts[depth]);

            for (const child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }

        return maxWidth;
    }

    /**
     * getHeight
     * Computes the height of the tree (i.e. the length of the longest branch from the root).
     */
    public getHeight(): number {
        // determine height from a given node
        const traverse = (node: TreeNode | null): number => {
            if (!node) return 0;
            if (node.children.length === 0) return 1;
            let maxChildHeight = 0;
            for (const child of node.children) {
                maxChildHeight = Math.max(maxChildHeight, traverse(child));
            }
            return 1 + maxChildHeight;
        };

        return traverse(this.root);
    }
}
