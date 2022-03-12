import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    --color-1: #10101C;
    --color-1-hover: #3F3F49;
    --color-2: #2a313b;
    --color-2-hover: #2F3742;
    --color-3: #505254;
    --color-4: #A3A177;
    --color-5: #FCF160;
    --color-6: #062A4B;
    --color-6-hover: #37546e;
    --color-hover: #d1ccff;
    --color-text: #ffffff;
    --color-text-hover: #fffff0;
    --border-radius: .5em;
    --font-size-large: calc(20px + 0.5rem);
    --font-size-medium: calc(11px + 0.5rem);
    --line-height: calc(20px + 0.5rem);
    --padding-small: .5em;
    --padding-extra-small: .2em;
    --min-section-height: 100vh;
    --transition-time: .3s;

  }
  
`;

export default GlobalStyles;
