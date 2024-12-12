import QuizPage from "@/page/quiz/QuizPage";
import { Header } from "@/shared/components/Header";
import { Container } from "@chakra-ui/react";

import React from "react";
interface QuizPageProps {
  params: {
    subject: string;
  };
}
const Page = ({ params }: QuizPageProps) => {
  const { subject } = params;
  return (
    <Container maxW={{ base: "94%", lg: "80%" }} margin={"auto"}>
      <Header subject={subject} />
      <QuizPage subject={subject} />
    </Container>
  );
};

export default Page;
