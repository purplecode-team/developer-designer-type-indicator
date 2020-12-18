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
  @media (max-width: ${media.tablet}px) {
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
    text-align: center;
    font-size: 24px;
    // 말풍선 높이 - 글자 2줄 높이 - 말풍선 꼬리 부분 / 2
    padding-top: calc((12rem - 2.6em - 25px) / 2);
    line-height: 1.3em;
    font-family: 'hannaPro', sans-serif;
    color: gray;
  }
  @media (max-width: ${media.tablet}px) {
    height: 10rem;
    h1 {
      padding-top: calc((10rem - 2.6em - 20px) / 2);
    }
  }
  @media (max-width: ${media.mobileL}px) {
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
  @media (max-width: ${media.tablet}px) {
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
