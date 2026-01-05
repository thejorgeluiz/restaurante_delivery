import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  background: #e66767;
  width: 1024px;
  height: 344px;
  display: flex;
  position: relative;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin: 32px;
`

export const Content = styled.div`
  color: #fff;
  padding: 32px 32px 32px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  button {
    width: 218px;
    height: 24px;
    background: #ffebd9;
    border: none;
    color: #e66767;
    font-weight: 700;
    cursor: pointer;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`
