import { useState } from 'react'
import Button from '../Button'
import Modal from '../Modal'
import { Card, ImageWrapper, Content, Title, Description } from './styles'

type Props = {
  tipo: string
  description: string
  image: string
  price: number
  serving: string
}

const ProductCategories = ({
  tipo,
  description,
  image,
  price,
  serving
}: Props) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Card>
        <ImageWrapper>
          <img src={image} alt={tipo} />
        </ImageWrapper>

        <Content>
          <Title>{tipo}</Title>
          <Description>{description}</Description>

          <Button
            type="button"
            title="Adicionar ao carrinho"
            variant="categories"
            onClick={() => setModalOpen(true)}
          >
            Adicionar ao carrinho
          </Button>
        </Content>
      </Card>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        image={image}
        title={tipo}
        description={description}
        price={price}
        serving={serving}
      />
    </>
  )
}

export default ProductCategories
