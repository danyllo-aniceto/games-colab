import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 1rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    td {
      padding: 1rem 2rem;
      border: 0;
    }

    thead {
      color: var(--header-color-blue);
      font-size: 25px;
      font-family: 'Righteous', cursive;
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tbody {
      td {
        background: #dee9ffd1;
        border-radius: 5px;
      }
    }
  }
`

export const ContentAction = styled.div``
