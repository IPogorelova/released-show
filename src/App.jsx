import { useState } from 'react';

import { linksData } from './components/links-data.js';
import { Yarlik, YarlikButton } from './components/yarlik/index.jsx';
import Notebook from './components/notebook/index.jsx';
import StartButton from './components/start-button/index.jsx';

import notebookIcon from './assets/images/icons/notebook.png';

import './App.css';

const App = () => {
  const [isNotebookOpened, setIsNotebookOpened] = useState(true);

  return (
    <>
      <h1 className="visually-hidden">The page about "Released!" podcast</h1>
      <ul className="desktop-container">
        {linksData.map(link => <li key={link.text}><Yarlik {...link} /></li>)}
        <li><YarlikButton text="Notebook" icon={notebookIcon} onClick={() => setIsNotebookOpened(true)} /></li>
      </ul>
      <Notebook isOpened={isNotebookOpened} setIsOpened={setIsNotebookOpened} />
      <StartButton />
    </>
  )
};

export default App;
