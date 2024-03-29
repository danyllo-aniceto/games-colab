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

  @media (max-width: 990px) {
    max-width: 200px;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-inline: 25px;

  @media (max-width: 990px) {
    margin-inline: 80px;
  }

  @media (max-width: 880px) {
    gap: 10px;
    margin-inline: 120px;
  }

  @media (max-width: 800px) {
    margin-inline: 180px;
  }

  @media (max-width: 680px) {
    margin-inline: 250px;
  }

  @media (max-width: 542px) {
    flex-direction: column;
    align-items: center;
    margin-inline: 300px;
    gap: 30px;
  }

  @media (max-width: 410px) {
    margin-inline: 350px;
  }
  @media (max-width: 410px) {
    margin-inline: 400px;
  }
`

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

export const Summary = styled.div`
  h1 {
    line-height: 1.5rem;

    @media (max-width: 990px) {
      margin-inline: 20px;
    }
  }

  p {
    margin-top: 30px;
    @media (max-width: 990px) {
      margin-inline: 20px;
    }
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

      @media (max-width: 990px) {
        padding: 0.5rem 1rem;
      }
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

  @media (max-width: 800px) {
    display: none;
  }
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
export const ContentRaiting = styled.div``

export const SecondaryContent = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 765px) {
    margin-inline: 200px;
  }

  @media (max-width: 542px) {
    margin-bottom: 80px;
    margin-inline: 360px;
  }
`

export const MobileGameInformation = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    margin-top: 5px;
  }
`
