import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';
import themes from '../../src/utils/themes';

const QuizDaGaleraPage = (props) => {
  const { bg, theme, questions } = props;

  const themeLocal = themes.normal;

  return (
    <ThemeProvider theme={theme || themeLocal}>
      <QuizScreen externalQuestions={questions} externalBg={bg} />
    </ThemeProvider>
  );
};

QuizDaGaleraPage.propTypes = {
  bg: PropTypes.string,
  theme: PropTypes.object,
  questions: PropTypes.array,
};

QuizDaGaleraPage.defaultProps = {
  bg: '',
  theme: null,
  questions: [],
};

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
      .catch((err) => console.error(err));

    return {
      props: {
        bg: dbExterno?.bg ?? null,
        theme: dbExterno?.theme ?? null,
        questions: dbExterno?.questions ?? null,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}

export default QuizDaGaleraPage;
