import React from "react";
import * as S from "../pages/style";

const Content = ({nextSlide}) => {    
  
  return (
    <>
      <S.SlideContent>
        <S.SlideTextWrap>
          <S.SlideText>버스를 타고 가던 중,<br /> 벨을 눌렀지만 그냥 지나친다면?</S.SlideText>
        </S.SlideTextWrap>
        <S.SlideBtnBox>
          <S.SlideBtnButton type="button" onClick={nextSlide}>그냥 다음 정거장에서 내린다</S.SlideBtnButton>
          <S.SlideBtnButton type="button" onClick={nextSlide}>기사님! 여기서 내릴게요! 소리친다</S.SlideBtnButton>
        </S.SlideBtnBox>
      </S.SlideContent>
    </>
  );
};

export default Content;