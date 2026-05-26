import React, { useState } from 'react';
import { useAmountInWords } from '../../hooks/useAmountInWords.js';
import Card from '../Card/Card.jsx';
import ControlledInputBlock from '../NumberConverter/ControlledInputBlock/ControlledInputBlock.jsx';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard.jsx';
import Container from '../Container/Container.jsx';

const PriceInWords = () => {
  const [value, setValue] = useState(0);
  const amount = useAmountInWords(value);

  return (
    <Container>
      <Card>
        <div>
          <ControlledInputBlock
            value={Number(value)}
            header={'Number:'}
            hasButton={false}
            onChange={e => setValue(e.target.value)}
          />
        </div>
        <CopyToClipboard value={amount} />
      </Card>
    </Container>
  );
};

export default PriceInWords;
