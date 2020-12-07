import quokkaImg from '../../../public/img/result_quokka.png';
import bearImg from '../../../public/img/result_bear.png';
import catImg from '../../../public/img/result_cat.png';
import foxImg from '../../../public/img/result_fox.png';
import monkeyImg from '../../../public/img/result_monkey.png';
import slothImg from '../../../public/img/result_sloth.png';
import squirrelImg from '../../../public/img/result_squirrel.png';
import pelicanImg from '../../../public/img/result_pelican.png';

export default function getCharacterImg(name) {
  if (name === 'fox') {
    return foxImg;
  }
  if (name === 'quokka') {
    return quokkaImg;
  }
  if (name === 'pelican') {
    return pelicanImg;
  }
  if (name === 'monkey') {
    return monkeyImg;
  }
  if (name === 'squirrel') {
    return squirrelImg;
  }
  if (name === 'sloth') {
    return slothImg;
  }
  if (name === 'bear') {
    return bearImg;
  }
  if (name === 'cat') {
    return catImg;
  }
  return '';
}
