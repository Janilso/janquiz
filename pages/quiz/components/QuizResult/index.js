import { useRouter } from 'next/router';
import React from 'react';
import Widget from '../../../../src/components/Widget';

const QuizResult = () => {
  const router = useRouter();

  return (
    <Widget>
      <Widget.Header>
        <h1>Resultado</h1>
      </Widget.Header>
      <Widget.Content>
        <div className="subtitle">Mandou bem, {router.query?.name}!</div>
        <div className="title">Você fez 100 pontos, parabéns!</div>
      </Widget.Content>
    </Widget>
  );
};

export default QuizResult;
