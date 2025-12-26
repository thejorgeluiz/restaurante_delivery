import { Link } from 'react-router-dom'

import styled from 'styled-components'
import Fundo from '../../assets/imagens/fundo1.png'

export const HeaderBar = styled.header`
  width: 100%;
  height: 186px;
  background: rgba(230, 103, 103, 0.05);
  background-image: url(${Fundo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const CenterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LeftLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: #e66767;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Logo = styled.img`
  height: 57.5px;
`

export const RightText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: #e66767;
`
