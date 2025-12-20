import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  max-width: 472px;
  min-height: 398px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 217px; /* ← imagem fixa */
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* MUITO importante */
    display: block;
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 8px;
`

export const Content = styled.div`
  background-color: #fff;
  border: 1px solid #e66767;
  border-top: none;
  padding: 16px;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* ← ESSENCIAL */
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #e66767;
`

export const Nota = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 18px;
  font-weight: bold;
  color: #e66767;

  img {
    width: 21px;
    height: 21px;
    display: block;
    margin-top: -5px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #e66767;
  margin: 16px 0;
`
