import React, { useState } from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import MailIcon from "../docs/contact-mail.svg";
import PhoneIcon from "../docs/contact-phone.svg";
import LocationIcon from "../docs/contact-location.svg";
import ContactIllustration from "../docs/contact-illustration.svg";
import CheckIcon from "../docs/contact-check.svg";

export default function Contact() {
  const [name, setName] = useState("");
  const [shopName, setShopName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryType, setDeliveryType] = useState(null);

  return (
    <section className="contact-page">
      <header className="Contact-nav-bar">
        <section className="Contact-nav-bar-left">
          <Link className="contact-title-link" to="/">
            <h3>
              Biscuiterie & Crêperie de Tahiti<span>®</span>
            </h3>
          </Link>
        </section>
        <section className="Contact-nav-bar-right">
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
          <Link className="Nav-bar-links react-links" to="/product">
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
      <section className="contact-page-left">
        <div className="contact-page-left-info">
          <h3 className="contact-info-title">Nos infos</h3>
          <p className="contact-info-subtitle">
            Vous n'aimez pas les formulaires? Contactez nous ici:
          </p>
          <div className="contact-info-type">
            <img src={MailIcon} alt="Contact Mail Icon" />
            <p>crepesdetahiti@gmail.com</p>
          </div>
          <div className="contact-info-type">
            <img src={PhoneIcon} alt="Contact Phone Icon" />
            <p>40.57.74.75</p>
          </div>
          <div className="contact-info-type">
            <img src={LocationIcon} alt="Contact Location Icon" />
            <p>43708 Fare Tony, 98712 Papeete</p>
          </div>
          <div className="contact-info-type">
            <p className="info-tahiti-number">N° Tahiti: C74396</p>
            <p>RCS: 1884B</p>
          </div>
        </div>
        <img
          className="contact-page-left-illustration"
          src={ContactIllustration}
          alt="contact-page-left-illustration"
        />
      </section>
      <section className="contact-page-right">
        <div className="formulaire-header">
          <h3 className="formulaire-header-title">Contactez Nous</h3>
          <p className="formulaire-header-subtitle">
            Remplisser ce formulaire et nous seront en contact d'ici peux
          </p>
        </div>
        <form className="formulaire-content">
          <div className="formulaire-name-section">
            <div className="first-name-input">
              <label>Prenom</label>
              <input
                type="text"
                autoComplete="off"
                className="formulaire-input"
                name="first-name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </div>
            <div className="shop-name-input">
              <label>Magasin</label>
              <input
                className="formulaire-input"
                type="text"
                autoComplete="off"
                name="shop"
                value={shopName}
                onChange={event => setShopName(event.target.value)}
              />
            </div>
          </div>
          <div className="email-input">
            <label>Email</label>
            <input
              className="formulaire-input"
              type="email"
              autoComplete="off"
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>
          <div className="phone-input">
            <label>Telephone</label>
            <input
              className="formulaire-input"
              type="tel"
              autoComplete="off"
              name="phone"
              value={phone}
              onChange={event => setPhone(event.target.value)}
            />
          </div>
          <div className="delivery-type-select">
            <label>Type de livraison</label>
            <select
              className="formulaire-input"
              placeholder=""
              value={deliveryType}
              onChange={event => setDeliveryType(event.target.value)}
            >
              <option></option>
              <option>Journalier</option>
              <option>Hebdomadaire</option>
              <option>Mensuel</option>
              <option>Uncertain</option>
            </select>
          </div>
          <div className="product-selection-section">
            <label>Produits d'interet</label>
            <div className="product-selection">
              <div className="product-selection-item">
                <input type="checkbox" className="checkbox" />
                <label>Crêpe</label>
              </div>
              <div className="product-selection-item">
                <input type="checkbox" className="checkbox" />
                <label>Galette</label>
              </div>
            </div>
          </div>
          <button className="formulaire-button">
            <img src={CheckIcon} alt="Contact Check Icon" />
          </button>
        </form>
      </section>
    </section>
  );
}
