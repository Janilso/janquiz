// import styled from 'styled-components';

import styled from 'styled-components';
import { backgroundMarvel } from '../src/assets/images';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 2rem;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 1rem;
  }
`;

export default function Home() {
  return (
    <QuizBackground image={backgroundMarvel}>
      <QuizContainer>
        <QuizLogo />

        <Widget>
          <Widget.Header>
            <h1>Quiz CSS da Alura</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Teste os seus conhecimentos sobre CSS e vamos ver quantos layouts
              você vai deixar de quebrar
            </p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit ameta...</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}
