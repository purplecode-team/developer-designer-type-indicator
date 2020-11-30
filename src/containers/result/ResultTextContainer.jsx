import React from 'react';
import styled from 'styled-components';
import TextWhiteBoard from '../../components/result/TextWhiteBoard';
import PropTypes from 'prop-types';
import media from '../../lib/styles/media';

const TextContentWrap = styled.div`
    position:relative;
    height: 100vh;
`;
const TextContentBox = styled.div`
  position:absolute;
  top:80px;
  width: 100%;
`;

const ResultTextContainer = ({}) => {

    return(
      <TextContentWrap> 
        <TextContentBox>
            <TextWhiteBoard/>
        </TextContentBox>
      </TextContentWrap>    
    );
};

export default ResultTextContainer;