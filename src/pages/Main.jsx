import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import MainContainer from '../containers/main/MainContainer';

const Main = () => {
  return (
    <MainWrapper>
      <MainContainer />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  background-color: ${palette.blue0};
`;

export default Main;
