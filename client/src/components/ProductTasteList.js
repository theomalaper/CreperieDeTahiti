import React from "react";
import ProductTaste from "./ProductTaste";

export default function ProductTasteList({
  setIndex,
  productTypes,
  productType,
  index
}) {
  if (!productTypes) {
    return null;
  }

  const productActive = productTypes.filter(
    product => product[0].name === productType
  )[0];

  const tastesList = productActive[0].tastes.map(taste => {
    return (
      <ProductTaste
        name={taste.name}
        key={taste.id}
        selected={taste.id === index ? true : false}
        handleClick={() => setIndex(taste.id)}
        icon={taste.icon}
      />
    );
  });

  return tastesList;
}
