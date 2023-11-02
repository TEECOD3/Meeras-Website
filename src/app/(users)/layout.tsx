import Footer from "../../components/UI/Footer";
import NavBar from "../../components/UI/NavBar";
import "../globals.css";
import { siteConfig } from "../../../config/site";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/Meeraslogo.png",
  },
};

const Monstserrat = Montserrat({ subsets: ["latin"], display: "swap" });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={Monstserrat.className}>
      <head />
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
