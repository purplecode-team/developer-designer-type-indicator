import React, { useState, useEffect, useRef } from "react";
import styles from './slide.module.css';
import Content from '../components/Content';

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
      <div className={styles.container}>
        <h1>Developer version</h1>
        <div className={styles.slide_wrap}>
          <div className={styles.slide_box}>
            <div className={styles.slide_list} ref={slideRef}>
              <Content nextSlide={nextSlide}></Content>
              <Content nextSlide={nextSlide}></Content>
              <Content nextSlide={nextSlide}></Content>
              <Content nextSlide={nextSlide}></Content>
            </div>
          </div>
          <ul className={styles.slide_pagination} />
        </div>
      </div>
    </>
  );
};

export default Test;
