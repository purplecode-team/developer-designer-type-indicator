import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;
export const SlideWrap = styled.div`
  width: 400px;
  margin: auto;
  padding-bottom: 30px;
`;
export const SlideBox = styled.div`
  width: 100%;
  margin: auto;
  overflow-x: hidden;
`;
export const SlideList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 2000px;
`;

export const SlideContent = styled.div`
  width: 400px;
`;
export const SlideTextWrap = styled.div`
  display: table;
  width: 100%;
  height: 200px;
  /* border:1px solid black; */
`;
export const SlideText = styled.p`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
`;

export const SlideBtnBox = styled.div`
  position: relative;
`;
export const SlideBtnButton = styled.button`
  display: block;
  margin: 10px auto;
  width: 80%;
  height: 60px;
  font-size: 16px;
  background: none;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
`;
