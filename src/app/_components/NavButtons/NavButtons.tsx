import { Button } from "@/components";
import styles from "./NavButton.module.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { FC } from "react";

const NavButtons: FC = () => {
  return (
    <div className={styles["buttons"]}>
      <Button
        variant='text'
        startIcon={<KeyboardBackspaceIcon />}
        className={styles["text-button"]}>
        Back
      </Button>
      <div className={styles["cards-button"]}>
        <Button
          className={`${styles["button"]} ${styles["outlined"]}`}>
          Add product
        </Button>
        <Button
          className={`${styles["button"]} ${styles["contained"]}`}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default NavButtons;
