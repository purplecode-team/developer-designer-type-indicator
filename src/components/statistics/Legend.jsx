import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import media from '../../lib/styles/media';

const Wrapper = styled.ul`
  padding: 1.5rem;
  @media (max-width: ${media.laptop}) {
    padding: 1rem 0;
    width: 80%;
    display: grid;
    margin: auto;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }
  li {
    margin-bottom: 1rem;
    font-size: 12px;
    font-family: hannaAir, sans-serif;
    a {
      color: black;
      text-decoration: none;
    }
  }
`;

const Legend = ({ data, type }) => {
  const xMaxValue = d3.max(data, (d) => d.count);
  const colorScale = d3.scaleLinear().domain([0, xMaxValue]).range([0, 1]);

  return (
    <Wrapper>
      {data &&
        data.map(({ shortBio, name, count }) => (
          <li key={shortBio}>
            <svg width={14} height={14}>
              <rect
                width={14}
                height={14}
                fill={d3.interpolateYlGn(colorScale(count))}
              />
            </svg>
            <a target="_blank" href={`/result/${type}/${name}`}>
              <span> {shortBio}</span>
            </a>
          </li>
        ))}
    </Wrapper>
  );
};

export default Legend;
