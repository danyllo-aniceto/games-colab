import testeImg from '../../assets/sonic.jpg'
import styled from 'styled-components'

export const Container = styled.div`
  /* background-image: url(${testeImg});
  background-size: cover;
  height: 100vh; */
  /* display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20vh; */
`

// export const Form = styled.form`
//   width: 400px;
//   height: 300px;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   background-color: var(--header-color-blue);
//   padding: 20px;
//   border-radius: 8px;
// `

// export const Button = styled.button`
//   width: 250px;
//   padding: 5px;
//   border-radius: 5px;
// `

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 6px 3px rgba(0, 19, 74, 0.46);
  background-color: #dceefa;
  padding: 30px;
  gap: 3px;
  border-radius: 5px;
  width: 300px;
  margin-top: 125px;
`

export const UserName = styled.input`
  border-radius: 5px;
  outline: 0;
  width: 100%;
  height: 30px;
  padding: 5px;
`
export const UserEmail = styled.input`
  border-radius: 5px;
  outline: 0;
  width: 100%;
  height: 30px;
  padding: 5px;
`
export const UserPassword = styled.input`
  border-radius: 5px;
  outline: 0;
  width: 100%;
  height: 30px;
  padding: 5px;
`
export const ButtonRegister = styled.button`
  background-color: #4d82a7;
  width: 100%;
  border-radius: 30px;
  padding: 12px;
  color: #f9f9fa;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 18px;
  border: 0px;
  margin-top: 10px;

  :hover {
    background-color: #7ba4c0a8;
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Label = styled.label``

export const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  align-items: center;
  gap: 10px;
`
export const Img = styled.img`
  width: 80px;
  border-radius: 100%;
  box-shadow: 1px 1px 1px 3px rgba(0, 19, 74, 0.46);
`

export const P = styled.p`
  color: #03607c;
  font-family: sans-serif;
  font-weight: 600;
`

export const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const ButtonNewRegister = styled.button``

export const ContentModal = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
