import { FC, useState } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@mui/material";
import { Home } from "@mui/icons-material";

import { IconEnum } from "@/types";
import styles from "./NavBar.module.scss";
import { Icon } from "@/components";

const NavBar: FC = () => {
  return (
    <>
      <Breadcrumbs
        aria-label='breadcrumb'
        className={styles["breadcrumbs"]}
        separator={<Icon icon={IconEnum.TRIANGLE} size={10} />}>
        <Link href='/' className={styles["breadcrumbs__link"]}>
          <Home sx={{ fontSize: 15 }} />
        </Link>
        <Link href='/' className={styles["breadcrumbs__link"]}>
          Wishlist
        </Link>
      </Breadcrumbs>
      <h1 className={styles["title"]}>Wishlist</h1>
      <p className={styles["text"]}>158 products</p>
    </>
  );
};

export default NavBar;
