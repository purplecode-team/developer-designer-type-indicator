import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';

const SlideContent = styled.div`
  width: 400px;
  height: 250px;
  display: flex;
  padding: 30px 0;
  flex-direction: column;
  justify-content: space-around;
`;
const SlideTextWrap = styled.div`
  display: table;
  width: 100%;
`;
const SlideText = styled.p`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
  margin: 40px 0;
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

  useEffect(()=>{
    console.log(count);
    console.log(result);
  },[result]);

  const selecteA = (id)=>{
    if(id === "EI"){
      setCount(result.E + 1);
      setResult({...result,E:result.E + 1});
    }else if(id === "TF"){
      setCount(result.T + 1);
      setResult({...result,T:result.T + 1});
    }else if(id === "JP"){
      setCount(result.J + 1);
      setResult({...result,J:result.J + 1});
    }else{
      console.log("Something is wrong");
    }
  }
  const selecteB = (id)=>{
    if(id === "EI"){
      setCount(result.I + 1);
      setResult({...result,I:result.I + 1});
    }else if(id === "TF"){
      setCount(result.F + 1);
      setResult({...result,F:result.F + 1});
    }else if(id === "JP"){
      setCount(result.P + 1);
      setResult({...result,P:result.P + 1});
    }else{
      console.log("Id is wrong");
    }
  }
  const getAnswer = (id, isSelected) =>{
    if(isSelected === "A"){
      selecteA(id);
    }else if(isSelected ==="B"){
      selecteB(id);
    }else{
      console.log('isSelected is wrong');
    }
  };
  
  const clickSelection = (id, isSelected)=>{
    nextSlide();
    getAnswer(id, isSelected);
  };

  return (
    <SlideContent>
      <SlideTextWrap>
        <SlideText>
          {data.question}
        </SlideText>
      </SlideTextWrap>
      <SlideBtnBox>
        <SlideBtnButton type="button" onClick={()=>{clickSelection(data.id,"A")}}>
          {data.A}
        </SlideBtnButton>
        <SlideBtnButton type="button" onClick={()=>{clickSelection(data.id,"B")}}>
          {data.B}
        </SlideBtnButton>
      </SlideBtnBox>
    </SlideContent>
  );
};
export default Content;
