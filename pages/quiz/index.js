import React, { useMemo } from 'react';
import { backgroundMarvel } from '../../src/assets/images';
import questionsMock from '../../src/utils/mock/questions';
import { ThemeProvider } from 'styled-components';
import themes from '../../src/utils/themes';
import QuizScreen from '../../src/screens/Quiz';

const MyQuiz = () => {
  const theme = useMemo(() => themes.normal, []);
  const questions = useMemo(() => questionsMock(), []);

  return (
    <ThemeProvider theme={theme}>
      <QuizScreen externalQuestions={questions} externalBg={backgroundMarvel} />
    </ThemeProvider>
  );
};

export default MyQuiz;
