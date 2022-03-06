import styled from 'styled-components';

export const Container = styled.div<{
  charSize: number;
  left: number;
  top: number;
  side: number;
}>`
  width: ${(props) => props.charSize}px;
  height: ${(props) => props.charSize}px;
  background: url('/assets/pipoya.png') no-repeat;
  background-position: -32px ${(props) => props.side}px;
  position: relative;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
`;
