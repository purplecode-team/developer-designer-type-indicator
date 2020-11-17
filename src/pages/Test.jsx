import React, { useState, useEffect, useRef, useCallback } from 'react';
import Content from '../components/test/Content';
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
  const TOTAL_SLIDES = 15;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [devData,setDevData] = useState({
    dev1:{}, dev2:{}, dev3:{}
 
  });
  const slideRef = useRef(null);
  const nextSlide = useCallback(() => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(currentSlide);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
    console.log('nextslide실행');
  },[currentSlide]);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.2s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 4}00px)`;
  }, [currentSlide]);
  
  useEffect(()=>{
    const ref = firebase.database().ref('DevQuestions');
    ref.once('value', (snapshot) => {
      setDevData(snapshot.val());
    });
    console.log('마운트 될 때만 실행');
  },[]);

  const dataArray = [devData.dev1, devData.dev2, devData.dev3];
  
  const contentList = dataArray.map((data, index) =>(
    <Content key={index} nextSlide={nextSlide} data={data} />
  ));
  console.log(devData);


  return (
    <>
      <Container>
        <h1>Developer version</h1>
        <SlideWrap>
          <SlideBox>
            <SlideList ref={slideRef}>
              {contentList}
            </SlideList>
          </SlideBox>
        </SlideWrap>
      </Container>
    </>
  );
};
export default Test;
