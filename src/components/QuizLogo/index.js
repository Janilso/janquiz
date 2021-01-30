import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { logoQuiz } from '../../assets/svg';

const Logo = ({ className }) => {
  return <img className={className} src={logoQuiz} />;
};

Logo.propTypes = {
  className: PropTypes.string,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
