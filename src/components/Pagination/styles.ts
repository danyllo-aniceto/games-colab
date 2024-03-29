import { Pagination } from '@mui/material'
import styled from 'styled-components'

export const StyledPagination = styled(Pagination)`
  & .Mui-selected {
    background-color: var(--header-color-blue) !important;
    color: #ffffff;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0 16px 0;
`
