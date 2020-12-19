import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  &::-webkit-scrollbar {
  width: 1em;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
     background-color: darkgrey;
  border-radius: 5px;
  }
`;

export default GlobalStyle;
