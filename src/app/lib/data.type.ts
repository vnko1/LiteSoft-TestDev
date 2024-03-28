export interface IData {
  products: Array<{
    productCode: number;
    stock: string;
    quantity: number;
    euroPrice: number;
    dollarPrice: number;
    favorite: boolean;
  }>;
}
