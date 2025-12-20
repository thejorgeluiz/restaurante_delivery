import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  background-color: #ffebd9;
  padding: 32px 0;
  display: flex;
  justify-content: center;
`

export const CenterContent = styled.div`
  max-width: 1366px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  object-fit: contain;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`

export const FooterText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #e66767;
  max-width: 480px;
`
