import { useState, useRef } from 'react';
import { useDraggable, useDndMonitor } from '@dnd-kit/core';

import './index.css';

export const Yarlik = ({ icon, link, text }) => {
  const id = `yarlik-${text.split(' ').join('-')}`;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [blockLinkOnce, setBlockLinkOnce] = useState(false);
  const isDragging = useRef(false);

  useDndMonitor({
    onDragStart: (event) => {
      if (event.active.id !== id) return;
      isDragging.current = true;
    },
    onDragEnd: (event) => {
      if (event.active.id !== id) return;
      const { delta } = event;
      setPosition((prev) => ({ x: prev.x + delta.x, y: prev.y + delta.y }));
      isDragging.current = false;
      setBlockLinkOnce(true);
      setTimeout(() => setBlockLinkOnce(false), 0);
    },
    onDragCancel: (event) => {
      if (event.active.id !== id) return;
      isDragging.current = false;
      setBlockLinkOnce(true);
      setTimeout(() => setBlockLinkOnce(false), 0);
    },
  });

  const currentX = position.x + (transform?.x ?? 0);
  const currentY = position.y + (transform?.y ?? 0);
  const style = { transform: `translate3d(${currentX}px, ${currentY}px, 0)` };

  return (
    <a
      ref={setNodeRef}
      href={blockLinkOnce ? undefined : link}
      target="_blank"
      rel="noreferrer"
      className="yarlik"
      style={style}
      {...listeners}
      {...attributes}
      onClick={(e) => {
        if (isDragging.current || blockLinkOnce) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
    >
      <span className="yarlik__image"><img src={icon} alt={`${text} icon`} /></span>
      <span className="yarlik__text">{text}</span>
    </a>
  );
};


export const YarlikButton = ({ icon, text, onClick }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggableNotebookIcon',
  });

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useDndMonitor({
    onDragEnd: (event) => {
      if (event.active.id !== 'draggableNotebookIcon') return;
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
    <button
      type="button"
      className="yarlik yarlik_button"
      ref={setNodeRef}
      style={style}
      onClick={onClick}
      {...listeners}
      {...attributes}
    >
      <span className="yarlik__image">
        <img src={icon} alt={`${text} icon`} />
      </span>
      <span className="yarlik__text">{text}</span>
    </button>
  )
};

