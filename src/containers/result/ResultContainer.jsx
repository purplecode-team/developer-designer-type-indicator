import React from 'react';
import styled from 'styled-components';
import Character from '../../components/result/Character';
import PropTypes from 'prop-types';
import media from '../../lib/styles/media';
import TextWhiteboard from '../../components/result/TextWhiteBoard';

const ResultBox = styled.div`
  position: absolute;
  z-index: 999;
  display: grid;
  width: 100%;
  @media (min-width: ${media.laptop}) {
    grid-template-columns: 1fr 3fr 3fr 2fr;
  }
  @media (max-width: ${media.laptop}) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 100%;
    justify-content: center;
  }
`;

const Space = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: ${media.laptop}) {
    display: none;
  }
`;

const ResultContainer = ({
  title,
  subtitle,
  bestPartner,
  worstPartner,
  designerDesc,
  devDesc,
  type,
}) => {
  return (
    <ResultBox>
      <Space />
      <Character />
      <TextWhiteboard
        type={type}
        title={title}
        subtitle={subtitle}
        devDesc={devDesc}
        designerDesc={designerDesc}
        bestPartner={bestPartner}
        worstPartner={worstPartner}
      />
      <Space />
    </ResultBox>
  );
};

ResultContainer.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  bestPartner: PropTypes.string.isRequired,
  worstPartner: PropTypes.string.isRequired,
  designerDesc: PropTypes.string.isRequired,
  devDesc: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ResultContainer;
