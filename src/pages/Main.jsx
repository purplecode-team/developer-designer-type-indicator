import React from 'react';
import styled from 'styled-components';
import MainContainer from '../containers/main/MainContainer';
import grassImg from '../../public/img/bg_bottom.png';

const Main = () => {
  return (
    <MainWrapper>
      <MainContainer />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #c5f1fc;
  background-image: url(${grassImg});
  background-position: bottom;
  background-size: 100% 15rem;
  background-repeat: no-repeat;
`;

export default Main;
