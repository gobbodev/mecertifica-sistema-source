import { getPageData } from "src/services/pages";
import { IPageInformations } from "src/interfaces/generics";

import { Home } from "components/sections/";

export default function HomePage({
  pageContent,
}: {
  pageContent: IPageInformations;
}) {
  return (
    <Home/>
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
