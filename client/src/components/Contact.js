import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import MailIcon from "../docs/contact-mail.svg";
import PhoneIcon from "../docs/contact-phone.svg";
import LocationIcon from "../docs/contact-location.svg";
import ContactIllustration from "../docs/contact-illustration.svg";
import CheckIcon from "../docs/contact-check.svg";

export default function Contact() {
  return (
    <section className="contact-page">
      <header className="Contact-nav-bar">
        <section className="Contact-nav-bar-left">
          <h3>Biscuiterie - Crêperie de Tahiti</h3>
        </section>
        <section className="Contact-nav-bar-right">
          <a href="#presentation-page" className="Nav-bar-links react-links">
            Processus
          </a>
          <a href="#product-page" className="Nav-bar-links react-links">
            Gamme
          </a>
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
          <div className="Nav-bar-icon-separator"></div>
          <button className="Nav-bar-random-button">
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAv%0D%0Ac3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0i%0D%0AMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTEuOTk5IDUx%0D%0AMS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45OTkgNTExLjk5OTsi%0D%0AIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+%0D%0ACgk8Zz4KCQk8cGF0aCBkPSJNMjE0LjY4NSw0MDIuODI4Yy0yNC44MjksMC00NS4wMjksMjAuMi00%0D%0ANS4wMjksNDUuMDI5YzAsMjQuODI5LDIwLjIsNDUuMDI5LDQ1LjAyOSw0NS4wMjlzNDUuMDI5LTIw%0D%0ALjIsNDUuMDI5LTQ1LjAyOSAgICBDMjU5LjcxMyw0MjMuMDI4LDIzOS41MTMsNDAyLjgyOCwyMTQu%0D%0ANjg1LDQwMi44Mjh6IE0yMTQuNjg1LDQ2Ny43NDJjLTEwLjk2NiwwLTE5Ljg4Ny04LjkyMi0xOS44%0D%0AODctMTkuODg3ICAgIGMwLTEwLjk2Niw4LjkyMi0xOS44ODcsMTkuODg3LTE5Ljg4N3MxOS44ODcs%0D%0AOC45MjIsMTkuODg3LDE5Ljg4N0MyMzQuNTcyLDQ1OC44MjIsMjI1LjY1LDQ2Ny43NDIsMjE0LjY4%0D%0ANSw0NjcuNzQyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBk%0D%0AYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+PGc+Cgk8%0D%0AZz4KCQk8cGF0aCBkPSJNMzcyLjYzLDQwMi44MjhjLTI0LjgyOSwwLTQ1LjAyOSwyMC4yLTQ1LjAy%0D%0AOSw0NS4wMjljMCwyNC44MjksMjAuMiw0NS4wMjksNDUuMDI5LDQ1LjAyOXM0NS4wMjktMjAuMiw0%0D%0ANS4wMjktNDUuMDI5ICAgIEM0MTcuNjU4LDQyMy4wMjgsMzk3LjQ1OCw0MDIuODI4LDM3Mi42Myw0%0D%0AMDIuODI4eiBNMzcyLjYzLDQ2Ny43NDJjLTEwLjk2NiwwLTE5Ljg4Ny04LjkyMi0xOS44ODctMTku%0D%0AODg3ICAgIGMwLTEwLjk2Niw4LjkyMi0xOS44ODcsMTkuODg3LTE5Ljg4N2MxMC45NjYsMCwxOS44%0D%0AODcsOC45MjIsMTkuODg3LDE5Ljg4N0MzOTIuNTE3LDQ1OC44MjIsMzgzLjU5NSw0NjcuNzQyLDM3%0D%0AMi42Myw0NjcuNzQyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRo%0D%0AIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+PGc+%0D%0ACgk8Zz4KCQk8cGF0aCBkPSJNMzgzLjcxNiwxNjUuNzU1SDIwMy41NjdjLTYuOTQzLDAtMTIuNTcx%0D%0ALDUuNjI4LTEyLjU3MSwxMi41NzFjMCw2Ljk0Myw1LjYyOSwxMi41NzEsMTIuNTcxLDEyLjU3MWgx%0D%0AODAuMTQ5ICAgIGM2Ljk0MywwLDEyLjU3MS01LjYyOCwxMi41NzEtMTIuNTcxQzM5Ni4yODcsMTcx%0D%0ALjM4MiwzOTAuNjU5LDE2NS43NTUsMzgzLjcxNiwxNjUuNzU1eiIgZGF0YS1vcmlnaW5hbD0iIzAw%0D%0AMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZmlsbD0i%0D%0AI0ZGRkZGRiIvPgoJPC9nPgo8L2c+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzczLjkxMSwyMzEuMDM1%0D%0ASDIxMy4zNzNjLTYuOTQzLDAtMTIuNTcxLDUuNjI4LTEyLjU3MSwxMi41NzFzNS42MjgsMTIuNTcx%0D%0ALDEyLjU3MSwxMi41NzFoMTYwLjUzNyAgICBjNi45NDMsMCwxMi41NzEtNS42MjgsMTIuNTcxLTEy%0D%0ALjU3MUMzODYuNDgxLDIzNi42NjQsMzgwLjg1MywyMzEuMDM1LDM3My45MTEsMjMxLjAzNXoiIGRh%0D%0AdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9%0D%0AIiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0i%0D%0ATTUwNi4zNDEsMTA5Ljc0NGMtNC43OTQtNS44ODQtMTEuODk4LTkuMjU4LTE5LjQ4OS05LjI1OEg5%0D%0ANS4yNzhMODcuMzcsNjIuMDk3Yy0xLjY1MS04LjAwOC03LjExMy0xNC43MzItMTQuNjE0LTE3Ljk4%0D%0AOSAgICBsLTU1LjE3Ny0yMy45NWMtNi4zNy0yLjc2Ny0xMy43NzMsMC4xNTYtMTYuNTM2LDYuNTI0%0D%0AYy0yLjc2Niw2LjM3LDAuMTU3LDEzLjc3NCw2LjUyNCwxNi41MzdMNjIuNzQ1LDY3LjE3bDYwLjgy%0D%0ANiwyOTUuMjYxICAgIGMyLjM5NiwxMS42MjgsMTIuNzUyLDIwLjA2OCwyNC42MjUsMjAuMDY4aDMw%0D%0AMS4xNjZjNi45NDMsMCwxMi41NzEtNS42MjgsMTIuNTcxLTEyLjU3MWMwLTYuOTQzLTUuNjI4LTEy%0D%0ALjU3MS0xMi41NzEtMTIuNTcxICAgIEgxNDguMTk3bC03LjM5OS0zNS45MTZINDUxLjY5YzExLjg3%0D%0AMiwwLDIyLjIyOS04LjQ0LDI0LjYyNC0yMC4wNjhsMzUuMTYzLTE3MC42NzUgICAgQzUxMy4wMDgs%0D%0AMTIzLjI2Niw1MTEuMTM2LDExNS42MjcsNTA2LjM0MSwxMDkuNzQ0eiBNNDUxLjY5LDI5Ni4zMDFI%0D%0AMTM1LjYxOWwtMzUuMTYxLTE3MC42NzRsMzg2LjM5MywwLjAwMUw0NTEuNjksMjk2LjMwMXoiIGRh%0D%0AdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9%0D%0AIiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+Cg=="
              alt="Nav Random Icon"
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
              />
            </div>
            <div className="shop-name-input">
              <label>Magasin</label>
              <input
                className="formulaire-input"
                type="text"
                autoComplete="off"
                name="shop"
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
            />
          </div>
          <div className="phone-input">
            <label>Telephone</label>
            <input
              className="formulaire-input"
              type="tel"
              autoComplete="off"
              name="phone"
            />
          </div>
          <div className="delivery-type-select">
            <label>Type de livraison</label>
            <select className="formulaire-input" placeholder="">
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
                <input type="checkbox" />
                <label>Crêpe</label>
              </div>
              <div className="product-selection-item">
                <input type="checkbox" />
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