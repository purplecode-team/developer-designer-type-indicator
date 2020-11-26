import React from 'react';
import styled from 'styled-components';
import leftBoard from '../../../public/img/left_start.png';
import rightBoard from '../../../public/img/right_start.png';
import InformationBoard from '../../components/main/InformationBoard';
import media from '../../lib/styles/media';


const Container = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  position: absolute;
  bottom: 26px;
  left: 0;
  right: 0;
  text-align: center;
  @media (max-width: ${media.tablet}){
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 18rem;
  }

`;


const BoardContainer = () => {
  return (
    <Container>
      <InformationBoard
        img={leftBoard}
        title="개발자 TEST"
        leftPos="1"
        urlSlug="developer"
        top={0}
        margin={-20}
      />
      <InformationBoard
        img={rightBoard}
        title="디자이너 TEST"
        leftPos="-1"
        urlSlug="designer"
        top={7}
        margin={20}
      />
    </Container>
  );
};

export default BoardContainer;
