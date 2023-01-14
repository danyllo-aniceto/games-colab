import styled from "styled-components";

import { MessageDefault } from "../../styles/global";

export const Container = styled.div`
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
      font-size: 25px;
      font-family: "Righteous", cursive;
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tbody {
      td {
        background: #dee9ffd1;
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
`;

export const Message = styled(MessageDefault)`
  margin-top: 35vh;
`;
