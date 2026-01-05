class ProductModel {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number

  constructor(
    id: number,
    nome: string,
    descricao: string,
    foto: string,
    preco: number
  ) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.foto = foto
    this.preco = preco
  }
}

export default ProductModel
