'use client';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: { questionId: number; answer: number; isCorrect: boolean }[];
  isQuizComplete: boolean;
}

const initialState: QuizState = {
  currentQuestionIndex: 0,
  score: 0,
  answers: [],
  isQuizComplete: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion(
      state,
      action: PayloadAction<{ questionId: number; answer: number; isCorrect: boolean }>
    ) {
      state.answers.push(action.payload);
      if (action.payload.isCorrect) {
        state.score += 1; 
      }
    },

    nextQuestion(state, action: PayloadAction<{ totalQuestions: number }>) {
      const { totalQuestions } = action.payload;
      if (state.currentQuestionIndex + 1 < totalQuestions) {
        state.currentQuestionIndex += 1;
      } else {
        state.isQuizComplete = true; 
      }
    },

    restartQuiz(state) {
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.answers = [];
      state.isQuizComplete = false; 
    },
    finishQuiz(state) {
      state.isQuizComplete = true;
    },
  },
});

export const { answerQuestion, nextQuestion, restartQuiz, finishQuiz } = quizSlice.actions;
export default quizSlice.reducer;
