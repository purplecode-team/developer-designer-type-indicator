import React from 'react';
import styled from 'styled-components';
import bg from '../../public/img/bg.png';
import { media } from '../lib/styles/media';

const Main = () => {
  return (
    <MainContainer>
      <h1> Home </h1>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
`;

export default Main;
