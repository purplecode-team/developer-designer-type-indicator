import React, { useState, useEffect, useRef } from "react";
import * as S from "../pages/style";
const Content = ({nextSlide}) => {
    

    
  return (
    <>
      <S.slideContent >
        <S.slideTextWrap >
          <S.slideText>버스를 타고 가던 중,<br /> 벨을 눌렀지만 그냥 지나친다면?</S.slideText>
        </S.slideTextWrap>
        <S.slideBtnBox >
          <S.slideBtnButton type="button" onClick={nextSlide} >그냥 다음 정거장에서 내린다</S.slideBtnButton>
          <S.slideBtnButton type="button" onClick={nextSlide} >기사님! 여기서 내릴게요! 소리친다</S.slideBtnButton>
        </S.slideBtnBox>
      </S.slideContent>
    </>
  );
};

export default Content;
