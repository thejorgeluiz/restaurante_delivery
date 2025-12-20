import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'

import Sushi from '../../assets/imagens/sushi.png'
import Pizza from '../../assets/imagens/image 1.png'

const promocoes: Game[] = [
  new Game(
    'Destaque da semana',
    'Japonesa',
    'Hioki Sushi',
    '4.9',
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    'Saiba mais',
    Sushi
  ),
  new Game(
    '',
    'Italiana',
    'La Dolce Vita Trattoria',
    '4.8',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'Saiba mais',
    Pizza
  ),
  new Game(
    '',
    'Italiana',
    'La Dolce Vita Trattoria',
    '4.8',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'Saiba mais',
    Pizza
  ),
  new Game(
    '',
    'Italiana',
    'La Dolce Vita Trattoria',
    '4.8',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'Saiba mais',
    Pizza
  ),
  new Game(
    '',
    'Italiana',
    'La Dolce Vita Trattoria',
    '4.8',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'Saiba mais',
    Pizza
  ),
  new Game(
    '',
    'Italiana',
    'La Dolce Vita Trattoria',
    '4.8',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'Saiba mais',
    Pizza
  )
]

const Home = () => <ProductsList games={promocoes} />

export default Home
