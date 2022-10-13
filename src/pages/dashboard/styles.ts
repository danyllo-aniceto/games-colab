import styled from 'styled-components'

import godOfWarImg from '../../assets/godOfWar.jpg'

interface IBox {
  url: string
}

export const Container = styled.div`
  background: #dee9ffd1;
  height: auto;
  margin: 20px 15px;
  padding: 5px 8px;
`
export const Header = styled.div`
  font-family: 'Mulish', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h1 {
    font-size: 3rem;
  }
`
export const ContentTopGames = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 40px 0;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: Arial, Helvetica, sans-serif;

  h1 {
    font-size: 50px;
    margin-top: 25px;
    text-align: center;
    font-family: 'Righteous', cursive;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--header-color-blue);
  }
`

export const Card = styled.div`
  position: relative;
  min-width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 30px;
  margin-bottom: 15px;
  transition: 0.5s;

  :nth-child(1) a {
    background: #2196f3;
  }
  :nth-child(2) a {
    background: #e91e63;
  }
  :nth-child(3) a {
    background: #23c186;
  }
`
export const Box = styled.div<IBox>`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background-image: url(${props => props.url ?? godOfWarImg});
  background-size: cover;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;

  :hover {
    transform: translateY(-50px);
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
  }
`

export const Content = styled.div`
  padding: 20px;
  text-align: center;

  h2 {
    position: absolute;
    top: -10px;
    right: 30px;
    font-size: 8rem;
    color: rgb(255 255 255 / 43%);
  }

  h3 {
    font-size: 1.8rem;
    color: #fff;
    z-index: 1;
    transition: 0.5s;
    margin-bottom: 15px;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
    z-index: 1;
    transition: 0.5s;
  }

  a {
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    background: black;
    border-radius: 5px;
    text-decoration: none;
    color: white;
    margin-top: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: 0.5s;

    :hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
      background: #fff;
      color: #000;
    }
  }
`
