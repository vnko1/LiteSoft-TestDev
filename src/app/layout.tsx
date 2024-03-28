import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.scss";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
