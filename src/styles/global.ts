import { createGlobalStyle } from 'styled-components'

import styled from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #88AAEE;
    
    --header-color-blue: #1D376B;
    --containers-color-blue: #3D4C6B;

    --blue: #325FB8;
    --light-blue: #3F78EB;

    --text-title: #dbe7ff;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 728px){
      font-size: 87.5%;
    }
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
  `
export const MessageDefault = styled.div`
  color: var(--header-color-blue);
  font-size: 25px;
  font-family: 'Righteous', cursive;
`

export const ContentDefault = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;

  margin-top: 25px;
`
