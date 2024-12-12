export interface Question {
    id: number;
    question: string;
    options: string[];
    answer: number;
  }
  
  export type QuestionsBySubject = Record<string, Question[]>;