import styled from 'styled-components'

type Props = {
  variant?: 'default' | 'categories' | 'card'
}

export const ButtonContainer = styled.button<Props>`
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;

  padding: ${(props) => (props.variant === 'card' ? '4px 8px' : '8px 16px')};

  background-color: ${(props) =>
    props.variant === 'categories' ? '#FFEBD9' : '#e66767'};

  color: ${(props) => (props.variant === 'categories' ? '#E66767' : '#FFEBD9')};
`
