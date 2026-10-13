import React from 'react';
import ExchangeCurrency from '../ExchangeCurrency/ExchangeCurrency.jsx';
import VisibilityWrapper from '../VisibilityWrapper/VisibilityWrapper.jsx';
import CommissionCalculation from '../CommissionCalculation/CommissionCalculation.jsx';
import TaxInfo from '../TaxInfo/TaxInfo.jsx';

const BottomWidget = () => (
  <VisibilityWrapper title={'Додаткові калькулятори та податкові ставки'}>
    <ExchangeCurrency />
    <CommissionCalculation />
    <TaxInfo />
  </VisibilityWrapper>
);

export default BottomWidget;
