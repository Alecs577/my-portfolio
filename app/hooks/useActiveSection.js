"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "../data/site";

export default function useActiveSection() {
  const pathname = usePathname();
  const [active, setActive] = useState("");

  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return active;
}
