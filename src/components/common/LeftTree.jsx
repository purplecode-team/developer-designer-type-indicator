import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../lib/styles/media';
import tree from '../../../public/img/tree_left.png';

const Container = styled.div`
  position: absolute;
  display: block;
  height: 100vh;
  left: -1rem;
  top: -1rem;
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
  @media (max-width: ${media.laptopL}) {
    margin-top: 3rem;
    width: 30rem;
  }
`;

const Tree = styled.img`
  position: absolute;
  left: -1rem;
  top: -1rem;
  z-index: 3;
  height: 110vh;
  overflow: hidden;
  object-fit: contain;
`;

const LeftTree = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
      <Tree src={tree} alt="left tree" />
    </Container>
  );
};

LeftTree.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

LeftTree.defaultProps = {
  children: null,
};

export default LeftTree;
