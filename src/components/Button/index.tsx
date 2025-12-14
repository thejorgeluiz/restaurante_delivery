import { Link } from 'react-router-dom'
import { ButtonContainer } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onclick?: () => void
  children: string
  variant?: 'default' | 'categories'
}

const Button = ({
  type,
  title,
  to,
  onclick,
  children,
  variant = 'default'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onclick}
        variant={variant}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonContainer
      as={Link}
      to={to as string}
      title={title}
      variant={variant}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
