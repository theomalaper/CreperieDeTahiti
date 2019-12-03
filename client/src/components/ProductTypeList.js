import React from "react";
import ProductType from "./ProductType";

export default function ProductTypeList({
  productTypes,
  productType,
  setIndex,
  setProductType
}) {
  if (!productTypes) {
    return null;
  }

  const productList = productTypes.map(product => {
    return (
      <ProductType
        name={product[0].name}
        selected={product[0].name === productType ? true : false}
        key={product[0]._id}
        handleSelect={() => {
          setProductType(product[0].name);
          setIndex(0);
        }}
      />
    );
  });

  return productList;
}
