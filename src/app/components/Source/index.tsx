import { useSelector } from "react-redux";

import * as Styled from "./style";
import imgSource from "../../assets/images/icon-new-window.svg";
import Image from "next/image";
import { RootState } from "@/app/api/redux/configRedux";

export default function ({ sourceUrl }: { sourceUrl: string }) {
  const { theme } = useSelector(
    (rootReducer: RootState) => rootReducer.useTheme
  );

  return (
    <Styled.Container className="box" ftColor={theme ? "#ffffff" : "#2d2d2d"}>
      <span>All rights reserved to Froggy.pro 2024</span>
      <div>
        <Image src={imgSource} alt="" />
      </div>
    </Styled.Container>
  );
}
