import React from 'react';
import styled from 'styled-components';
import useSumCount from '../lib/hooks/useSumCount';

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
  const [sum] = useSumCount();

  return (
    <MainWrapper>
      <LeftIconContainer />
      <BoardContainer devSum={sum.developer} designerSum={sum.designer} />
      <MainContainer />
      <RightIconContainer />
    </MainWrapper>
  );
};

export default Main;
