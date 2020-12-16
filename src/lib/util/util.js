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

export const kakaoButtonTemplateId = {
  bear_designer: 42165,
  bear_developer: 42582,
  cat_developer: 42584,
  cat_designer: 42585,
  fox_developer: 42587,
  fox_designer: 42588,
  monkey_developer: 42589,
  monkey_designer: 42590,
  pelican_developer: 42591,
  pelican_designer: 42592,
  quokka_designer: 42593,
  quokka_developer: 42594,
  sloth_designer: 42595,
  sloth_developer: 42597,
  squirrel_developer: 42598,
  squirrel_designer: 42599,
};
