import React from "react";
import classNames from "classnames";

export default function ProductType(props) {
  let buttonClass = classNames("product-type-button", {
    "product-type-button product-type-active": props.selected
  });

  return (
    <button onClick={() => props.handleSelect()} className={buttonClass}>
      <p>{props.name}</p>
    </button>
  );
}
