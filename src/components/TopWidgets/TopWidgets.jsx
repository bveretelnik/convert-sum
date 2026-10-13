import React from 'react';
import Exchange from '../Exchange/Exchange.jsx';
import TaxInfo from '../TaxInfo/TaxInfo.jsx';
import VisibilityWrapper from '../VisibilityWrapper/VisibilityWrapper.jsx';

const TopWidgets = () => (
  <VisibilityWrapper title={'Курс НБУ та податкові ставки'}>
    <Exchange />
    <TaxInfo />
  </VisibilityWrapper>
);

export default TopWidgets;
