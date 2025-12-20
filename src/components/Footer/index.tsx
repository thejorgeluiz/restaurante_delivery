import { Link } from 'react-router-dom'
import {
  Container,
  CenterContent,
  SocialIcons,
  FooterText,
  Logo
} from './styles'
import logoImg from '../../assets/imagens/logo.png'
import facebookIcon from '../../assets/imagens/facebook.png'
import instagramIcon from '../../assets/imagens/instagram.png'
import twitterIcon from '../../assets/imagens/twitter.png'

const Footer = () => (
  <Container>
    <CenterContent>
      <Logo src={logoImg} alt="EFood" />

      <SocialIcons>
        <Link to="#">
          <img src={facebookIcon} alt="Facebook" />
        </Link>
        <Link to="#">
          <img src={instagramIcon} alt="Instagram" />
        </Link>
        <Link to="#">
          <img src={twitterIcon} alt="Twitter" />
        </Link>
      </SocialIcons>

      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterText>
    </CenterContent>
  </Container>
)

export default Footer
