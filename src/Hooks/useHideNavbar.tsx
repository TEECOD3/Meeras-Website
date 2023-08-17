// useHideNavBar.js

import { useState, useEffect } from "react";

export const useHideNavBar = (triggerPosition: number) => {
  const [hideNavBar, setHideNavBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHideNavBar(scrollPosition >= triggerPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggerPosition]);

  return hideNavBar;
};
