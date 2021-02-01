import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';
import { logoQuiz } from '../../assets/svg';

const Logo = ({ className }) => (
  <div className={className}>
    <Image src={logoQuiz} width="auto" height={70} objectFit="contain" />
  </div>
);

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
    justify-content: flex-start;
    img {
      object-position: left center !important;
    }
  }
`;

export default QuizLogo;
