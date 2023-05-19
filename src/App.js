import React, { useState } from 'react';
import Advice from './Advice';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState('');
  const [num, setNum] = useState('');

  const fetchData = async () => {
    const data = await axios.get('https://api.adviceslip.com/advice');
    const response = data.data.slip.advice;
    const dataId = data.data.slip.id;
    setAdvice(response);
    setNum(dataId);

    return response;
  };

  return <Advice advice={advice} num={num} fetchData={fetchData} />;
}

export default App;
