import { Figtree, JetBrains_Mono } from "next/font/google"; // Keep unused import if needed later or remove. Figtree is used.
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-figtree",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Alex Berardozzi - Portfolio",
  description: "Alex Berardozzi Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${figtree.variable} ${jetbrainsMono.variable} font-sans-figtree antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

