import { Address } from "cluster";

interface IAddress {
  city: string;
  country: string;
  state: string;
  street: string;
  zipCode: string;
}

interface IContact {
  address: Address;
  email: string;
  firstName: string;
  id: string;
  jobTitle: string;
  lastName: string;
  phoneNumber: string;
}

export interface ISite {
  address: IAddress;
  clientId: string;
  contacts: {
    main: IContact;
  };
  createdAt: string;
  id: string;
  images: string[];
  tags: string[];
  title: string;
  updatedAt: string;
}
