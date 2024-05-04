import { styled } from "styled-components";

export const InputWrapper = styled.div`
  display: ${({ hidden }) => hidden ? 'none' : 'flex'};
  flex-direction: column;
  gap: 4px 0;
`;
