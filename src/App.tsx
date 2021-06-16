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
    <div>
      <p>{advice}</p>
      <button onClick={async () => setAdvice(await getAdvice())}>
        Click Me!
      </button>
    </div>
  );
}

export default App;
