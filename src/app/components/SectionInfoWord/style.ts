import styled from "styled-components";

interface IProps {
  ftColor: string;
}

export const Container = styled.section<IProps>`
  display: flex;
  flex-direction: column;
  margin-top: 26px;

  strong {
    width: 100%;
    position: relative;

    display: flex;
    align-items: center;

    color: #2d2d2d;

    color: ${(props) => props.ftColor};

    &::after {
      content: "";
      position: relative;
      height: 1px;
      width: 100%;
      margin-left: 10px;
      background-color: #979797;
    }
  }

  article {
    margin-top: 24px;
  }

  span {
    color: #757575;
    font-size: 0.94rem;
  }

  ul {
    margin: 20px 0;
    margin-left: 20px;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }

  li {
    font-size: 18px;
    font-size: 0.9rem;

    p {
      line-height: 140%;

      &:nth-child(1) {
        padding-left: 20px;

        position: relative;

        display: flex;
        flex-direction: column;

        color: ${(props) => props.ftColor};

        &::before {
          content: "";
          position: absolute;
          top: 6px;
          left: 0;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #8f19e8;

          margin-right: 10px;
        }
      }

      &:nth-child(2) {
        margin-left: 30px;
      }
    }
  }

  p {
    margin-top: 10px;
    font-size: 1rem;
    color: #757575;
  }

  a {
    font-weight: bold;
    color: #a445ed;

    position: relative;

    &::after {
      content: "";
      height: 1px;
      width: 0%;

      position: absolute;
      left: 50%;
      bottom: -2px;

      background-color: #a445ed;
      transition: all 0.2s ease;
    }

    &:hover::after {
      width: 100%;
      left: 0%;
    }
  }

  @media (max-width: 500px) {
    ul {
      margin-left: 0;
    }
  }
`;
