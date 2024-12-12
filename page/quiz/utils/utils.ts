import { allQuestions } from "../constants/data";
import { Question } from "../models/types";

export function getQuestionsBySubject(subject: string): Question[] {
  return allQuestions[subject] || [];
}

export const getButtonState = (
  index: number,
  currentAnswer: number,
  submittedAnswer: number | null,
  selectedAnswer: number | null,
  isSubmitted: boolean
): string => {
  if (isSubmitted) {
    if (index === currentAnswer) return "correct";
    if (index === submittedAnswer && index !== currentAnswer)
      return "incorrect";
  }
  if (index === selectedAnswer) return "active";
  return "idle";
};

export const getButtonStyles = (
  state: string
): { bg?: string; color?: string; border?: string } => {
  switch (state) {
    case "idle":
      return { bg: "gray.800", color: "black" };
    case "active":
      return { border: "2px solid #A729F5" };
    case "correct":
      return { border: "2px solid #26D782" };
    case "incorrect":
      return { border: "2px solid #EE5454" };
    default:
      return {};
  }
};

