import Button from 'components/atoms/Button/Button';
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 45vh;
  padding: 20px;
  display: grid;
  gap: 20px 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

const inputs = {
  multiplication: '*',
  division: '/',
  addition: '+',
  subtraction: '-',
  equal: '=',
  clearAll: 'AC',
};

const Keyboard: React.FC<{
  setFirstValue: (newValue: string) => void;
  setSecondValue: (newValue: string) => void;
  setSymbol: (newValue: string) => void;
  firstValue: string;
  secondValue: string;
  symbol: string;
}> = ({
  setFirstValue,
  setSecondValue,
  setSymbol,
  firstValue,
  secondValue,
  symbol,
}) => {
  const [field, setField] = useState(true);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    if (
      value == inputs.addition ||
      value == inputs.subtraction ||
      value == inputs.multiplication ||
      value == inputs.division
    ) {
      setSymbol(value);
    } else if (value == inputs.clearAll) {
      setFirstValue('');
      setSecondValue('');
      setSymbol('');
    } else if (symbol == '' || firstValue == '') {
      setFirstValue(value);
    } else {
      setSecondValue(value);
    }
    // else if (value >= 0 || value <= 9) {
    // }
  };
  return (
    <Wrapper>
      <Button value={inputs.clearAll} onClick={handleClick} />
      <Button value={inputs.division} onClick={handleClick} light />
      <Button value={inputs.multiplication} onClick={handleClick} light />
      <Button value={inputs.subtraction} onClick={handleClick} light />
      <Button value="7" onClick={handleClick} />
      <Button value="8" onClick={handleClick} />
      <Button value="9" onClick={handleClick} />
      <Button value={inputs.addition} onClick={handleClick} light />
      <Button value="4" onClick={handleClick} />
      <Button value="5" onClick={handleClick} />
      <Button value="6" onClick={handleClick} />
      <Button value="1" onClick={handleClick} />
      <Button value="2" onClick={handleClick} />
      <Button value="3" onClick={handleClick} />
      <Button value="C" onClick={handleClick} />
      <Button value="0" onClick={handleClick} />
      <Button value="." onClick={handleClick} />
      <Button value={inputs.equal} onClick={handleClick} light />
    </Wrapper>
  );
};

export default Keyboard;