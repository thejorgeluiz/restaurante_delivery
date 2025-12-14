import { Imagem } from './styles'
import bannerImg from '../../../src/assets/imagens/apresentacao.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container"></div>
  </Imagem>
)

export default Banner
