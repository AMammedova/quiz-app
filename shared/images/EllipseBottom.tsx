"use client";
import React, { useEffect, useState } from "react";
import style from "./ellipse.module.css";
import { useColorModeValue } from "@/shared/components/ui/color-mode";
const EllipseBottom = () => {
  const strokeBottom = useColorModeValue("#EDF1F9", "#2D3949");
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <svg
      className={style.ellipsebottom}
      width="540"
      height="608"
      viewBox="0 0 540 608"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="488.5"
        cy="488.5"
        r="416.5"
        stroke={strokeBottom}
        strokeWidth="144"
      />
    </svg>
  );
};


export default EllipseBottom;
