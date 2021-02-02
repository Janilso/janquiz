import React, { useEffect, useMemo, useState } from 'react';
import { backgroundMarvel } from '../../src/assets/images';
import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';
import QuizLogo from '../../src/components/QuizLogo';
import QuizQuestionWidget from './components/QuizQuestionWidget';
import questionsMock from '../../src/mock/questions';
import GitHubCorner from '../../src/components/GitHubCorner';
import QuizLoader from './components/QuizLoader';
import QuizResult from './components/QuizResult';

const screenStates = {
  LOADING: 'loading',
  QUIZ: 'quiz',
  RESULT: 'result',
};

const HomeQuiz = () => {
  const questions = useMemo(() => questionsMock(), []);
  const [question, setQuestion] = useState(questions[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [screanState, setScreanState] = useState(screenStates.LOADING);

  const handleChangeQuestion = ({ acertou }) => {
    const newIndex = currentIndex + 1;
    const isNextQuestion = newIndex < questions?.length;
    setResults((prevPoints) => [...prevPoints, acertou]);
    if (isNextQuestion) {
      setScreanState(screenStates.LOADING);
      // setTimeout(() => {
      setQuestion(questions[newIndex]);
      setCurrentIndex(newIndex);
      setScreanState(screenStates.QUIZ);
      // }, 1000);
    } else {
      setScreanState(screenStates.RESULT);
    }
  };

  useEffect(() => {
    setTimeout(() => setScreanState(screenStates.QUIZ), 2000);
  }, []);

  return (
    <QuizBackground image={backgroundMarvel}>
      <QuizContainer>
        <QuizLogo />
        {screanState === screenStates.QUIZ && (
          <QuizQuestionWidget
            onChangeQuestion={handleChangeQuestion}
            question={question}
            totalQuestions={questions?.length}
            questionIndex={currentIndex + 1}
          />
        )}
        {screanState === screenStates.RESULT && <QuizResult results={results} />}
        {screanState === screenStates.LOADING && <QuizLoader />}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Janilso/janquiz" />
    </QuizBackground>
  );
};

export default HomeQuiz;
