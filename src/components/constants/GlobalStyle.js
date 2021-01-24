import { createGlobalStyle } from "styled-components";
import { MEDIA_QUERY_S } from "./Breakpoints";

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
    font-family: 'Inconsolata', monospace;
    margin: 0;
    box-sizing: border-box;
    text-align: center;
    font-size: 16px;
    overflow-wrap: break-word;
    ${MEDIA_QUERY_S} {
      font-size: 20px;
    }
  }
  li {
    list-style-type: none;
  }
  main {
    position: relative;
    margin: auto;
    top: 76px;
    min-height: 500px;
    max-width: 1080px;
    min-height: calc(100vh - 76px - 38px);
    width: 100%;
    padding: 25px;
  }
  a {
    text-decoration: none;
    color: #222;
  }
  input {
    text-align: left;
    margin: 15px;
  }
  h1 {
    font-size: 28px;
    ${MEDIA_QUERY_S} {
      font-size: 32px;
    }
  }
  h2 {
    margin: 10px 0 25px;
    padding: 5px;
    text-align: left;
    font-size: 24px;
    ${MEDIA_QUERY_S} {
      font-size: 28px;
    }
  }
`;

export default GlobalStyle;
