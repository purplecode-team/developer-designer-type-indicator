import React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import tree from '../../../public/img/tree_right.png';

const Container = styled.div`
  position: absolute;
  height: 100vh;
  top: -1rem;
  right: -1rem;
  @media (max-width: ${media.laptopM}px) {
    display: none;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 5;
  margin-top: 5rem;
  width: 30rem;
  height: 40%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: end;
  @media (max-width: ${media.laptopL}) {
    margin-top: 3rem;
    width: 30rem;
  }
`;

const Tree = styled.img`
  position: absolute;
  top: -1rem;
  right: -1rem;
  z-index: 3;
  height: 110vh;
  overflow: hidden;
  object-fit: contain;
`;

const RightTree = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
      <Tree src={tree} alt="right tree" />
    </Container>
  );
};

export default RightTree;
