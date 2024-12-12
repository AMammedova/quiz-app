'use client'
import React, { useEffect, useState } from "react";
import style from "./ellipse.module.css";
import { useColorModeValue } from "@/shared/components/ui/color-mode";
const EllipseTop = () => {
    const strokeTop = useColorModeValue("#EDF1F9", "#2D3949");
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }
  return (
    <svg
    className={style.ellipsetop}
    width="438"
    height="564"
    viewBox="0 0 438 564"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="-50.5"
      cy="75.5"
      r="416.5"
      stroke={strokeTop}
      strokeWidth="144"
    />
  </svg>
  );
};

export default EllipseTop;
