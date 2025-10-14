import NumberConverter from './components/NumberConverter/NumberConverter.jsx';
import React from 'react';
import Exchange from './components/Exchange/Exchange.jsx';
import Title from './components/Title/Title.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Title />
      {/*<Exchange />*/}
      <NumberConverter />
      <Footer />
    </>
  );
}

export default App;
