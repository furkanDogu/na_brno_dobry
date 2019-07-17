export interface ILoginFormValues {
  email: string;
  password: string;
  name: string;
  surname: string;
  [e: string]: string;
}

export interface INewProductValues {
  name: string;
  price: number;
  categoryId?: string;
}
