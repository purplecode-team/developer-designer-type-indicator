import styled from 'styled-components';
import React from 'react';
import media from '../../lib/styles/media';

const IconImg = styled.img`
  width: 8rem;
  object-fit: contain;
  margin-top: ${(props) => props.top}rem;
  margin-left: ${(props) => props.left}rem;
  margin-right: ${(props) => props.right}rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: ${media.laptopL}) {
    width: 6rem;
  }
`;

const IconS = ({ src, alt, top, left, right }) => {
  return <IconImg src={src} alt={alt} top={top} left={left} right={right} />;
};

export default IconS;
