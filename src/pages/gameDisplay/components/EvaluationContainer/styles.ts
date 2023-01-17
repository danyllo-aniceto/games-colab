import styled from 'styled-components'

export const SubTitle = styled.h1`
  color: var(--header-color-blue);
  font-size: 25px;
  font-family: 'Righteous', cursive;
  font-weight: 400;
  text-align: left;
  line-height: 1.5rem;
  align-self: center;
  margin-bottom: 1rem;
`
export const EvaluationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px;
  margin-inline: 25px;
  margin-top: 10px;
  align-items: center;
  background-color: #b2caf5;

  @media (max-width: 990px) {
    margin-inline: 80px;
  }
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
export const ContentButtons = styled.div`
  button {
    padding: 10px;

    @media (max-width: 542px) {
      padding: 6px;
    }
  }

  @media (max-width: 542px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 2rem;
  }
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
  margin-inline: 20px;
  padding-block: 5px;

  @media (max-width: 990px) {
    margin-inline: 180px;
  }
`
export const ContentRaiting = styled.div``
