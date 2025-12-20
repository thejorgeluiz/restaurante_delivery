import Banner from '../../components/Banner'
import BannerImg from '../../assets/imagens/imagem_de_fundo.png'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'
import Pizza from '../../assets/imagens/pizza.png'

const promocoes: Game[] = [
  {
    destaque: '',
    categoria: '',
    tipo: 'Pizza Marguerita',
    nota: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: 'Adicionar ao carrinho',
    image: Pizza
  },
  {
    destaque: '',
    categoria: '',
    tipo: 'Pizza Marguerita',
    nota: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: 'Adicionar ao carrinho',
    image: Pizza
  },
  {
    destaque: '',
    categoria: '',
    tipo: 'Pizza Marguerita',
    nota: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: 'Adicionar ao carrinho',
    image: Pizza
  },
  {
    destaque: '',
    categoria: '',
    tipo: 'Pizza Marguerita',
    nota: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: 'Adicionar ao carrinho',
    image: Pizza
  },
  {
    destaque: '',
    categoria: '',
    tipo: 'Pizza Marguerita',
    nota: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: 'Adicionar ao carrinho',
    image: Pizza
  },
  {
    destaque: '',
    categoria: '',
    tipo: 'Pizza Marguerita',
    nota: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: 'Adicionar ao carrinho',
    image: Pizza
  }
]
const Categories = () => (
  <>
    <Banner
      imagem={BannerImg}
      tipoComida="Italiana"
      nomeRestaurante="La Dolce Vita Trattoria"
    />
    <ProductsList games={promocoes} title="" variant="categories" />
  </>
)

export default Categories
