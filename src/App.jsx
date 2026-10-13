import NumberConverter from './components/NumberConverter/NumberConverter.jsx';
import React from 'react';
import Title from './components/Title/Title.jsx';
import Footer from './components/Footer/Footer.jsx';
import BottomWidget from './components/BottomWidgets/BottomWidget.jsx';
import TopWidgets from './components/TopWidgets/TopWidgets.jsx';
import PriceInWords from './components/PriceInWords/PriceInWords.jsx';

function App() {
  return (
    <main>
      <header>
        <p className="appEyebrow">ФІНАНСОВІ ІНСТРУМЕНТИ</p>
        <Title />
        <p className="appIntro">
          Швидкі розрахунки податків, сум та валют — в одному місці.
        </p>
      </header>
      <TopWidgets />
      <NumberConverter />
      <PriceInWords />
      <BottomWidget />
      <Footer />
    </main>
  );
}

export default App;
