import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,600,800&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
  }
  body {
    font: 14px 'Nunito Sans', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
`;
