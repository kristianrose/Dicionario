import styled from "styled-components";
import listStyles from "../../assets/listOfStyles";

interface IProps {
  ftColor: string;
}

export const Container = styled.main<IProps>`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 10px;
  margin-bottom: 40px;

  img {
    margin-left: 15px;
    width: 75px;
    cursor: pointer;
  }

  div {
    width: 100%;
    overflow: hidden;
  }

  h1 {
    width: 100%;

    margin-right: 10px;
    margin-bottom: 8px;

    font-size: 2.6rem;
    color: #2d2d2d;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${(props) => props.ftColor };
  }

  p {
    color: ${listStyles.purple};
    font-size: 1.2rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
