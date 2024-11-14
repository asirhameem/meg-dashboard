import { Button as Btn } from "@mantine/core";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children?: React.ReactNode;
  variant?: "filled" | "outline" | "light";
  fullWidth?: boolean;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "filled",
  fullWidth = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <Btn variant={variant} fullWidth={fullWidth} {...rest}>
      {children}
    </Btn>
  );
}
