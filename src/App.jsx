import { useState } from 'react';
import './App.css';

import { linksData } from './components/links-data.js';
import Yarlik from './components/yarlik/index.jsx';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="desktop-container">
        {linksData.map(link => <Yarlik {...link} key={link.text} />)}
      </div>
    </>
  )
};

export default App;
