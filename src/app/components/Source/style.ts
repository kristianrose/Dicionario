import styled from "styled-components";

interface IProps {
  ftColor: string;
}

export const Container = styled.section<IProps>`
  border-top: 1px solid #e9e9e9;
  padding: 20px;
  display: flex;

  span {
    font-size: 0.9rem;
    color: #757575;
  }

  a {
    margin-left: 10px;
    font-size: 14px;
    font-size: 0.9rem;
    color: ${(props) => props.ftColor};
  }

  img {
    margin-left: 10px;
  }

  @media (max-width: 500px) {
    flex-direction: column;

    div {
      margin-top: 5px;
    }

    a {
      margin-left: 0px;
    }
  }
`;
