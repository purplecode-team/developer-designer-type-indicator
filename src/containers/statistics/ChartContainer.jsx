import React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import { names, title, shortBio, characters } from '../../lib/util/util';
import { Link } from 'react-router-dom';
import BarChart from '../../components/statistics/BarChart';
import useLoadData from '../../lib/hooks/useLoadData';
import { history } from '../../lib/helpers/history';

const Wrapper = styled.div`
  position: relative;
  width: 45rem;
  height: 80vh;
  margin: auto;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 100;
  background-color: white;
  font-family: 'hannaPro', sans-serif;
  padding: 20px;
  border: 2px solid #b6af4a;
  border-radius: 2rem;
  display: grid;
  text-align: center;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: ${media.laptop}px) {
    width: 80%;
  }
  @media (max-width: ${media.mobileL}px) {
    text-align: inherit;
  }
  h1 {
    font-size: 24px;
    padding: 1rem 1rem;
  }
  p {
    padding: 0rem 1rem 2rem 1rem;
    font-family: 'hannaAir', sans-serif;
    font-size: 16px;
    line-height: 1.3em;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin-bottom: 2rem;
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  padding-bottom: 40px;
  width: 100%;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: ${media.mobileL}px) {
    flex-direction: column;
    align-items: center;
  }
`;
const CloseBtn = styled.button`
  width: 12rem;
  height: 2.5rem;
  margin-bottom: 1.5rem;
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

const ChartContainer = () => {
  const [designerCountState] = useLoadData('designerCount', null);
  const [developerCountState] = useLoadData('devCount', null);

  const goBack = () => {
    history.back();
  };

  const parseData = (data) => {
    const array = Object.keys(data).map((key) => ({
      shortBio: shortBio[names[key]],
      name: names[key],
      title: title[names[key]],
      img: characters[names[key]],
      count: data[key],
    }));
    return array.sort((a, b) => (a.count < b.count ? 1 : -1));
  };

  return (
    <>
      {designerCountState.data && developerCountState.data && (
        <Wrapper>
          <h1> 개발자/디자이너 성향 분석 차트 </h1>
          <p>
            개발자/디자이너들은 어떤 유형에 많이 속해있을지 궁금하시죠?
            <span role="img" aria-label="emoji">
              🤔
            </span>
            <br />
            그래서 차트로 정리해보았습니다! <br />
            범례에 있는 유형 이름을 클릭하면 해당 유형에 대한 설명을 볼 수
            있어요.
          </p>
          <Container>
            <BarChart
              data={parseData(designerCountState.data)}
              type="designer"
              title="디자이너 성향"
            />
            <BarChart
              data={parseData(developerCountState.data)}
              type="designer"
              title="개발자 성향"
            />
          </Container>
          <BtnWrapper>
            <CloseBtn onClick={goBack}>뒤로 가기</CloseBtn>
            <Link to="/">
              <CloseBtn>메인으로</CloseBtn>
            </Link>
          </BtnWrapper>          
        </Wrapper>
      )}
    </>
  );
};

export default ChartContainer;
