import { Products } from "./_components";
import styles from "./home.module.scss";
import { getData } from "./lib/data";

export default async function Home() {
  const data = await getData();
  return (
    <section className={styles["home"]}>
      <Products products={data} />
    </section>
  );
}
