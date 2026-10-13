import React from 'react';
import ExchangeCurrency from '../ExchangeCurrency/ExchangeCurrency.jsx';
import VisibilityWrapper from '../VisibilityWrapper/VisibilityWrapper.jsx';
import CommissionCalculation from '../CommissionCalculation/CommissionCalculation.jsx';

const BottomWidget = () => (
  <VisibilityWrapper title={'Додаткові калькулятори'}>
    <ExchangeCurrency />
    <CommissionCalculation />
  </VisibilityWrapper>
);

export default BottomWidget;
