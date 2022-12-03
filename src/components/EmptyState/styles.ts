import styled from "styled-components";

import { MessageDefault } from "../../styles/global";

export const ContentDefault = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;

  margin-top: 25px;
`

export const Message = styled(MessageDefault)`
  margin-top: 18vh;
`