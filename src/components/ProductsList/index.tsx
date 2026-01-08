import Product from '../Product'
import ProductCategories from '../ProductCategories'
import { Container, List } from './styles'

type Props = {
  games: any[]
  variant?: 'home' | 'categories'
}

const ProductsList = ({ games, variant = 'home' }: Props) => (
  <Container>
    <List variant={variant}>
      {games.map((item) =>
        variant === 'categories' ? (
          <ProductCategories
            key={item.id}
            tipo={item.nome}
            description={item.descricao}
            image={item.foto}
            price={item.preco}
            serving={item.porcao}
          />
        ) : (
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
        )
      )}
    </List>
  </Container>
)

export default ProductsList
