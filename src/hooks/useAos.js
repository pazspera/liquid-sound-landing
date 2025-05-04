import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

const useAos = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (isDesktop) {
      AOS.init({
        once: true,
        easing: "ease-in-out",
      });
    }

    return () => {
      AOS.refreshHard();
    }
  }, [isDesktop]);

  return isDesktop;
}

export default useAos;
