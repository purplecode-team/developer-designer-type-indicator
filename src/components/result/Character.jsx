import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../lib/styles/media';
import treeBase from '../../../public/img/tree_base.png';
import lightImg from '../../../public/img/light.png';
import { characters } from '../../lib/util/util';

const CharacterContent = styled.div`
  position: relative;
  height: 100vh;
`;

const CharacterLight = styled.div`
  width: 400px;
  height: 85vh;
  margin: 0 auto;
  padding-top:120px;
  background-image: url(${lightImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  @media (max-width: ${media.mobileL}px) {
    width: 270px;
    height: 65vh;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity:0;
  }
  10% {
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const CharacterName = styled.h2`
  width: 250px;
  padding: 12px 0;
  border-radius: 2rem;
  margin: 50px;
  background-color: white;
  opacity: 0.9;
  text-align: center;
  font-size: 24px;
  font-family: 'hannaPro', sans-serif;
  line-height: 1.2em;
  span {
    font-size: 16px;
  }
  animation: ${fadeIn} 6s;
`;

const CharacterWrapper = styled.div`
  position: absolute;
  width: 100%;
  margin: 0 auto;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
`;

const randomImg = keyframes`
  from {
    filter: brightness(0);
  }
  to {
    filter: brightness(1);
  }
`;

const CharacterImg = styled.img`
  width: 140px;
  position: relative;
  top: 50px;
  @media (min-width: ${media.desktop}px) {
    width: 30%;
  }
  @media (max-width: ${media.mobileL}px) {
    top: 40px;
    width: 100px;
  }
  animation: ${randomImg} 6s;
`;

const Tree = styled.img`
  width: 350px;
  @media (max-width: ${media.mobileL}px) {
    width: 270px;
  }
`;

const Character = ({ name, shortBio }) => {


  return (
    <CharacterContent>
      <CharacterLight />
      <CharacterWrapper>
        <CharacterName>
          <span> 당신은... </span> <br />
          {shortBio}
        </CharacterName>
        <CharacterImg src={characters[name]} />
        <Tree src={treeBase} alt="tree base" />
      </CharacterWrapper>
    </CharacterContent>
  );
};


Character.propTypes = {
  shortBio: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};


export default Character;
