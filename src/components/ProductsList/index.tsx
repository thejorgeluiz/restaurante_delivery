import Product from '../Product'
import ProductCategories from '../ProductCategories'
import { Container, List } from './styles'
import Restaurant, { MenuItem } from '../../models/Restaurant'

type Props =
  | {
      variant?: 'home'
      games: Restaurant[]
    }
  | {
      variant: 'categories'
      games: MenuItem[]
    }

const ProductsList = ({ games, variant }: Props) => (
  <Container>
    <List variant={variant}>
      {variant === 'categories'
        ? games.map((item) => (
            <ProductCategories
              key={item.id}
              tipo={item.nome}
              description={item.descricao}
              image={item.foto}
              price={item.preco}
              serving={item.porcao}
            />
          ))
        : games.map((item) => (
            <Product
              key={item.id}
              destaque={item.destacado ? 'Destaque da semana' : undefined}
              categoria={item.tipo}
              tipo={item.titulo}
              nota={item.avaliacao.toString()}
              description={item.descricao}
              image={item.capa}
              buttonLink={`/product/${item.id}`}
            />
          ))}
    </List>
  </Container>
)

export default ProductsList
