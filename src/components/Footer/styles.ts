import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.laranjaClaro};
  padding-top: 32px;
  padding-bottom: 32px;
`
export const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`
