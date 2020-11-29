import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  @media (max-width: ${media.tablet}) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 18rem;
  }
`;

const BoardContainer = ({ devSum, designerSum }) => {
  return (
    <Container>
      <InformationBoard
        img={leftBoard}
        title="개발자 TEST 가는 길"
        sum={devSum}
        leftPos="1"
        urlSlug="developer"
        top="0"
      />
      <InformationBoard
        img={rightBoard}
        title="디자이너 TEST 가는 길"
        sum={designerSum}
        leftPos="-1"
        urlSlug="designer"
        top="7"
      />
    </Container>
  );
};

BoardContainer.propTypes = {
  devSum: PropTypes.number.isRequired,
  designerSum: PropTypes.number.isRequired,
};

export default BoardContainer;
