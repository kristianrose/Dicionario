import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, toggleFont } from "../../api/redux/useTheme/reducer";

import * as Styled from "./style";

import Image from "next/image";
import { RootState } from "@/app/api/redux/configRedux";

import listStyles from "../../assets/listOfStyles";
import imgBook from "../../assets/images/logo.svg";
import iconArrow from "../../assets/images/icon-arrow-down.svg";
import imgMoonLight from "../../assets/images/icon-moon.svg";
import imgMoonNight from "../../assets/images/moon-night.png";

export default function () {
  const [optionsSelect] = useState<string[]>(["Sans Serif", "Serif", "Mono"]);
  const [option, setOption] = useState<string>("Sans Serif");
  const [toggleSelect, setToggleSelect] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { theme } = useSelector(
    (rootReducer: RootState) => rootReducer.useTheme
  );

  function toggleThemeCurrent() {
    dispatch(toggleTheme({ theme: !theme }));
  }

  function toggleFontCurrent(option: string) {
    let fontSelect = "";

    switch (option) {
      case "Sans Serif": {
        fontSelect = "sans-serif";
        break;
      }

      case "Serif": {
        fontSelect = "serif";
        break;
      }

      case "Mono": {
        fontSelect = "monospace";
        break;
      }
    }
    setOption(fontSelect);
    dispatch(toggleFont({ font: fontSelect }));
  }

  return (
    <Styled.Container className="box">
      <Image width={32} src={imgBook} alt="logo" />

      <Styled.ContainerNav>
        <Styled.Selected
          toggle={toggleSelect}
          ftColor={theme ? listStyles.white : listStyles.veryBlack}
          bgUl={theme ? "#1f1f1f" : "#f4f4f4"}
          colorSdUl={
            theme ? "rgba(164, 69, 237, .7)" : "rgba(100, 100, 100, 0.4)"
          }
        >
          <p onClick={() => setToggleSelect(!toggleSelect)}>
            {option} <Image src={iconArrow} alt="icone de seta" />{" "}
          </p>

          <ul>
            {optionsSelect.map((option: string) => (
              <li onClick={() => toggleFontCurrent(option)}>{option}</li>
            ))}
          </ul>
        </Styled.Selected>

        <Styled.ToggleThemeContainer
          toggle={theme}
          onClick={() => toggleThemeCurrent()}
        >
          <div></div>
        </Styled.ToggleThemeContainer>

        <Image src={theme ? imgMoonNight : imgMoonLight} alt="" />
      </Styled.ContainerNav>
    </Styled.Container>
  );
}
