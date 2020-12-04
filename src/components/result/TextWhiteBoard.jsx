import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../lib/styles/media';
import partner from '../../../public/img/bear.png';
import insta from '../../../public/img/insta.png';
import kakao from '../../../public/img/kakao.png';
import twitter from '../../../public/img/twitter.png';
import clip from '../../../public/img/clip.png';
import { Link } from 'react-router-dom';

const Board = styled.div`
  width: 130%;
  margin: auto;
  background-color: white;
  font-family: 'jua', sans-serif;
  padding: 20px;
  border: 2px solid #b6af4a;
  border-radius: 2rem;
  display: grid;
  grid-template-rows: repeat(6, 80px);
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    'Test Test Graph Graph'
    'Test Test Graph Graph'
    'Test Test Side Side2'
    'Test Test Side Side2'
    'Test Test Share Share'
    'Test Test Share Share';
  @media (max-width: ${media.laptopM}) {
    width: 450px;
    height: 90%;
  }
  @media (min-width: ${media.laptop}) {
    column-gap: 10px;
    row-gap: 10px;
  }
  @media (max-width: ${media.laptop}) {
    column-gap: 20px;
    row-gap: 10px;
    margin: 0 auto;
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'Graph Graph'
      'Graph Graph'
      'Test Test'
      'Test Test'
      'Test Test'
      'Test Test'
      'Side Side2'
      'Side Side2'
      'Share Share';
  }
`;

const Test = styled.div`
  grid-area: Test;
`;

const Graph = styled.div`
  grid-area: Graph;
`;

const Side = styled.div`
  grid-area: Side;
`;

const Side2 = styled.div`
  grid-area: Side2;
`;

const Share = styled.div`
  grid-area: Share;
`;

const TestBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  @media (max-width: ${media.laptop}) {
    width: 100%;
    border-radius: 2rem;
    background-color: #eee;
  }
  /* background-color: #eeeeee; */
`;

const GraphBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem 1rem 0 0;
  background-color: #eeeeee;
  @media (max-width: ${media.laptop}) {
    width: 100%;
    border-radius: 2rem;
  }
`;

const SideBox = styled.div`
  width: 100%;
  border-radius: 0 0 1rem 1rem;
  background-color: #eeeeee;
  text-align: center;
  padding: 10px 0;
  @media (max-width: ${media.laptop}) {
    width: 100%;
    border-radius: 2rem;
  }
`;

const ShareBox = styled.div`
  width: 85%;
  /* background-color: #eeeeee; */
  margin: 20px auto;
  text-align: center;
  @media (max-width: ${media.laptop}) {
    width: 100%;
  }
`;

const TitleWrap = styled.div`
  padding: 40px 0 20px;
  width: 100%;
  text-align: center;
  @media (max-width: ${media.laptop}) {
    padding: 20px 0 20px;
  }
`;

const SmallTitle = styled.p`
  font-size: 16px;
`;

const Title = styled.p`
  font-size: 25px;
`;

const Description = styled.p`
  width: 90%;
  margin: 0 auto;
  color: #5c5c5c;
  font-size: 14px;
  font-family: 'jua', sans-serif;
`;

const PartnerTitle = styled.p`
  margin: 5px 0;
`;

const PartnerImg = styled.img`
  width: 40px;
  padding: 10px 0;
`;

const PartnerName = styled.p`
  margin: 5px 0;
  font-size: 13px;
`;

const IconTitle = styled.p`
  padding: 10px 0;
  font-size: 16px;
  font-family: 'jua', sans-serif;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const Icon = styled.img`
  width: 40px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const RestartButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 1rem;
  background-color: #d1c873;
  color: white;
  border-style: none;
  font-family: 'jua', sans-serif;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  &:focus {
    outline: none;
  }
`;

const RestartLink = styled(Link)``;

const TextWhiteboard = ({
  title,
  subtitle,
  bestPartner,
  worstPartner,
  designerDesc,
  devDesc,
  type,
}) => {
  return (
    <Board>
      <Test>
        <TestBox>
          <TitleWrap>
            <SmallTitle>{subtitle}</SmallTitle>
            <Title>{title}</Title>
          </TitleWrap>
          <Description>
            {type === 'designer' ? designerDesc : devDesc}
          </Description>
        </TestBox>
      </Test>
      <Graph>
        <GraphBox />
      </Graph>
      <Side>
        <SideBox>
          <PartnerTitle>최고의 짝궁</PartnerTitle>
          <PartnerImg src={partner} alt={`best partner ${bestPartner}`} />
          <PartnerName>{bestPartner}</PartnerName>
        </SideBox>
      </Side>
      <Side2>
        <SideBox>
          <PartnerTitle>최악의 짝궁</PartnerTitle>
          <PartnerImg src={partner} alt={`worst partner ${worstPartner}`} />
          <PartnerName>{worstPartner}</PartnerName>
        </SideBox>
      </Side2>
      <Share>
        <ShareBox>
          <IconTitle>내 결과 공유하기</IconTitle>
          <IconBox>
            <Icon src={kakao} alt="kakao" />
            <Icon src={insta} alt="instagram" />
            <Icon src={twitter} alt="twitter" />
            <Icon src={clip} alt="clip" />
          </IconBox>
        </ShareBox>
        <RestartLink to={`/`}>
          <RestartButton>테스트 다시하기</RestartButton>
        </RestartLink>
      </Share>
    </Board>
  );
};

TextWhiteboard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  bestPartner: PropTypes.string.isRequired,
  worstPartner: PropTypes.string.isRequired,
  designerDesc: PropTypes.string.isRequired,
  devDesc: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default TextWhiteboard;
