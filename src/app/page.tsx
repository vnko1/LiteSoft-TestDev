import { NavBar } from "./_components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <section className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <div className={styles["breadcrumbs"]}>
          <NavBar />
        </div>
      </div>
    </section>
  );
}
