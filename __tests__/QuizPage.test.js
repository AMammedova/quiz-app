import { render, screen, fireEvent } from '@testing-library/react';
import QuizPage from '@/page/quiz/QuizPage';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '@/redux/quizSlice';

const renderWithRedux = (component) => {
  const store = configureStore({
    reducer: { quiz: quizReducer },
  });

  return render(<Provider store={store}>{component}</Provider>);
};

describe('QuizPage Tests', () => {
  test('Navigates between questions', () => {
    renderWithRedux(<QuizPage subject="html" />);
    expect(screen.getByText(/What is a semantic tag\?/)).toBeInTheDocument();
    fireEvent.click(screen.getByText('Header'));
    fireEvent.click(screen.getByText('Next Question'));
    expect(
      screen.getByText(/What is the correct HTML element for inserting a line break\?/)
    ).toBeInTheDocument();
  });
});
