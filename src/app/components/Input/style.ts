import styled from "styled-components";

interface IProps {
  emptyField: boolean;
  bgInput: string;
  clInput: string;
}

export const Container = styled.form<IProps>`
  position: relative;

  z-index: 5;

  display: flex;
  align-items: center;
  margin-bottom: 30px;

  position: relative;

  input {
    width: 100%;
    padding: 20px 50px 20px 20px;

    border-radius: 14px;
    border: 2px solid
      ${(props) => (props.emptyField ? "#ff5252" : "transparent")};
    outline: 0;

    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.clInput};

    background-color: ${(props) => props.bgInput};

    transition: border 0.12s ease;

    &:focus {
      border: 2px solid #a445ed;
    }
  }

  button {
    position: absolute;
    right: 39px;

    border: none;
    background-color: transparent;
    border: none;
    outline: 0;

    cursor: pointer;
  }

  img {
    width: 16px;
  }
`;

export const EmptyField = styled.div`
  position: absolute;
  bottom: -25px;

  font-size: 16px;
  font-size: 1rem;
  color: #ff5252;
`;
