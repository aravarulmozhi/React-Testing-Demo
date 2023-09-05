import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p data-testid="count-value">Count: {count}</p>
      <button onClick={() => setCount(count + 1)} data-testid="increment-button">Increment</button>
      <button onClick={() => setCount(count - 1)} data-testid="decrement-button">Decrement</button>
    </div>
  );
}

export default Counter;
