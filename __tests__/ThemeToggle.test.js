import { render, fireEvent, screen } from "@testing-library/react";
import ThemeSwitcher from "@/shared/components/ThemeSwitcher/ThemeSwitcher";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

describe("ThemeSwitcher Tests", () => {
  test("Toggles between light and dark mode", () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="light">
        <ChakraProvider>
          <ThemeSwitcher />
        </ChakraProvider>
      </ThemeProvider>
    );

    const toggleSwitch = screen.getByRole("switch");
    const sunIcon = screen.getByText(
      (content, element) => element.tagName === "svg" && content.includes("Sun")
    );
    const moonIcon = screen.getByText(
      (content, element) =>
        element.tagName === "svg" && content.includes("Moon")
    );
    expect(document.documentElement).toHaveClass("light");
    expect(sunIcon).toBeInTheDocument();
    expect(moonIcon).toBeInTheDocument();

    fireEvent.click(toggleSwitch);

    expect(document.documentElement).toHaveClass("dark");
    expect(sunIcon).toBeInTheDocument();
    expect(moonIcon).toBeInTheDocument();
  });
});
