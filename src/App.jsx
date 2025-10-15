import NumberConverter from './components/NumberConverter/NumberConverter.jsx';
import React from 'react';
import Exchange from './components/Exchange/Exchange.jsx';
import Title from './components/Title/Title.jsx';
import Footer from './components/Footer/Footer.jsx';
import TaxInfo from './components/TaxInfo/TaxInfo.jsx';
import VisibilityWrapper from './components/VisibilityWrapper/VisibilityWrapper.jsx';

function App() {
  return (
    <>
      <Title />
      <VisibilityWrapper>
        <div className="exchange-container">
          <Exchange />
          <TaxInfo />
        </div>
      </VisibilityWrapper>
      <NumberConverter />
      <Footer />
    </>
  );
}

export default App;
