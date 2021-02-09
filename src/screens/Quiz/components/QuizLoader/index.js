import React from 'react';
import Loader from '../../../../components/Loader';
import Widget from '../../../../components/Widget';

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
