import { createGlobalStyle } from "styled-components";

interface IProps {
  font: string;
}

export default createGlobalStyle<IProps>`
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        font-family: ${(props) => props.font};
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    .box {
        width: 100%;
        max-width: 790px;
        margin: 0 auto;
        padding: 0 20px;
    }

`;
