import React from 'react';
import styled from 'styled-components';
import leftBoard from '../../../public/img/left_start.png';
import rightBoard from '../../../public/img/right_start.png';
import InformationBoard from '../../components/main/InformationBoard';
import media from '../../lib/styles/media';


const Container = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  @media (max-width: ${media.tablet}){

  }
  @media (max-width: ${media.mobileL}){
    
    width:90%;
    bottom: 6rem;
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
      />
      <InformationBoard
        img={rightBoard}
        title="디자이너 TEST"
        leftPos="-1"
        urlSlug="designer"
      />
    </Container>
  );
};

export default BoardContainer;
