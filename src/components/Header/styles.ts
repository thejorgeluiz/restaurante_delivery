import styled from 'styled-components'
import Fundo from '../../assets/imagens/fundo.png'

export const HeaderBar = styled.header`
border: 2px solid red;

width: 100%;
  height: 280px;
  position: relative;

  background-image: url(${Fundo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 88px;
    height: 40px;
    margin-top: 28px;
  }

  h3 {
    width: 380px;
    margin-top: 96px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 24px;
    line-height: 30px;
    color: #e66767;
  }
`

