import { Data } from "@/app/lib/data.type";

export interface IProductsProps {
  products: Data;
}

export interface IColumn {
  id: "imageUrl" | "productCode" | "name" | "stock" | "qty" | "price";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
}
