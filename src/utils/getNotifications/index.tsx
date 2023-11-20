import api from "api";

interface INotifications {
  customerCertificates: string[];
  userDocuments: string[];
}

export async function getNotification(): Promise<string> {
  var count = 0;

  const retrieveItems = async () => {
    const response = await api.get("/latestNotifications");

    return response.data;
  };
  const notifications: INotifications = await retrieveItems();

  for (const category of Object.keys(notifications)) {
    if (Array.isArray(notifications[category])) {
      // boa pratica - Certifica de que a propriedade é um array antes de acessar o comprimento
      count += notifications[category].length;
    }
  }

  if (count > 9) {
    return "+9";
  }

  return count.toString();
}
