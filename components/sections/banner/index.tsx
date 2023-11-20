import { Error, NextImage } from "codiedigital/dist/cjs/components/data";

import * as S from "./styles";

export function Banner() {
  return (
    <Error name="banner">
      <S.Banner id="banner">
        <div className="background">
          <NextImage src="/images/banner/background.jpg" />
        </div>
        <div className="logo">
          <NextImage src="/images/logo.png" />
        </div>
      </S.Banner>
    </Error>
  );
}
