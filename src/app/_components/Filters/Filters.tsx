"use client";
import { FC, useState } from "react";
import { IFiltersProps } from "./Filters.type";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./Filters.module.scss";
import { Button } from "@/components";

const buttons = ["All products", "Phones", "Accessories"];

const Filters: FC<IFiltersProps> = ({ selectedValue }) => {
  return (
    <div className={styles["buttons"]}>
      {buttons.map((button) => (
        <Button
          key={button}
          className={`${styles["button"]} ${
            button === selectedValue ? styles["current"] : ""
          }`}
          endIcon={<DeleteIcon sx={{ width: 24, height: 24 }} />}>
          <span
            className={`${styles["btn-text"]} ${
              button === selectedValue ? styles["current"] : ""
            }`}>
            {button}
          </span>
        </Button>
      ))}
    </div>
  );
};

export default Filters;
