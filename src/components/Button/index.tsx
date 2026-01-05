import { Link } from 'react-router-dom'
import { ButtonContainer } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'default' | 'categories' | 'card'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'default'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
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
