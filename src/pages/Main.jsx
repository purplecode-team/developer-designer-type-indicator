import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const Main = () => {
  return <MainWrapper></MainWrapper>;
};

const MainWrapper = styled.div`
  height: 100vh;
  background-color: ${palette.blue0};
`;

export default Main;
