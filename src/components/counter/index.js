import React from 'react';
import contain from './contain'

const render = (props) => {
  const {
    num,
    increment,
    decrement,
    reset,
  } = props;

  return (
    <div>
      <p>{num}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default contain(render);
