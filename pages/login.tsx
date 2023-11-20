import { getPageData } from "src/services/pages";
import { IPageInformations } from "src/interfaces/generics";

import { Home } from "components/sections/";
import { Login } from "components/sections/login";

export default function LoginPage({
  pageContent,
}: {
  pageContent: IPageInformations;
}) {
  return (
    <Login/>
  );
}

// export const getServerSideProps = async () => {
//   // const pageContent = await getPageData("home");

//   // return {
//   //   props: {
//   //     pageContent,
//   //   },
//   // };]
//   return
// };
