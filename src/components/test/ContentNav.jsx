import React from 'react';
import styled from 'styled-components';
import foot from '../../../public/img/foot.png';

const NavBar = styled.div`
  position: absolute;
  top: -40px;
  width: 100%;
  height: 12px;
  border-radius: 10px;
  background-color: #ffd4d7;
`;

const NavIconWrap = styled.span`
  background-image: url(${foot});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  position: absolute;
  top: -1rem;
  left: 0;
  transform: translate(${(props) => props.left}px);
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
  const STEP = 500 / 15;

  return (
    <NavBar>
      <NavIconWrap left={(count - 1) * STEP}>
        <NavCount>{count}</NavCount>
      </NavIconWrap>
    </NavBar>
  );
};

export default ContentNav;
