import React from 'react';
import Loader from '../../../../src/components/Loader';
import Widget from '../../../../src/components/Widget';

const QuizLoader = () => {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>
        <Loader />
      </Widget.Content>
    </Widget>
  );
};

export default QuizLoader;
