import React from 'react';
import styled from 'styled-components';
import firebase from '../util/firebase';

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



const Content = ({ nextSlide, question, answerA, answerB}) => {
  console.log('content에서 실행'+question);
  console.log('대답 : '+answerA);
  return (
    <>
      <SlideContent>
        <SlideTextWrap>
          <SlideText>
            {question}
          </SlideText>
        </SlideTextWrap>
        <SlideBtnBox>
          <SlideBtnButton type="button" onClick={nextSlide}>
            {answerA}
          </SlideBtnButton>
          <SlideBtnButton type="button" onClick={nextSlide}>
            {answerB}
          </SlideBtnButton>
        </SlideBtnBox>
      </SlideContent>
    </>
  );
};
export default Content;
