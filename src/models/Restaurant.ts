export type MenuItem = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  tipo: string
  descricao: string
  capa: string
  avaliacao: number
  destacado?: boolean
  cardapio: MenuItem[]
}

export default Restaurant
