import React, { useState, useCallback, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {Context} from '../lib/helpers/Context';
import GrassBackground from '../components/common/GrassBackground';
import CloudBackground from '../components/common/CloudBackground';
import ResultContainer from '../containers/result/ResultContainer';
import RightTree from '../components/common/RightTree';
import LeftTree from '../components/common/LeftTree';
import grassImg from '../../public/img/ground.png';
import cloudImg from '../../public/img/cloud.png';
import media from '../lib/styles/media';

const ResultWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  position: relative;
  background-color: #c5f1fc;
`;

const BackgroundDark = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
  opacity: 0.5;
  z-index: 99;
  top: 0;
`;

const Result = () => {
  const { name } = useParams();
  const {state, dispatch } = useContext(Context);
  const [result, setResult] = useState('');
  const callResult = useCallback(()=>{
      let temp = '';
      if(state.E>2){
        temp += 'E';
      }else{
        temp += 'I';
      }
      if(state.T>2){
        temp += 'T';
      }else{
        temp += 'F';
      }
      if(state.J>2){
        temp += 'J';
      }else{
        temp += 'P';
      }
      setResult(result+temp);
      console.log(`최종 성향 = ${temp}`);
  });
  useEffect(()=>{
    callResult();
  },[])
  return (
    <>
      <ResultWrapper>
        <ResultContainer/>
        <BackgroundDark/>
        <RightTree />
        <LeftTree />
        <CloudBackground role="img" ariaLabel="clouds background" img={cloudImg} style={{opacity:'0.6'}}/>
        <GrassBackground role="img" ariaLabel="grass background" img={grassImg} style={{opacity:'0.6'}}/>
      </ResultWrapper>
    </>
  );
};

export default Result;
