import Image from "next/image";
import * as Styled from "./style";

import imgEmoji from "../../assets/images/sadEmoji.png";
import { useSelector } from "react-redux";
import { RootState } from "@/app/api/redux/configRedux";

import themeStyles from "../../assets/listOfStyles";

export default function () {
  const { theme } = useSelector(
    (rootReducer: RootState) => rootReducer.useTheme
  );

  return (
    <Styled.Container
      className="box"
      ftColorH1={theme ? themeStyles.veryLight : themeStyles.gray}
    >
      <Image src={imgEmoji} alt="sad emoji" />
      <h1>No Definitions Found</h1>
      <p>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </Styled.Container>
  );
}
