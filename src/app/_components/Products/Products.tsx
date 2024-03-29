"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
} from "@mui/material";
import { IColumn, IProductsProps } from "./Products.type";
import styles from "./Product.module.scss";
import { Data } from "@/app/lib/data.type";

const columns: IColumn[] = [
  { id: "imageUrl", label: "Photo", minWidth: 100, align: "center" },
  { id: "productCode", label: "Product code", minWidth: 80 },
  { id: "name", label: "Name", minWidth: 542, align: "left" },
  { id: "stock", label: "Stock", minWidth: 80 },
  { id: "qty", label: "QTY", minWidth: 80 },
  { id: "price", label: "Price", minWidth: 100 },
];

const Products: FC<IProductsProps> = ({ products }) => {
  const [productsState, setProductsState] = useState<Data[]>([]);

  useEffect(() => {
    setProductsState(products);
  }, [products]);

  return (
    <div className={styles["products"]}>
      <TableContainer className={styles["products__table"]}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((el) => (
                <TableCell
                  key={el.id}
                  align={el.align}
                  style={{
                    minWidth: el.minWidth,
                  }}>
                  {el.label}
                </TableCell>
              ))}
              <TableCell
                style={{
                  minWidth: 87,
                }}></TableCell>
              <TableCell
                style={{
                  minWidth: 95,
                  display: "flex",
                  justifyContent: "space-between",
                  justifyItems: "center",
                }}>
                <Switch />
                <span style={{ paddingTop: "6px" }}>Image</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productsState.map((product) => {
              return (
                <TableRow
                  hover
                  role='checkbox'
                  tabIndex={-1}
                  key={product.productCode}>
                  {columns.map((column) => {
                    const value = product[column.id];

                    if (
                      column.id === "imageUrl" &&
                      typeof value === "string"
                    )
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}>
                          <Image
                            alt='product'
                            src={value}
                            width={100}
                            height={100}
                          />
                        </TableCell>
                      );
                    if (typeof value === "object")
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}>
                          {value.euro} {value.dollar}
                        </TableCell>
                      );
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;
