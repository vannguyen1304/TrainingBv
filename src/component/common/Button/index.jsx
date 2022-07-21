import React from "react";
import { PrimaryButton, SecondaryButton } from "./styled";

const Button = ({
  $width = "100%",
  $type = "primary",
  $size = "base",
  $disabled,
  children,
  ...rest
}) => {
  switch ($type) {
    case "primary":
      return (
        <PrimaryButton
          $width={$width}
          {...rest}
          $size={$size}
          $disabled={$disabled}
        >
          {children}
        </PrimaryButton>
      );
    case "secondary":
      return (
        <SecondaryButton
          $width={$width}
          $size={$size}
          {...rest}
          $disabled={$disabled}
        >
          {children}
        </SecondaryButton>
      );
      default:
      return (
        <PrimaryButton
          $width={$width}
          {...rest}
          $size={$size}
          $disabled={$disabled}
        >
          {children}
        </PrimaryButton>
      );
  }
};

export default Button;
