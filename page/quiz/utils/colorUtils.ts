export const getBackgroundColor = (state: string, isHovered: boolean): string => {
    if (isHovered) {
      if (state === "correct") return "green.500";
      if (state === "incorrect") return "red.500";
      if (state === "active") return "brand.primaryPurple";
      return "#F6E7FF";
    }
    if (state === "correct") return "green.500";
    if (state === "incorrect") return "red.500";
    if (state === "idle") return "brand.lightestGray";
    return "brand.primaryPurple";
  };
  
  export const getTextColor = (state: string, isHovered: boolean): string => {
    if (isHovered) {
      if (state === "correct" || state === "incorrect" || state === "active")
        return "white";
      return "brand.primaryPurple";
    }
    if (state === "idle") return "brand.navy";
    return "white";
  };
  