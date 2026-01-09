import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { removeItem, closeCart } from '../../store/reducers/cart'

import {
  Overlay,
  CartContainer,
  CartList,
  CartItem,
  Total,
  CheckoutButton
} from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector((state: RootState) => state.cart)

  const total = items.reduce((acc, item) => acc + item.price, 0)

  if (!isOpen) return null

  return (
    <>
      <Overlay onClick={() => dispatch(closeCart())} />

      <CartContainer>
        <CartList>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.image} alt={item.title} />

              <div>
                <h3>{item.title}</h3>
                <span>R$ {item.price.toFixed(2)}</span>
              </div>

              <button onClick={() => dispatch(removeItem(item.id))}>🗑️</button>
            </CartItem>
          ))}
        </CartList>

        <Total>
          <span>Valor total</span>
          <span>R$ {total.toFixed(2)}</span>
        </Total>

        <CheckoutButton>Continuar com a entrega</CheckoutButton>
      </CartContainer>
    </>
  )
}

export default Cart
