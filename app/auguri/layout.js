import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./auguri.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-auguri-display",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-auguri-sans",
});

export const metadata = {
  title: "Per te — un piccolo cielo",
  description: "Un biglietto da aprire a mezzanotte.",
  robots: { index: false, follow: false },
};

export default function AuguriLayout({ children }) {
  return (
    <div className={`${display.variable} ${sans.variable} auguri-root`}>
      {children}
    </div>
  );
}
