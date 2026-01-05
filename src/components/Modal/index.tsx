import { CloseButton, Content, ModalContainer, Overlay, Image } from './styles'
import image from '../../assets/imagens/pizza.png'
type Props = {
  isOpen: boolean
  onClose: () => void
  image: string
  title: string
  description: string
}

const Modal = ({ isOpen, onClose, image, title, description }: Props) => {
  if (!isOpen) return null

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>

        <Image src={image} alt={title} />

        <Content>
          <h3>{title}</h3>
          <p>{description}</p>

          <button>Adicionar ao carrinho</button>
        </Content>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal
