import { styled } from "styled-components";

type ButtonProps = {
  primary?: boolean;
  full?: boolean;
};

export const Button = styled.button<ButtonProps>`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${props =>
    props.primary ? "var(--color-primary)" : "var(--color-primary-50)"};
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  width: ${props => (props.full ? "100%" : "auto")};

  &:hover {
    background-color: var(--color-primary-50);
  }
`;
