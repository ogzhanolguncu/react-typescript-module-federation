import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <p>
        Multiply by two each click <strong>APP-2</strong>
      </p>
      <p>Your click count : {count}</p>
      <button onClick={() => setCount((prevState) => prevState * 2)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
