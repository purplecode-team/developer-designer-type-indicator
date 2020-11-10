import React from 'react';
import styled from 'styled-components';
import turtleImg from '../../../public/img/character.png';
import titleImg from '../../../public/img/bubble.png';
import media from '../../lib/styles/media';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 35rem;
  margin: 0 auto;
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
`;

const TurtleImg = styled.img`
  width: 70%;
  @media (max-width: ${media.laptopL}) {
    width: 50%;
  }
`;

const TitleWrapper = styled.header`
  background-image: url(${titleImg});
  background-repeat: no-repeat;
  background-size: 25rem 12rem;
  background-position: center;
  width: 35rem;
  height: 15rem;
  h1 {
    font-size: 24px;
    padding-top: 3.5rem;
    line-height: 1.3em;
    font-weight: 550;
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
        <TurtleImg src={turtleImg} alt="turtle" />
      </Content>
    </Wrapper>
  );
};

export default TurtleWithTitle;
