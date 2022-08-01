import testeImg from '../../assets/sonic.jpg'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--containers-color-blue);
  height: 100vh;
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

//--background: #88AAEE;

//--header-color-blue: #1D376B;
//--containers-color-blue: #3D4C6B;

//--blue: #325FB8;
//--light-blue: #3F78EB;

//--text-title: #dbe7ff;

export const UserCard = styled.div`
  display: flex;
  background: #dee9ffd1;
  flex-direction: column;
  box-shadow: 0px 4px 6px 3px rgba(0, 19, 74, 0.46);

  padding: 30px;
  gap: 3px;
  border-radius: 5px;
  width: 300px;
  margin-top: 120px;
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
  position: relative;
  padding: 1em 1.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  margin: 1em 0.8em;
  color: var(--header-color-blue);

  ::after,
  ::before {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease;
    border-radius: 2px;
  }

  ::after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: var(--header-color-blue);
    border-right-color: var(--header-color-blue);
  }

  ::before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: var(--header-color-blue);
    border-left-color: var(--header-color-blue);
  }

  :hover:after,
  :hover:before {
    width: 100%;
    height: 100%;
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
  color: var(--header-color-blue);
  font-family: sans-serif;
  font-weight: 600;
`

export const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const ButtonNewRegister = styled.button`
  border: none;
  background-color: transparent;
  align-self: flex-end;
  margin-top: 5px;
  transition: filter 0.2s;

  color: var(--header-color-blue);
  :hover {
    filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.5));
    color: var(--blue);
  }
`
