import styled from 'styled-components'

export const Container = styled.div`
  background: #dee9ffd1;
  height: auto;
  margin: 25px 15px;
  padding: 5px 0px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .game-title {
    font-size: 50px;
    margin-top: 10px;
    text-align: center;
    font-family: 'Righteous', cursive;
    color: transparent;
    -webkit-text-stroke-width: 0.8px;
    -webkit-text-stroke-color: var(--header-color-blue);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  .main-content {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-inline: 25px;
  }

  img {
    width: 300px;
  }

  .summary h1 {
    color: var(--header-color-blue);
    font-size: 25px;
    font-family: 'Righteous', cursive;
    font-weight: 400;
    text-align: left;
    line-height: 1.5rem;
  }

  .summary p {
    margin-top: 30px;
  }

  .sub-descriptions {
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
          background: #1a397a;
          color: var(--text-title);
        }
        tr {
          td:first-child {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          td:last-child {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        }
      }
    }
  }
`

export const ContentButtons = styled.div`
  button {
    padding: 10px;
  }
`
export const ContentRaiting = styled.div``
export const CommentContent = styled.div``

export const EvaluationContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
`
export const SecondaryContent = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const RatingComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
