import { Error } from "codiedigital/dist/cjs/components/data";
import { BoxAccounts } from "./box-accounts";

import * as S from "./styles";
import { Banner } from "../banner";

export function Home() {
  return (
    <Error name="home">
      <Banner/>
      <S.Home>
        <div className="custom-container">
          <h1 className="font-32-semibold"> Qual tipo de conta você possui?</h1>
          <BoxAccounts />
        </div>
      </S.Home>
    </Error>
  );
}
