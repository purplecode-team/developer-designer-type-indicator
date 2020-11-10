import React from 'react';
import styled from 'styled-components';
import img from '../../../public/img/bg_clouds.png';
import media from '../../lib/styles/media';
import TurtleWithTitle from '../../components/main/TurtleWithTitle';

const Container = styled.div`
  height: 100%;
  max-width: ${media.laptopL};
  margin: 0 auto;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: 50% 30%;
  background-size: 60%;
  @media (max-width: ${media.laptopL}) {
    width: 90%;
    background-size: 80%;
    background-position: 50% 10%;
  }
  @media (max-width: ${media.tablet}) {
    background-size: 100%;
  }
`;

const MainContainer = () => {
  return (
    <Container>
      <TurtleWithTitle />
    </Container>
  );
};

export default MainContainer;
