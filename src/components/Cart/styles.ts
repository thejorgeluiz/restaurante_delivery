import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
`

export const CartContainer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background-color: #e66767;
  padding: 32px 8px;
  z-index: 1000;

  display: flex;
  flex-direction: column;
`

export const CartList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
`

export const CartItem = styled.li`
  background-color: #ffebd9;
  padding: 8px;
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
    color: #e66767;
  }

  span {
    font-size: 14px;
    color: #e66767;
  }

  button {
    position: absolute;
    right: 8px;
    bottom: 8px;
    background: none;
    border: none;
    cursor: pointer;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  color: #ffebd9;
  margin-bottom: 16px;
`

export const CheckoutButton = styled.button`
  height: 24px;
  background-color: #ffebd9;
  border: none;
  color: #e66767;
  font-weight: 700;
  cursor: pointer;
`
