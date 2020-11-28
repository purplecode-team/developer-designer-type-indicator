import React, { useState, useCallback, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useResultType from '../lib/hooks/useResultType';
import { loadDevCount } from '../lib/util/api';
import GrassBackground from '../components/common/GrassBackground';
import CloudBackground from '../components/common/CloudBackground';
import grassImg from '../../public/img/ground.png';
import cloudImg from '../../public/img/cloud.png';

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: #c5f1fc;
`;
const Result = () => {
  const { name } = useParams();
  const [result] = useResultType();

  useEffect(() => {
    loadDevCount();
  }, []);

  return (
    <MainWrapper>
      <p>{result}</p>
      <CloudBackground
        role="img"
        ariaLabel="clouds background"
        img={cloudImg}
      />
      <GrassBackground role="img" ariaLabel="grass background" img={grassImg} />
    </MainWrapper>
  );
};

export default Result;
