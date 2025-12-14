import { HeaderBar, CenterContent, LinkCart } from './styles'
import logo from '../../assets/imagens/logo.png'
import carrinho from '../../assets/imagens/carrinho.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar>
    <CenterContent>
      <Link to="/">
        <img src={logo} alt="EFood" />
      </Link>

      <h3>Viva experiências gastronômicas no conforto da sua casa</h3>
    </CenterContent>
    <LinkCart href="#">
      0 - produtos
      <img src={carrinho} alt="carrinho" />
    </LinkCart>
  </HeaderBar>
)
export default Header
