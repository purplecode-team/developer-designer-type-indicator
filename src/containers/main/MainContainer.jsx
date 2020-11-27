import React from 'react';
import styled from 'styled-components';
import cloudImg from '../../../public/img/cloud.png';
import grassImg from '../../../public/img/ground.png';
import CloudBackground from '../../components/common/CloudBackground';
import GrassBackground from '../../components/common/GrassBackground';
import TurtleWithTitle from '../../components/main/TurtleWithTitle';

const Container = styled.div`

`;

const MainContainer = () => {
  return (
    <Container>
      <CloudBackground role="img" ariaLabel="clouds background" img={cloudImg} />
      <TurtleWithTitle />
      <GrassBackground role="img" ariaLabel="grass background" img={grassImg} />
    </Container>
  );
};

export default MainContainer;
