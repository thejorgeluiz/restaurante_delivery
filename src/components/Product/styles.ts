import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

type CardProps = {
  variant?: 'default' | 'categories'
}

export const Card = styled.div<CardProps>`
  background-color: ${(props) =>
    props.variant === 'categories' ? '#E66767' : '#e8b26bff'};

  border-radius: 3px;
  overflow: hidden;
  padding-bottom: 16px;

  button,
  a {
    margin-left: 8px;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 8px;

  ${TagContainer} {
    margin: 0;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin: 16px 8px 8px;
`

export const Descrição = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 0 8px 16px;
`

export const Nota = styled.div``
