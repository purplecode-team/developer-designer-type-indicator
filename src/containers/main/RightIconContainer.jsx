import React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import IconM from '../../components/main/IconM';
import IconS from '../../components/main/IconS';

// img src
import icon1 from '../../../public/img/d_icon1.png';
import icon2 from '../../../public/img/d_icon2.png';
import icon3 from '../../../public/img/d_icon3.png';
import icon4 from '../../../public/img/d_icon4.png';
import tree from '../../../public/img/tree_right.png';

const Container = styled.div`
  position: absolute;
  top: -1rem;
  right: -1rem;
  @media (max-width: ${media.laptopM}) {
    display: none;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 5;
  margin-top: 5rem;
  width: 40rem;
  height: 40%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: end;
  @media (max-width: ${media.laptopL}) {
    margin-top: 3rem;
    width: 30rem;
  }
`;

const Tree = styled.img`
  position: absolute;
  top: -1rem;
  right: -1rem;
  z-index: 3;
  height: 110vh;
  object-fit: contain;
`;

const RightIconContainer = () => {
  return (
    <Container>
      <Tree src={tree} alt="right tree" />
      <Content>
        <IconM src={icon2} alt="AI icon" />
        <IconS src={icon3} alt="XD icon" right="4" />
        <IconS src={icon4} alt="ID icon" top="3" />
        <IconM src={icon1} alt="PSD icon" right="3" />
      </Content>
    </Container>
  );
};

export default RightIconContainer;
