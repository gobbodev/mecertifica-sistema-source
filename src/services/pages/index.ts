import { api } from "codiedigital/dist/cjs/services/api";
import { IPageInformations } from "src/interfaces/generics";

export async function getPageData(url: string | string[] | undefined) {
  try {
    const response = await api
      .get<IPageInformations>(`pages/${url}`)
      .then((r) => r.data);

    return {
      ...response,
      // about: {
      //   items: response.objetos,
      //   description: response.descricao,
      // },
      // products: {
      //   items: response.produtos,
      //   description: response.nossosProdutosDesc,
      // },
    };
  } catch {
    return console.log("faltando back");
  }
}
