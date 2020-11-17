import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';

const SlideContent = styled.div`
  width: 400px;
`;
const SlideTextWrap = styled.div`
  display: table;
  width: 100%;
  height: 200px;
`;
const SlideText = styled.p`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
`;

const SlideBtnBox = styled.div`
  position: relative;
`;
const SlideBtnButton = styled.button`
  display: block;
  margin: 10px auto;
  width: 80%;
  height: 60px;
  font-size: 16px;
  background: none;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
`;

const Content = ({nextSlide, data}) => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState({
    E:0, I:0 , T:0, F:0, J:0, P:0
  });
  const getAnswer = (id) =>{
    
    console.log(count);
    console.log(result);
    // if(id === "EI"){
    //   setCount(result.E + 1);
    //   setResult({E:count});
    //   console.log('getAnswer 실행');
    // }else if(id === "TF"){
    //   setCount(result.T + 1);
    //   setResult({T:count});
    //   console.log('getAnswer 실행');
    // }else if(id === "JP"){
    //   setCount(result.J + 1);
    //   setResult({J:count});
    //   console.log('getAnswer 실행');
    // }else{
    //   console.log('data.id is wrong');
    // }
  };
  
  const clickSelection = (id)=>{
    nextSlide;
    getAnswer(id);
    console.log('click실행 ');
  };

  return (
    <SlideContent>
      <SlideTextWrap>
        <SlideText>
          {data.question}
        </SlideText>
      </SlideTextWrap>
      <SlideBtnBox>
        <SlideBtnButton type="button" onClick={clickSelection(data.id)}>
          {data.A}
        </SlideBtnButton>
        <SlideBtnButton type="button" onClick={clickSelection(data.id)}>
          {data.B}
        </SlideBtnButton>
      </SlideBtnBox>
    </SlideContent>
  );
};
export default Content;
