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
    <section>
      <Products products={data} />
    </section>
  );
}
