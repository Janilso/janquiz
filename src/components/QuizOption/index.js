import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuizOption = (props) => {
  const { title, selected, onClick, right, disabled, id, hoverble } = props;

  return (
    <StyleQuizOption
      onClick={() => onClick(id)}
      selected={selected}
      right={right}
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
  right: PropTypes.bool,
  disabled: PropTypes.bool,
  hoverble: PropTypes.bool,
};

QuizOption.defaultProps = {
  id: '',
  title: '',
  onClick: () => {},
  selected: false,
  right: null,
  disabled: false,
  hoverble: true,
};

const StyleQuizOption = styled.div`
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
  padding: 0.7rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme: { colors }, selected, right }) => {
    if (right !== null && right) {
      return colors.success;
    }
    if (right !== null && !right) {
      return colors.wrong;
    }
    return selected ? colors.selected : colors.darkenMainBg;
  }};
  margin-top: 0.5rem;
  transition: ${({ theme }) => theme.transition};

  span {
    word-break: break-all;
    font-size: 14px;
    line-height: 17px;
  }

  &:hover {
    background: ${({ theme: { colors }, disabled, hoverble }) => (disabled || !hoverble ? '' : colors.selected)};
  }
`;

export default memo(QuizOption);
