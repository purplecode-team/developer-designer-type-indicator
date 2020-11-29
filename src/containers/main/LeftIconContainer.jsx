import React from 'react';
import LeftTree from '../../components/common/LeftTree';
import IconM from '../../components/main/IconM';
import IconS from '../../components/main/IconS';

// img src
import icon1 from '../../../public/img/f_icon1.png';
import icon2 from '../../../public/img/f_icon2.png';
import icon3 from '../../../public/img/f_icon3.png';
import icon4 from '../../../public/img/f_icon4.png';

const LeftIconContainer = () => {
  return (
    <LeftTree>
      <IconS src={icon4} alt="Java icon" left="4" />
      <IconM src={icon1} alt="JS icon" left="1" />
      <IconM src={icon2} alt="Python icon" top="-1" left="4" />
      <IconS src={icon3} alt="C icon" top="3" />
    </LeftTree>
  );
};

export default LeftIconContainer;
