import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../lib/styles/media';

// img src
import graphE from '../../../public/img/graph_E.png';
import graphI from '../../../public/img/graph_I.png';
import graphT from '../../../public/img/graph_T.png';
import graphF from '../../../public/img/graph_F.png';
import graphJ from '../../../public/img/graph_J.png';
import graphP from '../../../public/img/graph_P.png';

const GraphWrapper = styled.div`
  padding: 1rem 2rem;
  border-radius: 1rem 1rem 0 0;
  background-color: #eeeeee;
  @media (max-width: ${media.mobileL}) {
    padding: 1rem 1.5rem;
  }
  @media (max-width: ${media.mobileS}) {
    padding: 0.5rem 0;
  }
  h2 {
    padding: 0.5rem 1rem;
    font-size: 16px;
    margin-bottom: 0.5rem;
  }
  img {
    display: block;
    margin: -1rem auto;
    width: 20rem;
    object-fit: contain;
    @media (max-width: ${media.mobileS}) {
      width: 17rem;
    }
  }
`;

const TypeGraph = ({ result }) => {
  const match = {
    E: graphE,
    I: graphI,
    F: graphF,
    T: graphT,
    J: graphJ,
    P: graphP,
  };

  return (
    <GraphWrapper>
      <h2> 나의 성향 </h2>
      <img src={match[result[0]]} alt={`type ${result[0]}`} />
      <img src={match[result[1]]} alt={`type ${result[1]}`} />
      <img src={match[result[2]]} alt={`type ${result[2]}`} />
    </GraphWrapper>
  );
};

TypeGraph.propType = {
  result: PropTypes.string.isRequired,
};

export default TypeGraph;
