import React, { useEffect, useCallback, useContext } from 'react';
import styled from 'styled-components';
import {Context} from '../../lib/helpers/Context';
import media from '../../lib/styles/media';
import foot from '../../../public/img/foot.png';

const NavBar = styled.div`
  position: absolute;
  top : -40px;
  width: 100%;
  height: 12px;
  border-radius: 10px;
  background-color: #ffd4d7;
`;
const NavIconWrap = styled.span`
  position: absolute;
  top: -1rem;
  left: ${(props) => props.left}%;
  width: 22px;
  height: 40px;
`;
const NavCountWrap = styled.div`
  width:100%;

`

const NavCount = styled.p`
  font-size: 5px;
  position: absolute;
  top: 20px;
  z-index: 9;
  color: white;
  left: 10px;
`;

const NavIcon = styled.img`
  width: 25px;
  object-fit: contain;
  position: absolute;
  left:0;
`;


const ContentNav = ({count})=>{
  const distance = 6.78;

  return (
    <>
      <NavBar>
        <NavIconWrap left={(count-1) * distance}>
          <NavCountWrap>
            <NavCount>{count}</NavCount>
          </NavCountWrap>
          <NavIcon src={foot} />
        </NavIconWrap>
      </NavBar>
    </>
  )
}

export default ContentNav;