import React, { useState, useEffect, useRef, useCallback, useReducer } from 'react';
import Content from '../components/test/Content';
import styled from 'styled-components';
import firebase from '../util/firebase';
import testBackground from '../../public/img/testBackground.png';
import leftTree from '../../public/img/tree_left.png';
import rightTree from '../../public/img/tree_right.png';
import media from '../lib/styles/media';


let SLIDEWIDTH = 400;
let SLIDELEN = 15;

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: #c5f1fc;
  background-image: url(${testBackground});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
const RightTree = styled.img`
  @media (max-width: ${media.laptopM}) {
    right: -12rem;
  };
  @media (max-width: ${media.laptop}) {
    display:none;
  };
  position: absolute;
  right: -7rem;
  top: -1rem;
  height: 110vh;
  object-fit: contain;
`;
const LeftTree = styled.img`
  @media (max-width: ${media.laptopM}) {
    left: -12rem;
  };
  @media (max-width: ${media.laptop}) {
    display:none;
  };
  position: absolute;
  left: -7rem;
  top: -1rem;
  height: 110vh;
  object-fit: contain;
`;

const Container = styled.div`
  @media (max-width: ${media.tablet}) {
    width:450px;
  };
  @media (max-width: ${media.mobileL}) {
    width:90%;
  };
  width: 500px;
  height: 350px;
  margin: 100px auto;
  padding: 20px 0;
  text-align: center;
  font-family: 'jua', sans-serif;
  background-color:white;
  border-radius: 50px;
  z-index: 1;
  box-shadow: #afafaf 5px 5px 20px;
`;
const SlideTitle = styled.div`
  margin-top:20px;
  font-size:25px;
`;
const SlideWrap = styled.div`
  @media (max-width: ${media.tablet}) {
    width: ${SLIDEWIDTH*0.8};
  }
  @media (max-width: ${media.mobileL}) {
    width:${SLIDEWIDTH*0.6};
  };
  width: ${SLIDEWIDTH}px;
  margin: auto;
`;
const SlideBox = styled.div`
  margin: auto;
  overflow: hidden;
`;
const SlideList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: ${SLIDEWIDTH*SLIDELEN}px;
  height:100%;
`;


const Test = ({match}) => {
  const [count, setCount] = useState(1);
  const [currentData, setCurrentData] = useState({});
  const [data,setData] = useState({
    Q1:{}, Q2:{}, Q3:{}, Q4:{}, Q5:{}, Q6:{}, Q7:{}, Q8:{}, Q9:{}, Q10:{}, Q11:{}, Q12:{}, Q13:{}, Q14:{}, Q15:{}
  });

  const dataArray = [
    data.Q1, data.Q2, data.Q3, data.Q4, data.Q5, data.Q6, data.Q7, data.Q8, data.Q9,
    data.Q10, data.Q11, data.Q12, data.Q13, data.Q14, data.Q15
  ];
  
  const connectData = useCallback((dataName) =>{
    const ref = firebase.database().ref(dataName);
    ref.once('value', (snapshot) => {
      setData(snapshot.val());
    });
  },[]);

  const nextSlide = useCallback(() => {
    setCount(count+1);
    setCurrentData(dataArray[count]);
    console.log('currentData 실행');
    console.log(count);
  });

  useEffect(()=>{
    if(match.params.type === 'developer'){
      connectData('developData');
    }else if(match.params.type === 'designer'){
      connectData('designData');
    }
  },[]);

  useEffect(()=>{
    setCurrentData(dataArray[0]);
    console.log('setCurrentData 첫번째 실행');
  },[data]);

  return (
    <MainWrapper >
      <RightTree src={rightTree} alt="Right tree" />
      <LeftTree src={leftTree} alt="Left tree" />
      <Container>
        <SlideTitle>{match.params.type}</SlideTitle>
        <SlideWrap>
            <SlideBox>
              <SlideList >
                <Content nextSlide={nextSlide} data={currentData} count={count} />
              </SlideList>
            </SlideBox>
        </SlideWrap>
      </Container>
    </MainWrapper>
  );
};
export default Test;
