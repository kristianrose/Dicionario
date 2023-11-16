import Image from "next/image";
import { useSelector } from "react-redux";

import listStyles from "../../assets/listOfStyles";

import imgPlay from "../../assets/images/icon-play.svg";
import * as Styled from "./style";
import { RootState } from "@/app/api/redux/configRedux";

export default function ({
  word,
  phonetic,
}: {
  word: string;
  phonetic: string;
}) {
  const { theme } = useSelector(
    (rootReducer: RootState) => rootReducer.useTheme
  );

  function handleSpeak() {
    const speech = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(speech);
  }

  return (
    <Styled.Container
      className="box"
      ftColor={theme ? listStyles.white : listStyles.lightBlack}
    >
      <div>
        <h1>{word}</h1>
        <p>{phonetic}</p>
      </div>

      <Image src={imgPlay} alt="play" onClick={handleSpeak} />
    </Styled.Container>
  );
}
