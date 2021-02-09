import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleQuizOption = styled.div`
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
  padding: 0.7rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme: { colors }, selected, answer }) => {
    if (answer !== null && answer) {
      return colors.success;
    }
    if (answer !== null && !answer) {
      return colors.wrong;
    }
    return selected ? colors?.selected ?? colors?.primary : colors?.darkenMainBg ?? colors?.secondary;
  }};
  margin-top: 0.5rem;
  transition: ${({ theme }) => theme.transition};

  span {
    word-break: break-all;
    font-size: 14px;
    line-height: 17px;
  }

  &:hover {
    background: ${({ theme: { colors }, disabled, hoverble }) =>
      disabled || !hoverble ? '' : colors?.selected ?? colors?.primary};
  }
`;

const QuizOption = (props) => {
  const { title, selected, onClick, answer, disabled, id, hoverble } = props;

  return (
    <StyleQuizOption
      onClick={() => onClick(id)}
      selected={selected}
      answer={answer}
      disabled={disabled}
      hoverble={hoverble}
    >
      <span>{title}</span>
    </StyleQuizOption>
  );
};

QuizOption.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  answer: PropTypes.bool,
  disabled: PropTypes.bool,
  hoverble: PropTypes.bool,
};

QuizOption.defaultProps = {
  id: '',
  title: '',
  onClick: () => {},
  selected: false,
  answer: null,
  disabled: false,
  hoverble: true,
};

export default memo(QuizOption);
