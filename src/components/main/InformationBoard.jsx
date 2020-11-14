import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const StyledLink = styled(Link)`
  width: 24rem;
  z-index: 10;
`;

const Button = styled.button`
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
    position: relative;
    top: 6rem;
    left: ${(props) => props.leftPos}rem;
    font-size: 20px;
    font-weight: 550;
    color: #653019;
  }
  p {
    position: relative;
    font-size: 16px;
    top: 7rem;
    left: ${(props) => props.leftPos}rem;
  }
`;

const InformationBoard = ({ img, title, leftPos, urlSlug }) => {
  console.log(`/test/${urlSlug}`);
  return (
    <StyledLink to={`/test/${urlSlug}`}>
      <Button leftPos={leftPos}>
        <h2> {title} 시작 </h2>
        <p>
          총 <CountUp end={100} />
          명이 참여했어요.{' '}
        </p>
        <img src={img} alt={title} />
      </Button>
    </StyledLink>
  );
};

export default InformationBoard;
