import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import media from '../../lib/styles/media';

const StyledLink = styled(Link)`
  width: 20rem;
  z-index: 10;
  padding-top: 10px;
  @media (max-width: ${media.tablet}) {
    width: 14rem;
    position: absolute;
    top:${(props) => props.top}rem;
    margin-left:${(props) => props.margin}px;
  }

`;

const Button = styled.button`
  position:relative;
  font-family: 'jua';
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease-in-out;
  img {
    width: 95%;
    object-fit: contain;
  }
  &:hover {
    transform: scale(1.05);
  }
  h2 {
    font-size: 20px;
    color: #653019;
  }
  p {
    font-size: 16px;
    margin-top: 10px;
  }
  @media (max-width: ${media.tablet}) {
    h2{
      font-size: 18px;
    }
    p{
      font-size: 14px;
    }
  };

`;

const BoardTextWrap = styled.div`
  position:absolute;
  top:40px;
  width:100%;
  text-align:center;
  @media (max-width: ${media.tablet}) {
    top:30px;
  }
`;

const InformationBoard = ({ img, title, leftPos, urlSlug, top, margin }) => {
  return (
    <StyledLink to={`/test/${urlSlug}`} top={top} margin={margin}>
      <Button leftPos={leftPos}>
        <BoardTextWrap>
          <h2> {title}</h2>
          <p>
            총 <CountUp end={100} />
            명이 참여했어요.{' '}
          </p>
        </BoardTextWrap>
        <img src={img} alt={title} />
      </Button>
    </StyledLink>
  );
};

InformationBoard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  leftPos: PropTypes.string.isRequired,
  urlSlug: PropTypes.string.isRequired,
};

export default InformationBoard;
