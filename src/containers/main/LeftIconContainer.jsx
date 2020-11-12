import React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import IconM from '../../components/main/IconM';
import IconS from '../../components/main/IconS';

// img src
import icon1 from '../../../public/img/f_icon1.png';
import icon2 from '../../../public/img/f_icon2.png';
import icon3 from '../../../public/img/f_icon3.png';
import icon4 from '../../../public/img/f_icon4.png';
import tree from '../../../public/img/tree_left.png';

const Container = styled.div`
  position: absolute;
  left: -3rem;
  top: -1rem;
  z-index: 3;
  height: 110vh;
  width: 100%;
  background-image: url(${tree});
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: ${media.laptopM}) {
    display: none;
  }
`;

const Content = styled.div`
  margin-top: 5rem;
  margin-left: 5rem;
  width: 40rem;
  height: 40%;
  left: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${media.laptopL}) {
    margin-top: 3rem;
    margin-left: 0;
    width: 30rem;
  }
`;

const LeftIconContainer = () => {
  return (
    <Container>
      <Content>
        <IconS src={icon4} left="6" />
        <IconM src={icon1} left="1" />
        <IconM src={icon2} top="-1" left="4" />
        <IconS src={icon3} />
      </Content>
    </Container>
  );
};

export default LeftIconContainer;
