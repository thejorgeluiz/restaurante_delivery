import styled from 'styled-components'

export const Imagem = styled.div<{ imagem: string }>`
  width: 100%;
  height: 280px;
  background-image: url(${(props) => props.imagem});
  background-size: cover;
  background-position: center;
`
export const Conteudo = styled.div`
 height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 👈 ISSO resolve tudo */
  padding: 20px 0;
`

export const TipoComida = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-style: normal;
  font-size: 32px;
  line-height: 20px;
  letter-spacing: 0;
  color: #ffffff;
`

export const NomeRestaurante = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
`
