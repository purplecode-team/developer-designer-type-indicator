import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../lib/styles/media';
import ContentBtn from '../../components/test/ContentBtn';

const fadeIn = keyframes`
  from {
    opacity:0;
    transform:translateY(5px);
  }
  to {
    opacity:1;
    transform:translateY(0);
  }
`;

const ContentBox = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  animation: ${fadeIn} 2s;
`;

const ContentQuestionWrap = styled.div`
  display: table;
  width: 100%;
`;

const ContentQuestion = styled.p`
  @media (max-width: ${media.mobileL}px) {
    font-size: 16px;
  }
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  font-family: 'hannaPro', sans-serif;
  font-size: 20px;
  margin: 40px 0;
  height: 100px;
  word-break: keep-all;
  white-space: break-spaces;
  line-height: normal;

`;

const Content = ({ nextSlide, data, count, history }) => {
  return (
    <ContentBox>
      <ContentQuestionWrap>
        <ContentQuestion>{data.question}</ContentQuestion>
      </ContentQuestionWrap>
      <ContentBtn
        nextSlide={nextSlide}
        data={data}
        count={count}
        history={history}
      />
    </ContentBox>
  );
};

ContentBtn.propTypes = {
  nextSlide: PropTypes.func,
  data: PropTypes.object,
  count: PropTypes.number,
};

export default Content;
