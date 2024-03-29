"use client";
import { FC, useEffect, useState } from "react";
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
  const [productsState, setProductsState] = useState<Data>([]);

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
                  minWidth: 95,
                  display: "flex",
                  justifyContent: "space-between",
                  justifyItems: "center",
                }}>
                <Switch />
                <span style={{ paddingTop: "6px" }}>Switch</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;
