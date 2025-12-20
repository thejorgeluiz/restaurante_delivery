import { createGlobalStyle } from 'styled-components'

export const cores = {
  preto: '#111',
  branco: '#fff',
  laranja: '#FFA500',
  laranjaClaro: '#f0cb85ff'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #FFF8F2;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
