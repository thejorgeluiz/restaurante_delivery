import { HeaderBar, CenterContent, Logo, LeftLink, RightText } from './styles'
import logo from '../../assets/imagens/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { openCart } from '../../store/reducers/cart'

const HeaderCategories = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)

  return (
    <HeaderBar>
      <CenterContent className="container">
        <LeftLink to="/">Restaurantes</LeftLink>
        <Logo src={logo} alt="EFood" />
        <RightText onClick={() => dispatch(openCart())}>
          {items.length} produto(s) no carrinho
        </RightText>
      </CenterContent>
    </HeaderBar>
  )
}

export default HeaderCategories
