import { FormEntrega, Botoes } from './styles'

import { CartContainer } from '../../Cart/styles'
type DeliveryData = {
  receiver: string
  address: string
  city: string
  cep: string
  number: string
  complement: string
}

type Props = {
  data: DeliveryData
  setData: React.Dispatch<React.SetStateAction<DeliveryData>>
  onBack: () => void
  onContinue: () => void
}

const Entrega = ({ data, setData, onBack, onContinue }: Props) => {
  return (
    <CartContainer>
      <FormEntrega>
        <h2>Entrega</h2>

        <div className="campo">
          <label>Quem irá receber</label>
          <input
            value={data.receiver}
            onChange={(e) => setData({ ...data, receiver: e.target.value })}
          />
        </div>

        <div className="campo">
          <label>Endereço</label>
          <input
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </div>

        <div className="campo">
          <label>Cidade</label>
          <input
            value={data.city}
            onChange={(e) => setData({ ...data, city: e.target.value })}
          />
        </div>

        <div className="linha">
          <div className="campo pequeno">
            <label>CEP</label>
            <input
              value={data.cep}
              onChange={(e) => setData({ ...data, cep: e.target.value })}
            />
          </div>

          <div className="campo pequeno">
            <label>Número</label>
            <input
              value={data.number}
              onChange={(e) => setData({ ...data, number: e.target.value })}
            />
          </div>
        </div>

        <div className="campo">
          <label>Complemento (opcional)</label>
          <input
            value={data.complement}
            onChange={(e) => setData({ ...data, complement: e.target.value })}
          />
        </div>
      </FormEntrega>

      <Botoes>
        <button onClick={onContinue}>Continuar com pagamento</button>

        <button onClick={onBack}>Voltar para o carrinho</button>
      </Botoes>
    </CartContainer>
  )
}

export default Entrega
