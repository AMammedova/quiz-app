import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { CustomButton } from "@/shared/components/Button";
import { Header } from "@/shared/components/Header";

interface ScorePageProps {
  score: number;
  totalQuestions: number;
  subject: string;
  onRestart: () => void;
}

const ScorePage: React.FC<ScorePageProps> = ({
  score,
  totalQuestions,
  subject,
  onRestart,
}) => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
      alignItems="start"
      justifyContent={{ base: "center", lg: "space-between" }}
      gap={{ base: 12, lg: 24 }}
      position="relative"
      top={{ base: "1rem", md: "4rem", lg: "6rem" }}
    >
      <Box w={{ base: "100%", lg: "50%" }}>
        <Text
          fontSize={{ base: "52px", md: "64px", lg: "80px" }}
          fontWeight="normal"
          color={{ base: "brand.navy", _dark: "brand.pureWhite" }}
        >
          Quiz completed
        </Text>
        <Text
          fontSize={{ base: "52px", md: "64px", lg: "80px" }}
          fontWeight="bold"
          color={{ base: "brand.navy", _dark: "brand.pureWhite" }}
        >
          You scored...
        </Text>
      </Box>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={2}
          padding={8}
          borderRadius="24px"
          backgroundColor="#F9FAFB"
          boxShadow="base"
          background="white"
        >
          <Header theme={false} subject={subject} />
          <Text
            fontSize={{ base: "56px", md: "64px", lg: "80px" }}
            fontWeight="bold"
            color="black"
          >
            {score}
          </Text>
          <Text fontSize="18px" color="gray.600">
            out of {totalQuestions}
          </Text>
        </Box>
        <CustomButton
          width={{ base: "100%", md: "80%", lg: "60%" }}
          customVariant="solid"
          onClick={onRestart}
          mt={10}
        >
          Play Again
        </CustomButton>
      </Box>
    </Box>
  );
};

export default ScorePage;
