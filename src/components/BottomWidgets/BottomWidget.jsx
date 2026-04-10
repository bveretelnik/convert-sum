import React from 'react';
import ExchangeCurrency from '../ExchangeCurrency/ExchangeCurrency.jsx';
import VisibilityWrapper from '../VisibilityWrapper/VisibilityWrapper.jsx';
import CommissionCalculation from '../CommissionCalculation/CommissionCalculation.jsx';

const BottomWidget = () => (
  <VisibilityWrapper title={'bottom widgets'}>
    <ExchangeCurrency />
    <CommissionCalculation />
  </VisibilityWrapper>
);

export default BottomWidget;
