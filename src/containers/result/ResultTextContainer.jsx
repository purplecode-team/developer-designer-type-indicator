import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../lib/styles/media';



const TextContent = styled.div`
    position:relative;
    height: 100vh;
`;
const TextBox = styled.div`
  position:absolute;
  top:100px;
  width: 100%;
`;

const TextWhiteBoard = styled.div`
  width:85%;
  height:33rem;
  background-color:white;
  border-radius:4rem;
`;

const ResultTextContainer = ({}) => {

    return(
      <TextContent> 
        <TextBox>
            <TextWhiteBoard>

            </TextWhiteBoard>
        </TextBox>
      </TextContent>    
    );

};

export default ResultTextContainer;