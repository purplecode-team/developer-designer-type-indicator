import React from 'react';
import styled from 'styled-components';
import foot from '../../../public/img/foot.png';
import media from '../../lib/styles/media';

const NavBar = styled.div`
  position: absolute;
  bottom: -100px;
  width: 700px;
  height: 12px;
  border-radius: 10px;
  background-color: #ffd4d7;
  left: -100px;
  @media (max-width: ${media.tablet}){
    width:100%;
    left:0;
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
  // STEP = Nav 길이 100% 중 질문 수 비율
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
