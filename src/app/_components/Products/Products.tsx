"use client";
import { FC, useState } from "react";
import { IProductsProps } from "./Products.type";

const Products: FC<IProductsProps> = ({ products }) => {
  const [productsState] = useState(products);

  return <div>PRODUCTS</div>;
};

export default Products;
