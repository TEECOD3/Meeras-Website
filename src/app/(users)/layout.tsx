"use client";
import Footer from "../../components/UI/Footer";
import NavBar from "../../components/UI/NavBar";
import "../globals.css";
import { siteConfig } from "../../../config/site";
import { Metadata } from "next";
import { Nunito } from "next/font/google";
import { useEffect, useMemo, useState } from "react";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/Meeraslogo.png",
  },
};

const nunito = Nunito({ subsets: ["latin"], display: "swap" });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [hideNavBar, setHideNavBar] = useState(false);
  const memoizedMetadata = useMemo(() => metadata, []); // Memoize the metadata

  useEffect(() => {
    document.documentElement.lang = "en"; // Set the HTML lang attribute
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const triggerPosition = 700; // Set your desired trigger position here
    setHideNavBar(scrollPosition >= triggerPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <html lang="en" className={nunito.className}>
      <head>
        <title>{memoizedMetadata.title}</title> {/* Use memoized title */}
        <meta name="description" content={memoizedMetadata.description} />{" "}
        {/* Use memoized description */}
        <link rel="icon" href={memoizedMetadata.icons.icon} />{" "}
        {/* Use memoized icon */}
      </head>
      <body>
        <NavBar hideNavBar={hideNavBar} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
