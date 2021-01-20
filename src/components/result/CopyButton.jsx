import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import clip from '../../../public/img/clip.png';

const IconButton = styled.button`
  &:hover {
    cursor: pointer;
  }
`;

const CopyButton = () => {
  const url = window.location.href;

  const onCopy = () => {
    alert('결과 공유 링크가 복사되었습니다.');
  };

  return (
    <CopyToClipboard text={url} onCopy={onCopy}>
      <IconButton>
        <img src={clip} alt="copy" />
      </IconButton>
    </CopyToClipboard>
  );
};

export default CopyButton;
