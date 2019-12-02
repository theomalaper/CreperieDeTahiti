import React from "react";
import classNames from "classnames";

export default function ProductTaste(props) {
  let buttonClass = classNames("product-taste-button", {
    "product-taste-button product-taste-active": props.selected
  });

  return (
    <button onClick={() => props.handleClick()} className={buttonClass}>
      <p>{props.name}</p>
      <img src={props.icon} alt="Product Rhum Icon" />
    </button>
  );
}
