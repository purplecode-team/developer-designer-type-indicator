import React from 'react';
import styled from 'styled-components';

// components
import MainContainer from '../containers/main/MainContainer';
import BoardContainer from '../containers/main/BoardContainer';
import LeftIconContainer from '../containers/main/LeftIconContainer';
import RightIconContainer from '../containers/main/RightIconContainer';

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: #c5f1fc;
`;

const Main = () => {
  return (
    <MainWrapper>
      <LeftIconContainer />
      <BoardContainer />
      <MainContainer />
      <RightIconContainer />
    </MainWrapper>
  );
};

export default Main;
