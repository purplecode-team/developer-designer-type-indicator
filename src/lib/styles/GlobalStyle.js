import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'jua';
    src: url(../../../public/font/BMJUA.ttf);
  };
`;

export default GlobalStyle;
