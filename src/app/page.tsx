"use client";
import { useEffect, useState } from "react";
import { determineInternetUse, getRelevantEndpoints, askPerplexity, prepareCallingFMP, callFmpEndpoints, getResponse, prompt } from "@/lib/pipeline";
import { renderText } from "@/lib/renderer";
import { Tree, TreeNode } from "@/lib/tree";
import TreeView from "@/app/components/TreeView";


export default function Page() {
  const [progress, setProgress] = useState("test");
  const [html, setHtml] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // const response = await prompt("What are Mark Zuckerberg's and Satya Nadella's recent comments about AI?", setProgress);
      // setHtml(await renderText(response));
    };
    // fetchData();

  }, []);

  const tree = new Tree();
  const root: TreeNode = tree.createTree("Initial developer message");
  const userNode1: TreeNode = tree.addNode(root.id, "User message 1");
  const assistantNode1: TreeNode = tree.addNode(userNode1.id, "Assistant message 1");
  const userNode2: TreeNode = tree.editNode(userNode1.id, "User message 2 (edited)");
  const assistantNode2: TreeNode = tree.addNode(userNode2.id, "Assistant message 2");
  const assistantNode3: TreeNode = tree.editNode(assistantNode2.id, "Assistant message 3");
  const userNode3: TreeNode = tree.addNode(assistantNode3.id, "User message 3");
  const assistantNode4: TreeNode = tree.addNode(userNode3.id, "Assistant message 4");
  const userNode4: TreeNode = tree.addNode(assistantNode4.id, "User message 4");
  const assistantNode5: TreeNode = tree.addNode(userNode4.id, "Assistant message 5");
  const userNode5: TreeNode = tree.addNode(assistantNode5.id, "User message 5");
  const assistantNode6: TreeNode = tree.addNode(userNode5.id, "Assistant message 6");
  const userNode6: TreeNode = tree.addNode(assistantNode6.id, "User message 6");
  const assistantNode7: TreeNode = tree.addNode(userNode6.id, "Assistant message 7");
  const userNode7: TreeNode = tree.addNode(assistantNode7.id, "User message 7");
  // tree.addNode(root.id, "User message 1");
  // tree.addNode(root.id, "User message 1");
  // tree.addNode(root.id, "User message 1");
  // tree.addNode(root.id, "User message 1");
  // tree.addNode(root.id, "User message 1");
  // tree.addNode(root.id, "User message 1");
  // tree.addNode(root.id, "User message 1");
  // tree.addNode(root.id, "User message 1");
  
  // tree.addNode(root.id, "User message 1");


  return <main>
    <TreeView tree={tree} />
    {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
  </main>;
}