import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Widget from '../../../../src/components/Widget';
import QuizButton from '../../../../src/components/QuizButton';

const QuizResult = ({ points }) => {
  const router = useRouter();
  const isGood = useMemo(() => Boolean(points > 10), [points]);

  const toHome = () => {
    router.replace('/');
  };

  return (
    <Widget>
      <Widget.Header>
        <h1>Resultado</h1>
      </Widget.Header>
      <Widget.Content>
        <div className="subtitle">
          {' '}
          {isGood ? 'Mandou bem' : 'Poxa'} , {router.query?.name}!
        </div>
        <div className="title">
          Você fez {points} ponto{isGood ? 's' : ''}
          {isGood ? ', parabéns' : ''}!
        </div>
        <QuizButton onClick={toHome}>VOLTAR PARA A HOME</QuizButton>
      </Widget.Content>
    </Widget>
  );
};

QuizResult.propTypes = {
  points: PropTypes.number,
};

QuizResult.defaultProps = {
  points: 0,
};

export default QuizResult;
