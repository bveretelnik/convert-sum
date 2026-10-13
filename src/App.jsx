import NumberConverter from './components/NumberConverter/NumberConverter.jsx';
import React from 'react';
import Title from './components/Title/Title.jsx';
import Footer from './components/Footer/Footer.jsx';
import BottomWidget from './components/BottomWidgets/BottomWidget.jsx';
import Exchange from './components/Exchange/Exchange.jsx';
import CalculatedSum from './components/CalculatedSum/CalculatedSum.jsx';
import Card from './components/Card/Card.jsx';
import Container from './components/Container/Container.jsx';
import ThemeToggle from './components/ThemeToggle/ThemeToggle.jsx';

function App() {
  return (
    <main>
      <header>
        <ThemeToggle />
        <p className="appEyebrow">ФІНАНСОВІ ІНСТРУМЕНТИ</p>
        <Title />
        <p className="appIntro">
          Швидкі розрахунки податків, сум та валют — в одному місці.
        </p>
      </header>
      <Container>
        <Exchange />
        <NumberConverter />
        <Card>
          <CalculatedSum />
        </Card>
      </Container>
      <BottomWidget />
      <Footer />
    </main>
  );
}

export default App;
