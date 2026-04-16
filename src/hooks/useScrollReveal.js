import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollReveal;
