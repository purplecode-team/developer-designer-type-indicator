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

const CharacterName = styled.h2`
  width: 250px;
  padding: 2.5rem 0;
  margin: 0 auto;
  border-radius: 2rem;
  background-color: white;
  opacity: 0.9;
  text-align: center;
  font-size: 1.5rem;
  font-family: 'jua', sans-serif;
`;

const CharacterWrapper = styled.div`
  position: absolute;
  width: 100%;
  margin: 0 auto;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CharacterImg = styled.img`
  width: 140px;
  position: relative;
  top: 50px;
  @media (max-width: ${media.mobileL}) {
    width: 100px;
  }
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
      <CharacterLight />
      <CharacterWrapper>
        <CharacterName>뒷짐지는 곰돌이</CharacterName>
        <CharacterImg src={character} />
        <Tree src={treeBase} alt="tree base" />
      </CharacterWrapper>
    </CharacterContent>
  );
};

export default CharacterContainer;
