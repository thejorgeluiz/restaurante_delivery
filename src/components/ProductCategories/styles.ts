import styled from 'styled-components'

export const Card = styled.div`
  width: 320px;
  background: #e66767;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const ImageWrapper = styled.div`
  width: 304px;
  height: 167px;
  margin: 8px auto 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Content = styled.div`
  padding: 8px 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  color: #ffebd9;
`

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffebd9;
`
