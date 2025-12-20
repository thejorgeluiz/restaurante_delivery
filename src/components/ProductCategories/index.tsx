import Button from '../Button'
import { Card, ImageWrapper, Content, Title, Description } from './styles'

type Props = {
  tipo: string
  description: string
  image: string
}

const ProductCategories = ({ tipo, description, image }: Props) => (
  <Card>
    <ImageWrapper>
      <img src={image} alt={tipo} />
    </ImageWrapper>
    <Content>
      <Title>{tipo}</Title>
      <Description>{description}</Description>
      <Button type="button" title="Adicionar ao carrinho" variant="categories">
        Adicionar ao carrinho
      </Button>
    </Content>
  </Card>
)

export default ProductCategories
