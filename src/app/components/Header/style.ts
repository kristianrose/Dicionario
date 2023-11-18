import styled from "styled-components";
import theme from "../../assets/listOfStyles";

interface ISelected {
  toggle: boolean;
  ftColor: string;
  bgUl: string;
  colorSdUl: string;
}

interface IProps {
  toggle: boolean;
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 50px;
  padding-bottom: 50px;
`;

export const ContainerNav = styled.div<{rtImg: string}>`
  display: flex;
  align-items: center;

  img {
    &:nth-child(3) {
      width: 20px;
      height: 20px;
      margin-left: 16px;

      transition: rotate .3s ease;
      rotate: 0deg;
      rotate: ${props => props.rtImg};
    }
  }

  @media (max-width: 450px) {
    img {
      &:nth-child(3) {
        margin-left: 10px;
      }
    }
  }
`;

export const Selected = styled.div<ISelected>`
  position: relative;
  padding-right: 20px;

  margin-left: 10px;

  p {
    display: flex;
    justify-content: center;
    align-items: center;

    align-items: center;
    font-size: 1.14rem;
    font-weight: "bold";

    color: ${(props) => props.ftColor};

    cursor: pointer;
  }

  img {
    margin-left: 8px;

    width: 14px;

    transition: rotate 0.15s ease-out;
    rotate: ${(props) => (props.toggle ? "180deg" : "0deg")};
  }

  ul {
    position: absolute;
    z-index: 50;
    top: calc(100% + 10px);
    right: 0;

    background-color: ${(props) => props.bgUl};

    width: 180px;
    padding: 15px;
    border-radius: 15px;

    display: ${(props) => (props.toggle ? "grid" : "none")};
    grid-template-columns: 1fr;
    grid-gap: 10px;

    box-shadow: 0 0 25px ${(props) => props.colorSdUl};
  }

  li {
    font-size: 1.14rem;
    font-weight: "bold";

    color: ${(props) => props.ftColor};

    transition: color 0.1s ease;
    cursor: pointer;

    &:hover {
      color: ${theme.purple};
    }
  }

  @media (max-width: 450px) {
    padding-right: 10px;

    ul {
      top: calc(100% + 24px);
    }

    p {
      width: fit-content;
    }
  }
`;

export const ToggleThemeContainer = styled.div<IProps>`
  padding-left: 20px;
  border-left: 1px solid ${theme.lightGray};

  div {
    width: 40px;
    height: 20px;

    background-color: ${(props) =>
      props.toggle ? theme.purple : theme.veryLightBlack};

    border-radius: 10px;

    transition: background-color 0.2s ease;
    position: relative;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      z-index: 10;
      top: 3px;
      left: ${(props) => (props.toggle ? "3px" : "calc(100% - 17px)")};

      width: 14px;
      height: 14px;

      background-color: white;
      border-radius: 50%;

      transition: left 0.2s ease;
    }
  }

  @media (max-width: 450px) {
    padding-left: 10px;
  }
`;
