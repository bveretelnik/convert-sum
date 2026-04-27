import NumberConverter from './components/NumberConverter/NumberConverter.jsx';
import React from 'react';
import Title from './components/Title/Title.jsx';
import Footer from './components/Footer/Footer.jsx';
import BottomWidget from './components/BottomWidgets/BottomWidget.jsx';
import TopWidgets from './components/TopWidgets/TopWidgets.jsx';
import PriceInWords from './components/PriceInWords/PriceInWords.jsx';

function App() {
  return (
    <>
      <Title />
      <TopWidgets />
      <NumberConverter />
      <PriceInWords />
      <BottomWidget />
      <Footer />
    </>
  );
}

export default App;
