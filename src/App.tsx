import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import PokePage from './components/pages/PokePage';
import theme from './themes/default';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${theme.fonts.primary};
    min-height: 100%;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <PokePage />
    </>
  );
}

export default App;
