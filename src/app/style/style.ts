import styled from "styled-components";

interface IProps {
  bg: string;
}

export const Container = styled.div<IProps>`
  width: 100%;
  min-height: 100vh;

  background-color: ${(props) => props.bg};
`;
