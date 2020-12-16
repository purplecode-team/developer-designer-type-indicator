import React, { useEffect, useRef, useCallback, useState } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import useWindowDimensions from '../../lib/hooks/useWindowDimensions';
import media from '../../lib/styles/media';

const Canvas = styled.div`
  display: grid;
  place-items: center;
  border-radius: 15px;
  margin: 0 auto;
  padding: 0;
  background-color: #f2f3f4;
  h2 {
    position: relative;
    top: 1.5rem;
    font-family: hannaPro, sans-serif;
    font-size: 24px;
    color: #2a2a2a;
  }
  .x-axis {
    font-size: 12px;
    stroke-width: 0;
  }
  .y-axis {
    font-family: hannaAir, sans-serif;
    font-size: 12px;
    stroke-width: 0;
  }
`;

const Tooltip = styled.div`
  opacity: 0;
  position: relative;
  width: 10rem;
  height: 3rem;
  border-radius: 5px;
  font-size: 1rem;
  font-family: hannaAir, sans-serif;
  line-height: 1rem;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: white;
  img {
    height: 30px;
    object-fit: contain;
  }
  span {
    position: relative;
    left: 5px;
  }
`;

const BarChart = ({ data, title }) => {
  const tabletWidth = Number(media.tablet.slice(0, -2));
  const { windowHeight, windowWidth } = useWindowDimensions();
  const [width, setWidth] = useState(
    windowWidth < tabletWidth ? windowWidth * 0.8 : 500
  );
  const [height, setHeight] = useState(
    windowWidth < tabletWidth ? windowWidth * 0.8 : 400
  );
  const ref = useRef();
  const tooltipRef = useRef();

  const margin = {
    top: 20,
    right: 20,
    bottom: 10,
    left: 70,
  };

  const createBarChart = useCallback(
    (graphWidth, graphHeight) => {
      const svg = d3.select(ref.current);
      const tooltip = d3.select(tooltipRef.current);

      const xMaxValue = d3.max(data, (d) => d.count);
      const xScale = d3
        .scaleLinear()
        .domain([0, xMaxValue])
        .range([0, graphWidth]);

      const yScale = d3
        .scaleBand()
        .range([margin.top, graphHeight])
        .domain(data.map((d) => d.name))
        .paddingOuter(0)
        .paddingInner(0.4);

      const color = d3.scaleLinear().domain([0, xMaxValue]).range([0, 1]);

      const xAxis = d3.axisTop(xScale);
      svg.select('.x-axis').call(xAxis);

      const yAxis = d3
        .axisLeft(yScale)
        .ticks(data.length)
        .tickSizeInner(0)
        .tickSizeOuter(0);

      const mouseover = function (event, d) {
        tooltip
          .html(
            `<img src=${d.img} alt=${d.shortBio}/><span>${d.shortBio}</span>`
          )
          .style('left', xScale(d.count) - 100)
          .style('top', yScale(d.name) + yScale.bandwidth() + 5)
          .transition()
          .duration(200)
          .style('opacity', 1);
        d3.select(this).transition().duration(200).style('opacity', 0.3);
      };

      const mouseleave = function (d) {
        tooltip.html('  ').style('opacity', 0);
        d3.select(this).style('opacity', 1);
      };

      svg.select('.y-axis').call(yAxis);

      svg
        .selectAll('.bar')
        .data(data)
        .join('rect')
        .attr('class', 'bar')
        .attr('x', margin.left)
        .attr('y', (d) => yScale(d.name))
        .attr('height', yScale.bandwidth())
        .on('mouseover', mouseover)
        .on('mouseleave', mouseleave)
        .transition()
        .duration(500)
        .attr('width', ({ count }) => xScale(count))
        .attr('fill', ({ count }) => d3.interpolateYlGn(color(count)));
    },
    [data, margin.left, margin.top]
  );

  // resize graph based on the window size
  useEffect(() => {
    setWidth(windowWidth < tabletWidth ? windowWidth * 0.8 : 500);
    setHeight(windowWidth < tabletWidth ? windowWidth * 0.8 : 500);

    let graphWidth = width - margin.left - margin.right;
    let graphHeight = height - margin.top - margin.bottom;

    createBarChart(graphWidth, graphHeight);
  }, [
    windowHeight,
    windowWidth,
    createBarChart,
    margin.left,
    margin.right,
    margin.top,
    margin.bottom,
    data.length,
  ]);

  return (
    <Canvas>
      <h2> {title} </h2>
      <Tooltip ref={tooltipRef} />
      <svg ref={ref} width={width} height={height}>
        <g
          className="x-axis"
          transform={`translate(${margin.left}, ${margin.top})`}
        />
        <g className="y-axis" transform={`translate(${margin.left - 10}, 0)`} />
      </svg>
    </Canvas>
  );
};

export default BarChart;
