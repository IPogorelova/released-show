import { useState } from 'react';
import { DndContext, useSensor, useSensors, PointerSensor, KeyboardSensor } from '@dnd-kit/core';

import { linksData } from './components/links-data.js';
import { Yarlik, YarlikButton } from './components/yarlik/index.jsx';
import Notebook from './components/notebook/index.jsx';
import { StartButton, StartButtonImages } from './components/start-button/index.jsx';
import Clock from './components/clock/index.jsx';

import notebookIcon from './assets/images/icons/notebook.png';

import './App.css';

const App = () => {
  const [isNotebookOpened, setIsNotebookOpened] = useState(true);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor)
  );

  return (
    <DndContext sensors={sensors}>
      <h1 className="visually-hidden">The page about "Released!" podcast</h1>
      <ul className="desktop-container">
        {linksData.map(link => <li key={link.text}><Yarlik {...link} /></li>)}
        <li>
          <YarlikButton
            text="Notebook"
            icon={notebookIcon}
            onClick={(e) => {
              e.stopPropagation();
              setIsNotebookOpened(true);
            }}
          />
        </li>
      </ul>
      <div className="desktop-container__menu">
        <StartButton />
        <Clock />
      </div>
      <Notebook isOpened={isNotebookOpened} setIsOpened={setIsNotebookOpened} />
      <StartButton className="display-sm-none" />
      <Clock className="display-sm-none" />
      <StartButtonImages />
    </DndContext>
  )
};

export default App;
