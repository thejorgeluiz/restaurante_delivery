import Banner from '../../components/Banner'
import BannerImg from '../../assets/imagens/imagem_de_fundo.png'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'
import Pizza from '../../assets/imagens/pizza.png'

const promocoes: Game[] = [
  new Game(
    1,
    'Pizza Marguerita',
    false,
    'Italiana',
    0,
    'Clássica Marguerita',
    Pizza
  ),
  new Game(
    2,
    'Pizza Pepperoni',
    false,
    'Italiana',
    0,
    'Pepperoni crocante',
    Pizza
  ),
  new Game(
    3,
    'Pizza Quatro Queijos',
    false,
    'Italiana',
    0,
    'Queijos selecionados',
    Pizza
  ),
  new Game(
    4,
    'Pizza Portuguesa',
    false,
    'Italiana',
    0,
    'Presunto, ovos e cebola',
    Pizza
  ),
  new Game(
    5,
    'Pizza Calabresa',
    false,
    'Italiana',
    0,
    'Calabresa e cebola',
    Pizza
  ),
  new Game(
    6,
    'Pizza Frango com Catupiry',
    false,
    'Italiana',
    0,
    'Frango desfiado',
    Pizza
  )
]

const Categories = () => (
  <>
    <Banner
      imagem={BannerImg}
      tipoComida="Italiana"
      nomeRestaurante="La Dolce Vita Trattoria"
    />
    <ProductsList games={promocoes} variant="categories" />
  </>
)

export default Categories
