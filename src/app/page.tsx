import { Products } from "./_components";
import styles from "./home.module.scss";
import { getData } from "./lib/data";

export default async function Home({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  return (
    <section className={styles["home"]}>
      <div className={styles["home__wrapper"]}>
        <Products products={data} />
      </div>
    </section>
  );
}
