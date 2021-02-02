import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Widget from '../../../../src/components/Widget';
import QuizButton from '../../../../src/components/QuizButton';
import styled from 'styled-components';

const StyleDeitals = styled.div`
  display: flex;
  flex-direction: column;
`;

StyleDeitals.Item = styled.div`
  color: ${({ theme: { colors }, isCorrect }) => (isCorrect ? colors.success : colors.wrong)};
  &:not(:first-child) {
    margin-top: 1rem;
  }
`;

const QuizResult = ({ results }) => {
  const getPoints = () => results?.filter(Boolean)?.length * 10;

  const router = useRouter();
  const points = useMemo(() => getPoints(), [results]);
  const isGood = useMemo(() => Boolean(points > 10), [points]);

  const toHome = () => router.replace('/');

  return (
    <Widget>
      <Widget.Header>
        <h1>Resultado</h1>
      </Widget.Header>
      <Widget.Content>
        <div className="subtitle">
          {isGood ? 'Mandou bem' : 'Poxa'} , {router.query?.name}!
        </div>
        <div className="title">
          Você fez {points} ponto{isGood ? 's' : ''}
          {isGood ? ', parabéns' : ''}!
        </div>
        <StyleDeitals>
          {results?.map((item, index) => {
            return (
              <StyleDeitals.Item key={index} isCorrect={item}>
                • {index + 1} - Você {item ? 'acertou :)' : 'errou :('}
              </StyleDeitals.Item>
            );
          })}
        </StyleDeitals>
        <QuizButton onClick={toHome}>VOLTAR PARA A HOME</QuizButton>
      </Widget.Content>
    </Widget>
  );
};

QuizResult.propTypes = {
  results: PropTypes.array,
};

QuizResult.defaultProps = {
  results: [],
};

export default QuizResult;
