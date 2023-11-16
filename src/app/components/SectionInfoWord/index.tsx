import { useSelector } from "react-redux";
import * as Styled from "./style";
import { RootState } from "@/app/api/redux/configRedux";
import { getDataWord } from "@/app/api/function";
import { useEffect } from "react";

interface IProps {
  title: string;
  list: { text: string; subText?: string }[];
  synonyms?: string[];
}

export default function ({ title, list, synonyms }: any) {
  const { theme } = useSelector(
    (rootReducer: RootState) => rootReducer.useTheme
  );

  return (
    <Styled.Container className="box" ftColor={theme ? "#ffffff" : "#2d2d2d"}>
      <strong>{title}</strong>

      <article>
        <span>Meaning</span>

        <ul>
          {list.map((item: any) => (
            <li key={item.definition}>
              <p>{item.definition}</p>

              {item.example && <p>"{item.example}"</p>}
            </li>
          ))}
        </ul>
      </article>

      {synonyms.length > 0 && (
        <p>
          Synonyms:{" "}
          {synonyms.map((word: string, index: number) => (
            <a href="#" onClick={() => getDataWord(word)}>
              {word}{index < synonyms.length - 1 && (", ")} {" "}
            </a>
          ))}
        </p>
      )}
    </Styled.Container>
  );
}
