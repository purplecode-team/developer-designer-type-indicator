import React, { useState, useCallback, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {Context} from '../lib/helpers/Context';
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
      <MainWrapper>
        <p>{result}</p>
        <CloudBackground role="img" ariaLabel="clouds background" img={cloudImg} />
        <GrassBackground role="img" ariaLabel="grass background" img={grassImg} />
      </MainWrapper>
    </>
  );
};

export default Result;
