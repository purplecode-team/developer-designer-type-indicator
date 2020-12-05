import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'hannaAir';
    src: url(../../../public/font/BMHANNAAir.ttf);
  };
`;

export default GlobalStyle;
