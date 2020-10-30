import React, { useState, useEffect, useRef } from "react";
import Content from '../components/Content';
import * as S from "./style";

const Test = () => {
  const TOTAL_SLIDES = 3;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      //마지막 슬라이드
      setCurrentSlide(currentSlide);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.2s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide*4}00px)`;
  }, [currentSlide]);

  return( 
    <>
      <S.container >
        <h1>Developer version</h1>
        <S.slideWrap >
          <S.slideBox >
            <S.slideList ref={slideRef}>
              <Content nextSlide={nextSlide}></Content>
              <Content nextSlide={nextSlide}></Content>
              <Content nextSlide={nextSlide}></Content>
              <Content nextSlide={nextSlide}></Content>
            </S.slideList>
          </S.slideBox>
          <ul  />
        </S.slideWrap>
      </S.container>
    </>
  );
};

export default Test;
