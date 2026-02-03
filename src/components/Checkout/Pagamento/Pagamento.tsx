import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

import {
  Title,
  FormContainer,
  ButtonsContainer,
  Field,
  Row,
  Button,
  ButtonSecondary
} from './styles'
import { CartContainer } from '../../Cart/styles'

type PaymentData = {
  name: string
  cardNumber: string
  cvv: string
  expiresMonth: string
  expiresYear: string
}

type Props = {
  data: PaymentData
  setData: React.Dispatch<React.SetStateAction<PaymentData>>
  onBack: () => void
  onFinish: () => void | Promise<void>
}

const validarPagamento = (data: PaymentData) => {
  if (!data.name.trim()) return 'Informe o nome no cartão'
  if (!/^\d{16}$/.test(data.cardNumber.replace(/\s/g, '')))
    return 'Número do cartão inválido'
  if (!/^\d{3}$/.test(data.cvv)) return 'CVV inválido'
  if (!/^\d{2}$/.test(data.expiresMonth)) return 'Mês inválido'
  if (!/^\d{4}$/.test(data.expiresYear)) return 'Ano inválido'

  return null
}

const Pagamento = ({ data, setData, onBack, onFinish }: Props) => {
  const items = useSelector((state: RootState) => state.cart.items)

  const total = items.reduce((acc, item) => acc + item.price, 0)

  const [form, setForm] = useState<PaymentData>(data)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const updated = { ...form, [name]: value }

    setForm(updated)
    setData(updated)
  }

  const handleFinish = () => {
    const erro = validarPagamento(form)

    if (erro) {
      alert(erro)
      return
    }

    onFinish()
  }

  return (
    <CartContainer>
      <FormContainer>
        <Title>
          Pagamento – Valor a pagar{' '}
          <span>
            {total.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </span>
        </Title>

        <Field className="full">
          <label>Nome no cartão</label>
          <input name="name" value={form.name} onChange={handleChange} />
        </Field>

        <Row>
          <Field className="cardNumber">
            <label>Número do cartão</label>
            <input
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleChange}
            />
          </Field>

          <Field className="cvv">
            <label>CVV</label>
            <input name="cvv" value={form.cvv} onChange={handleChange} />
          </Field>
        </Row>

        <Row>
          <Field className="half">
            <label>Mês de vencimento</label>
            <input
              name="expiresMonth"
              value={form.expiresMonth}
              onChange={handleChange}
            />
          </Field>

          <Field className="half">
            <label>Ano de vencimento</label>
            <input
              name="expiresYear"
              value={form.expiresYear}
              onChange={handleChange}
            />
          </Field>
        </Row>
      </FormContainer>

      <ButtonsContainer>
        <Button onClick={handleFinish}>Finalizar pagamento</Button>

        <ButtonSecondary onClick={onBack}>
          Voltar para a edição de endereço
        </ButtonSecondary>
      </ButtonsContainer>
    </CartContainer>
  )
}

export default Pagamento
