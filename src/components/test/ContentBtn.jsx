import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import media from '../../lib/styles/media';
import matchResultType from '../../lib/util/matchResultType';
import { names } from '../../lib/util/util';
import useSetResult from '../../lib/hooks/useSetResult';

const ContentBtnBox = styled.div`
  position: relative;
`;

const SmallBtn = styled.button`
  display: block;
  margin: 20px auto;
  width: 100%;
  height: 65px;
  font-family: 'hannaPro', sans-serif;
  font-size: 16px;
  word-break: keep-all;
  white-space: break-spaces;
  line-height: normal;
  background: none;
  border: 1px solid #ff9c9c;
  border-radius: 25px;
  cursor: pointer;
  &:focus {
    outline-style: none;
  }
  &:active {
    border: 2px solid #fc7676;
  }
  -webkit-tap-highlight-color: transparent;
  @media (min-width: ${media.tablet+1}px) {
    &:hover {
    color: white;
    background-color: #ff9c9c;
  }
  }
  @media (max-width: ${media.tablet}px) {
    &:focus {
      color: black;
      background-color: white;
    }
  }
  @media (max-width: ${media.mobileL}px) {
    font-size: 14px;
  }
`;

const ContentBtn = ({ nextSlide, data, count, history }) => {
  const [ state, dispatch ] = useSetResult();
  const { type } = useParams();

  const goToResult = () => {
    if (count === 15) {
      const result = matchResultType(state);
      history.push({
        pathname: `/result/${type}/${names[result]}`,
        state: { result, type },
      });
    }
  };

  const clickSelection = (id) => {
    dispatch(id);
    goToResult();
    nextSlide();
  };

  return (
    <ContentBtnBox>
      <SmallBtn
        type="button"
        onClick={() => {
          clickSelection({ type: data.TypeA });
        }}
      >
        {data.A}
      </SmallBtn>
      <SmallBtn
        type="button"
        onClick={() => {
          clickSelection({ type: data.TypeB });
        }}
      >
        {data.B}
      </SmallBtn>
    </ContentBtnBox>
  );
};

ContentBtn.propTypes = {
  nextSlide: PropTypes.func,
  data: PropTypes.object,
  count: PropTypes.number,
};

export default ContentBtn;
