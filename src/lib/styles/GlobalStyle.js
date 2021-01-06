import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  &::-webkit-scrollbar {
    display:none;
  }
`;

export default GlobalStyle;