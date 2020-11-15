import React from 'react';
import styled from 'styled-components';
import cloudImg from '../../../public/img/bg_clouds.png';
import grassImg from '../../../public/img/bg_bottom.png';
import CloudBackground from '../../components/common/CloudBackground';
import GrassBackground from '../../components/common/GrassBackground';
import TurtleWithTitle from '../../components/main/TurtleWithTitle';

const Container = styled.div`
  height: 100%;
  max-width: 100%;
`;

const MainContainer = () => {
  return (
    <Container>
      <CloudBackground
        role="img"
        ariaLabel="clouds background"
        img={cloudImg}
      />
      <TurtleWithTitle />
      <GrassBackground role="img" ariaLabel="grass background" img={grassImg} />
    </Container>
  );
};

export default MainContainer;
