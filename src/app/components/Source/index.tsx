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
      <span>Source</span>
      <div>
        <a href={sourceUrl} target="_blank">
          {sourceUrl}
        </a>
        <Image src={imgSource} alt="" />
      </div>
    </Styled.Container>
  );
}
