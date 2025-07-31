import { Poppins, Source_Sans_3 } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

export const poppins = Poppins({ weight: '400', subsets: ['latin'] });
export const sourceSans = Source_Sans_3({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  font-family: ${sourceSans.style.fontFamily}, sans-serif;
  font-weight: 400;
  user-select: none;
  touch-action: pan-y;
}

#__next {
  height: 100%;
  width: 100%;
}

html, body {
  touch-action: pan-y;
}

html {
  font-size: 62.5%;
}

body {
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
  
  scroll-behavior: auto;
}

@media (min-width: 1500px) {
  html {
    font-size: 58.5%;
  }
}

@media (min-width: 2560px) {
  html {
    font-size: 77%;
  }
}

@media (min-width: 3000px) {
  html {
    font-size: 90%;
  }
}

@media (min-width: 3820px) {
  html {
    font-size: 130%;
  }
}
`;