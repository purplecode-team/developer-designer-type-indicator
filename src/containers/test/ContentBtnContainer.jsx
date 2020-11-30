import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import useResultType from '../../lib/hooks/useResultType';
import { Context } from '../../lib/helpers/context';
import media from '../../lib/styles/media';

const ContentBtnBox = styled.div`
  position: relative;
`;

const ContentBtn = styled.button`
  @media (max-width: ${media.mobileL}) {
    font-size: 14px;
  }
  display: block;
  margin: 20px auto;
  width: 100%;
  height: 65px;
  font-family: 'jua', sans-serif;
  font-size: 16px;
  word-break: keep-all;
  white-space: break-spaces;
  line-height: normal;
  background: none;
  border: 1px solid #ff9c9c;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #ff9c9c;
  }
  &:focus {
    outline-style: none;
  }
  @media (max-width: ${media.tablet}) {
    &:focus {
      color: black;
      background-color: white;
    }
  }
  &:active {
    border: 2px solid #fc7676;
  }
  -webkit-tap-highlight-color: transparent;
`;

const ContentBtnContainer = ({ nextSlide, data, count, history }) => {
  const { dispatch } = useContext(Context);
  const { type } = useParams();
  const [result] = useResultType();

  const classifySelection = (id, selection) => {
    if (selection === 'A') {
      dispatch(id);
    }
  };

  const goToResult = () => {
    if (count === 15) {
      history.push({
        pathname: `/result/${type}/${result}`,
        state: { result, type },
      });
    }
  };

  const clickSelection = useCallback((id, selection) => {
    classifySelection(id, selection);
    goToResult();
    nextSlide();
  });

  return (
    <ContentBtnBox>
      <ContentBtn
        type="button"
        onClick={() => {
          clickSelection({ type: data.id }, 'A');
        }}
      >
        {data.A}
      </ContentBtn>
      <ContentBtn
        type="button"
        onClick={() => {
          clickSelection({ type: data.id }, 'B');
        }}
      >
        {data.B}
      </ContentBtn>
    </ContentBtnBox>
  );
};

ContentBtnContainer.propTypes = {
  nextSlide: PropTypes.func,
  data: PropTypes.object,
  count: PropTypes.number,
};

export default ContentBtnContainer;
