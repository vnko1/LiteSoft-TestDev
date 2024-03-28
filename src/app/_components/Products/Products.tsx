"use client";
import { FC, useState } from "react";
import { IProductsProps } from "./Products.type";

const Products: FC<IProductsProps> = ({ products }) => {
  const [productsState] = useState(products);
  //   console.log(productsState);
  return <div>PRODUCTS</div>;
};

export default Products;
