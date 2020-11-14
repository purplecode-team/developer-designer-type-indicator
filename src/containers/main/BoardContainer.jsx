import React from 'react';
import styled from 'styled-components';
import leftBoard from '../../../public/img/left_start.png';
import rightBoard from '../../../public/img/right_start.png';
import InformationBoard from '../../components/main/InformationBoard';

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
`;

const BoardContainer = () => {
  return (
    <Container>
      <InformationBoard
        img={leftBoard}
        title="개발자 테스트"
        leftPos="1"
        urlSlug="developer"
      />
      <InformationBoard
        img={rightBoard}
        title="디자이너 테스트"
        leftPos="-1"
        urlSlug="designer"
      />
    </Container>
  );
};

export default BoardContainer;
