import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SELECTOR = "[data-reveal], section, article";

export default function ScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(SELECTOR)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      el.classList.add("reveal-enabled");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}
