"use client";
import { FC, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { IColumn, IProductsProps } from "./Products.type";
import styles from "./Product.module.scss";
import { Data } from "@/app/lib/data.type";

const columns: IColumn[] = [
  { id: "photo", label: "Photo", minWidth: 100, align: "center" },
  { id: "productCode", label: "Product code", minWidth: 80 },
  { id: "name", label: "Name", minWidth: 542, align: "left" },
  { id: "stock", label: "Stock", minWidth: 80 },
  { id: "qty", label: "QTY", minWidth: 80 },
  { id: "price", label: "Price", minWidth: 100 },
];

const Products: FC<IProductsProps> = ({ products }) => {
  const [productsState, setProductsState] = useState<Data>([]);

  useEffect(() => {
    setProductsState(products);
  }, [products]);

  return (
    <div className={styles["products"]} suppressHydrationWarning>
      <TableContainer
        sx={{ maxHeight: 440 }}
        suppressHydrationWarning>
        <Table
          stickyHeader
          aria-label='sticky table'
          suppressHydrationWarning>
          <TableHead suppressHydrationWarning>
            <TableRow suppressHydrationWarning>
              {columns.map((el) => (
                <TableCell
                  suppressHydrationWarning
                  key={el.id}
                  align={el.align}
                  style={{
                    minWidth: el.minWidth,
                  }}>
                  {el.label}
                </TableCell>
              ))}
              <TableCell
                suppressHydrationWarning
                style={{
                  minWidth: 95,
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                Image
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;
