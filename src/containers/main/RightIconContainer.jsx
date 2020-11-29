import React from 'react';
import RightTree from '../../components/common/RightTree';
import IconM from '../../components/main/IconM';
import IconS from '../../components/main/IconS';

// img src
import icon1 from '../../../public/img/d_icon1.png';
import icon2 from '../../../public/img/d_icon2.png';
import icon3 from '../../../public/img/d_icon3.png';
import icon4 from '../../../public/img/d_icon4.png';

const RightIconContainer = () => {
  return (
    <RightTree>
      <IconM src={icon2} alt="AI icon" />
      <IconS src={icon3} alt="XD icon" right="4" />
      <IconS src={icon4} alt="ID icon" top="3" />
      <IconM src={icon1} alt="PSD icon" right="3" />
    </RightTree>
  );
};

export default RightIconContainer;
