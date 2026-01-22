import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { Restaurant } from '../../models/Restaurant'

const Product = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data: Restaurant) => setRestaurant(data))
  }, [id])

  if (!restaurant) return null

  return (
    <>
      <Banner
        imagem={restaurant.capa}
        tipoComida={restaurant.tipo}
        nomeRestaurante={restaurant.titulo}
      />

      <ProductsList games={restaurant.cardapio} variant="categories" />
    </>
  )
}

export default Product
