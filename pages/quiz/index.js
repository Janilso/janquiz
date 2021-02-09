import React, { useMemo } from 'react';
import { backgroundMarvel } from '../../src/assets/images';
import questionsMock from '../../src/utils/mock/questions';
import { ThemeProvider } from 'styled-components';
import themes from '../../src/utils/themes';
import QuizScreen from '../../src/screens/Quiz';
import getAllQuestions from '../../src/backend/questions';

const MyQuiz = ({ loading = false, questionsBack = [] }) => {
  // console.log({ loading, questionsBack });
  const theme = useMemo(() => themes.normal, []);
  const questions = useMemo(() => questionsMock(), []);

  return (
    <ThemeProvider theme={theme}>
      <QuizScreen externalQuestions={questions} externalBg={backgroundMarvel} />
    </ThemeProvider>
  );
};

export async function getServerSideProps(context) {
  return new Promise((resolve, reject) => {
    getAllQuestions()
      .then((data) => {
        // console.log('questions', data);

        resolve({ props: { loading: false, questionsBack: data } });
      })
      .catch(() => {
        reject({ props: { loading: false, questionsBack: [] } });
      });
  });
}

export default MyQuiz;
