import styled from 'styled-components';

export const Container = styled.div<{
  charSize: number;
  left: number;
  top: number;
}>`
  width: ${(props) => props.charSize}px;
  height: ${(props) => props.charSize}px;
  background: red;
  position: relative;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
`;
