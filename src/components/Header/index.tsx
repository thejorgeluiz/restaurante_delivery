import { HeaderBar, CenterContent } from './styles'
import logo from '../../assets/imagens/logo.png'

const Header = () => (
  <HeaderBar>
    <CenterContent>
      <img src={logo} alt="EFood" />

      <h3>Viva experiências gastronômicas no conforto da sua casa</h3>
    </CenterContent>
  </HeaderBar>
)
export default Header
