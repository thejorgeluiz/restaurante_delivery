import styled from 'styled-components'

export const CheckoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const FormEntrega = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 700;
    color: #ffebd9;
    margin-bottom: 16px;
  }

  .campo {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;

    label {
      font-size: 14px;
      font-weight: 700;
      color: #ffebd9;
      margin-bottom: 4px;
    }

    input {
      width: 100%;
      height: 32px;
      background-color: #ffebd9;
      border: none;
      padding: 0 8px;
      font-size: 14px;
    }
  }

  .linha {
    display: flex;
    gap: 8px;
  }

  .pequeno {
    flex: 1;
  }
`

export const Botoes = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  button {
    width: 100%;
    height: 24px;
    background-color: #ffebd9;
    border: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
    color: #e66767;
  }
`
