import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useLocation, useParams } from 'react-router-dom';
import media from '../../lib/styles/media';
import DescriptionList from '../../components/result/DescriptionList';
import Partner from '../../components/result/Partner';
import TypeGraph from '../../components/result/TypeGraph';
import { results } from '../../lib/util/util';
import { BASE_URL } from '../../lib/util/config';
import {
  FacebookShareBtn,
  KaKaoShareBtn,
  TwitterShareBtn,
} from '../../components/result/ShareButton';
import CopyButton from '../../components/result/CopyButton';
import useLoadData from '../../lib/hooks/useLoadData';

const fadeIn = keyframes`
  0% {
    opacity:0;
    transform:translateY(10px);
  }
  100% {
    opacity:1;
    transform:translateY(0);
  }
`;

const Board = styled.div`
  width: 90%;
  margin: auto;
  background-color: white;
  font-family: 'hannaPro', sans-serif;
  padding: 20px 20px 0 20px;
  border: 2px solid #b6af4a;
  border-radius: 2rem;
  animation: ${fadeIn} 4s;
  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-rows: repeat(11, 43px);
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
    'Test Test Share Share'
    'Test Test Share Share'
    'Test Test Share Share';
  @media (max-width: ${media.laptop}px) {
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
      'Test Test'
      'Test Test'
      'Graph Graph'
      'Graph Graph'
      'Side Side2'
      'Side Side2'
      'Share Share'
      'Share Share'
      'Share Share'
      'Share Share'
      'Share Share';
  }
  @media (max-width: ${media.mobileM}px) {
    grid-template-rows: repeat(6, 90px);
  }
`;

const TestBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
`;

const ShareBox = styled.div`
  margin: auto;
  text-align: center;
  @media (max-width: ${media.laptop}px) {
    width: 100%;
  }
  a {
    font-size: 14px;
    width: 100%;
    color: grey;
    font-family: hannaAir, sans-serif;
    text-decoration: none;
    @media (min-width: ${media.laptop + 1}px) {
      &:hover {
        color: black;
        font-weight: bold;
        font-size: 14px;
      }
    }
  }
`;

const TitleWrap = styled.div`
  padding: 0 0 10px 0;
  width: 100%;
  text-align: center;
  @media (max-width: ${media.laptop}px) {
    padding: 20px 0 20px;
  }
`;

const SmallTitle = styled.h2`
  font-size: 16px;
  word-break: keep-all;
  margin-bottom: 0.5em;
  @media (max-width: ${media.laptop}px) {
    margin-top: 0.5rem;
  }
`;

const Title = styled.h1`
  font-size: 25px;
`;

const IconTitle = styled.h4`
  padding: 1rem 0 10px 0;
  font-size: 16px;
  font-family: 'hannaPro', sans-serif;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 5px;
  button {
    border: none;
    background: none;
    outline: none;
    &:hover {
      transform: scale(1.05);
      transition: all 0.2s ease-in-out;
    }
  }
  img {
    width: 45px;
    height: 45px;
  }
`;

const Test = styled.div`
  grid-area: Test;
  padding: 5px 0;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #cccccc;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
`;

const Graph = styled.div`
  grid-area: Graph;
  border-radius: 1rem 1rem 0 0;
  background-color: #eeeeee;
`;

const Side = styled.div`
  grid-area: Side;
  border-radius: 0 0 1rem 1rem;
  background-color: #eeeeee;
`;

const Side2 = styled.div`
  grid-area: Side2;
  border-radius: 0 0 1rem 1rem;
  background-color: #eeeeee;
`;

const Share = styled.div`
  grid-area: Share;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: ${media.laptop}px) {
    padding: 1rem 0;
  }
`;

const LinkButton = styled.button`
  width: 95%;
  height: 40px;
  border-radius: 1rem;
  background-color: #d1c873;
  color: white;
  border-style: none;
  font-family: 'hannaPro', sans-serif;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
  &:focus {
    outline: none;
  }
`;

const TextWhiteboard = () => {
  const { type, name } = useParams();
  const [content, setContent] = useState('');
  const [state, setUrl] = useLoadData(`result/${results[name]}`, null);
  const { isError, isLoading, data } = state;

  useEffect(() => {
    setUrl(`result/${results[name]}`);
  }, [type, name]);

  useEffect(() => {
    if (data) {
      setContent(
        `${data?.subtitle} 
        ${type === 'designer' ? '디자이너' : '개발자'} 
        \n #개발자_디자이너_성향_테스트\n`
      );
    }
  }, [data]);

  const location = useLocation();
  const url = `${BASE_URL}${location.pathname}`;

  return (
    <>
      {!isLoading && !isError && data && (
        <Board>
          <Test>
            <TitleWrap>
              <SmallTitle>{data.subtitle}</SmallTitle>
              <Title>
                {`${data.title} ${type === 'designer' ? '디자이너' : '개발자'}`}
              </Title>
            </TitleWrap>
            {type === 'designer' ? (
              <DescriptionList description={data.designerDesc} />
            ) : (
              <DescriptionList description={data.devDesc} />
            )}
          </Test>
          <Graph>
            <TypeGraph result={results[name]} />
          </Graph>
          <Side>
            <Partner
              borderRadius="0 0 0 1rem"
              alt={`best partner ${data.bestPartner}`}
              title="최고의 짝궁"
              name={data.bestPartner}
              type={type}
              shortBio={data.bestPartnerTitle}
            />
          </Side>
          <Side2>
            <Partner
              borderRadius="0 0 1rem 0"
              alt={`worst partner ${data.worstPartner}`}
              title="최악의 짝궁"
              name={data.worstPartner}
              type={type}
              shortBio={data.worstPartnerTitle}
            />
          </Side2>
          <Share>
            <ShareBox>
              <IconTitle>내 결과 공유하기</IconTitle>
              <IconBox>
                <KaKaoShareBtn />
                <FacebookShareBtn url={url} content={content} />
                <TwitterShareBtn url={url} content={content} />
                <CopyButton />
              </IconBox>
              <ButtonWrapper>
                <Link to="/">
                  <LinkButton>테스트 다시하기</LinkButton>
                </Link>
                <br />
                <br />
                <Link to="/statistics">
                  <LinkButton>다른 성향 구경하기</LinkButton>
                </Link>
              </ButtonWrapper>
            </ShareBox>
          </Share>
        </Board>
      )}
    </>
  );
};

export default TextWhiteboard;
