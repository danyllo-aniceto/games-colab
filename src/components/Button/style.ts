import styled from 'styled-components'

export const StyledButton = styled.button`
  margin-right: 20px;
  font-size: 1.5rem;
  background: var(--blue);
  border: 0;
  border-radius: 0.25rem;
  height: 4rem;
  font-family: 'Righteous', cursive;
  color: var(--text-title);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
