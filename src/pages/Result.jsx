import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { history } from '../lib/helpers/history';
import GrassBackground from '../components/common/GrassBackground';
import CloudBackground from '../components/common/CloudBackground';
import ResultContainer from '../containers/result/ResultContainer';
import RightTree from '../components/common/RightTree';
import LeftTree from '../components/common/LeftTree';
import grassImg from '../../public/img/ground.png';
import cloudImg from '../../public/img/cloud.png';
import media from '../lib/styles/media';
import useLoadData from '../lib/hooks/useLoadData';
import useUpdateData from '../lib/hooks/useUpdateData';

const ResultWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: #436943;
  @media (min-width: ${media.laptop+1}px) {
    overflow: hidden;
  }
  @media (max-width: ${media.laptop}px) {
    overflow-x: hidden;
  }
`;

const BackgroundColor = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #c5f1fc;
`;

const BackgroundDark = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  position: absolute;
  background-color: black;
  opacity: 0.5;
  z-index: 99;
  top: 0;
`;

const Result = () => {
  const { type } = useParams();
  const { pathname, state } = useLocation();
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  const match = type === 'designer' ? 'designerCount' : 'devCount';
  const [countState] = useLoadData(match, null);

  const result = state ? state.result : null;

  const [_, setData] = useUpdateData(`/${match}/${result}`, null);

  // 전체 count 값들을 가져온 뒤 테스트 결과에 해당하는 유형 count + 1
  useEffect(() => {
    if (countState.data && result) {
      setData(countState.data[result] + 1);
    }
  }, [countState]);

  // 중복해서 합산되지 않도록 테스트를 마친 후 state에 저장되었던 테스트 결과값을 지움
  useEffect(() => {
    history.replace(pathname, { state: null });
  }, []);

  return (
    <>
      <Helmet>
        <script src="https://developers.kakao.com/sdk/js/kakao.js" />
      </Helmet>
      <ResultWrapper ref={ref}>
        <ResultContainer />
        <BackgroundDark />
        <RightTree />
        <LeftTree />
        <CloudBackground
          role="img"
          ariaLabel="clouds background"
          img={cloudImg}
          style={{ opacity: '0.6' }}
        />
        <GrassBackground
          role="img"
          ariaLabel="grass background"
          img={grassImg}
          style={{ opacity: '0.6' }}
        />
        <BackgroundColor />
      </ResultWrapper>
    </>
  );
};

export default Result;
