import { Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-figtree",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alex Berardozzi - Portfolio</title>
        <meta name="description" content="Alex Berardozzi Dev" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      {/* Assegna il font di default al body, puoi cambiare in figtree o jetbrains mono */}
      <body className={`${figtree.variable} font-sans-figtree`}>
        {children}
      </body>
    </html>
  );
}

