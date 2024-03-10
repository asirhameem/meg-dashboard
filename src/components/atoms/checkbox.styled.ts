import { styled } from "styled-components";

type LabelProps = {
  error?: boolean;
};

type InputProps = {
  error?: boolean;
};

export const CheckboxLabel = styled.label<LabelProps>`
  font-size: 18px;
  color: ${props => (props.error ? "var(--text-error)" : "var(--text-dark)")};
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
`;

export const CheckboxInput = styled.input.attrs({ type: "checkbox" }) <InputProps>`
  appearance: none;
  width: 20px;
  height: 20px;
  border: ${props => `2px solid ${props.error ? "var(--text-error)" : "#30cfd0"}`};
  border-radius: 5px;
  background-color: transparent;
  display: inline-block;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  &::before {
    content: "";
    background-color: #30cfd0;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 10px;
    height: 10px;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }
  &:checked:before {
    transform: translate(-50%, -50%) scale(1);
  }
`;
