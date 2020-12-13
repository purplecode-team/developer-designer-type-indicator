import React from 'react';
import clip from '../../../public/img/clip.png';

const CopyButton = () => {
  const handleClick = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(alert('결과 공유 링크가 복사되었습니다.'));
  };

  return (
    <button onClick={handleClick}>
      <img src={clip} alt="copy" />
    </button>
  );
};

export default CopyButton;
