import React, { useState } from 'react';
import Card from '../Card/Card.jsx';
import SubTitle from '../NumberConverter/SubTitle/SubTitle.jsx';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard.jsx';
import replaceChar from '../../heplers/replaceChar.js';
import ControlledInputBlock from '../NumberConverter/ControlledInputBlock/ControlledInputBlock.jsx';
import Pills from '../Pills/Pills.jsx';

const commissionPills = [
  { id: 1, name: 'privat', commission: 1.02 },
  { id: 2, name: 'mono', commission: 1.05 },
];

const CommissionCalculation = () => {
  const [value, setValue] = useState('');
  const [activePill, setActivePill] = useState(commissionPills[0]);

  const handlePillClick = pill => {
    setActivePill(pill);
  };

  const totalSum = value * activePill.commission;

  return (
    <Card>
      <Pills
        pills={commissionPills}
        onClick={handlePillClick}
        activePilsId={activePill.id}
      />
      <div>
        <ControlledInputBlock
          value={value}
          header={'UAH:'}
          hasButton={false}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <div>
        <SubTitle value={'Result:'} />
        <CopyToClipboard value={replaceChar(totalSum)} />
      </div>
    </Card>
  );
};

export default CommissionCalculation;
