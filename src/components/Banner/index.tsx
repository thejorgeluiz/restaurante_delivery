import { Imagem, TipoComida, NomeRestaurante } from './styles'

type BannerProps = {
  imagem: string
  tipoComida: string
  nomeRestaurante: string
}

const Banner = ({ imagem, tipoComida, nomeRestaurante }: BannerProps) => (
  <Imagem imagem={imagem}>
    <TipoComida>{tipoComida}</TipoComida>
    <NomeRestaurante>{nomeRestaurante}</NomeRestaurante>
  </Imagem>
)

export default Banner
