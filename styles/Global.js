import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  /* p */
  @font-face {
    font-family: Consolas;
    src: url("/fonts/ConsolasFont/CONSOLA.ttf") format("truetype");
    font-display: block; /* Fix flickering */
  }
  /* h */
  @font-face {
    font-family: Montserrat;
    src: url("/fonts/Montserrat/Montserrat-Regular.ttf") format("truetype");
    font-display: block; /* Fix flickering */
  }
  @font-face {
    font-family: Montserrat-Bold;
    src: url("/fonts/Montserrat/Montserrat-Bold.ttf") format("truetype");
    font-display: block; /* Fix flickering */
  }
  @font-face {
    font-family: Montserrat-ExtraBold;
    src: url("/fonts/Montserrat/Montserrat-ExtraBold.ttf")
    format("truetype");
    font-display: block; /* Fix flickering */
  }

  :root {
    --red: #ed1a62;
    --grey: #bfbebf;
    --lightgrey: #e3e3e7;
    --white: #f7f7f7;
    --dark: #1e1e1e;
    --black: #0d1219;
    --blackRGB: 13, 18, 25;
    --scrollpos: 0;
  }

  html, body {
    padding: 0;
    margin: 0;
    background-color: var(--black);
    box-sizing: border-box;
  }

  html {
    overflow: auto;
    scroll-behavior: smooth;
    min-width: 100vw;
  }

  html * {
    box-sizing: border-box;
  }

  .body::-webkit-scrollbar {
    display: none;
  }

  p {
    color: var(--grey);
    font-family: Consolas;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 25;
    z-index: 5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
`
