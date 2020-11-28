import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Content from '../components/test/Content';
import ContentNav from '../components/test/ContentNav';
import firebase from '../lib/util/firebase';
import leftTree from '../../public/img/tree_left.png';
import rightTree from '../../public/img/tree_right.png';
import media from '../lib/styles/media';
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

const RightTree = styled.img`
  @media (max-width: ${media.laptopM}) {
    right: -12rem;
  }
  @media (max-width: ${media.laptop}) {
    display: none;
  }
  position: absolute;
  right: -7rem;
  top: -1rem;
  height: 110vh;
  object-fit: contain;
  z-index: 10;
`;

const LeftTree = styled.img`
  @media (max-width: ${media.laptopM}) {
    left: -12rem;
  }
  @media (max-width: ${media.laptop}) {
    display: none;
  }
  position: absolute;
  left: -7rem;
  top: -1rem;
  height: 110vh;
  object-fit: contain;
  z-index: 10;
`;

const Container = styled.div`
  @media (max-width: ${media.tablet}) {
    width: 450px;
  }
  @media (max-width: ${media.mobileL}) {
    width: 90%;
  }
  position: relative;
  width: 500px;
  height: 350px;
  margin: 120px auto;
  padding: 20px 0;
  text-align: center;
  font-family: 'jua', sans-serif;
  background-color: white;
  border-radius: 50px;
  z-index: 12;
  box-shadow: #afafaf 5px 5px 20px;
`;

const ContentTitle = styled.div`
  margin: 20px 0;
  font-size: 25px;
`;

const ContentWrap = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Test = ({ match, history }) => {
  const [count, setCount] = useState(1);
  const [currentData, setCurrentData] = useState({});
  const [data, setData] = useState({
    Q1: {},
    Q2: {},
    Q3: {},
    Q4: {},
    Q5: {},
    Q6: {},
    Q7: {},
    Q8: {},
    Q9: {},
    Q10: {},
    Q11: {},
    Q12: {},
    Q13: {},
    Q14: {},
    Q15: {},
  });

  const dataArray = [
    data.Q1,
    data.Q2,
    data.Q3,
    data.Q4,
    data.Q5,
    data.Q6,
    data.Q7,
    data.Q8,
    data.Q9,
    data.Q10,
    data.Q11,
    data.Q12,
    data.Q13,
    data.Q14,
    data.Q15,
  ];

  const connectData = useCallback((dataName) => {
    const ref = firebase.database().ref(dataName);
    ref.once('value', (snapshot) => {
      setData(snapshot.val());
    });
  }, []);

  const nextSlide = useCallback(() => {
    console.log(`현재 count : ${count}`);
    setCount(count + 1);
    setCurrentData(dataArray[count]);
  });

  useEffect(() => {
    if (match.params.type === 'developer') {
      connectData('developData');
    } else if (match.params.type === 'designer') {
      connectData('designData');
    }
  }, []);

  useEffect(() => {
    setCurrentData(dataArray[0]);
  }, [data]);

  return (
    <MainWrapper>
      <Container>
        <ContentTitle>{match.params.type}</ContentTitle>
        <ContentWrap>
          <Content
            nextSlide={nextSlide}
            data={currentData}
            count={count}
            history={history}
          />
        </ContentWrap>
        <ContentNav count={count} />
      </Container>
      <CloudBackground
        role="img"
        ariaLabel="clouds background"
        img={cloudImg}
      />
      <RightTree src={rightTree} alt="Right tree" />
      <LeftTree src={leftTree} alt="Left tree" />
      <GrassBackground role="img" ariaLabel="grass background" img={grassImg} />
    </MainWrapper>
  );
};
export default Test;
