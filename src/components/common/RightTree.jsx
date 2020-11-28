import React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import rightTree from '../../../public/img/tree_right.png';


const Tree = styled.img`
  @media (max-width: ${media.laptopM}) {
    right: -12rem;
  };
  @media (max-width: ${media.laptop}) {
    display:none;
  };
  position: absolute;
  right: -7rem;
  height: 100vh;
  object-fit: contain;
  z-index:1;
`;

const RightTree = ()=>{
    return(
      <>
        <Tree src={rightTree} alt='right Tree'/>
      </>
    );
};

export default RightTree;