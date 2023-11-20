import Link from "next/link";

import {
  Error,
  Container,
  NextImage,
  MenuMobile,
} from "codiedigital/dist/cjs/components/data";

import { useSocialLinks } from "codiedigital/dist/cjs/hooks/use-social-links";
import { IMenu as IMenuMobileSocial } from "codiedigital/dist/cjs/interfaces/header";

import { Button } from "components/data";
import { userData } from "components/fakeData/mock-user";
import userPic from "components/fakeData/mock-user/userPic.png";
import { PencilPaperSVG } from "public/svg/header";

import { navigationLinks } from "../data";

import * as S from "./styles";
import { Notifications } from "./components/notifications";

export function Header() {
  const userPath = userPic as unknown as string; // gambiarra, mudar isso

  return (
    <S.Header>
      <Error name="header">
        <Container>
          <MenuMobile linksMenu={navigationLinks} />

          <div className="content-top margin-b-30">
            <div className="box-logo">
              <NextImage src="/images/logo.png" />
            </div>

            <div className="info">
              <Button
                className="btn-new-certificate font-16-light"
                svg={{ icon: PencilPaperSVG(), size: 1 }}
                text="Criar novo"
              />

              <Notifications />

              <div className="profile-thumb">
                <div className="box-pic">
                  <NextImage src={userPath} />
                </div>

                <Button
                  className="btn-perfil font-16-bold"
                  text={userData.name}
                />
              </div>
            </div>
          </div>

          <div className="content-bottom">
            <nav className="menu-links">
              {navigationLinks.map((item) => (
                <Link className="font-16-light" key={item.id} href={item.href}>
                  {item.icon}
                  {item.link}
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </Error>
    </S.Header>
  );
}
