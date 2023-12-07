"use client";

import React, { useContext, createContext, useState, useEffect } from "react";
import { MyResponseType, ProductType } from "@/defs/TypeDefs";

export const ProductContext = createContext<ProductType[]>([]);

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [productData, setProductData] = useState<ProductType[]>([]);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    const responseJson: MyResponseType<ProductType[]> = await response.json();
    if (!response.ok) throw new Error("Error From Fetch Product");
    setProductData(responseJson.data);
  };

  const currencyFormatted = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={productData}>
      {children}
    </ProductContext.Provider>
  );
};
