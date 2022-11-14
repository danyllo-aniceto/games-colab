import styled from 'styled-components'

export const Container = styled.header`
  background: var(--header-color-blue);
`

export const Content = styled.div`
  max-width: 1460px;
  margin: 0 auto;
  height: 15vh;
  width: 100vw;

  padding: 0.8rem 10rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1.5rem;
    background: var(--blue);
    border: 0;
    padding: 0 1.2rem;
    border-radius: 0.25rem;
    height: 4rem;
    font-family: 'Righteous', cursive;
    color: var(--text-title);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 954px) {
    padding: 0.4rem 6rem 0.4rem;
  }

  @media (max-width: 424px) {
    padding-left: 10vw;
  }
`

export const LogoTitulo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  img {
    width: 6rem;
  }

  @media (max-width: 424px) {
    margin: 0px;
    gap: 0.5rem;
    img {
      width: 4rem;
    }
  }
`

export const Titulo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;

  h1 {
    color: var(--text-title);
    font-family: 'Righteous', cursive;
    font-size: 2.5rem;
  }

  img {
    width: 2.6rem;
  }

  @media (max-width: 806px) {
    h1 {
      font-size: 2rem;
    }

    img {
      width: 2rem;
    }
  }

  @media (max-width: 424px) {
    h1 {
      font-size: 1.5rem;
    }

    img {
      width: 1.5rem;
    }
  }
`

export const MobileMenu = styled.div`
  cursor: pointer;
  display: none;
`

export const Line = styled.div`
  width: 32px;
  height: 2px;
  background: #fff;
  margin: 8px;
`
