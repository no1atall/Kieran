import React, { useState, useCallback, useEffect } from "react";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", (e) => updateTarget(e));

    if (media.matches) {
      setTargetReached(true);
    }
    return () => {
      media.removeEventListener("change", (e) => updateTarget(e));
    };
  }, []);

  return targetReached;
};

const Navbar = () => {
  const isBreakpoint = useMediaQuery(767);

  return <div>{isBreakpoint ? <MobileNav /> : <DesktopNav />}</div>;
};

export default Navbar;