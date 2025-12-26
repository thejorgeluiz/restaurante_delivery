import { HeaderBar, CenterContent, Logo, LeftLink, RightText } from './styles'
import logo from '../../assets/imagens/logo.png'

const HeaderCategories = () => (
  <HeaderBar>
    <CenterContent className="container">
      <LeftLink to="/">Restaurantes</LeftLink>
      <Logo src={logo} alt="EFood" />
      <RightText>0 produto(s) no carrinho</RightText>
    </CenterContent>
  </HeaderBar>
)

export default HeaderCategories
