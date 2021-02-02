import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Score: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click for increase your score!
      </button>
    </div>
  );
}

export default App;