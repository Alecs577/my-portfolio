import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import MotionProvider from "./components/motion/MotionProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SITE, SITE_URL } from "./data/site";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Alex Berardozzi — Full-stack developer",
    template: "%s — Alex Berardozzi",
  },
  description: SITE.description,
  openGraph: {
    title: "Alex Berardozzi — Full-stack developer",
    description: SITE.description,
    type: "website",
    url: SITE_URL,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Berardozzi — Full-stack developer",
    description: SITE.description,
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF9" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
};

const themeScript = `(function(){try{var s=localStorage.getItem("theme");var d=s==="dark"||(s!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);document.documentElement.classList.toggle("light",!d);}catch(e){}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.role,
  url: SITE_URL,
  sameAs: [SITE.linkedin, SITE.github],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} antialiased bg-bg text-fg`}>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>
          <MotionProvider>
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
