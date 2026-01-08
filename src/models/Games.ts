class Game {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  preco: number
  porcao: string

  constructor(
    id: number,
    titulo: string,
    destacado: boolean,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string,
    preco: number,
    porcao: string
  ) {
    this.id = id
    this.titulo = titulo
    this.destacado = destacado
    this.tipo = tipo
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.capa = capa
    this.preco = preco
    this.porcao = porcao
  }
}

export default Game
