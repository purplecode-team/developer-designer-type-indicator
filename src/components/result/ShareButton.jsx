import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
} from 'react-share';
import { s3CharacterImg } from '../../lib/util/util';
import { KAKAO_APP_KEY } from '../../lib/util/config';
import twitterIcon from '../../../public/img/twitter.png';
import kakaoImg from '../../../public/img/kakao.png';
import facebookImg from '../../../public/img/facebook.png';

export const KaKaoShareBtn = ({ url, title }) => {
  const { name } = useParams();

  useEffect(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(KAKAO_APP_KEY);
      }

      kakao.Link.createCustomButton({
        container: '.kakao-link-btn',
        templateId: 42165,
        templateArgs: {
          title,
          description:
            '나는 어떤 유형의 개발자/디자이너일까? 개발자/디자이너 성향 테스트',
        },
      });
    }
  }, []);

  return (
    <button type="button" className="kakao-link-btn">
      <img src={kakaoImg} alt="kakao 공유" />
    </button>
  );
};

export const TwitterShareBtn = ({ url, title }) => {
  return (
    <TwitterShareButton url={url} title={title}>
      <img src={twitterIcon} alt="twitter 공유" />
    </TwitterShareButton>
  );
};

export const FacebookShareBtn = ({ url, title }) => {
  return (
    <FacebookShareButton url={url} quote={title} style={{ padding: '1.5px' }}>
      <img src={facebookImg} alt="facebook 공유" />
    </FacebookShareButton>
  );
};

KaKaoShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

FacebookShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

TwitterShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
