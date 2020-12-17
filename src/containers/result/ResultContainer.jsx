import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Character from '../../components/result/Character';
import media from '../../lib/styles/media';
import TextWhiteboard from './TextWhiteBoard';
import { shortBio } from '../../lib/util/util';

const ResultBox = styled.div`
  position: absolute;
  z-index: 999;
  display: grid;
  width: 100%;
  @media (min-width: ${media.laptop}) {
    grid-template-columns: 0.5fr 3fr 4fr 0.5fr;
  }
  @media (max-width: ${media.laptop}) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 100%;
    justify-content: center;
  }
`;

const Space = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: ${media.laptop}) {
    display: none;
  }
`;

const ResultContainer = () => {
  const { name } = useParams();

  return (
    <ResultBox>
      <Space />
      <Character shortBio={shortBio[name]} name={name} />
      <TextWhiteboard />
      <Space />
    </ResultBox>
  );
};

export default ResultContainer;
