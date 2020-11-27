import React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import leftTree from '../../../public/img/tree_left.png';


const Tree = styled.img`
  @media (max-width: ${media.laptopM}) {
    left: -12rem;
  };
  @media (max-width: ${media.laptop}) {
    display:none;
  };
  position: absolute;
  left: -7rem;
  top: -1rem;
  height: 110vh;
  object-fit: contain;
  z-index:1;
`;

const LeftTree = ()=>{
    return(
      <>
        <Tree src={leftTree} alt='left Tree'/>
      </>
    );
};

export default LeftTree;