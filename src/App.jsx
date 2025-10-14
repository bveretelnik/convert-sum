import NumberConverter from './components/NumberConverter/NumberConverter.jsx';
import React from 'react';
import Exchange from './components/Exchange/Exchange.jsx';
import Title from './components/Title/Title.jsx';
import Footer from './components/Footer/Footer.jsx';
import TaxInfo from './components/TaxInfo/TaxInfo.jsx';

function App() {
  return (
    <>
      <Title />
      <div className="exchange-container">
        <Exchange />
        <TaxInfo />
      </div>
      <NumberConverter />
      <Footer />
    </>
  );
}

export default App;
