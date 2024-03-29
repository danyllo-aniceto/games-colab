import styled from 'styled-components'
import { Dialog, DialogTitle } from '@mui/material'

export const ContentRadio = styled.div`
  margin: 30px 0 20px 0;
  display: flex;
  flex-direction: row;
  gap: 50px;

  input {
    margin-right: 5px;
  }
`

export const StyledDialog = styled(Dialog)`
  .css-1t1j96h-MuiPaper-root-MuiDialog-paper {
    background: #ccdbf9;
  }
`
export const Title = styled(DialogTitle)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: 'Righteous', cursive;
    font-size: 50px;
    /* color: var(--header-color-blue); */
  }
`

export const Image = styled.img`
  max-width: 120px;
  border-radius: 50px;
  box-shadow: 0px 2px 15px 3px rgba(0, 0, 0, 0.5);
`
export const Label = styled.label`
  .css-1x51dt5-MuiInputBase-input-MuiInput-input {
    color: red;
  }
`
