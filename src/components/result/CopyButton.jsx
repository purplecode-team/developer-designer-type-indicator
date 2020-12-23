import React from 'react';
import styled from 'styled-components';
import clip from '../../../public/img/clip.png';

const IconButton = styled.button`
  :hover{
    cursor:pointer;
  }
`;

const CopyButton = () => {
  const handleClick = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(alert('결과 공유 링크가 복사되었습니다.'));
  };

  return (
    <IconButton type="button" onClick={handleClick}>
      <img src={clip} alt="copy" />
    </IconButton>
  );
};

export default CopyButton;
