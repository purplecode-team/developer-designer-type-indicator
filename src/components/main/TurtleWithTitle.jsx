import React from 'react';
import styled from 'styled-components';
import turtleImg from '../../../public/img/character.png';
import turtleImg2 from '../../../public/img/character2.png';
import titleImg from '../../../public/img/bubble.png';
import media from '../../lib/styles/media';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 5rem;
  text-align: center;
  width: 400px;
  @media (max-width: ${media.tablet}) {
    bottom: 17rem;
    width: 70%;
  }
`;

const TitleWrapper = styled.div`
  background-image: url(${titleImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  width: 20rem;
  height: 12rem;
  margin: 0 auto;
  h1 {
    font-size: 24px;
    padding: 2.7rem 0;
    line-height: 1.3em;
    font-family: 'hannaPro', sans-serif;
    color: gray;
  }
  @media (max-width: ${media.tablet}) {
    height: 10rem;
    h1 {
      padding: 2.2rem 0;
    }
  }
  @media (max-width: ${media.mobileL}) {
    width: 100%;
  }
`;

const TurtleImg = styled.div`
  background-image: url(${turtleImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  width: 14rem;
  height: 20rem;
  margin: 0 auto;
  @media (max-width: ${media.tablet}) {
    width: 7rem;
    height: 8rem;
    background-image: url(${turtleImg2});
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
        <TurtleImg />
      </Content>
    </Wrapper>
  );
};

export default TurtleWithTitle;
