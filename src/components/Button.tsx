import React, { ReactNode } from "react";
import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
  children?: ReactNode;
}

export const Button = ({ variant = "primary", children }: ButtonProps) => {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>;
};
