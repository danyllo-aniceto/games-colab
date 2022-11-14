import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: row;
`

export const ContentChildren = styled.section`
  margin-left: 250px;
  flex: 1;
  overflow: auto;
  height: 85vh;

  /* &::-webkit-scrollbar {
    display: none;
  } */

  @media (max-width: 1257px) {
    margin-left: 0;
  }
`
