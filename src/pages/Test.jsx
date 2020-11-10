import React, { useState, useEffect, useRef } from "react";
import Content from '../components/Content';
import * as S from "./style";

const Test = () => {
  const TOTAL_SLIDES = 3;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
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
      <S.Container>
        <h1>Developer version</h1>
        <S.SlideWrap>
          <S.SlideBox>
            <S.SlideList ref={slideRef}>
              <Content nextSlide={nextSlide} />
              <Content nextSlide={nextSlide} />
              <Content nextSlide={nextSlide} />
              <Content nextSlide={nextSlide} />
            </S.SlideList>
          </S.SlideBox>
        </S.SlideWrap>
      </S.Container>
    </>
  );
};

export default Test;
