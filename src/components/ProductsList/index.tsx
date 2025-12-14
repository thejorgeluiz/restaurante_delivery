import Game from '../../models/Games'
import Product from '../Product'

import { Container, List } from './styles'

type Props = {
  title: string
  games: Game[]
  variant?: 'default' | 'categories'
}

const ProductList = ({ title, games, variant = 'default' }: Props) => (
  <Container>
    <h2>{title}</h2>
    <div className="container">
      <List>
        {games.map((game, index) => (
          <Product
            key={index}
            destaque={index === 0 ? game.destaque : ''}
            categoria={game.categoria}
            tipo={game.tipo}
            nota={game.nota}
            description={game.description}
            infos={game.infos}
            image={game.image}
            variant={variant}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
