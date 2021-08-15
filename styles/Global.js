import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  /* p */
  @font-face {
    font-family: Consolas;
    src: url("/fonts/Consolas-Font/CONSOLA.ttf") format("truetype");
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
    box-sizing: border-box;
    --red: #ed1a62;
    --grey: #bfbebf;
    --lightgrey: #e3e3e7;
    --white: #f7f7f7;
    --dark: #1e1e1e;
    --black: #0d1219;
    --scrollpos: 0;
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
    scroll-behavior: smooth;
  }


  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  main {
    
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
    z-index: 5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  section {
    border-top: 1px solid white;
    margin-top: 10vh; /* nav height */
  }
`
