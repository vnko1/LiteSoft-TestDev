"use client";
import { FC, useState } from "react";
import { IFiltersProps } from "./Filters.type";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./Filters.module.scss";
import { Button } from "@/components";

const Filters: FC<IFiltersProps> = ({
  selectedValue,
  buttons = [],
}) => {
  const [buttonsValue, setButtonsValue] = useState(buttons);
  const onHandleFilterButtonClick = (buttonValue: string) => {
    setButtonsValue((buttons) =>
      buttons.filter((el) => el !== buttonValue)
    );
  };

  return (
    <div className={styles["buttons"]}>
      <div className={styles["buttons__filters"]}>
        {buttonsValue.map((button) => (
          <Button
            onClick={() => onHandleFilterButtonClick(button)}
            key={button}
            className={`${styles["button"]} ${
              styles["button__filter"]
            } ${button === selectedValue ? styles["current"] : ""}`}
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
      <Button
        variant='outlined'
        className={`${styles["button"]} ${styles["button__add"]}`}>
        New category
      </Button>
    </div>
  );
};

export default Filters;
