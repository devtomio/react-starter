import { useState } from 'react';
import axios from 'axios';
import './App.css';

const getAdvice = async () => {
  const { data } = await axios.get('https://api.adviceslip.com/advice');

  return data.slip.advice;
}

function App() {
  const [advice, setAdvice] = useState('');

  return (
    <div className="center-display">
      <p>{advice}</p>
      <br />
      <button onClick={async () => setAdvice(await getAdvice())}>
        Click Me!
      </button>
    </div>
  );
}

export default App;
