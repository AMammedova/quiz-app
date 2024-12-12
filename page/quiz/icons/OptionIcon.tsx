import { Box } from "@chakra-ui/react";
import React from "react";
import { getBackgroundColor, getTextColor } from "@/page/quiz/utils/colorUtils";

interface OptionIconProps {
  text: string;
  state: string;
  isHovered: boolean;
}

const OptionIcon: React.FC<OptionIconProps> = ({ text, state, isHovered }) => {
  return (
    <Box
      as="span"
      bg={getBackgroundColor(state, isHovered)}
      color={getTextColor(state, isHovered)}
      padding="8px"
      rounded="8px"
      transition="background-color 0.3s ease, color 0.3s ease"
    >
      {text}
    </Box>
  );
};

export default OptionIcon;
