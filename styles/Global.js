import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  /* p */
  @font-face {
    font-family: Consolas;
    src: url("/fonts/Consolas-Font/CONSOLA.ttf") format("truetype");
  }

  /* h */
  @font-face {
    font-family: Montserrat;
    src: url("/fonts/Montserrat/Montserrat-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: Montserrat-Bold;
    src: url("/fonts/Montserrat/Montserrat-Bold.ttf") format("truetype");
  }
  @font-face {
    font-family: Montserrat-ExtraBold;
    src: url("/fonts/Montserrat/Montserrat-ExtraBold.ttf")
      format("truetype");
  }

  :root {
    box-sizing: border-box;
    --red: #ed1a62;
    --grey: #bfbebf;
    --lightgrey: #e3e3e7;
    --white: #f7f7f7;
    --dark: #1e1e1e;
    --black: #0d1219;
  }

  html, body {
    padding: 0;
    margin: 0;
    background-color: var(--black);
  }

  html {
    height: 100%;
    overflow: auto;
    /* this will hide the scrollbar in mozilla based browsers */
    overflow: -moz-scrollbars-none;
    overflow-x: hidden;
    background-color: var(--black);
  }


  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  .body::-webkit-scrollbar {
    display: none;
  }

  p {
    color: var(--grey);
    font-family: Consolas;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 25;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  section {
    height: 100vh;
  }
`
