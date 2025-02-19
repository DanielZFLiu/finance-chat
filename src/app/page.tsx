"use client";
import { useEffect, useState } from "react";
import { formattingAdvise } from "@/lib/renderer";
import { Tree, TreeNode } from "@/lib/tree";
import TreeView from "@/app/components/TreeView/TreeView";
import ChatView from "./components/ChatView/ChatView";


export default function Page() {
  const [id, setId] = useState("");
  const tree = useState(new Tree())[0];
  const [view, setView] = useState("chat");

  useEffect(() => {
    tree.loadTree()
      .then(() => {
        if (tree.root) {
          setId(tree.root.id);
          setView("tree");
        }
        else {
          const root: TreeNode = tree.createTree(formattingAdvise);
          setId(root.id);
        }
      })
      .catch(() => {
        const root: TreeNode = tree.createTree(formattingAdvise);
        setId(root.id);
      });
  }, []);

  return <main>
    {view === "chat" ? (
      <ChatView tree={tree} id={id} setId={setId} setView={setView} />
    ) : (
      <TreeView tree={tree} id={id} setId={setId} setView={setView} />
    )}
  </main>;
}