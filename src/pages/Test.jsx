import React, { useState, useEffect, useRef } from 'react';
import Content from './Content';
import styled from 'styled-components';
import firebase from '../util/firebase';

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;
const SlideWrap = styled.div`
  width: 400px;
  margin: auto;
  padding-bottom: 30px;
`;
const SlideBox = styled.div`
  width: 100%;
  margin: auto;
  overflow-x: hidden;
`;
const SlideList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 2000px;
`;



const Test = () => {
  const TOTAL_SLIDES = 3;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [question, setQuestion] = useState('');
  const [answerA, setAnswerA] = useState('');
  const [answerB, setAnswerB] = useState('');
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(currentSlide);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.2s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 4}00px)`;
  }, [currentSlide]);

  const ref = firebase.database().ref('DevQuestions');
  ref.once('value', (snapshot) => {
    setQuestion(snapshot.val()['dev1']['question']);
    setAnswerA(snapshot.val()['dev1']['E']);
    setAnswerB(snapshot.val()['dev1']['I']);
    console.log(question);
  });
  console.log('외부'+question);
  return (
    <>
      <Container>
        <h1>Developer version</h1>
        <SlideWrap>
          <SlideBox>
            <SlideList ref={slideRef}>
              <Content nextSlide={nextSlide} question={question} answerA={answerA} answerB={answerB}/>
              <Content nextSlide={nextSlide} question={question} answerA={answerA} answerB={answerB}/>
              <Content nextSlide={nextSlide} question={question} answerA={answerA} answerB={answerB}/>
              <Content nextSlide={nextSlide} question={question} answerA={answerA} answerB={answerB}/>
              <Content nextSlide={nextSlide} question={question} answerA={answerA} answerB={answerB}/>
            </SlideList>
          </SlideBox>
        </SlideWrap>
      </Container>
    </>
  );
};
export default Test;
