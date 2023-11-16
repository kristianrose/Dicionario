"use client";
import GlobalStyles from "./style/globalStyle";
import * as Styled from "./style/style";

import Header from "./components/Header";
import Main from "./components/Main";

import type { RootState } from "./api/redux/configRedux";
import { useSelector } from "react-redux";
import themeStyles from "./assets/listOfStyles";
import Input from "./components/Input";
import SectionInfoWord from "./components/SectionInfoWord";
import Source from "./components/Source";
import WordNotFound from "./components/WordNotFound";

export default function Home() {
  const { theme, font } = useSelector(
    (rootReducer: RootState) => rootReducer.useTheme
  );

  const { dataWord } = useSelector(
    (rootReducer: RootState) => rootReducer.useWord
  );

  const { currentError, messageError } = useSelector(
    (rootReducer: RootState) => rootReducer.useError
  );


  return (
    <>
      <GlobalStyles font={font} />

      <Styled.Container bg={theme ? themeStyles.veryBlack : themeStyles.white}>
        <Header />
        <Input />
        {currentError ? (
          <>
          {messageError === "word" && (
            <><WordNotFound /></>
          )}
          </>
        ) : (
          <>
            <Main word={dataWord.word} phonetic={dataWord.phonetic} />

            {dataWord.listMeaning.length > 0 &&
              dataWord.listMeaning.map((meaning) => (
                <SectionInfoWord
                  title={meaning.partOfSpeech}
                  list={meaning.definitions}
                  synonyms={meaning.synonyms}
                />
              ))}
            {dataWord.sourceUrl !== null && (
              <Source sourceUrl={dataWord.sourceUrl} />
            )}
          </>
        )}
      </Styled.Container>
    </>
  );
}
