import React from "react";
import { PrimaryButton, SecondaryButton } from "./styled";

const Button = ({
  $width = "100%",
  $type = "primary",
  $size = "base",
  $disable,
  $value,
  ...rest
}) => {
  switch ($type) {
    case "primary":
      return (
        <PrimaryButton
          $width={$width}
          {...rest}
          $size={$size}
          $disable={$disable}
        >
          {$value}
        </PrimaryButton>
      );
    case "secondary":
      return (
        <SecondaryButton
          $width={$width}
          $size={$size}
          {...rest}
          $disable={$disable}
        >
          {$value}
        </SecondaryButton>
      );
  }
};

export default Button;
