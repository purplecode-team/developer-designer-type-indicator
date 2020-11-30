import React from 'react';
import styled from 'styled-components';
import CharacterContainer from '../result/CharacterContainer';
import ResultTextContainer from './ResultTextContainer.jsx';
import PropTypes from 'prop-types';
import media from '../../lib/styles/media';

const ResultBox = styled.div`
  position:absolute;
  z-index:999;
  display:grid;
  width:100%;
  @media (min-width: ${media.laptop}){
    grid-template-columns: 1fr 3fr 3fr 2fr;
  }
  @media (max-width: ${media.laptop}){
    grid-template-rows: 1fr 1fr;
    grid-template-columns:100%;
    justify-content: center;
  }
`;

const Space = styled.div`
  width:100%;
  height:100vh;
  @media (max-width: ${media.laptop}){
    display:none;
  }
`;
const ResultContent = styled.div`
    width:100%;
    height:100vh;
`;


const ResultContainer = ({}) => {

    return (
        <ResultBox>
            <Space>
            </Space>
            <ResultContent>
              <CharacterContainer/>
            </ResultContent>
            <ResultContent>
              <ResultTextContainer/>
            </ResultContent>
            <Space></Space>
        </ResultBox>
    );
};


export default ResultContainer;
