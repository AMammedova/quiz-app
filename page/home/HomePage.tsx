"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { CustomButton } from "@/shared/components/Button";
import HtmlIcon from "@/shared/icons/HtmlIcon";
import CssIcon from "@/shared/icons/CssIcon";
import JsIcon from "@/shared/icons/JsIcon";
import AccesIcon from "@/shared/icons/AccesIcon";

const HomePage = () => {
  const router = useRouter();

  const subjects = [
    { name: "HTML", icon: HtmlIcon },
    { name: "CSS", icon: CssIcon },
    { name: "Javascript", icon: JsIcon },
    { name: "Accessibility", icon: AccesIcon },
  ];

  const handleSubjectSelect = (subject: string) => {
    router.push(`/quiz/${subject.toLowerCase()}`);
  };

  return (
    <Flex
      w="100%"
      flexDirection={{ base: "column", lg: "row" }}
      align={{ base: "center", lg: "start" }}
      justify={{ base: "center", lg: "space-between" }}
      gap={{ base: 6, lg: 12 }}
      p={4}
      position="relative"
      top={{ base: "2rem", md: "4rem", lg: "6rem" }}
    >
      <Box w="100%" mb={6} textAlign={{ base: "start", lg: "start" }}>
        <Text
          fontSize={{ base: "4xl", md: "6xl", lg: "56px", xl: "64px" }}
          fontWeight="normal"
          color={{ base: "brand.navy", _dark: "brand.pureWhite" }}
          letterSpacing="3px"
        >
          Welcome to the <br />
        </Text>
        <Text
          fontSize={{ base: "4xl", md: "6xl", lg: "52px", xl: "64px" }}
          fontWeight="bold"
          color={{ base: "brand.navy", _dark: "brand.pureWhite" }}
          letterSpacing="3px"
        >
          Frontend Quiz!
        </Text>
        <Text
          fontSize={{ base: "md", lg: "20px" }}
          color={{ base: "brand.mutedBlue", _dark: "brand.pureWhite" }}
          mt={6}
          fontStyle="italic"
        >
          Pick a subject to get started.
        </Text>
      </Box>

      <Stack
        gap={{ base: 3, md: 4 }}
        direction={{ base: "column" }}
        align="center"
        mb={6}
        w="100%"
      >
        {subjects.map((subject) => (
          <CustomButton
            key={subject.name}
            customVariant="ghost"
            icon={subject.icon}
            iconPosition="start"
            onClick={() => handleSubjectSelect(subject.name)}
            width={{ base: "100%", md: "460px", lg: "480px" }}
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
          >
            {subject.name}
          </CustomButton>
        ))}
      </Stack>
    </Flex>
  );
};

export default HomePage;
