import React from 'react';
import './App.css';
import { ScoreProvider } from "./utils/Context";
import Cards from "./components/cards";
import Nav from "./components/Nav";

function App() {

  return (
    <ScoreProvider>
      <Nav />
      <Cards />
    </ScoreProvider>
  );
};

export default App;
