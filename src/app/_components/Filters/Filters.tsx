import { FC } from "react";
import { IFiltersProps } from "./Filters.type";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./Filters.module.scss";
import { Button } from "@/components";

const Filters: FC<IFiltersProps> = ({ selectedValue = "all" }) => {
  return (
    <div>
      <Button
        className={styles["button"]}
        endIcon={<DeleteIcon sx={{ width: 24, height: 24 }} />}>
        All products
      </Button>
    </div>
  );
};

export default Filters;
