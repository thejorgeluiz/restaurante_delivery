import styled from 'styled-components'

export const Imagem = styled.div<{ imagem: string }>`
  position: relative;
  width: 100%;
  height: 280px;
  background-image: url(${(props) => props.imagem});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 171px; // alinhando com link "Restaurantes"
  padding-top: 20px;
  padding-bottom: 20px;
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
