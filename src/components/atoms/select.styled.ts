import { styled } from "styled-components";

type Prop = {
  error?: boolean;
};

export const Select = styled.select<Prop>`
  font-size: 1rem;
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  transition: border-color 0.3s;
  border: ${props =>
    props.error
      ? "1px solid var(--text-error)"
      : "1px solid var(--text-light-50)"};
  outline: none;
  background-color: transparent;
`;
