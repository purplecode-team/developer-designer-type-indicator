import quokkaImg from '../../../public/img/result_quokka.png';
import bearImg from '../../../public/img/result_bear.png';
import catImg from '../../../public/img/result_cat.png';
import foxImg from '../../../public/img/result_fox.png';
import monkeyImg from '../../../public/img/result_monkey.png';
import slothImg from '../../../public/img/result_sloth.png';
import squirrelImg from '../../../public/img/result_squirrel.png';
import pelicanImg from '../../../public/img/result_pelican.png';
import { BASE_URL } from './config';

export const names = {
  EFJ: 'fox',
  EFP: 'quokka',
  ETJ: 'pelican',
  ETP: 'monkey',
  IFJ: 'squirrel',
  IFP: 'sloth',
  ITJ: 'bear',
  ITP: 'cat',
};

export const results = {
  fox: 'EFJ',
  quokka: 'EFP',
  pelican: 'ETJ',
  monkey: 'ETP',
  squirrel: 'IFJ',
  sloth: 'IFP',
  bear: 'ITJ',
  cat: 'ITP',
};

export const characters = {
  fox: foxImg,
  quokka: quokkaImg,
  pelican: pelicanImg,
  monkey: monkeyImg,
  squirrel: squirrelImg,
  sloth: slothImg,
  bear: bearImg,
  cat: catImg,
};

export const s3CharacterImg = {
  fox: `${BASE_URL}/73ca793e5ec964d81e10fb3475f8f0e2.png`,
  quokka: `${BASE_URL}/530c8c8f896af5b3b37d69511fce0241.png`,
  pelican: `${BASE_URL}/079a90ebd0a92c03aab7940bca797234.png`,
  monkey: `${BASE_URL}/f6878aeb26bbcd4bde7f4fd6b9273406.png`,
  squirrel: `${BASE_URL}/581f886321c895e897f784b8a392d41b.png`,
  sloth: `${BASE_URL}/76c08f8696918dab1ba8038f045f28cf.png`,
  bear: `${BASE_URL}/f43cda460a642b3aeda296cd5e1cc484.png`,
  cat: `${BASE_URL}/7aa8cd334b5cea42f96784b90d76d36f.png`,
};
