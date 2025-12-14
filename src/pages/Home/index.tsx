import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'
import Sushi from '../../assets/imagens/sushi.png'
import Pizza from '../../assets/imagens/pizza.png'

const promocoes: Game[] = [
  {
    destaque: 'Destaque da semana',
    categoria: 'Japonesa',
    tipo: 'Hioki Sushi ',
    nota: 'dez',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos',
    infos: 'saiba mais',
    image: Sushi
  },
  {
    destaque: '',
    categoria: 'Italiana',
    tipo: 'La Dolce Vita Trattoria',
    nota: 'dez',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: 'saiba mais',
    image: Pizza
  },
  {
    destaque: '',
    categoria: 'Italiana',
    tipo: 'La Dolce Vita Trattoria',
    nota: 'dez',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: 'saiba mais',
    image: Pizza
  },
  {
    destaque: '',
    categoria: 'Italiana',
    tipo: 'La Dolce Vita Trattoria',
    nota: 'dez',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: 'saiba mais',
    image: Pizza
  },
  {
    destaque: '',
    categoria: 'Italiana',
    tipo: 'La Dolce Vita Trattoria',
    nota: 'dez',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: 'saiba mais',
    image: Pizza
  },
  {
    destaque: '',
    categoria: 'Italiana',
    tipo: 'La Dolce Vita Trattoria',
    nota: 'dez',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: 'saiba mais',
    image: Pizza
  }
]

const Home = () => (
  <>
    <ProductsList games={promocoes} title={''} />
  </>
)

export default Home
