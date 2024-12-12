"use client";
import React from "react";
import { Button as ChakraButton, ButtonProps, Box } from "@chakra-ui/react";

export interface CustomButtonProps extends ButtonProps {
  customVariant?: "solid" | "ghost";
  icon?: React.ElementType;
  iconPosition?: "start" | "end";
  state?: "idle" | "active" | "correct" | "incorrect";
}
const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  function CustomButton(
    {
      customVariant = "solid",
      icon,
      iconPosition = "start",
      state = "idle",
      children,
      ...rest
    },
    ref
  ) {
    const getVariantStyles = () => {
      switch (customVariant) {
        case "solid":
          return {
            bg: "brand.primaryPurple",
            color: "white",
            rounded: "12px",
            padding: "12px 32px",
            display: "flex",
            justifyContent: "center",
            _hover: { bg: "purple.400" },
            _active: { bg: "purple.600" },
          };
        case "ghost":
          return {
            display: "flex",
            justifyContent: "start",
            bg: {
              base: "brand.pureWhite",
              _dark: "brand.darkerBlue",
            },
            color: {
              base: "brand.navy",
              _dark: "brand.pureWhite",
            },
            rounded: "16px",
            shadow: "2px",
          };

        default:
          return {};
      }
    };

    const renderIcon = icon ? (
      <Box
        display="inline-flex"
        mr={iconPosition === "start" ? 2 : 0}
        ml={iconPosition === "end" ? 2 : 0}
      >
        {React.createElement(icon)}
      </Box>
    ) : null;

    return (
      <ChakraButton
        ref={ref}
        {...getVariantStyles()}
        {...rest}
        padding="30px 12px"
        textStyle="md"
        w="100%"
        transition="background-color 0.3s ease, color 0.3s ease"
      >
        {iconPosition === "start" && renderIcon}
        {children}
        {iconPosition === "end" && renderIcon}
      </ChakraButton>
    );
  }
);

export default CustomButton;
