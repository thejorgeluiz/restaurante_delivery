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
    color: #3a3504ff;

}
  body {
  background-color: #FFF8F2;

  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
