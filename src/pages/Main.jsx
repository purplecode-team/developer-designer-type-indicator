import React from 'react';
import styled from 'styled-components';
import MainContainer from '../containers/main/MainContainer';
import BoardContainer from '../containers/main/BoardContainer';

const Main = () => {
  return (
    <MainWrapper>
      <BoardContainer />
      <MainContainer />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #c5f1fc;
`;

export default Main;
