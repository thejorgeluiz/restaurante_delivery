import styled from 'styled-components'

export const Container = styled.section`
  padding: 80px 0;
`

export const List = styled.ul`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  padding: 0;
`
