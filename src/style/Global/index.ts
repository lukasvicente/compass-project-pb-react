import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Mark Pro', sans-serif;
  }
  /* @media(max-width: 1786px){
    html {
      font-size: 90.75%;
    }
  }
  @media(max-width: 1366px){
    html {
      font-size: 76.75%;
    }
  }
  @media(max-width: 1080px){
    html {
      font-size: 70.75%;
    }
  }
  @media(max-width: 720px){
    html {
      font-size: 65.5%;
    }
  } */
  @media(max-width: 1600px){
    html {
      font-size: 93%;
    }
  }
  @media(max-width: 1360px){
    html {
      font-size: 91%;
    }
  }
  @media(max-width: 768px){
    html {
      font-size: 88%;
    }
  }
  @media(max-width: 320px){
    html {
      font-size: 85%;
    }
  }
  @media(max-width: 280px){
    html {
      font-size: 80%;
    }
  }
`;