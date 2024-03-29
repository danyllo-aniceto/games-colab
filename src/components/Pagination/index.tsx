import { PaginationItem, PaginationProps } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { StyledPagination } from './styles'

export function Pagination({ ...props }: PaginationProps) {
  return (
    <StyledPagination
      renderItem={item => (
        <PaginationItem
          components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
        />
      )}
      {...props}
    />
  )
}
