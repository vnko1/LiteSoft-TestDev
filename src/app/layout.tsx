import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import styles from "./home.module.scss";
import "@/styles/globals.scss";
import { Filters, NavBar } from "./_components";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Test App",
  description: "Test app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={roboto.variable}>
        <main className={styles["wrapper"]}>
          <div className={styles["container"]}>
            <div className={styles["nav"]}>
              <NavBar />
            </div>
            <div className={styles["filters"]}>
              <Filters
                selectedValue='All products'
                buttons={["All products", "Phones", "Accessories"]}
              />
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
