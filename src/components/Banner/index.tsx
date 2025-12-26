import { Imagem, TipoComida, NomeRestaurante, Conteudo } from './styles'

type BannerProps = {
  imagem: string
  tipoComida: string
  nomeRestaurante: string
}

const Banner = ({ imagem, tipoComida, nomeRestaurante }: BannerProps) => (
  <Imagem imagem={imagem}>
      <Conteudo className="container">
        <TipoComida>{tipoComida}</TipoComida>
        <NomeRestaurante>{nomeRestaurante}</NomeRestaurante>
      </Conteudo>
  </Imagem>
)

export default Banner
