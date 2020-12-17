import React, { useEffect, useRef, useCallback, useState } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import useWindowDimensions from '../../lib/hooks/useWindowDimensions';
import Legend from './Legend';
import media from '../../lib/styles/media';

const Canvas = styled.div`
  display: grid;
  place-items: center;
  border-radius: 15px;
  margin: 0 auto;
  padding: 0;
  background-color: #f2f3f4;
  h2 {
    width: 100%;
    text-align: center;
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
  height: 3rem;
  border-radius: 5px;
  font-size: 12px;
  z-index: 200;
  font-family: hannaAir, sans-serif;
  line-height: 1rem;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 1rem;
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

const ChartWrapper = styled.div`
  display: flex;
  position: relative;
  top: -2rem;
  @media (max-width: ${media.laptop}) {
    flex-direction: column;
  }
`;

const BarChart = ({ data, title, type }) => {
  const laptopWidth = Number(media.laptop.slice(0, -2));
  const { windowHeight, windowWidth } = useWindowDimensions();
  const [width, setWidth] = useState(
    windowWidth < laptopWidth ? windowWidth * 0.8 : 500
  );
  const [height, setHeight] = useState(
    windowWidth < laptopWidth ? windowWidth * 0.6 : 300
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
        .domain(data.map((d) => d.title))
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
        if (windowWidth < laptopWidth) {
          return;
        }
        tooltip
          .html(
            `<img src=${d.img} alt=${d.shortBio}/><span>${d.shortBio} ${d.count}명</span>`
          )
          .style('left', xScale(d.count) - 180)
          .style('top', yScale(d.title) + yScale.bandwidth() + 5)
          .transition()
          .duration(200)
          .style('opacity', 1);
        d3.select(this).transition().duration(200).style('opacity', 0.3);
      };

      const mouseleave = function () {
        if (windowWidth < laptopWidth) {
          return;
        }
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
        .attr('y', (d) => yScale(d.title))
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

  // resize graph based on Window size
  useEffect(() => {
    setWidth(windowWidth < laptopWidth ? windowWidth * 0.8 : 500);
    setHeight(windowWidth < laptopWidth ? windowWidth * 0.6 : 300);

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
      {windowWidth >= laptopWidth ? (
        <Tooltip ref={tooltipRef} />
      ) : (
        <div style={{ height: '3rem' }} />
      )}
      <ChartWrapper>
        <svg ref={ref} width={width} height={height}>
          <g
            className="x-axis"
            transform={`translate(${margin.left}, ${margin.top})`}
          />
          <g
            className="y-axis"
            transform={`translate(${margin.left - 10}, 0)`}
          />
        </svg>
        <Legend data={data} type={type} />
      </ChartWrapper>
    </Canvas>
  );
};

export default BarChart;
