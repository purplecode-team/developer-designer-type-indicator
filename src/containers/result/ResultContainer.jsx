import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Character from '../../components/result/Character';
import media from '../../lib/styles/media';
import TextWhiteboard from './TextWhiteBoard';

const ResultBox = styled.div`
  position: absolute;
  z-index: 999;
  display: grid;
  width: 100%;
  @media (min-width: ${media.laptop}) {
    grid-template-columns: 0.5fr 3fr 4fr 0.5fr;
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
  shortBio,
  bestPartnerTitle,
  worstPartnerTitle,
  name,
}) => {
  return (
    <ResultBox>
      <Space />
      <Character shortBio={shortBio} name={name} />
      <TextWhiteboard
        type={type}
        title={title}
        subtitle={subtitle}
        devDesc={devDesc}
        designerDesc={designerDesc}
        bestPartner={bestPartner}
        worstPartner={worstPartner}
        bestPartnerTitle={bestPartnerTitle}
        worstPartnerTitle={worstPartnerTitle}
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
  designerDesc: PropTypes.arrayOf(PropTypes.string).isRequired,
  devDesc: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  shortBio: PropTypes.string.isRequired,
  bestPartnerTitle: PropTypes.string.isRequired,
  worstPartnerTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ResultContainer;
