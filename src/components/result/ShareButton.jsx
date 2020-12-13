import React, { useEffect } from 'react';
import styled from 'styled-components';
import { KAKAO_APP_KEY } from '../../lib/util/config';
import {
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
} from 'react-share';
import twitterIcon from '../../../public/img/twitter.png';
import kakaoImg from '../../../public/img/kakao.png';

export const KaKaoShareBtn = ({ title }) => {
  useEffect(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(KAKAO_APP_KEY);
      }

      kakao.Link.createDefaultButton({
        container: '.kakao-link-btn',
        objectType: 'feed',
        content: {
          title: title,
          description:
            '나는 어떤 유형의 개발자/디자이너일까? 개발자/디자이너 성향 테스트',
          imageUrl: '',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '나도 테스트 해보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  }, []);

  return (
    <button className="kakao-link-btn">
      <img src={kakaoImg} alt="kakao" />
    </button>
  );
};

export const TwitterShareBtn = ({ title }) => {
  return (
    <TwitterShareButton url={window.location.href} title={title}>
      <img src={twitterIcon} alt="twitter share" />
    </TwitterShareButton>
  );
};

export const FacebookShareBtn = ({ title }) => {
  return (
    <FacebookShareButton url={window.location.href} quote={title}>
      <FacebookIcon
        size={30.8}
        style={{
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.19)',
          borderRadius: '50%',
        }}
      />
    </FacebookShareButton>
  );
};