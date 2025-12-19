import bannerImg from '../../assets/imagens/fundo.png'

import { Banner } from './styles'
const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>hero</Banner>
)

export default Hero
