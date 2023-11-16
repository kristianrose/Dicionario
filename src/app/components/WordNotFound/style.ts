import styled from "styled-components";

interface IProps {
    ftColorH1: string;
}

export const Container = styled.section<IProps>`
  padding: 60px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  img {
    width: 64px;
    height: 64px;

    margin-bottom: 44px;
  }

  h1 {
    font-size: 1.25rem;
    margin-bottom: 24px;

    /* color: #2d2d2d; */
    color: ${props => props.ftColorH1};
  }

  p {
    font-size: 18px;
    font-size: 1.12rem;
    color: #757575;
  }
`;
