import React, { useState } from 'react';
import { useAmountInWords } from '../../hooks/useAmountInWords.js';
import Card from '../Card/Card.jsx';
import ControlledInputBlock from '../NumberConverter/ControlledInputBlock/ControlledInputBlock.jsx';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard.jsx';
import Container from '../Container/Container.jsx';
import SubTitle from '../NumberConverter/SubTitle/SubTitle.jsx';
import styles from './PriceInWords.module.scss';

const PriceInWords = () => {
  const [value, setValue] = useState(0);
  const amount = useAmountInWords(value);

  return (
    <Container>
      <Card classNames={styles.card}>
        <SubTitle value={'Сума словами'} />
        <div>
          <ControlledInputBlock
            value={Number(value)}
            header={'Сума:'}
            hasButton={false}
            onChange={e => setValue(e.target.value)}
          />
        </div>
        <div className={styles.result}>
          <CopyToClipboard value={amount} label={'Результат:'} />
        </div>
      </Card>
    </Container>
  );
};

export default PriceInWords;
