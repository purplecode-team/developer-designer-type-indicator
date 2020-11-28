import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../lib/styles/media';
import partner from '../../../public/img/bear.png';
import insta from '../../../public/img/insta.png';
import kakao from '../../../public/img/kakao.png';
import twitter from '../../../public/img/twitter.png';
import clip from '../../../public/img/clip.png';

const Board = styled.div`
  width:600px;
  background-color:white;
  font-family:'jua', sans-serif;
  padding: 20px;
  border: 2px solid #b6af4a;
  border-radius:2rem;
  display: grid;
  grid-template-rows: repeat(5, 100px);
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "Test Test Graph Graph"
    "Test Test Graph Graph"
    "Test Test Side Side2"
    "Test Test Side Side2"
    "Test Test Share Share";
`;
const Test = styled.div`
  grid-area: Test;
  /* border:1px solid gray; */
`;
const Graph   = styled.div`
  grid-area: Graph;  
  /* border:1px solid gray; */
`;
const Side  = styled.div`
  grid-area: Side; 
  /* border:1px solid gray; */
`;
const Side2 = styled.div`
  grid-area: Side2;
  /* border:1px solid gray; */
`;

const Share = styled.div`
  grid-area: Share;
  /* border:1px solid gray; */
`;

const TestBox = styled.div`
  width: 90%;
  height: 100%;
  border-radius: 2rem;
  /* background-color: #eeeeee; */
  /* margin: 0px auto; */
`;
const GraphBox = styled.div`
  width: 95%;
  height: 100%;
  border-radius: 1rem 1rem 0 0;
  background-color: #eeeeee;
`;
const SideBox = styled.div`
  width: 90%;
  border-radius: 0 0 1rem 1rem;
  background-color: #eeeeee;
  margin: 10px 0;
  text-align:center;
  padding: 10px 0;
`;
const Side2Box = styled.div`
  width: 90%;
  border-radius: 0 0 1rem 1rem;
  background-color: #eeeeee;
  margin: 10px 0;
  text-align:center;
  padding: 10px 0;
`;
const ShareBox = styled.div`
  width: 85%;
  border-radius: 2rem;
  /* background-color: #eeeeee; */
  margin: 10px auto;
  text-align:center;
`;

const TitleWrap = styled.div`
  padding: 40px 0 20px;
  width: 100%;
  text-align: center;
`;
const SmallTitle = styled.p`
  font-size:16px;
`;
const Title = styled.p`
  font-size:25px;
`;
const DescriptionWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  /* text-align: center; */
`;

const Description = styled.p`
  color: #5c5c5c;
  font-size:14px;
  font-family:'jua', sans-serif;
`;

const PartnerTitle = styled.p`
  margin: 5px 0;
`;
const PartnerImg = styled.img`
  width:50px;
`;
const PartnerName = styled.p`
  margin: 5px 0;
`;


const IconBox = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  width:100%;
`;
const Icon = styled.img`
  width:40px;
  margin:0 5px;
`;
const RestartButton = styled.button`
  width:100%;
  height: 30px;
  border-radius: 10px;
  background-color:#d1c873;
  color:white;
  border-style:none;
  font-family: 'jua', sans-serif;
`;



const TextWhiteboard = ({}) => {

    return(
      <Board>
        <Test>
          <TestBox>
            <TitleWrap>
              <SmallTitle>누가 뭐래도 마이웨이</SmallTitle>
              <Title>고양이 디자이너</Title>
            </TitleWrap>
            <DescriptionWrap>
              <Description>당신은 고양이입니다 고양이 고양이....</Description>
            </DescriptionWrap>
          </TestBox>
        </Test>
        <Graph>
          <GraphBox>
          </GraphBox>
        </Graph>
        <Side>
          <SideBox>
            <PartnerTitle>최고의 짝궁</PartnerTitle>
            <PartnerImg src={partner} alt='partner'/>
            <PartnerName>핵인싸 카피바라</PartnerName>
          </SideBox>
        </Side>
        <Side2>
          <Side2Box>
            <PartnerTitle>최악의 짝궁</PartnerTitle>
            <PartnerImg src={partner} alt='partner'/>
            <PartnerName>핵아싸 카피바라</PartnerName>
          </Side2Box>
        </Side2>
        <Share>
          <ShareBox>
            <IconBox>
              <Icon src={kakao} alt='kakaogram'/>
              <Icon src={insta} alt='instagram'/>
              <Icon src={twitter} alt='twitter'/>
              <Icon src={clip} alt='clip'/>
            </IconBox>
          </ShareBox>
          <RestartButton>테스트 다시하기</RestartButton>
        </Share>
      </Board>
    );
};

export default TextWhiteboard;