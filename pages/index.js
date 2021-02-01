// import styled from 'styled-components';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { backgroundMarvel } from '../src/assets/images';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import QuizInput from '../src/components/QuizInput';
import QuizButton from '../src/components/QuizButton';
import QuizOption from '../src/components/QuizOption';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e?.preventDefault();
    if (name) router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground image={backgroundMarvel}>
      <QuizContainer>
        <QuizLogo />

        <Widget>
          <Widget.Header>
            <h1>Marvel Studios</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste os seus conhecimentos sobre o universo Marvel e divirta-se criando o seu AluraQuiz!</p>
            <form onSubmit={onSubmit}>
              <QuizInput
                name="nome"
                placeholder="Diz aí seu nome pra jogar :)"
                onChange={(e) => setName(e.target?.value)}
                value={name}
              />

              <QuizButton type="submit" typeButton="active" disabled={!name?.length}>
                JOGAR
              </QuizButton>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>lorem ipsum dolor sit ametass...</p>
            <QuizOption title="clebinhodj/showdomilhaoalura" hoverble={false} />
            <QuizOption title="joaokleberprogramador/aluraqiz" hoverble={false} />
            <QuizOption title="demervalthelegend/imersao-alura" hoverble={false} />
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Janilso/janquiz" />
    </QuizBackground>
  );
}
