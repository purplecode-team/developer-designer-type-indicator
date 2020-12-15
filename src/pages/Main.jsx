import React from 'react';
import styled from 'styled-components';
import useSumCount from '../lib/hooks/useSumCount';
import useWindowDimensions from '../lib/hooks/useWindowDimensions';
import media from '../lib/styles/media';

// components
import MainContainer from '../containers/main/MainContainer';
import BoardContainer from '../containers/main/BoardContainer';
import LeftIconContainer from '../containers/main/LeftIconContainer';
import RightIconContainer from '../containers/main/RightIconContainer';
import MobileInformationBoard from '../components/main/MobileInformationBoard';

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: #c5f1fc;
`;

const Main = () => {
  const { windowWidth } = useWindowDimensions();
  const [sum] = useSumCount();
  const tabletWidth = Number(media.tablet.slice(0, -2));

  return (
    <MainWrapper>
      <LeftIconContainer />
      <MainContainer />
      {windowWidth > tabletWidth ? (
        <BoardContainer devSum={sum.developer} designerSum={sum.designer} />
      ) : (
        <MobileInformationBoard />
      )}
      <RightIconContainer />
    </MainWrapper>
  );
};

export default Main;
