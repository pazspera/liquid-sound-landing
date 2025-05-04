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
        duration: 100,
        once: true,
        easing: "ease-in",
      });
    }

    return () => {
      AOS.refreshHard();
    }
  }, [isDesktop]);

}

export default useAos;
