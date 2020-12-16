import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import media from '../../lib/styles/media';

const Wrapper = styled.ul`
  padding: 1.5rem;
  @media (max-width: ${media.laptop}) {
    width: 80%;
    display: flex;
    margin: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
  li {
    width: 10rem;
    margin-bottom: 1rem;
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
        data.map(({ shortBio, name, count }, index) => (
          <li key={shortBio}>
            <svg width={20} height={20}>
              <rect
                width={20}
                height={20}
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
