import React from 'react';
import Exchange from '../Exchange/Exchange.jsx';
import TaxInfo from '../TaxInfo/TaxInfo.jsx';
import VisibilityWrapper from '../VisibilityWrapper/VisibilityWrapper.jsx';

const TopWidgets = () => (
  <VisibilityWrapper title={'top widgets'}>
    <Exchange />
    <TaxInfo />
  </VisibilityWrapper>
);

export default TopWidgets;
