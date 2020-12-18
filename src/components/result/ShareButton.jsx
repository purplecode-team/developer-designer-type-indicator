import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TwitterShareButton, FacebookShareButton } from 'react-share';
import { kakaoButtonTemplateId } from '../../lib/util/util';
import { KAKAO_APP_KEY } from '../../lib/util/config';
import twitterIcon from '../../../public/img/twitter.png';
import kakaoImg from '../../../public/img/kakao.png';
import facebookImg from '../../../public/img/facebook.png';

export const KaKaoShareBtn = () => {
  const { type, name } = useParams();

  useEffect(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(KAKAO_APP_KEY);
      }

      kakao.Link.createCustomButton({
        container: '.kakao-link-btn',
        templateId: kakaoButtonTemplateId[`${name}_${type}`],
      });
    }
  }, [name, type]);

  return (
    <button type="button" className="kakao-link-btn">
      <img src={kakaoImg} alt="kakao 공유" />
    </button>
  );
};

export const TwitterShareBtn = ({ url, content }) => {
  return (
    <TwitterShareButton url={url} title={content}>
      <img src={twitterIcon} alt="twitter 공유" />
    </TwitterShareButton>
  );
};

export const FacebookShareBtn = ({ url, content }) => {
  return (
    <FacebookShareButton url={url} quote={content} style={{ padding: '1.5px' }}>
      <img src={facebookImg} alt="facebook 공유" />
    </FacebookShareButton>
  );
};

FacebookShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

TwitterShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
