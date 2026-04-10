import NumberConverter from './components/NumberConverter/NumberConverter.jsx';
import React from 'react';
import Title from './components/Title/Title.jsx';
import Footer from './components/Footer/Footer.jsx';
import BottomWidget from './components/BottomWidgets/BottomWidget.jsx';
import TopWidgets from './components/TopWidgets/TopWidgets.jsx';

function App() {
  return (
    <>
      <Title />
      <TopWidgets />
      <NumberConverter />
      <BottomWidget />
      <Footer />
    </>
  );
}

export default App;
