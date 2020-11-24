import React from 'react';
import styled from 'styled-components';
import turtleImg from '../../../public/img/character.png';
import titleImg from '../../../public/img/bubble.png';
import media from '../../lib/styles/media';

const Wrapper = styled.div`
  position: relative;
  top: -100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  text-align: center;
  @media (max-width: ${media.mobileL}) {
    width: 100%;
    bottom: 10rem;
  }
`;

const TurtleImg = styled.img`
  width: 17rem;
  @media (max-width: ${media.mobileL}) {
    width: 11rem;
  }
`;

const TitleWrapper = styled.div`
  background-image: url(${titleImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  width: 25rem;
  height: 13rem;
  h1 {
    font-size: 24px;
    padding: 3.2rem 0;
    line-height: 1.3em;
    font-family:'jua', sans-serif;
  }
  @media (max-width: ${media.tablet}) {
    background-size: 100% 100%;
    margin: 0 auto;
  }
  @media (max-width: ${media.mobileL}) {
    background-size: 100% 100%;
    width: 80%;
    height: 10rem;
    margin: 0 auto;
    h1 {
    padding: 2.2rem 0;
    }
  }
`;

const TurtleWithTitle = () => {
  return (
    <Wrapper>
      <Content>
        <TitleWrapper>
          <h1>
            개발자 / 디자이너 <br />
            성향 분석 테스트
          </h1>
        </TitleWrapper>
        <TurtleImg src={turtleImg} alt="turtle character" />
      </Content>
    </Wrapper>
  );
};

export default TurtleWithTitle;
