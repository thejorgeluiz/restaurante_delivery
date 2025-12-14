import Tag from '../Tag'
import { Card, Descrição, ImageWrapper, Nota, Tags, Titulo } from './styles'
import Pizza from '../../assets/imagens/pizza.png'
import Button from '../Button'

type Props = {
  destaque: string
  categoria: string
  tipo: string
  description: string
  infos: string
  image: string
  nota: string
  variant?: 'default' | 'categories'
}

const Product = ({
  destaque,
  categoria,
  tipo,
  nota,
  description,
  infos,
  image,
  variant = 'default'
}: Props) => (
  <Card variant={variant}>
    <ImageWrapper>
      <img src={image} alt={tipo} />

      <Tags>
        {destaque && <Tag>{destaque}</Tag>}
        <Tag>{categoria}</Tag>
      </Tags>
    </ImageWrapper>

    <Titulo>{tipo}</Titulo>
    <Descrição>{description}</Descrição>
    <Button
      type={variant === 'categories' ? 'button' : 'link'} // link na Home, button em Categories
      title={infos}
      to={variant === 'default' ? '/categories' : undefined} // só Home
      variant={variant}
    >
      {infos}
    </Button>
  </Card>
)

export default Product
