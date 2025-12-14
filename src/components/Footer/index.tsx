import { Link } from 'react-router-dom'
import { CenterContent } from '../Footer/styles'
import { Container } from './styles'
import logo from '../../assets/imagens/logo.png'
import SocialMedias from '../../../src/assets/imagens/redes sociais.png'

const Footer = () => (
  <Container>
    <div className="container">
      <CenterContent>
        <Link to="/">
          <img src={logo} alt="EFood" />
        </Link>

        <Link to="#">
          <img src={SocialMedias} alt="redes_sociais" />
        </Link>

        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </CenterContent>
    </div>
  </Container>
)

export default Footer
