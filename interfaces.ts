interface QuizData {
  // "title": "What cheese are you?"
  title: string;
  //   "subtitle": "This quiz isn't cheesy or anything like that...",
  subtitle: string;
  //   "quizId": "3483j33",
  quizId: string;
  //   array of content (see Content interface below)
  content: Content[];
  //     array of answers
  answers: Answer[];
}

interface Answer {
  text: string;
  image: string;
  alt: string;
  bio: string;
  combination: string[];
}

interface Content {
  // "id": 2,
  id: number;
  //   "text": "Pick some food:"
  text: string;
  // an array of 4 question choices (ex. pizza, pasta, salad, hamburger)
  questions: Question[];
}
interface Question {
  text: string;
  image: string;
  alt: string;
  credit: string;
}

export type { QuizData, Answer, Content, Question };
