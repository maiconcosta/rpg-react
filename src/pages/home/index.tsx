import { useEffect } from 'react';
import Char from '../../components/char';
import useChar from '../../hooks/useChar';
import * as S from './styles';

const Home = () => {
  const { x, y, side, moveChar } = useChar();

  const handleKey = ({ code }: KeyboardEvent) => {
    moveChar(code);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
  }, []);

  return (
    <S.Container>
      <S.Map>
        <Char x={x} y={y} side={side} />
      </S.Map>
    </S.Container>
  );
};

export default Home;
