import React from 'react';
import styled, { keyframes } from 'styled-components';
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
    height: 100%;
  }
  @media (max-width: ${media.laptop}px) {
    grid-template-rows: 0.5fr 1fr;
    grid-template-columns: 100%;
    justify-content: center;
  }
`;

const Space = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: ${media.laptop}px) {
    display: none;
  }
`;
const fadeIn = keyframes`
  0% {
    opacity:1;
  }
  100%{
    opacity:0.5;
  }
`;

const BackgroundDark = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  position: absolute;
  background-color: black;
  opacity: 0.5;
  animation: ${fadeIn} 5s;
  top: 0;
  z-index:-1;
`;

const ResultContainer = () => {
  const { name } = useParams();

  return (
    <ResultBox>
      <BackgroundDark />
      <Space />
      <Character shortBio={shortBio[name]} name={name} />
      <TextWhiteboard />
      <Space />
    </ResultBox>
  );
};

export default ResultContainer;
