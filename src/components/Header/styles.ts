import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  background-color: ${cores.laranjaClaro};
  padding: 24px;
  margin-bottom: 0px;
  position: relative;
`

export const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  h3 {
    margin-top: 16px;
    color: #e66767;
  }
`

export const LogoLink = styled.a`
  display: block;

  img {
    display: block;
    margin-bottom: 16px;
  }
`

export const LinkCart = styled.a`
  position: absolute;
  top: 24px;
  right: 24px;

  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-weight: bold;

  img {
    margin-left: 16px;
  }
`
