import { useState } from 'react';
import { useDraggable, useDndMonitor } from '@dnd-kit/core';

import './index.css';

const defaultValue = "/~~~ Released! podcast ~~~/\n" +
  "\n" +
  "This is a podcast about technologies that have changed our lives and the people who invented them.<br />\n" +
  "We're surrounded by tech, so much so that we don't even realize how much it shapes our lives. But every gadget, every app, started as a wild idea in someone's head. In this podcast, I'll be diving deep into the stories behind some of the most groundbreaking innovations. We'll meet the inventors, learn about the hurdles they jumped, and discover how their creations changed the world.\n" +
  "\n" +
  "And hey, you might just get inspired to create something amazing yourself!"

const Notebook = ({ isOpened, setIsOpened }) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggableNotebook',
  });

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useDndMonitor({
    onDragEnd: (event) => {
      if (event.active.id !== 'draggableNotebook') return;
      const { delta } = event;
      setPosition((prev) => ({ x: prev.x + delta.x, y: prev.y + delta.y }));
    },
  });

  const currentX = position.x + (transform?.x ?? 0);
  const currentY = position.y + (transform?.y ?? 0);
  const style = {
    transform: `translate3d(${currentX}px, ${currentY}px, 0)`,
  };

  return (
    <div
      className={`notebook ${!isOpened ? 'notebook_closed' : ''}`}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <button
        type="button"
        className="notebook__close-button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpened(false);
        }}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <span className="visually-hidden">Close</span>
      </button>
      <label htmlFor="released" className="visually-hidden">
        "Released!" podcast description
      </label>
      <textarea
        name="release"
        id="released"
        cols="30"
        rows="10"
        className="notebook__textarea"
        defaultValue={defaultValue}
      />
    </div>
  )
};

export default Notebook;
