import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { clearCart, closeCart } from '../../store/reducers/cart'

import Entrega from './Entrega/Entrega'
import Pagamento from './Pagamento/Pagamento'
import Confirmacao from './Confirmacao/Confirmacao'

type Step = 'entrega' | 'pagamento' | 'confirmacao'

const Checkout = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)

  const [step, setStep] = useState<Step>('entrega')
  const [orderId, setOrderId] = useState('')

  const [deliveryData, setDeliveryData] = useState({
    receiver: '',
    address: '',
    city: '',
    cep: '',
    number: '',
    complement: ''
  })

  const [paymentData, setPaymentData] = useState({
    name: '',
    cardNumber: '',
    cvv: '',
    expiresMonth: '',
    expiresYear: ''
  })

  // 🔥 POST PARA A API
  const handleCheckout = async () => {
    const body = {
      products: items.map((item) => ({
        id: item.id,
        price: item.price
      })),
      delivery: {
        receiver: deliveryData.receiver,
        address: {
          description: deliveryData.address,
          city: deliveryData.city,
          zipCode: deliveryData.cep,
          number: Number(deliveryData.number),
          complement: deliveryData.complement
        }
      },
      payment: {
        card: {
          name: paymentData.name,
          number: paymentData.cardNumber,
          code: Number(paymentData.cvv),
          expires: {
            month: Number(paymentData.expiresMonth),
            year: Number(paymentData.expiresYear)
          }
        }
      }
    }

    const response = await fetch(
      'https://api-ebac.vercel.app/api/efood/checkout',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    )

    const data = await response.json()

    setOrderId(data.orderId)
    setStep('confirmacao')
    dispatch(clearCart())
  }

  const handleFinish = () => {
    dispatch(closeCart())
  }

  return (
    <>
      {step === 'entrega' && (
        <Entrega
          data={deliveryData}
          setData={setDeliveryData}
          onContinue={() => setStep('pagamento')}
          onBack={handleFinish}
        />
      )}

      {step === 'pagamento' && (
        <Pagamento
          data={paymentData}
          setData={setPaymentData}
          onBack={() => setStep('entrega')}
          onFinish={handleCheckout}
        />
      )}

      {step === 'confirmacao' && (
        <Confirmacao orderId={orderId} onFinish={handleFinish} />
      )}
    </>
  )
}

export default Checkout
