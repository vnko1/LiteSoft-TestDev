import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "../styles/globals.scss";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: [],
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
      <body className={roboto.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
