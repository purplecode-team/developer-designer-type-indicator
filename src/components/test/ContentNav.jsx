import React from 'react';
import styled from 'styled-components';
import foot from '../../../public/img/foot.png';
import media from '../../lib/styles/media';

const NavBar = styled.div`
  position: absolute;
  bottom: -110px;
  width: 700px;
  height: 20px;
  border-radius: 10px;
  background-color: #ffd4d7;
  left: -125px;
  z-index:99;
  @media (min-width: ${media.laptopL+1}px){
    width:100%;
    left:0;
  }
  @media (max-width: ${media.tablet}px){
    width:100%;
    left:0;
    bottom: -60px;
    height: 12px;
  }
`;

const NavIconWrap = styled.span`
  background-image: url(${foot});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  position: absolute;
  top: -1rem;
  left: ${(props) => props.left}%;
  transition: 0.5s;
  transition-timing-function: ease-in-out;
  width: 30px;
  height: 40px;
`;

const NavCount = styled.p`
  font-size: 5px;
  color: white;
  margin-top: 20px;
`;

const ContentNav = ({ count }) => {
  const Question = 15; 
  // STEP = Nav 길이 100% 중 질문지 1개 당 너비 비율
  const STEP = 100/Question;

  return (
    <NavBar>
      <NavIconWrap left={(count - 1) * STEP}>
        <NavCount>{count}</NavCount>
      </NavIconWrap>
    </NavBar>
  );
};

export default ContentNav;
