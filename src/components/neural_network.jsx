
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const NeuralNetwork = () => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current);

      // Clear the existing SVG content
      svg.selectAll("*").remove();

      // Define dimensions
      const width = 1000;
      const height = 400;
      svg.attr('width', width).attr('height', height);

      // Normally, you would calculate these based on the 'state' structure
      // For demonstration purposes, let's define a simple network manually
      const nodes = [
        { id: 'input1', layer: 0 },
        { id: 'input2', layer: 0 },
        { id: 'hidden1', layer: 1 },
        { id: 'hidden2', layer: 1 },
        { id: 'output', layer: 2 }
      ];

      const links = [
        { source: 'input1', target: 'hidden1', weight: 0.5 },
        { source: 'input2', target: 'hidden1', weight: 0.8 },
        { source: 'input1', target: 'hidden2', weight: -0.3 },
        { source: 'input2', target: 'hidden2', weight: 0.6 },
        { source: 'hidden1', target: 'output', weight: -0.8 },
        { source: 'hidden2', target: 'output', weight: 0.1 }
      ];

      // Create scales for positioning
      const xScale = d3.scalePoint()
        .domain(d3.range(d3.max(nodes, d => d.layer) + 1))
        .range([0, width])
        .padding(0.5);

      const yScale = d3.scalePoint()
        .domain(d3.range(d3.max(nodes, d => d.layer)))
        .range([0, height])
        .padding(1);

      // Draw lines for the links
      const line = d3.line()
        .x(d => xScale(d.layer))
        .y((d, i) => yScale(i));

      svg.selectAll(".link")
        .data(links)
        .enter()
        .append("line")
        .attr("class", "link")
        .attr("stroke-width", d => Math.abs(d.weight) * 2)
        .attr("x1", d => xScale(nodes.find(node => node.id === d.source).layer))
        .attr("y1", d => yScale(nodes.findIndex(node => node.id === d.source)))
        .attr("x2", d => xScale(nodes.find(node => node.id === d.target).layer))
        .attr("y2", d => yScale(nodes.findIndex(node => node.id === d.target)))
        .attr("stroke", d => d.weight > 0 ? 'green' : 'red');

      // Draw circles for the nodes
      svg.selectAll(".node")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("class", "node")
        .attr("r", 10)
        .attr("cx", d => xScale(d.layer))
        .attr("cy", (d, i) => yScale(i));
    }
  }, [d3Container.current]); // Redraw when the 'state' or 'd3Container.current' changes

  return (
    <div className='NN'>
    <svg className="d3-component" ref={d3Container} />
    </div>
  );
}

export default NeuralNetwork;