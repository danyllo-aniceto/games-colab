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
`

export const GameTitle = styled.h1`
  font-size: 50px;
  margin-top: 10px;
  text-align: center;
  font-family: 'Righteous', cursive;
  color: transparent;
  -webkit-text-stroke-width: 0.8px;
  -webkit-text-stroke-color: var(--header-color-blue);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`

export const Img = styled.img`
  max-width: 300px;
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-inline: 25px;
`

export const SubTitle = styled.h1`
  color: var(--header-color-blue);
  font-size: 25px;
  font-family: 'Righteous', cursive;
  font-weight: 400;
  text-align: left;
  line-height: 1.5rem;
  align-self: center;
`

export const Summary = styled.div`
  h1 {
    line-height: 1.5rem;
  }

  p {
    margin-top: 30px;
  }
`
export const TableContent = styled.div`
  margin: 20px 15px;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    td {
      padding: 1rem 2rem;
      border: 0;
    }

    thead {
      color: var(--header-color-blue);
      font-size: 20px;
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
`

export const ContentButtons = styled.div`
  button {
    padding: 10px;
  }
`
export const ContentRaiting = styled.div``

export const SecondaryContent = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const EvaluationContent = styled.div`
  padding: 25px;
  margin-inline: 25px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  background-color: #b2caf5;
`
export const Evaluation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const StyleTextField = styled.div``

export const RatingAndEvaluation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-inline: 10px;
`
export const Comment = styled.div`
  margin-left: 50px;
`

export const ItemsComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-inline: 50px;
  align-items: center;
`
export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #b2caf5;

  padding-block: 5px;
`
