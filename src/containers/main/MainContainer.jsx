import React from 'react';
import styled from 'styled-components';
import img from '../../../public/img/bg_clouds.png';
import grassImg from '../../../public/img/bg_bottom.png';
import media from '../../lib/styles/media';
import TurtleWithTitle from '../../components/main/TurtleWithTitle';

const Container = styled.div`
  height: 100%;
  max-width: 100%;
`;

const CloudBackground = styled.span`
  margin: 0 auto;
  max-width: ${media.laptopL};
  height: 100%;
  display: block;
  background-image: url(${img});
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

const GrassBackground = styled.span`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  top: -200%;
  background-image: url(${grassImg});
  background-position: bottom;
  background-size: 100% 15rem;
  background-repeat: no-repeat;
`;

const MainContainer = () => {
  return (
    <Container>
      <CloudBackground role="img" aria-label="clouds background" />
      <TurtleWithTitle />
      <GrassBackground role="img" aria-label="grass background" />
    </Container>
  );
};

export default MainContainer;
