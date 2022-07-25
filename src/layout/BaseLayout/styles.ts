import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: row;
`

export const ContentChildren = styled.section`
  margin-left: 250px;
  padding: 20px;
  flex: 1;
  overflow: auto;
  height: 80vh;

  /* &::-webkit-scrollbar {
    display: none;
  } */
`
