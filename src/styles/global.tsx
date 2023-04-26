import { createGlobalStyle } from "styled-components";

export const GlobalStylesOverride = createGlobalStyle`
  window {
    scroll-behavior: smooth;
    /* scroll-margin-top: 100px; */
  }

  main {
    min-height: 800px;
  }

  a {
    text-decoration: none;
  }
`