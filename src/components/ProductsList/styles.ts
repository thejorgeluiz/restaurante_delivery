import styled from 'styled-components'

export const Container = styled.section`
  padding: 80px 0;
`
export const List = styled.ul<{ variant?: 'home' | 'categories' }>`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  gap: 32px;

  ${({ variant }) =>
    variant === 'categories'
      ? `
        grid-template-columns: repeat(3, 1fr);
      `
      : `
        grid-template-columns: repeat(2, 1fr);
      `}
`
