import styled from 'styled-components'
import { Dialog, DialogTitle } from '@mui/material'

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
  gap: 25px;

  span {
    font-family: 'Righteous', cursive;
    font-size: 30px;
    color: var(--header-color-blue);
  }
`

export const Image = styled.img`
  max-width: 80px;
  border-radius: 50px;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.51);
`
