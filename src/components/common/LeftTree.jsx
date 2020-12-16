import React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import tree from '../../../public/img/tree_left.png';

const Container = styled.div`
  position: absolute;
  height: 100vh;
  left: -1rem;
  top: -1rem;
  @media (max-width: ${media.laptopM}) {
    display: none;
  }
`;

const Tree = styled.img`
  position: absolute;
  overflow: hidden;
  left: -1rem;
  top: -1rem;
  z-index: 3;
  height: 110vh;
  object-fit: contain;
`;

const LeftTree = () => {
  return (
    <Container>
      <Tree src={tree} alt="left tree" />
    </Container>
  );
};

export default LeftTree;
