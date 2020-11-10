import React from "react";
import styled from 'styled-components';

const SlideContent =styled.div`
    width: 400px; 
`
const SlideTextWrap = styled.div`
    display: table;
    width: 100%;
    height: 200px;
    /* border:1px solid black; */
`
const SlideText = styled.p`
    display: table-cell;
    text-align:center;
    vertical-align: middle;
    font-size:20px;
`

const SlideBtnBox = styled.div`
    position: relative;
`
const SlideBtnButton=styled.button`
    display: block;
    margin: 10px auto;
    width: 80%;
    height: 60px;
    font-size: 16px;
    background: none;
    border: 1px solid #ddd;
    border-radius: 10px;
    cursor: pointer;
`
const Content = ({nextSlide}) => {    
  
  return (
    <>
      <SlideContent>
        <SlideTextWrap>
          <SlideText>버스를 타고 가던 중,<br /> 벨을 눌렀지만 그냥 지나친다면?</SlideText>
        </SlideTextWrap>
        <SlideBtnBox>
          <SlideBtnButton type="button" onClick={nextSlide}>그냥 다음 정거장에서 내린다</SlideBtnButton>
          <SlideBtnButton type="button" onClick={nextSlide}>기사님! 여기서 내릴게요! 소리친다</SlideBtnButton>
        </SlideBtnBox>
      </SlideContent>
    </>
  );
};
export default Content;