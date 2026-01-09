import { useDispatch } from 'react-redux'
import { addItem } from '../../store/reducers/cart'
import { CloseButton, Content, ModalContainer, Overlay, Image } from './styles'

type Props = {
  isOpen: boolean
  onClose: () => void
  image: string
  title: string
  description: string
  price: number
  serving: string
}

const Modal = ({
  isOpen,
  onClose,
  image,
  title,
  description,
  price,
  serving
}: Props) => {
  const dispatch = useDispatch()

  if (!isOpen) return null

  const handleAdd = () => {
    dispatch(
      addItem({
        id: Date.now(),
        title,
        image,
        price
      })
    )
    onClose()
  }

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>

        <Image src={image} alt={title} />

        <Content>
          <h3>{title}</h3>
          <p>{description}</p>
          <span>Serve: {serving}</span>

          <button onClick={handleAdd}>
            Adicionar ao carrinho – R$ {price.toFixed(2)}
          </button>
        </Content>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal
