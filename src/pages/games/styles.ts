import styled from 'styled-components'
import { Button } from '../../components/Button'
import { MessageDefault } from '../../styles/global'

export const Container = styled.div`
  padding: 0 10px;
`
export const ContentButton = styled.div`
  margin-top: 20px;
  margin-right: 50px;
  display: flex;
  justify-content: flex-end;

  button {
    font-size: 1.8rem;
    padding: 0 2rem;
    height: 4rem;
  }
`

export const Item = styled.div`
  background-color: white;
  margin: 10px;
  padding: 10px;
  width: 280px;
  border-radius: 16px;
  flex: none;

  .image img {
    height: 300px;
    width: 100%;
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
export const Message = styled(MessageDefault)`
  margin-top: 18vh;
`
