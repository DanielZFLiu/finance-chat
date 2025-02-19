import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Tree, TreeNode } from "@/lib/tree";
import './TreeView.css';

interface D3TreeProps {
  tree: Tree;
  id: string;
  setId: (newId: string) => void;
  setView: (view: string) => void;
}

const D3Tree: React.FC<D3TreeProps> = ({ tree, id, setId, setView }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  // dynamically calculate width and height based on tree size
  const width = tree.getWidth() * 200 + 160;
  const height = tree.getHeight() * 110 + 160;

  // preview content
  const [previewContent, setPreviewContent] = useState("");

  /**
   * sets up the svg canvas, adds inner group g to handle margins
   */
  function canvasSetup(): d3.Selection<SVGGElement, unknown, null, undefined> {
    return d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(80,80)');
  }

  /**
   * draws edges between nodes
   */
  function drawEdges(svg: d3.Selection<SVGGElement, unknown, null, undefined>, rootNode: d3.HierarchyNode<TreeNode>) {
    // generator for drawing svg paths that link nodes in vertical layout
    const linkGen = d3
      .linkVertical<d3.HierarchyPointNode<TreeNode>, d3.HierarchyPointNode<TreeNode>>()
      .x(d => d.x)
      .y(d => d.y);

    svg
      .selectAll('.link') // targeting all links
      .data(rootNode.links()) // bind link data
      .enter() // for each new data item (that doesn't have corresponding DOM element)
      .append('path') // append new svg path
      .attr('class', 'link') // give each path a class
      .attr('d', (d: d3.HierarchyLink<TreeNode>) => // generate svg path data for each link 
        linkGen(d as unknown as d3.HierarchyPointNode<TreeNode>)!
      );
  }

  /**
   * draw nodes 
   */
  function drawNodes(svg: d3.Selection<SVGGElement, unknown, null, undefined>, rootNode: d3.HierarchyNode<TreeNode>) {
    // for each node, create a group
    // the same logic as in draw edges
    const nodes = svg
      .selectAll('.node')
      .data(rootNode.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('id', d => d.data.id)
      .attr('transform', d => `translate(${d.x},${d.y})`);

    // draw circles for each node
    nodes
      .append('circle')
      .attr('r', 7)
      .attr("class", d => d.data.role === 'user' ? "node-circle-user" : "node-circle")
      .on('mouseover', (event, d) => {
        onNodeHover(event, d);
      })
      .on('click', (event, d) => {
        if(d.data.role === 'assistant' || d.data.role === 'developer'){
          onNodeClick(event, d);
        }
      })
  }

  /**
   * On hover event listner for nodes
   */
  function onNodeHover(event: React.MouseEvent<SVGCircleElement, MouseEvent>, d: d3.HierarchyNode<TreeNode>) {
    console.log('Hover on node', d.data.id, event);
    setPreviewContent(d.data.role + ": " + d.data.content);
  }

  /**
   * On click event listner for nodes
   */
  function onNodeClick(event: React.MouseEvent<SVGCircleElement, MouseEvent>, d: d3.HierarchyNode<TreeNode>) {
    console.log('Click on node', d.data.id);
    setId(d.data.id);
    setView('chat');
  }

  useEffect(() => {
    // clear previous svg
    d3.select(svgRef.current).selectAll('*').remove();

    // ensure tree has root node
    if (!tree || !tree['root']) return;

    // convert tree to d3 hierarchy structure
    const rootNode = d3.hierarchy<TreeNode>(tree['root'], d => d.children);

    // create layout, calculates pos of each node (adjust for margin (80, 80))
    const treeLayout = d3.tree<TreeNode>().size([width - 160, height - 160]);
    treeLayout(rootNode);

    const svg = canvasSetup();

    drawEdges(svg, rootNode);

    drawNodes(svg, rootNode);

    // scroll to the node with id (the passed in prop id)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [tree]);

  return <div className="canvasContainer">
    <div className="nodePreview">{previewContent}</div>
    <svg className="canvas" ref={svgRef}></svg>
  </div>;
};

export default D3Tree;