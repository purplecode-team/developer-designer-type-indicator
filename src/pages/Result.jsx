import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { loadData, updateData } from '../lib/util/api';
import styled from 'styled-components';
import { createBrowserHistory } from 'history';
import GrassBackground from '../components/common/GrassBackground';
import CloudBackground from '../components/common/CloudBackground';
import grassImg from '../../public/img/ground.png';
import cloudImg from '../../public/img/cloud.png';
import useUpdateCount from '../lib/hooks/useUpdateCount';

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: #c5f1fc;
`;

const Result = () => {
  const history = createBrowserHistory();
  const { type, result } = useParams();
  const { pathname, state } = useLocation();
  const typeCounts = useUpdateCount({
    type,
    result: state?.result,
    update: updateData,
    load: loadData,
  });

  useEffect(() => {
    history.replace(pathname, { state: null });
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
