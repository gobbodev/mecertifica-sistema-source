import { useState } from "react";

import { Error } from "codiedigital/dist/cjs/components/data";
import { Input } from "codiedigital/dist/cjs/components/inputs";

import { FormHandler } from "src/utils/form-handler";

import Link from "next/link";

import { Banner } from "../banner";

import * as S from "./styles";


export function Login() {
  const [inputActive1, setInputActive1] = useState(false);
  const [inputActive2, setInputActive2] = useState(false);

  return (
    <Error name="login">
      <Banner />
      

      <S.Login
        id="login"
        inputActive1={inputActive1}
        inputActive2={inputActive2}
      >
        <h1 className="font-32-semibold">Entre com o seu email</h1>
        
        <FormHandler
          button={{ text: "Entrar", className: "font-16" }}
          onSucess={() => console.log("sucesso")}
          //   onSucess={async (data) => await api.post("/contato", data)}
          defaultSchemas={{
            email: true,
          }}
        >
          <Input
            type="email"
            name="email"
            label="E-mail"
            placeholder="Digite seu email aqui"
            onFocus={() => setInputActive1(true)}
            onBlur={() => setInputActive1(false)}
          />

          <Input
            type="password"
            name="password"
            label="Senha"
            placeholder="****************"
            onFocus={() => setInputActive2(true)}
            onBlur={() => setInputActive2(false)}
          />

          <div className="box-links font-16">
            <Link className="recover-password" href="/">
              Esqueceu sua senha?
            </Link>

            <div className="create-account">
              <span>Não possui conta? </span>
              <Link href="/"> Criar conta</Link>
            </div>
          </div>
        </FormHandler>
      </S.Login>
    </Error>
  );
}
