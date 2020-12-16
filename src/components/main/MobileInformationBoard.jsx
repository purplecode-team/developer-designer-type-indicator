import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import boardImg2 from '../../../public/img/mobile_board2.png';
import boardImg from '../../../public/img/mobile_board.png';
import stickImg from '../../../public/img/mobile_stick.png';

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  overflow: hidden;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 18rem;
`;

const StyledLink = styled(Link)`
  outline: none;
  cursor: pointer;
  position: relative;
  left: ${(props) => props.left}rem;
  top: ${(props) => props.top}rem;
  z-index: 2;
  img {
    width: 16rem;
  }
`;

const BoardStick = styled.img`
  width: 3rem;
  height: 20rem;
  position: absolute;
  top: -3rem;
`;

const MobileInformationBoard = () => {
  return (
    <Wrapper>
      <StyledLink to="/test/developer" top={-1}>
        <img src={boardImg2} alt="개발자 Test 표지판" />
      </StyledLink>
      <BoardStick src={stickImg} alt="표지판 막대" />
      <StyledLink to="/test/designer" top={-3} left={1}>
        <img src={boardImg} alt="디자이너 Test 표지판" />
      </StyledLink>
    </Wrapper>
  );
};

export default MobileInformationBoard;
