/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const QuizInput = (props) => {
  const { onChange, placeholder, value, ...rest } = props;

  return <StyleQuizInput onChange={onChange} placeholder={placeholder} value={value} {...rest} />;
};

QuizInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

QuizInput.defaultProps = {
  onChange: () => {},
  placeholder: '',
  value: '',
};

const StyleQuizInput = styled.input`
  color: red;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.contrastText};
  padding: 0.7rem 1rem;
  width: 100%;
  transition: ${({ theme }) => theme.transition};
  &:focus {
    border: 1px solid
      ${(props) => {
        const { theme } = props || {};
        const { colors } = theme || {};

        return !props?.value?.length ? colors.wrong : colors.success;
      }};
  }

  &::-webkit-input-placeholder,
  &:-moz-placeholder,
  &::-moz-placeholder,
  &:-ms-input-placeholder,
  &::placeholder {
    color: ${({ theme }) => theme.colors.inputText};
    font-size: 14px;
  }
`;

export default QuizInput;
