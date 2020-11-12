import styled from 'styled-components';
import media from '../../lib/styles/media';
import React from 'react';

const IconImg = styled.img`
  width: 10rem;
  object-fit: contain;
  margin-top: ${(props) => props.top}rem;
  margin-left: ${(props) => props.left}rem;
  margin-right: ${(props) => props.right}rem;
  @media (max-width: ${media.laptopL}) {
    width: 8rem;
  }
`;

const IconM = ({ src, alt, top, left, right }) => {
  return <IconImg src={src} alt={alt} top={top} left={left} right={right} />;
};

export default IconM;
