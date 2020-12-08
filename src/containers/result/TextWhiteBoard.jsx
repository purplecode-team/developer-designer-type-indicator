import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import media from '../../lib/styles/media';
import insta from '../../../public/img/insta.png';
import kakao from '../../../public/img/kakao.png';
import twitter from '../../../public/img/twitter.png';
import clip from '../../../public/img/clip.png';
import DescriptionList from '../../components/result/DescriptionList';
import Partner from '../../components/result/Partner';
import TypeGraph from '../../components/result/TypeGraph';
import KaKaoLinkBtn from '../../components/result/KaKaoLinkBtn';

const Board = styled.div`
  width: 100%;
  margin: auto;
  background-color: white;
  font-family: 'jua', sans-serif;
  padding: 20px;
  border: 2px solid #b6af4a;
  border-radius: 2rem;
  display: grid;
  grid-template-rows: repeat(6, 40px);
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    'Test Test Graph Graph'
    'Test Test Graph Graph'
    'Test Test Graph Graph'
    'Test Test Graph Graph'
    'Test Test Side Side2'
    'Test Test Side Side2'
    'Test Test Side Side2'
    'Test Test Side Side2'
    'Test Test Share Share';
  @media (max-width: ${media.laptopM}) {
    width: 450px;
    height: 90%;
  }
  @media (min-width: ${media.laptop}) {
    column-gap: 15px;
    row-gap: 10px;
  }
  @media (max-width: ${media.laptop}) {
    padding: 20px 10px;
    column-gap: 10px;
    row-gap: 10px;
    margin: 0 auto 5rem auto;
    width: 80%;
    height: auto;
    grid-template-rows: repeat(6, 100px);
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'Test Test'
      'Test Test'
      'Test Test'
      'Test Test'
      'Test Test'
      'Graph Graph'
      'Graph Graph'
      'Side Side2'
      'Side Side2'
      'Share Share'
      'Share Share'
      'Share Share'
      'Share Share';
  }
  @media (max-width: ${media.mobileM}) {
    grid-template-rows: repeat(6, 90px);
    grid-template-areas:
      'Test Test'
      'Test Test'
      'Test Test'
      'Test Test'
      'Test Test'
      'Test Test'
      'Graph Graph'
      'Graph Graph'
      'Side Side2'
      'Side Side2'
      'Share Share'
      'Share Share'
      'Share Share'
      'Share Share';
  }
  @media (max-width: ${media.mobileS}) {
    grid-template-rows: repeat(6, 90px);
    grid-template-areas:
      'Test Test'
      'Test Test'
      'Test Test'
      'Test Test'
      'Test Test'
      'Test Test'
      'Test Test'
      'Graph Graph'
      'Graph Graph'
      'Side Side2'
      'Side Side2'
      'Share Share'
      'Share Share'
      'Share Share'
      'Share Share';
  }
`;

const TestBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  @media (max-width: ${media.laptop}) {
    width: 100%;
    border-radius: 2rem;
  }
`;

const ShareBox = styled.div`
  width: 85%;
  padding-top: 4rem;
  margin: auto;
  text-align: center;
  @media (max-width: ${media.laptop}) {
    width: 100%;
  }
  @media (max-width: ${media.laptop}) {
    padding-top: 1rem;
  }
`;

const TitleWrap = styled.div`
  padding: 5px 0 10px 0;
  width: 100%;
  text-align: center;
  @media (max-width: ${media.laptop}) {
    padding: 20px 0 20px;
  }
`;

const SmallTitle = styled.h2`
  font-size: 16px;
  word-break: keep-all;
  margin-bottom: 0.5em;
  @media (max-width: ${media.laptop}) {
    margin-top: 0.5rem;
  }
`;

const Title = styled.h1`
  font-size: 25px;
`;

const IconTitle = styled.h4`
  padding: 10px 0;
  font-size: 16px;
  font-family: 'jua', sans-serif;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const Icon = styled.img`
  width: 40px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
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
    transition: all 0.2s ease-in-out;
  }
  &:focus {
    outline: none;
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

const TextWhiteboard = ({
  title,
  subtitle,
  bestPartner,
  worstPartner,
  designerDesc,
  devDesc,
  type,
  name,
  worstPartnerTitle,
  bestPartnerTitle,
}) => {
  const titleWithType = `${title} ${
    type === 'designer' ? '디자이너' : '개발자'
  }`;

  return (
    <Board>
      <Test>
        <TestBox>
          <TitleWrap>
            <SmallTitle>{subtitle}</SmallTitle>
            <Title>{titleWithType}</Title>
          </TitleWrap>
          {type === 'designer' ? (
            <DescriptionList description={designerDesc} />
          ) : (
            <DescriptionList description={devDesc} />
          )}
        </TestBox>
      </Test>
      <Graph>
        <TypeGraph result="EFP" />
      </Graph>
      <Side>
        <Partner
          borderRadius="0 0 0 1rem"
          alt={`best partner ${bestPartner}`}
          title="최고의 짝궁"
          name={bestPartner}
          shortBio={bestPartnerTitle}
        />
      </Side>
      <Side2>
        <Partner
          borderRadius="0 0 1rem 0"
          alt={`worst partner ${worstPartner}`}
          title="최악의 짝궁"
          name={worstPartner}
          shortBio={worstPartnerTitle}
        />
      </Side2>
      <Share>
        <ShareBox>
          <IconTitle>내 결과 공유하기</IconTitle>
          <IconBox>
            <KaKaoLinkBtn title={`${subtitle}, ${titleWithType}`} />
            <Icon src={insta} alt="instagram" />
            <Icon src={twitter} alt="twitter" />
            <Icon src={clip} alt="clip" />
          </IconBox>
        </ShareBox>
        <Link to="/">
          <RestartButton>테스트 다시하기</RestartButton>
        </Link>
      </Share>
    </Board>
  );
};

TextWhiteboard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  bestPartner: PropTypes.string.isRequired,
  worstPartner: PropTypes.string.isRequired,
  designerDesc: PropTypes.arrayOf(PropTypes.string).isRequired,
  devDesc: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  worstPartnerTitle: PropTypes.string.isRequired,
  bestPartnerTitle: PropTypes.string.isRequired,
};

export default TextWhiteboard;
