import React, { useState, useEffect, useRef, useCallback, createContext } from 'react';
import Content from '../components/test/Content';
import styled from 'styled-components';
import firebase from '../util/firebase';
import CloudBackground from '../components/common/CloudBackground';
import GrassBackground from '../components/common/GrassBackground';
import cloudImg from '../../public/img/bg_clouds.png';
import grassImg from '../../public/img/bg_bottom.png';
import {TestContext} from '../components/common/TestContext';

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: #c5f1fc;
`;

const Container = styled.div`
  position:absolute;
  top: 15%;
  width: 50%;
  left: 25%;
  height: 450px;
  padding: 20px 0;
  text-align: center;
  background-color:#eee;
  border-radius:10%;
  z-index: 1;
`;
const SlideTitle = styled.div`
  margin-top:20px;
  font-size:25px;
`;
const SlideWrap = styled.div`
  width: 400px;
  margin: auto;
  padding-bottom: 30px;
`;
const SlideBox = styled.div`
  width: 100%;
  margin: auto;
  overflow: hidden;
`;
const SlideList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 6000px;
`;

const Test = () => {
  
  const results = {E:0, I:0 , T:0, F:0, J:0, P:0};

  const TOTAL_SLIDES = 15;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [devData,setDevData] = useState({
    dev1:{}, dev2:{}, dev3:{}, dev4:{}, dev5:{}, dev6:{}, dev7:{}, dev8:{}, dev9:{}, dev10:{}, dev11:{}, dev12:{}, dev13:{}, dev14:{}, dev15:{}
  });
  const slideRef = useRef(null);
  const nextSlide = useCallback(() => {
    if (currentSlide >= TOTAL_SLIDES-1) {
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
    console.log('firebase 데이터 가져오기 실행');
  },[]);
  const dataArray = [
    devData.dev1, devData.dev2, devData.dev3, devData.dev4, devData.dev5, devData.dev6, devData.dev7, devData.dev8, devData.dev9,
    devData.dev10, devData.dev11, devData.dev12, devData.dev13, devData.dev14, devData.dev15
  ];
  const contentList = dataArray.map((data, index) =>(
    <Content key={index} nextSlide={nextSlide} data={data} />
  ));
  
  return (
    <MainWrapper>
      <CloudBackground role="img" ariaLabel="clouds background" img={cloudImg}/>
        <Container>
          <SlideTitle>Developer version</SlideTitle>
          <SlideWrap>
            <TestContext.Provider value={results}>
              <SlideBox>
                <SlideList ref={slideRef}>
                  {contentList}
                </SlideList>
              </SlideBox>
            </TestContext.Provider>          
          </SlideWrap>
        </Container>
      <GrassBackground role="img" ariaLabel="grass background" img={grassImg}/>
    </MainWrapper>
  );
};
export default Test;
