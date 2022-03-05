import SideType from '../../types/SideType';
import * as S from './styles';

type Props = {
  x: number;
  y: number;
  side: SideType;
};

const sides = {
  up: -90,
  down: 0,
  left: -30,
  right: -60,
};

const Char = ({ x, y, side }: Props) => {
  const charSize = 30;

  return (
    <S.Container
      charSize={charSize}
      left={x * charSize}
      top={y * charSize}
      side={sides[side] ?? 0}
    />
  );
};

export default Char;
