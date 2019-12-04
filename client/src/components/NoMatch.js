import React from "react";
import "./NoMatch.scss";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <section className="no-match-page">
      <header className="NoMatch-nav-bar">
        <section className="NoMatch-nav-bar-left">
          <h3>
            Biscuiterie - Crêperie de Tahiti<span>®</span>
          </h3>
        </section>
        <section className="NoMatch-nav-bar-right">
          <a href="#presentation-page" className="Nav-bar-links react-links">
            Home
          </a>
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
          <a href="#about" className="Nav-bar-links react-links">
            A propos
          </a>
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
      <section className="no-match-page-content">
        <div className="no-match-content-left">
          <img
            className="no-match-background"
            src="/docs/tahiti.png"
            alt="Tahiti Icon"
          />
          <img
            className="no-match-illustration"
            src="/docs/no-match-illustration.png"
            alt="404 Lost Icon"
          />
        </div>
        <div className="no-match-content-right">
          <div className="right-content-number">
            <h1 className="number-first">4</h1>
            <h1 className="number-second">0</h1>
            <h1 className="number-third">4</h1>
          </div>
          <h3 className="right-content-title">Page Introuvable</h3>
          <p className="right-content-desc">
            On dirait que la page a laquelle vous essayez d’acceder n’existe
            pas. Revisez l’URL pour verifiez que vous n’avez pas fait de fautes
          </p>
          <Link to="/">
            <button className="right-content-home-button">
              <img src="/docs/left-arrow.svg" alt="No Match Back Icon" />
              <p>Retour</p>
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
}
