class Game {
  destaque: string
  categoria: string
  tipo: string
  nota: string
  description: string
  infos: string
  image: string

  constructor(
    destaque: string,
    categoria: string,
    tipo: string,
    nota: string,
    description: string,
    infos: string,
    image: string
  ) {
    this.destaque = destaque
    this.categoria = categoria
    this.tipo = tipo
    this.nota = nota
    this.description = description
    this.infos = infos
    this.image = image
  }
}
export default Game
