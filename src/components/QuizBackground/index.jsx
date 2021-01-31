/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = ({ className, children }) => (
  <div className={className}>{children}</div>
);

Background.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

const QuizBackground = styled(Background)`
  width: 100%;
  background-size: cover;
  background-position: center right;
  background-image: url(${(props) => props.image});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: '';
      background-size: cover;
      background-position: center right;
      background-image: linear-gradient(
          transparent,
          transparent,
          ${({ theme }) => theme.colors.mainBg}
        ),
        url(${({ image }) => image});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
