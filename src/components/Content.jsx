import React, { useState, useEffect, useRef } from "react";
import styles from '../pages/slide.module.css';

const Content = ({nextSlide}) => {
    

    
  return (
    <>
      <div className={styles.slide_content}>
        <div className={styles.slide_text}>
          <p>버스를 타고 가던 중,<br /> 벨을 눌렀지만 그냥 지나친다면?</p>
        </div>
        <div className={styles.slide_btn_box}>
          <button type="button" onClick={nextSlide} className={styles.slide_btn_prev}>그냥 다음 정거장에서 내린다</button>
          <button type="button" onClick={nextSlide} className={styles.slide_btn_next}>기사님! 여기서 내릴게요! 소리친다</button>
        </div>
      </div>
    </>
  );
};

export default Content;
