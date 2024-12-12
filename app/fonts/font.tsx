import localFont from "next/font/local";

const rubikFont = localFont({
  src: [
    {
      path: "./Rubik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Rubik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Rubik-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Rubik-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-rubik",
  display: "swap",
});

export default rubikFont;