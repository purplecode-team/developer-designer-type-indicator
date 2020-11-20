import React, { useState, useEffect, useRef, useCallback, useMemo, useContext } from 'react';
import styled from 'styled-components';
import {TestContext} from '../common/TestContext';
import media from '../../lib/styles/media';

const slideWidth = 400;

const SlideContent = styled.div`
  @media (max-width: ${media.tablet}) {
    width: ${slideWidth*0.8};
  }
  @media (max-width: ${media.mobileL}) {
    width:${slideWidth*0.6};
  };
  width: ${slideWidth}px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const SlideTextWrap = styled.div`
  display: table;
  width: 100%;
  height:15%;
`;
const SlideText = styled.p`
  @media (max-width: ${media.tablet}) {
    
  }
  @media (max-width: ${media.mobileL}) {
    font-size: 16px;
  };
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
  @media (max-width: ${media.tablet}) {

  }
  @media (max-width: ${media.mobileL}) {
    font-size: 12px;
    height: 50px;
  };
  display: block;
  margin: 20px auto;
  width: 100%;
  height: 65px;
  font-size: 16px;
  background: none;
  border: 1px solid #FF9C9C;
  border-radius: 20px;
  cursor: pointer;
  &:hover{
    color:white;
    background-color: #FF9C9C;
  };
  &:focus{
    outline-style:none;
  }
`;

const Content = ({nextSlide, data}) => {
  // const [count, setCount] = useState(0);
  // count로 마지막 질문지 체크한 후, <Link> 컴포넌트 출력하는 함수 만들어서 넣기..

  const {state, dispatch } = useContext(TestContext);

  // const getAnswer = useCallback((id, isSelected) =>{
  //   if(isSelected === "A"){
  //     dispatch(id);
  //   }else if(isSelected ==="B"){
  //     dispatch(id);
  //   }else{
  //     console.log('isSelected is wrong');
  //   }
  // });
  
  const clickSelection = useCallback((id, isSelected)=>{
    nextSlide();
    console.log(state);
    // getAnswer(id, isSelected);
  });

  return (
    <SlideContent>
      <SlideTextWrap>
        <SlideText>
          {data.question}
        </SlideText>
      </SlideTextWrap>
      <SlideBtnBox>
        <SlideBtnButton type="button" onClick={()=>{clickSelection(data.id,"A"); dispatch({type:data.id}); }}>
          {data.A}
        </SlideBtnButton>
        <SlideBtnButton type="button" onClick={()=>{clickSelection(data.id,"B"); /*dispatch({type:data.id})*/}}>
          {data.B}
        </SlideBtnButton>
      </SlideBtnBox>
    </SlideContent>
  );
};

export default Content;
