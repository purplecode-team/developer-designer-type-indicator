import React from 'react';
import cloudImg from '../../../public/img/cloud.png';
import grassImg from '../../../public/img/ground.png';
import CloudBackground from '../../components/common/CloudBackground';
import GrassBackground from '../../components/common/GrassBackground';
import TurtleWithTitle from '../../components/main/TurtleWithTitle';

const MainContainer = () => {
  return (
    <>
      <CloudBackground
        role="img"
        ariaLabel="clouds background"
        img={cloudImg}
      />
      <TurtleWithTitle />
      <GrassBackground role="img" ariaLabel="grass background" img={grassImg} />
    </>
  );
};

export default MainContainer;
