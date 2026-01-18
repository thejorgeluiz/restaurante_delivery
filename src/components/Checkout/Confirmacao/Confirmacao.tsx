import { CartContainer } from '../../Cart/styles'
import { Container, Title, Text, OrderNumber, Button } from './styles'

type Props = {
  orderId: string
  onFinish: () => void
}

const Confirmacao = ({ orderId, onFinish }: Props) => {
  return (
    <CartContainer>
      <Title>Pedido realizado</Title>

      <OrderNumber>Pedido nº {orderId}</OrderNumber>

      <Text>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </Text>
      <Text>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </Text>
      <Text>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </Text>
      <Text>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </Text>

      <Button onClick={onFinish}>Concluir</Button>
    </CartContainer>
  )
}

export default Confirmacao
