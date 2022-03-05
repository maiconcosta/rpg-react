import * as S from './styles';

type Props = {
  x: number;
  y: number;
};

const Char = ({ x, y }: Props) => {
  const charSize = 30;
  return (
    <S.Container charSize={charSize} left={x * charSize} top={y * charSize} />
  );
};

export default Char;
