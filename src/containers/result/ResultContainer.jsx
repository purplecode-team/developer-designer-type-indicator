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
    grid-template-columns: 1fr 3fr 3fr 2fr;
    @media (max-width: ${media.tablet}) {
        grid-template-columns: 1fr 3fr 3fr 2fr;
    }        
`;

const ResultContent = styled.div`
    width:100%;
    height:100vh;
`;


const ResultContainer = ({}) => {

    return (
        <ResultBox>
            <ResultContent>
            </ResultContent>
            <ResultContent>
              <CharacterContainer/>
            </ResultContent>
            <ResultContent>
              <ResultTextContainer/>
            </ResultContent>
            <ResultContent></ResultContent>
        </ResultBox>
    );
};


export default ResultContainer;
