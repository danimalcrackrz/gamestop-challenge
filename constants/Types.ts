// Form types

export type FormType = {
  name: string;
  phone: string;
  address: string;
  creditCard: string;
};

// atom types

export type ProductType = {
  id: number;
  name: string;
  image: string;
  type: string;
  variations: string[];
  description: string;
};
