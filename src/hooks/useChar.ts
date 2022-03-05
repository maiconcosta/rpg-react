import { useState } from 'react';

const useChar = () => {
  const [position, setPosition] = useState({
    x: 5,
    y: 4,
  });

  const moveTop = () =>
    setPosition((oldPos) => ({ ...oldPos, y: oldPos.y - 1 }));

  const moveDown = () =>
    setPosition((oldPos) => ({ ...oldPos, y: oldPos.y + 1 }));

  const moveLeft = () =>
    setPosition((oldPos) => ({ ...oldPos, x: oldPos.x - 1 }));

  const moveRight = () =>
    setPosition((oldPos) => ({ ...oldPos, x: oldPos.x + 1 }));

  const moveChar = (key: string) => {
    const moveObj: { [key: string]: () => void } = {
      KeyW: () => moveTop(),
      KeyS: () => moveDown(),
      KeyA: () => moveLeft(),
      KeyD: () => moveRight(),
    };

    return moveObj[key]();
  };

  return {
    x: position.x,
    y: position.y,
    moveChar,
  };
};

export default useChar;
