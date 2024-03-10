import { styled } from "styled-components";

type Props = {
  error?: boolean;
};

export const TextArea = styled.textarea<Props>`
  border: ${props =>
    props.error
      ? "1px solid var(--text-error)"
      : "1px solid var(--text-light-50)"};
  outline: none;

  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  resize: none;
  color: #000;
  height: 96px;
  background-color: transparent;
  font-family: inherit;
`;
