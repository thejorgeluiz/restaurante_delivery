import Game from '../../models/Games'
import Product from '../Product'
import ProductCategories from '../ProductCategories' // import novo
import { Container, List } from './styles'

type Props = {
  games: Game[]
  title?: string
  variant?: 'home' | 'categories'
}

const ProductsList = ({ games, variant = 'home' }: Props) => (
  <Container>
    <List variant={variant}>
      {games.map((game, index) =>
        variant === 'categories' ? (
          <ProductCategories
            key={game.tipo}
            tipo={game.tipo}
            description={game.description}
            image={game.image}
          />
        ) : (
          <Product
            key={game.tipo}
            destaque={index === 0 ? game.destaque : undefined}
            categoria={game.categoria}
            tipo={game.tipo}
            nota={game.nota}
            description={game.description}
            image={game.image}
            buttonLink={undefined}
          />
        )
      )}
    </List>
  </Container>
)

export default ProductsList
