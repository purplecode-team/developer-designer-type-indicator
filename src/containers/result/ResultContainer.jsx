import React from 'react';
import styled from 'styled-components';
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
  @media (min-width: ${media.laptop+1}px) {
    grid-template-columns: 0.5fr 3fr 4fr 0.5fr;
  }
  @media (max-width: ${media.laptop}px) {
    grid-template-rows: 0.5fr 1fr;
    grid-template-columns: 100%;
    justify-content: center;
  }
`;

const Space = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: ${media.laptop}px) {
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
