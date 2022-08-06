import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 50px;
    margin-top: 25px;
    text-align: center;
    font-family: 'Righteous', cursive;
    color: var(--header-color-blue);
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: var(--text-title);
  }
`

export const ContentConsoles = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 20px;
  gap: 3rem;
`

export const Console = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  background: #dee9ffd1;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  backface-visibility: hidden;

  &:hover {
    transform: scale(0.9);
  }

  &:hover::after {
    height: 280px;
  }

  &:hover .description p {
    margin-bottom: 0px;
    opacity: 1;
  }

  &:hover img {
    transform: scale(1.25);
  }

  &::after {
    width: 100%;
    content: '';
    left: 0px;
    bottom: 0px;
    height: 150px;
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 200%
    );
    z-index: 20;
    transition: all 0.25s ease;
  }

  img {
    max-width: 60%;
    z-index: 10;
    transition: all 0.25s ease;
  }

  .description {
    z-index: 30;
    position: absolute;
    bottom: 0px;
    color: #fff;
    padding: 20px;
    padding-bottom: 30px;
  }

  .description p {
    font-size: 0.8rem;
    opacity: 0;
    margin-bottom: -170px;
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
  }

  .description p button {
    padding: 7px 17px;
    border-radius: 12px;
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
    margin-top: 10px;
    margin-left: auto;
    cursor: pointer;
    transition: all 0.25s ease;
    font-family: sans-serif;
    font-size: 0.75rem;
    outline: none;

    &:hover {
      background: #fff;
      color: #000;
    }
  }
`
export const ContentAction = styled.div`
  align-self: flex-end;
  z-index: 30;
  position: absolute;
  top: 0px;

  padding: 10px;
  padding-top: 30px;
`
