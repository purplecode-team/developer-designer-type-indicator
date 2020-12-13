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
    top: ${(props) => props.top}rem;
  }
`;

const Button = styled.button`
  position: relative;
  font-family: 'hannaPro', sans-serif;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease-in-out;
  img {
    width: 105%;
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
    h2 {
      font-size: 16px;
    }
    p {
      margin-top: 5px;
      font-size: 14px;
    }
  } ;
`;

const BoardTextWrap = styled.div`
  position: absolute;
  top: 40px;
  width: 95%;
  text-align: center;
  padding-left: ${(props) => props.leftPos}rem;
  @media (max-width: ${media.tablet}) {
    top: 30px;
    padding-left: 0;
  }
`;

const InformationBoard = ({ img, title, sum, leftPos, urlSlug, top }) => {
  return (
    <StyledLink to={`/test/${urlSlug}`} top={top}>
      <Button>
        <BoardTextWrap leftPos={leftPos}>
          <h2> {title}</h2>
          <p>
            참여 수 : <CountUp end={sum} />명
          </p>
        </BoardTextWrap>
        <img src={img} alt={title} />
      </Button>
    </StyledLink>
  );
};

InformationBoard.propTypes = {
  img: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  leftPos: PropTypes.string.isRequired,
  urlSlug: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
};

export default InformationBoard;
