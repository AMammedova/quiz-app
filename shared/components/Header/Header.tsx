"use client";
import { Text, Flex } from "@chakra-ui/react";
import ThemeSwitcher from "../ThemeSwitcher";
import HtmlIcon from "@/shared/icons/HtmlIcon";
import AccesIcon from "@/shared/icons/AccesIcon";

interface HeaderProps {
  subject?: string;
  theme?: boolean;
}

export const Header = ({ subject, theme }: HeaderProps) => {
  return (
    <Flex
      w="100%"
      as="header"
      justify={theme === false ? "center" : subject ? "space-between" : "end"}
      align="center"
      p={4}
      position={theme === false ? "static" : "relative"}
      top={{ base: "0rem", md: "4rem", lg: "4rem" }}
    >
      {subject ? (
        <Flex align="center">
          {subject === "html" ? (
            <HtmlIcon />
          ) : subject === "accessibility" ? (
            <AccesIcon />
          ) : null}
          <Text   color={theme === false ? "brand.navy" : undefined}  ml={4} fontWeight="bold" fontSize={{base:"24px",lg:'28px'}}>
            {subject.charAt(0).toUpperCase() + subject.slice(1)}
          </Text>
        </Flex>
      ) : null}
      {theme != false ? <ThemeSwitcher /> : null}
    </Flex>
  );
};
