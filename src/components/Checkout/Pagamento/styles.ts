import styled from 'styled-components'
import { cores } from '../../../styles'

export const Container = styled.div`
  width: 345px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const FormContainer = styled.div`
  width: 345px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #ffebd9;
  margin-bottom: 24px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #ffebd9;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  span {
    font-weight: bold;
  }
`

export const Field = styled.div<{ small?: boolean }>`
  display: flex;
  flex-direction: column;

  label {
    font-family: 'Roboto', sans-serif;
    color: #ffebd9;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  input {
    height: 32px;
    padding: 0 8px;
    border: none;
    background: #ffebd9;
    width: 100%;
  }

  &.full {
    width: 344px;
  }

  &.cardNumber {
    width: 228px;
  }

  &.cvv {
    width: 87px;
  }

  &.half {
    width: 155px;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 50px;
`

export const Button = styled.button`
  width: 344px;
  height: 24px;
  background-color: #ffebd9;
  border: none;
  cursor: pointer;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #e66767;
`

export const ButtonSecondary = styled(Button)`
  width: 344px;
  height: 24px;
  background-color: #ffebd9;
  border: none;
  cursor: pointer;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #e66767;
`
