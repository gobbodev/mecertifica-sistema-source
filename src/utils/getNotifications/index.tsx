import api from "api";
import { notificationData } from "components/fakeData/mock-notification";
import { log } from "console";

interface INotifications {
  customerCertificates: string[];
  userDocuments: string[];
}

export async function getNotification(): Promise<string> {
  var count = 0;

  const retrieveItems = async () => {
    // const response = await api.get("/latestNotifications");
    const response = notificationData;
    console.log(response.data)
    return response;
  };
  const notifications: INotifications = await retrieveItems();

  for (const category in notifications) {
   
      console.log( "category: " + notifications[category])
      // boa pratica - Certifica de que a propriedade é um array antes de acessar o comprimento
      count += notifications[category].length;
    
  }

  if (count > 9) {
    return "+9";
  }

  return count.toString();
}
