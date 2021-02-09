/* eslint-disable react/no-children-prop */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getColor = (props) => {
  const { theme, typeButton } = props || {};
  const { colors } = theme || {};
  switch (typeButton) {
    case 'primary':
      return colors?.primary;
    case 'secondary':
      return colors?.secondary;
    case 'active':
      return colors?.active ?? colors?.primary;
    default:
      return colors?.primary;
  }
};

const StyleQuizButton = styled.button`
  outline: none;
  border: none;
  transition: ${({ theme: { transition } }) => transition};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${({ theme: { boxShadow1 } }) => boxShadow1};
  min-width: 100px;
  width: ${(props) => props.width};
  padding: 0.7rem 1rem;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 1.25px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 1rem;
  color: ${({ theme: { colors } }) => colors.contrastText};

  background-color: ${getColor};

  &:hover {
    background-color: ${getColor}8F;
  }

  &:disabled {
    cursor: auto;
    background-color: ${({ theme: { colors } }) => colors.desactive};
  }
`;

const QuizButton = (props) => {
  const { type, typeButton, width, disabled, onClick, children } = props;
  return (
    <StyleQuizButton
      type={type}
      typeButton={typeButton}
      width={width}
      disabled={disabled}
      onClick={onClick}
      children={children}
    />
  );
};

QuizButton.propTypes = {
  type: PropTypes.string,
  typeButton: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.element,
};

QuizButton.defaultProps = {
  type: 'button',
  typeButton: 'primary',
  width: '100%',
  disabled: false,
  onClick: () => {},
  children: <></>,
};

export default memo(QuizButton);
