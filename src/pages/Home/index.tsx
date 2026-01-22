import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Restaurant } from '../../../src/models/Restaurant'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function carregarDados() {
      try {
        const response = await fetch(
          'https://api-ebac.vercel.app/api/efood/restaurantes'
        )

        const data = await response.json()

        console.log('DADOS API 👉', data)

        setRestaurants(data)
      } catch (error) {
        console.error('ERRO NO FETCH ❌', error)
      } finally {
        setLoading(false)
      }
    }

    carregarDados()
  }, [])

  if (loading) {
    return <p style={{ padding: 32 }}>Carregando...</p>
  }

  return <ProductsList games={restaurants} />
}

export default Home
