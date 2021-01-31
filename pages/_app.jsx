/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

import themes from '../src/utils/themes';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: Ubuntu,'Lato', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
`;

const theme = themes.normal;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Test</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Imbue:wght@300;400;500;600;700;800;900&family=Ubuntu:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
