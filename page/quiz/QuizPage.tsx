"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { answerQuestion, nextQuestion, restartQuiz } from "@/redux/quizSlice";
import { Box, Text, Stack } from "@chakra-ui/react";
import { CustomButton } from "@/shared/components/Button";
import OptionIcon from "@/page/quiz/icons/OptionIcon";
import { getQuestionsBySubject } from "./utils/utils";
import { getButtonState, getButtonStyles } from "./utils/utils";
import { ProgressBar, ProgressRoot } from "@/shared/components/ui/progress";
import InCorrectIcon from "./icons/InCorrectIcon";
import CorrectIcon from "./icons/CorrectIcon";
import ScorePage from "./components/ScorePage";

const QuizPage = ({ subject }: { subject: string }) => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, isQuizComplete, score } = useSelector(
    (state: RootState) => state.quiz
  );

  const questions = getQuestionsBySubject(subject);
  const currentQuestion = questions[currentQuestionIndex];
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [submittedAnswer, setSubmittedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredButtonIndex, setHoveredButtonIndex] = useState<number | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) {
      setError("Please select an answer!");
      return;
    }
    setError(null);
    setIsSubmitted(true);
    setSubmittedAnswer(selectedAnswer);

    const isCorrect = selectedAnswer === currentQuestion.answer;
    dispatch(
      answerQuestion({
        questionId: currentQuestion.id,
        answer: selectedAnswer,
        isCorrect,
      })
    );
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setSubmittedAnswer(null);
    setIsSubmitted(false);

    dispatch(
      nextQuestion({
        totalQuestions: questions.length,
      })
    );
  };
  const handleRestartQuiz = () => {
    setSelectedAnswer(null);
    setSubmittedAnswer(null);
    setIsSubmitted(false);
    dispatch(restartQuiz());
  };
  const getButtonIcon = (
    index: number,
    correctAnswer: number,
    submittedAnswer: number | null,
    isSubmitted: boolean
  ) => {
    if (isSubmitted) {
      if (index === correctAnswer) return <CorrectIcon />;
      if (index === submittedAnswer && index !== correctAnswer)
        return <InCorrectIcon />;
    }
    return null;
  };

  if (isQuizComplete) {
    return (
      <ScorePage
        score={score}
        totalQuestions={questions.length}
        subject={subject}
        onRestart={handleRestartQuiz}
      />
    );
  }

  const progressPercentage =
    ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <Box
      display="flex"
      flexDirection="column-reverse"
      justifyContent="center"
      gap={4}
      position="relative"
      top={{ base: "4rem", md: "6rem", lg: "6rem" }}
      w="100%"
    >
      <Box
        w="100%"
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center", lg: "space-between" }}
        gap={{ base: 12, lg: 24 }}
      >
        <Box
          w={{ base: "100%", lg: "50%" }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Text
              fontSize={{ base: "16px", lg: "20px" }}
              fontStyle="italic"
              mb={{ base: 0, lg: 4 }}
              color={{ base: "brand.navy", _dark: "brand.pureWhite" }}
            >
              Question {currentQuestionIndex + 1} of {questions.length}
            </Text>
            <Text
              fontSize={{ base: "30px", lg: "36px" }}
              color={{ base: "brand.navy", _dark: "brand.pureWhite" }}
              mt={{ base: 1, lg: 4 }}
            >
              {currentQuestion.question}
            </Text>
          </Box>
          <ProgressRoot
            mt={{ base: "2rem", lg: "0" }}
            value={progressPercentage}
            size="md"
            colorPalette="purple"
            shape="rounded"
          >
            <ProgressBar
              bg={{ base: "brand.pureWhite", _dark: "brand.darkerBlue" }}
              rounded={"full"}
            />
          </ProgressRoot>
        </Box>
        <Box
          w={{ base: "100%", lg: "50%" }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Stack gap={4} mt={4}>
            {currentQuestion.options.map((option, index) => {
              const buttonState = getButtonState(
                index,
                currentQuestion.answer,
                submittedAnswer,
                selectedAnswer,
                isSubmitted
              );
              const buttonStyles = getButtonStyles(buttonState);

              return (
                <CustomButton
                  key={index}
                  customVariant="ghost"
                  iconPosition="start"
                  onClick={() => setSelectedAnswer(index)}
                  width={{ base: "100%", md: "460px", lg: "690px" }}
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  border={buttonStyles.border}
                  onMouseEnter={() => setHoveredButtonIndex(index)}
                  onMouseLeave={() => setHoveredButtonIndex(null)}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={4}
                  >
                    <OptionIcon
                      text={
                        index === 0
                          ? "A"
                          : index === 1
                          ? "B"
                          : index === 2
                          ? "C"
                          : "D"
                      }
                      state={buttonState}
                      isHovered={hoveredButtonIndex === index}
                    />{" "}
                    {option}
                  </Box>
                  {getButtonIcon(
                    index,
                    currentQuestion.answer,
                    submittedAnswer,
                    isSubmitted
                  )}
                </CustomButton>
              );
            })}
          </Stack>
          {isSubmitted ? (
            <CustomButton
              width={{ base: "100%", md: "460px", lg: "690px" }}
              customVariant="solid"
              mt={10}
              onClick={
                currentQuestionIndex + 1 === questions.length
                  ? () => dispatch({ type: "quiz/finishQuiz" })
                  : handleNextQuestion
              }
            >
              {currentQuestionIndex + 1 === questions.length
                ? "Finish"
                : "Next Question"}
            </CustomButton>
          ) : (
            <CustomButton
              width={{ base: "100%", md: "460px", lg: "690px" }}
              customVariant="solid"
              mt={10}
              onClick={handleSubmitAnswer}
            >
              Submit Answer
            </CustomButton>
          )}
          {error && (
            <Box
              mt={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="red.500"
              fontSize="md"
              gap={2}
            >
              <InCorrectIcon />
              <Text>{error}</Text>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default QuizPage;
