export type Data = Array<{
  productCode: number;
  stock: string;
  price: { euro: number; dollar: number };
  quantity: number;
  favorite: boolean;
  imageUrl: string;
  name: string;
}>;
