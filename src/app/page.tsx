import { Filters, NavBar, Products } from "./_components";
import { getData } from "./lib/data";
import styles from "./page.module.scss";

export default async function Home() {
  const data = await getData();

  return (
    <section className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <div className={styles["breadcrumbs"]}>
          <NavBar />
        </div>
        <div></div>
        <div className={styles["filters"]}>
          <Filters selectedValue='All products' />
        </div>
        <div></div>
        <div>
          <Products products={data} />
        </div>
      </div>
    </section>
  );
}
