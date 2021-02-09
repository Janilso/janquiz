import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import QuizLogo from '../../components/QuizLogo';
import QuizQuestionWidget from './components/QuizQuestionWidget';
import QuizLoader from './components/QuizLoader';
import QuizResult from './components/QuizResult';
import GitHubCorner from '../../components/GitHubCorner';
import { github } from '../../utils/constants/site';

const screenStates = {
  LOADING: 'loading',
  QUIZ: 'quiz',
  RESULT: 'result',
};

const QuizScreen = (props) => {
  const { externalQuestions: questions, externalBg } = props;

  const [question, setQuestion] = useState(questions?.[0] || null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [screanState, setScreanState] = useState(screenStates.LOADING);

  const handleChangeQuestion = ({ acertou }) => {
    const newIndex = currentIndex + 1;
    const isNextQuestion = newIndex < questions?.length;
    setResults((prevPoints) => [...prevPoints, acertou]);
    if (isNextQuestion) {
      setScreanState(screenStates.LOADING);
      setTimeout(() => {
        setQuestion(questions[newIndex]);
        setCurrentIndex(newIndex);
        setScreanState(screenStates.QUIZ);
      }, 700);
    } else {
      setScreanState(screenStates.RESULT);
    }
  };

  useEffect(() => {
    setTimeout(() => setScreanState(screenStates.QUIZ), 2000);
  }, []);

  return (
    <QuizBackground image={externalBg}>
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
      <GitHubCorner projectUrl={github} />
    </QuizBackground>
  );
};

QuizScreen.propTypes = {
  externalQuestions: PropTypes.array,
  externalBg: PropTypes.string,
};

QuizScreen.defaultProps = {
  externalQuestions: [],
  externalBg: '',
};

export default QuizScreen;
