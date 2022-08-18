import styled from 'styled-components'

export const Container = styled.div`
  background: #dee9ffd1;
  height: 78vh;
  margin: 20px 15px;
  padding: 5px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .game-title {
    font-size: 50px;
    margin-top: 10px;
    text-align: center;
    font-family: 'Righteous', cursive;
    color: transparent;
    -webkit-text-stroke-width: 0.8px;
    -webkit-text-stroke-color: var(--header-color-blue);
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-top: 20px;

  img {
    width: 250px;
  }

  .description {
    display: flex;
    flex-direction: row;
    gap: 25px;
  }
`
