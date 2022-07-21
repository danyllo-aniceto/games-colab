import styled from 'styled-components'

export const Container = styled.div`
  max-width: 75vw;

  .buttons button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 50px;

    &:first-child {
      transform: rotate(180deg);
    }
  }
`

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
`
export const Item = styled.div`
  background-color: white;
  margin: 10px;
  padding: 10px;
  width: 280px;
  border-radius: 16px;
  flex: none;

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const Info = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    text-align: center;
    color: #1e1e1e;
    padding: 5px;
    border-radius: 10px;
  }

  .name-game {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px 0;
  }

  .developer-game {
    font-size: 0.8rem;
    flex-grow: 1;
    color: var(--light-blue);
  }

  .console-game {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: var(--blue);
    color: var(--text-title);
  }
`
