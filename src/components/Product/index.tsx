import Tag from '../Tag'
import Button from '../Button'
import {
  Card,
  ImageWrapper,
  Tags,
  Content,
  Header,
  Title,
  Nota,
  Description
} from './styles'
import Star from '../../assets/imagens/estrela.png'

type Props = {
  destaque?: string
  categoria: string
  tipo: string
  description: string
  nota: string
  image: string
  buttonLink?: string
}

const Product = ({
  destaque,
  categoria,
  tipo,
  description,
  nota,
  image,
  buttonLink = '/categories'
}: Props) => (
  <Card>
    <ImageWrapper>
      <img src={image} alt={tipo} />
      <Tags>
        {destaque && <Tag>{destaque}</Tag>}
        <Tag>{categoria}</Tag>
      </Tags>
    </ImageWrapper>

    <Content>
      <Header>
        <Title>{tipo}</Title>
        <Nota>
          {nota}
          <img src={Star} alt="estrela" />
        </Nota>
      </Header>

      <Description>{description}</Description>

      <Button type="link" to={buttonLink} title="Saiba mais" variant="card">
        Saiba mais
      </Button>
    </Content>
  </Card>
)

export default Product
