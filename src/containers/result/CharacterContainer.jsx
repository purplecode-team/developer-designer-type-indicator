import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../lib/styles/media';
import treeBase from '../../../public/img/tree_base.png';
import character from '../../../public/img/bear.png';
import lightImg from '../../../public/img/light.png';

const CharacterContent = styled.div`
  position: relative;
  height: 100vh;
`;

const CharacterBox = styled.div`
  width: 100%;
  height: 600px;
`;

const CharacterLight = styled.div`
  width: 400px;
  height: 600px;
  margin: 0 auto;
  background-image: url(${lightImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  @media (max-width: ${media.mobileL}) {
    width: 270px;
  }
`;

const CharacterNameBox = styled.div`
  position: absolute;
  top: 100px;
  width: 100%;
`;

const CharacterNameBar = styled.div`
  display: table;
  width: 250px;
  height: 90px;
  margin: 0 auto;
  border-radius: 2rem;
  background-color: white;
  opacity: 0.9;
  text-align: center;
`;

const CharacterNameTable = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const CharacterName = styled.p`
  font-family: 'jua', sans-serif;
  font-size: 1.5rem;
`;

const CharacterImgBox = styled.div`
  position: absolute;
  bottom: 150px;
  width: 100%;
  text-align: center;
  z-index: 99;
`;

const CharacterImg = styled.img`
  width: 140px;
  @media (max-width: ${media.mobileL}) {
    width: 100px;
  }
`;

const TreeBox = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
  height: 150px;
  text-align: center;
`;

const Tree = styled.img`
  width: 350px;
  @media (max-width: ${media.mobileL}) {
    width: 270px;
  }
`;

const CharacterContainer = () => {
  return (
    <CharacterContent>
      <CharacterBox>
        <CharacterLight />
        <CharacterNameBox>
          <CharacterNameBar>
            <CharacterNameTable>
              <CharacterName>뒷짐지는 곰돌이</CharacterName>
            </CharacterNameTable>
          </CharacterNameBar>
        </CharacterNameBox>
        <CharacterImgBox>
          <CharacterImg src={character} />
        </CharacterImgBox>
        <TreeBox>
          <Tree src={treeBase} alt="tree base" />
        </TreeBox>
      </CharacterBox>
    </CharacterContent>
  );
};

export default CharacterContainer;
