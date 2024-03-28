import { Button as MUIButton } from "@mui/material";
import { FC } from "react";
import { IButtonProps } from "./Button.type";
import styles from "./Button.module.scss";

const Button: FC<IButtonProps> = ({
  children,
  variant = "contained",
  className,
  ...props
}) => {
  return (
    <MUIButton
      {...props}
      variant={variant}
      className={`${styles["button"]} ${className}`}>
      {children}
    </MUIButton>
  );
};

export default Button;
