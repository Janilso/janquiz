import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import QuizButton from '../../../../src/components/QuizButton';
import Widget from '../../../../src/components/Widget';
import QuizOption from '../../../../src/components/QuizOption';
import { iconSuccess, iconError } from '../../../../src/assets/svg';
import styled from 'styled-components';

const StyleResult = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1rem;

  img {
    height: 60px;
  }
`;

const QuizQuestionWidget = (props) => {
  const { question, questionIndex, totalQuestions, onChangeQuestion } = props;
  const [selected, setSelected] = useState(null);
  const [enabledClick, setEnabledClick] = useState(true);
  const [hit, setHit] = useState(null);

  const resetState = () => {
    setSelected(null);
    setEnabledClick(true);
    setHit(null);
  };

  const onSubmit = (e) => {
    e?.preventDefault();
    setHit(selected === question?.answer);
    setEnabledClick(false);
    setTimeout(() => {
      onChangeQuestion();
      resetState();
    }, 1000);
  };

  const renderHit = (acertou) => {
    return (
      <StyleResult>
        <img src={acertou ? iconSuccess : iconError} />
      </StyleResult>
    );
  };

  return (
    <Widget>
      <Widget.Header>
        <h1>
          Pergunta {questionIndex} de {totalQuestions}
        </h1>
      </Widget.Header>
      <img className="image-question" src={question?.image} />
      <Widget.Content>
        <div className="title">{question?.title}</div>
        <div className="subtitle">{question?.description}</div>
        <form
          onSubmit={
            enabledClick
              ? onSubmit
              : (e) => {
                  e.preventDefault();
                }
          }
        >
          {question?.alternatives?.map((alternative, index) => {
            return (
              <QuizOption
                key={index}
                id={index}
                title={alternative}
                onClick={(id) => (enabledClick ? setSelected(id) : null)}
                answer={hit !== null ? (selected === index ? hit : null) : null}
                selected={selected === index}
              />
            );
          })}
          {hit !== null ? (
            renderHit(hit)
          ) : (
            <QuizButton type="submit" typeButton="active" disabled={selected === null}>
              CONFIRMAR
            </QuizButton>
          )}
        </form>
      </Widget.Content>
    </Widget>
  );
};

QuizQuestionWidget.propTypes = {
  question: PropTypes.object,
  questionIndex: PropTypes.number,
  totalQuestions: PropTypes.number,
  onChangeQuestion: PropTypes.func,
};

QuizQuestionWidget.defaultProps = {
  question: null,
  questionIndex: 1,
  totalQuestions: 0,
  onChangeQuestion: () => {},
};

export default QuizQuestionWidget;
