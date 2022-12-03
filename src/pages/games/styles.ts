import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 10px;
`
export const ContentButton = styled.div`
  margin-top: 20px;
  margin-right: 50px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 600px) {
    margin-bottom: 5px;
    margin-right: 0;
  }

  button {
    font-size: 1.8rem;
    padding: 0 2rem;
    height: 4rem;

    @media (max-width: 600px) {
      padding: 5px;
      font-size: 1rem;
      height: 2.5rem;
    }
  }
`
