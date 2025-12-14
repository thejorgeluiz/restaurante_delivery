import styled from 'styled-components'

type Props = {
  variant?: 'default' | 'categories'
}

export const ButtonContainer = styled.button<Props>`
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  text-decoration: none;

  background-color: ${(props) =>
    props.variant === 'categories' ? '#FFEBD9' : '#e66767'};

  color: ${(props) => (props.variant === 'categories' ? '#E66767' : '#fff')};
`
