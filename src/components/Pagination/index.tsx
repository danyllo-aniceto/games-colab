import { PaginationItem, PaginationProps } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { StyledPagination } from './styles'

export function Pagination({ count }: PaginationProps) {
  return (
    <StyledPagination
      count={count}
      renderItem={item => (
        <PaginationItem
          components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
        />
      )}
    />
  )
}
