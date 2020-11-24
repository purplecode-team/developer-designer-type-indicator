import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../lib/styles/media';

const Background = styled.span`
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  margin: 0 auto;
  width: 16rem;
  height: 12rem;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size:100%;
  @media (max-width: ${media.tablet}){
    top: ${(props) => props.top+5}%;
    left: ${(props) => props.left}%;
    width: 10rem;
    height: 7rem;
  }
  @media (max-width: ${media.mobileL}){
    top: ${(props) => props.top+5}%;
    left: ${(props) => props.left-10}%;
    width: 10rem;
    height: 7rem;
  }
`;

const CloudBackground = ({ ariaLabel, img }) => {
  const positions = [{top:24,left:15},{top:5,left:65},{top:52,left:55}];
  const list = positions.map((position,index)=>(
    <Background key={index} role="img" aria-label={ariaLabel} img={img} top={position.top} left={position.left}/>)
  );
  return (
    <>
      {list}
    </>
  );
};

CloudBackground.propTypes = {
  img: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default CloudBackground;
