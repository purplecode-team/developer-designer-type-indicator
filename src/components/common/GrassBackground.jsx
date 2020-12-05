import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.span`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  bottom: 0;
  background-image: url(${(props) => props.img});
  background-position: bottom;
  background-size: 100% 11rem;
  background-repeat: no-repeat;
`;

const GrassBackground = ({ ariaLabel, img }) => {
  return <Background role="img" aria-label={ariaLabel} img={img} />;
};

GrassBackground.propTypes = {
  img: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default GrassBackground;
