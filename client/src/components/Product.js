import React, { useState, useEffect, Fragment } from "react";
import "./Product.scss";
import { Link, useParams, Redirect } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import ProductTypeList from "./ProductTypeList";
import ProductTasteList from "./ProductTasteList";

export default function Product({ state, dispatch, SET_PRODUCT_DATA }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  let params = useParams();

  const [productType, setProductType] = useState(
    params.productType.replace(/-/g, " ")
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/products/${params.productId}`)
      .then(result => {
        dispatch({ type: SET_PRODUCT_DATA, product: result.data });
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const carouselGenerator = () => {
    if (!state.product.product_types) {
      return null;
    }

    const productActive = state.product.product_types.filter(
      product => product[0].name === productType
    )[0];

    let carouselItems = productActive[0].tastes.map(taste => {
      return (
        <Carousel.Item>
          <img className="d-block" src={taste.image} alt="First slide" />
          <Carousel.Caption>
            <h3>{taste.name}</h3>
            <p>{productType}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

    return carouselItems;
  };

  return (
    <Fragment>
      {!loading && (
        <section className="product-presentation-page">
          <header className="Product-nav-bar">
            <section className="Product-nav-bar-left">
              <Link className="Product-title-link" to="/">
                <h3>
                  Biscuiterie & Crêperie de Tahiti<span>®</span>
                </h3>
              </Link>
            </section>
            <section className="Product-nav-bar-right">
              <Link to="/" className="Nav-bar-links react-links">
                Home
              </Link>
              <div className="gamme-drop-down-container">
                <a href="#product-page" className="Nav-bar-links react-links">
                  Gamme
                  <img src="/docs/down-arrow.svg" alt="Gamme Drop Down Arrow" />
                </a>
                <ul className="gamme-drop-down">
                  <Link
                    className="gamme-link"
                    to="/product/5ddb2c361c9d44000033598a/Pack-de-5"
                    replace
                  >
                    <li>Crepe - Pack de 5</li>
                  </Link>
                  <Link
                    className="gamme-link"
                    to="/product/5ddb2c361c9d44000033598a/A-l'unité"
                  >
                    <li>Crepe - A l'unité</li>
                  </Link>
                  <Link
                    className="gamme-link"
                    to="/product/5ddb616e1c9d44000033598c/Pack-de-5"
                  >
                    <li>Galette</li>
                  </Link>
                </ul>
              </div>
              <Link className="Nav-bar-links react-links" to="/">
                A propos
              </Link>
              <Link className="Nav-bar-links react-links" to="/contact">
                Contact
              </Link>
              <button className="Nav-bar-search-button">
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAv%0D%0Ac3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0i%0D%0AMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45%0D%0ANjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6%0D%0Ac3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPjxnPjxwYXRoIGQ9%0D%0AIk01NS4xNDYsNTEuODg3TDQxLjU4OCwzNy43ODZjMy40ODYtNC4xNDQsNS4zOTYtOS4zNTgsNS4z%0D%0AOTYtMTQuNzg2YzAtMTIuNjgyLTEwLjMxOC0yMy0yMy0yM3MtMjMsMTAuMzE4LTIzLDIzICBzMTAu%0D%0AMzE4LDIzLDIzLDIzYzQuNzYxLDAsOS4yOTgtMS40MzYsMTMuMTc3LTQuMTYybDEzLjY2MSwxNC4y%0D%0AMDhjMC41NzEsMC41OTMsMS4zMzksMC45MiwyLjE2MiwwLjkyICBjMC43NzksMCwxLjUxOC0wLjI5%0D%0ANywyLjA3OS0wLjgzN0M1Ni4yNTUsNTQuOTgyLDU2LjI5Myw1My4wOCw1NS4xNDYsNTEuODg3eiBN%0D%0AMjMuOTg0LDZjOS4zNzQsMCwxNyw3LjYyNiwxNywxN3MtNy42MjYsMTctMTcsMTcgIHMtMTctNy42%0D%0AMjYtMTctMTdTMTQuNjEsNiwyMy45ODQsNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNz%0D%0APSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiLz48%0D%0AL2c+IDwvc3ZnPgo="
                  alt="Nav Search Icon"
                />
              </button>
            </section>
          </header>
          <section className="product-page-left">
            <Carousel
              width={500}
              direction={direction}
              onSelect={handleSelect}
              interval={null}
              activeIndex={index}
            >
              {carouselGenerator()}
            </Carousel>
          </section>
          <section className="product-page-right">
            <header className="product-page-right-header">
              <div className="right-header-info">
                <p>GAMME</p>
                <h3>{state.product.name}</h3>
              </div>
              <Link to="/">
                <button>
                  <img
                    src="/docs/product-back-arrow.svg"
                    alt="Product Back Icon"
                  />
                  <p>Retour</p>
                </button>
              </Link>
            </header>
            <div className="product-page-right-content">
              <p className="product-composition content-line">
                <span className="product-composition-header">
                  Composition:{" "}
                </span>
                {state.product.composition}
              </p>
              <div className="product-type-section content-line">
                <h5>Produit</h5>
                <div className="product-type-selection">
                  <ProductTypeList
                    productTypes={state.product.product_types}
                    productType={productType}
                    setProductType={setProductType}
                    setIndex={setIndex}
                  />
                </div>
              </div>
              <div className="product-taste-section content-line">
                <h5>Type</h5>
                <div className="product-taste-selection">
                  <ProductTasteList
                    productTypes={state.product.product_types}
                    setIndex={setIndex}
                    index={index}
                    productType={productType}
                  />
                </div>
              </div>
              <div className="product-review-section content-line">
                <h5>Revu de nos clients</h5>
                <div className="product-review-selection">
                  <div className="product-review">
                    <p>
                      “Produits Genial et livraivons rapides. Tres Appreciés.”
                    </p>
                    <h6>Week end</h6>
                  </div>
                  <div className="product-review">
                    <p>
                      “Produits Genial et livraivons rapides. Tres Appreciés.”
                    </p>
                    <h6>Hyper U</h6>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      )}
    </Fragment>
  );
}
