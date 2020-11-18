import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../lib/styles/media';

const Background = styled.span`
  margin: 0 auto;
  max-width: ${media.laptopL};
  height: 100%;
  display: block;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: 50% 30%;
  background-size: 60%;
  @media (max-width: ${media.laptopL}) {
    background-size: 80%;
    background-position: 50% 10%;
  }
  @media (max-width: ${media.tablet}) {
    background-size: 95%;
  }
`;

const CloudBackground = ({ ariaLabel, img }) => {
  return <Background role="img" aria-label={ariaLabel} img={img} />;
};

CloudBackground.propTypes = {
  img: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default CloudBackground;
