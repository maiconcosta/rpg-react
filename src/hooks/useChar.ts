import { useState } from 'react';
import mapSpots from '../data/mapSpots';
import SideType from '../types/SideType';

const useChar = () => {
  const [position, setPosition] = useState({
    x: 5,
    y: 4,
  });

  const [side, setSide] = useState<SideType>('down');

  const canMove = (x: number, y: number) => {
    if (mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
      if (mapSpots[y][x] === 1) {
        return true;
      }
    }

    return false;
  };

  const moveTop = () => {
    if (canMove(position.x, position.y - 1)) {
      setPosition((oldPos) => ({
        ...oldPos,
        y: canMove(oldPos.x, oldPos.y - 1) ? oldPos.y - 1 : oldPos.y,
      }));
    }
    setSide('up');
  };

  const moveDown = () => {
    setPosition((oldPos) => ({
      ...oldPos,
      y: canMove(oldPos.x, oldPos.y + 1) ? oldPos.y + 1 : oldPos.y,
    }));
    setSide('down');
  };

  const moveLeft = () => {
    if (canMove(position.x - 1, position.y)) {
      setPosition((oldPos) => ({
        ...oldPos,
        x: canMove(oldPos.x - 1, oldPos.y) ? oldPos.x - 1 : oldPos.x,
      }));
    }
    setSide('left');
  };

  const moveRight = () => {
    setPosition((oldPos) => ({
      ...oldPos,
      x: canMove(oldPos.x + 1, oldPos.y) ? oldPos.x + 1 : oldPos.x,
    }));
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
