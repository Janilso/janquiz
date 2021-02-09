// import styled from 'styled-components';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import externalURIs from '../src/utils/mock/external';
import { github } from '../src/utils/constants/site';

import { backgroundMarvel } from '../src/assets/images';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import QuizInput from '../src/components/QuizInput';
import QuizButton from '../src/components/QuizButton';
import QuizOption from '../src/components/QuizOption';
import QuizContainer from '../src/components/QuizContainer';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const external = useMemo(() => externalURIs(), []);

  const onSubmit = (e) => {
    e?.preventDefault();
    if (name) router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground image={backgroundMarvel}>
      <QuizContainer>
        <QuizLogo />

        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { x: 0, opacity: 1 },
            hidden: { x: -20, opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
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
        <Widget
          as={motion.section}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            show: { x: 0, opacity: 1 },
            hidden: { x: -20, opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>lorem ipsum dolor sit ametass...</p>
            {external?.map((linkExterno) => {
              const [projectName, githubUser] = linkExterno
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '')
                .split('.');
              return (
                <QuizOption
                  key={linkExterno}
                  title={`${githubUser}/${projectName}`}
                  hoverble={false}
                  onClick={() => {
                    router.push(`/quiz/${projectName}___${githubUser}`);
                  }}
                />
              );
            })}
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <GitHubCorner projectUrl={github} />
    </QuizBackground>
  );
}
