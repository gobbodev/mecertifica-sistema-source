import { HouseSVG, FolderSVG, MicrofoneSVG, CertificateSVG } from "public/svg/header";

interface INavigationLinks {
  id: number;
  link: string;
  href: string;
  icon?: JSX.Element;
}
export const navigationLinks : INavigationLinks[] = [
  {
    id: 1,
    link: "Dashboard",
    href: "/",
    icon: HouseSVG(),
  },
  {
    id: 2,
    link: "Meus Documentos",
    href: "/",
    icon: FolderSVG(),
  },
  {
    id: 3,
    link: "Eventos Ministrados",
    href: "/",
    icon: MicrofoneSVG(),
  },
  {
    id: 4,
    link: "Certificados",
    href: "/",
    icon: CertificateSVG(),
  },
];
