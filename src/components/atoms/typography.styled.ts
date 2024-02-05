import { styled } from "styled-components";

type LabelProps = {
  error?: boolean;
};

type SmallProps = {
  error?: boolean;
};

export const H1 = styled.h1`
  font-size: 1.5;
  font-weight: 600;
  color: var(--text-black);
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Label = styled.label<LabelProps>`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => (props.error ? "var(--text-error)" : "var(--text-dark)")};
`;

export const Small = styled.small<SmallProps>`
  font-size: 12px;
  color: ${props => (props.error ? "red" : "black")};
`;
