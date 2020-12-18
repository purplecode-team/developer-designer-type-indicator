import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { loadData } from '../lib/firebase/api';
import GrassBackground from '../components/common/GrassBackground';
import CloudBackground from '../components/common/CloudBackground';
import RightTree from '../components/common/RightTree';
import LeftTree from '../components/common/LeftTree';
import grassImg from '../../public/img/ground.png';
import cloudImg from '../../public/img/cloud.png';
import { results } from '../lib/util/util';
import ChartContainer from '../containers/statistics/ChartContainer';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: grid;
  place-items: center;
  background-color: #c5f1fc;
  overflow: hidden;
`;

const BackgroundDark = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  position: absolute;
  background-color: black;
  opacity: 0.5;
  z-index: 50;
  top: 0;
`;

const Statistics = () => {
  const [data, setData] = useState(null);
  const { type, name } = useParams();
  const ref = useRef();

  useEffect(() => {
    loadData(`result/${results[name]}`).then((res) => {
      setData(res);
    });
  }, [type, name]);

  return (
    <>
      <Wrapper ref={ref}>
        <ChartContainer />
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
      </Wrapper>
    </>
  );
};

export default Statistics;
