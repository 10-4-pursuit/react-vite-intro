import { useState } from 'react';
import './App.css';

import DisplayInfo from './components/DisplayInfo';
import Standard from './components/Standard';

function App() {
  
  const [flush, setFlush] = useState(false);

  const onFlushButtonClick = () => {
    setFlush(!flush);
  }

  return (
    flush ? (
      <DisplayInfo onClick={onFlushButtonClick} />
    ) : (
      <Standard onClick={onFlushButtonClick} />
    )

  )
}

export default App
