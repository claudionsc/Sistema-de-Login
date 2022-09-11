import { createGlobalStyle }  from "styled-components";

 const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #f0f2f5;
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(1deg, #0234E3, #2D47FA, #250075);
  }
`;

export default GlobalStyle;