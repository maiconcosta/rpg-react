import { useState } from 'react';
import SideType from '../types/SideType';

const useChar = () => {
  const [position, setPosition] = useState({
    x: 5,
    y: 4,
  });

  const [side, setSide] = useState<SideType>('down');

  const moveTop = () => {
    setPosition((oldPos) => ({ ...oldPos, y: oldPos.y - 1 }));
    setSide('up');
  };

  const moveDown = () => {
    setPosition((oldPos) => ({ ...oldPos, y: oldPos.y + 1 }));
    setSide('down');
  };

  const moveLeft = () => {
    setPosition((oldPos) => ({ ...oldPos, x: oldPos.x - 1 }));
    setSide('left');
  };

  const moveRight = () => {
    setPosition((oldPos) => ({ ...oldPos, x: oldPos.x + 1 }));
    setSide('right');
  };

  const moveChar = (key: string) => {
    const moveObj: { [key: string]: () => void } = {
      KeyW: () => moveTop(),
      KeyS: () => moveDown(),
      KeyA: () => moveLeft(),
      KeyD: () => moveRight(),
      ArrowUp: () => moveTop(),
      ArrowDown: () => moveDown(),
      ArrowLeft: () => moveLeft(),
      ArrowRight: () => moveRight(),
    };

    return moveObj[key] && moveObj[key]();
  };

  return {
    x: position.x,
    y: position.y,
    side,
    moveChar,
  };
};

export default useChar;
