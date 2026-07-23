import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Disable browser automatic scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // IF URL HAS HASH
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({
            behavior: location.state?.instantaneous ? "auto" : "smooth",
            block: "start",
          });
        });
      }

      return;
    }

    // BACK/FORWARD BUTTON
    if (navigationType === "POP") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      return;
    }

    // NORMAL PAGE NAVIGATION
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location, navigationType]);

  return null;
};

export default ScrollToHashElement;
