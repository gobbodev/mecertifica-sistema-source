interface INotifications {
  customerCertificates: string[];
  userDocuments: string[];
}

interface ICustomerCertificates {
  customerName: string;
  certificateStatus: string;
  notificationMessage: string;
  customerID: string;
}

interface IUserDocuments{
    rg: string;
    cpf: string;
    payment: string;
}

export type {
    INotifications,
    ICustomerCertificates,
    IUserDocuments
}
