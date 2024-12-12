import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          lightestGray: { value: "#F4F6FA" }, // Brand Background
          lightBlue: { value: "#ABC1E1" }, // Light Accent
          mutedBlue: { value: "#626C7F" }, // Secondary Text
          darkerBlue: { value: "#3B4D66" }, // Card Background
          navy: { value: "#313E51" }, // Navigation Background
          primaryPurple: { value: "#A729F5" }, // Main Brand Color
          successGreen: { value: "#26D782" }, // Success
          errorRed: { value: "#EE5454" }, // Error
          pureWhite: { value: "#FFFFFF" }, // White
          pureBlack: { value: "#000000" }, // Black
          darkestNavy: { value: "#001a33" }, // Footer Background
          darkestGray: { value: "#2D3949" }, // Circle Background
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
