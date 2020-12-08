import React, { useEffect } from 'react';
import styled from 'styled-components';
import kakaoImg from '../../../public/img/kakao.png';
import { KAKAO_APP_KEY } from '../../lib/util/config';

const Icon = styled.img`
  width: 40px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

const KaKaoLinkBtn = ({ title }) => {
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
      <Icon src={kakaoImg} alt="kakao" />
    </button>
  );
};

export default KaKaoLinkBtn;
