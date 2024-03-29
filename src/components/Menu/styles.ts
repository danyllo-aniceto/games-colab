import styled from 'styled-components'

export const Container = styled.div`
  background: var(--containers-color-blue);
  width: 250px;
  height: 85vh;
  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  nav {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 2rem;
  }

  a {
    color: var(--text-title);
    font-family: 'Righteous', cursive;
    text-decoration: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    font-size: 1.5rem;

    img {
      width: 25px;
    }

    transition: filter 0.2s;

    &:hover {
      filter: brightness(2.5);
    }
  }

  @media (max-width: 1257px) {
    display: none;
  }
`
