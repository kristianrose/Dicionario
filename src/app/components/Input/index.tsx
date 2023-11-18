import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import * as Styled from "./style";

import Image from "next/image";
import imgSearch from "../../assets/images/icon-search.svg";
import axios from "axios";

import { getDataWord } from "@/app/api/function";
import { RootState } from "@/app/api/redux/configRedux";

export default function () {
  const [input, setInput] = useState<string>("");
  const [emptyField, setEmptyField] = useState<boolean>(true);

  const { theme } = useSelector(
    (rootReducer: RootState) => rootReducer.useTheme
  );

  useEffect(() => {
    if (emptyField) {
      setEmptyField(false);
    }
  }, [input]);

  useEffect(() => {
    async function getWord() {
      const getWordRandom = await axios
        .get("https://random-word-api.vercel.app/api?words=1")
        .catch((err) => {
          console.error(err);
        });
      await getDataWord(getWordRandom?.data[0]);
    }

    getWord();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!!input.trim()) {
      await getDataWord(input);
    } else {
      alert("Fill in the input");
      setEmptyField(true);
    }
  }

  return (
    <Styled.Container
      onSubmit={handleSubmit}
      emptyField={emptyField}
      className="box"

      bgInput={theme ? "#1f1f1f" : "#e9e9e9"}
      clInput={theme ? "#ffffff" : "#2d2d2d"}
    >
      <input
        type="text"
        placeholder="Enter a word"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {emptyField && (
        <Styled.EmptyField>Whoops, can’t be empty…</Styled.EmptyField>
      )}

      <button type="submit">
        <Image src={imgSearch} alt="icone input" />
      </button>
    </Styled.Container>
  );
}
