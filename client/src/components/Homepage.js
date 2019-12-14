import React, { useState } from "react";
import "./Homepage.scss";
import Image1 from "../docs/artisan.jpg";
import Image2 from "../docs/baked-crepe.jpg";
import Image3 from "../docs/crepe-stack.jpg";
import Image4 from "../docs/crepe-orange.jpg";
import Shop from "../docs/shop.svg";
import Clock from "../docs/clock.svg";
import Phone from "../docs/phone.svg";
import Truck from "../docs/truck.svg";
import Bookmark from "../docs/bookmark-white.png";
import ProductArrow from "../docs/product-button-arrow.svg";
import Crepe from "../docs/crepe.svg";
import Telephone from "../docs/telephone.svg";
import Mail from "../docs/envelope.svg";
import Google from "../docs/google.svg";
import Facebook from "../docs/facebook.svg";
import Instagram from "../docs/instagram.svg";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export default function Homepage() {
  // function setIndex(n, e) {
  //   e.preventDefault()
  //   if (slideIndex + n> imageGallery.length) {
  //     setSlideIndex(1)
  //   } else if (slideIndex + n < 1) {
  //     setSlideIndex(imageGallery.length - 1)
  //   } else {
  //     setSlideIndex(slideIndex + n)
  //   }
  // }

  const [indexLanding, setIndexLanding] = useState(0);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const handleSelectLanding = (selectedIndex, e) => {
    setIndexLanding(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <div className="homepage">
      <header className="Homepage-nav-bar">
        <section className="Homepage-nav-bar-left">
          <h3>
            Biscuiterie & Crêperie de Tahiti<span>®</span>
          </h3>
        </section>
        <section className="Homepage-nav-bar-right">
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
      <section className="landing-page" id="landing-page">
        <Carousel
          width={500}
          height={600}
          direction={direction}
          onSelect={handleSelectLanding}
          interval={null}
          activeIndex={indexLanding}
        >
          <Carousel.Item>
            <div className="landing-page--background">
              <div className="landing-overlay"></div>
              <img
                className="landing-background-image"
                src="/docs/baked-crepe.jpg"
                alt="Background Image"
              />
            </div>
            <div className="landing-page--presentation">
              <h1 className="landing-title">La Creperie du Fenua</h1>
              <p className="landing-paragraph">
                Notre gamme de produits de qualité, frais, produits au fenua et
                completement naturel contactze nous des maintenant pour voir ce
                que l’on peut faire pour vous
              </p>
              <Link className="landing-contact-button" to="/contact">
                <p>CONTACTEZ NOUS</p>
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="landing-page--background">
              <div className="landing-overlay"></div>
              <img
                className="landing-background-image"
                src="/docs/crepe-orange.jpg"
                alt="Background Image"
              />
            </div>
            <div className="landing-page--presentation">
              <h1 className="landing-title">La Recette de la Semaine</h1>
              <p className="landing-paragraph">
                Notre gamme de produits de qualité, frais, produits au fenua et
                completement naturel contactze nous des maintenant pour voir ce
                que l’on peut faire pour vous
              </p>
              <Link className="landing-contact-button" to="/contact">
                <p>RECETTE</p>
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="landing-page--background">
              <div className="landing-overlay"></div>
              <img
                className="landing-background-image"
                src="/docs/crepe-orange.jpg"
                alt="Background Image"
              />
            </div>
            <div className="landing-page--presentation">
              <h1 className="landing-title">Notre Promo de la Semaine</h1>
              <p className="landing-paragraph">
                Notre gamme de produits de qualité, frais, produits au fenua et
                completement naturel contactze nous des maintenant pour voir ce
                que l’on peut faire pour vous
              </p>
              <Link className="landing-contact-button" to="/contact">
                <p>RECETTE</p>
              </Link>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      <section id="presentation-page" className="presentation-page">
        <div className="presentation-page--details">
          <div className="presentation-header">
            <div className="header-info">
              <p>PRODUITS DU FENUA</p>
              <h2>Artisan Crêpier</h2>
            </div>
          </div>
          <div className="presentation-content">
            <h5>Ia orana na</h5>
            <div className="presentation-point">
              <h3 className="top-section-title">Naturel et frais</h3>
              <p>
                Notre pate est fraiche et faites sur place le jour meme pour
                assurer la meilleur qualité possible pour le client Nos crepes
                et galettes sont cuites
              </p>
            </div>
            <div className="presentation-point">
              <h3>Cuisson traditionelle bretonne</h3>
              <p>
                Notre pate est fraiche et faites sur place le jour meme pour
                assurer la meilleur qualité possible pour le client Nos crepes
                et galettes sont cuites sur les faces
              </p>
            </div>
            <a href="#gamme">
              <button className="presentation-product-button">
                <p>Notre gamme</p>
              </button>
            </a>
          </div>
        </div>
        <div className="presentation-page--gallery">
          <div className="slider-gallery">
            <Carousel
              width={500}
              height={600}
              direction={direction}
              onSelect={handleSelect}
              interval={null}
              activeIndex={index}
            >
              <Carousel.Item>
                <img
                  className="d-block"
                  src={Image1}
                  alt="First slide"
                  width={500}
                  height={500}
                />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={Image2}
                  alt="Second slide"
                  width={800}
                  height={500}
                />
                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={Image3}
                  alt="Third slide"
                  width={500}
                  height={500}
                />
                {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
          </div>
          {/* <div className="button-section">
            <SelectionDotList slideIndex={slideIndex}/>
          </div> */}
        </div>
      </section>
      <section className="process-presentation-stripe">
        <div className="process">
          <div className="process-step">
            <img
              className="process-step-icon"
              src={Shop}
              alt="Process Step Icon 1"
            />
            <h3 className="process-step-title">Choisir vos produits</h3>
            <p className="process-step-description">
              Faites votre choix depuis notre gamme de produits
            </p>
          </div>
          <div className="process-step">
            <img
              className="process-step-icon"
              src={Phone}
              alt="Process Step Icon 2"
            />
            <h3 className="process-step-title">Contactez Nous </h3>
            <p className="process-step-description">
              Contactez nous depuis notre rubrique contact{" "}
            </p>
          </div>
          <div className="process-step">
            <img
              className="process-step-icon"
              src={Clock}
              alt="Process Step Icon 3"
            />
            <h3 className="process-step-title">On vous rappelle</h3>
            <p className="process-step-description">
              Selon votre commande on vous recontact vite
            </p>
          </div>
          <div className="process-step">
            <img
              className="process-step-icon"
              src={Truck}
              alt="Process Step Icon 4"
            />
            <h3 className="process-step-title">Livraison Rapide</h3>
            <p className="process-step-description">
              Apres s’etre arranger on vous livre quotidienement{" "}
            </p>
          </div>
        </div>
      </section>
      <section id="product-page" className="product-page">
        <header className="product-page-header">
          <div className="product-header-info" id="gamme">
            <p>EXPLORE</p>
            <h2>Notre Gamme</h2>
          </div>
        </header>
        <div className="product-page-content">
          <div className="product">
            <div className="product-content-section">
              <img src={Image2} alt="Product Image 1" />
              <div className="product-info">
                <header>
                  <h4 className="product-name">Crepes</h4>
                  <p>Au froment (farine blanche)</p>
                </header>
                <div className="product-type-section">
                  <Link
                    to="/product/5ddb2c361c9d44000033598a/Pack-de-5"
                    className="product-type-link"
                  >
                    <button className="product-type-button">
                      <p>Pack de 5</p>
                    </button>
                  </Link>
                  <Link
                    to="/product/5ddb2c361c9d44000033598a/A-l'unité"
                    className="product-type-link"
                  >
                    <button className="product-type-button">
                      <p>A l'unité</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-moreinfo-section">
              <div className="moreinfo-details">
                <img src={Bookmark} alt="More Info Icon" />
                <p>Plus d'information</p>
              </div>
              <Link to="/product/5ddb2c361c9d44000033598a/Pack-de-5">
                <button className="moreinfo-button">
                  <img src={ProductArrow} alt="More Info Button Icon" />
                </button>
              </Link>
            </div>
          </div>
          <div className="product">
            <div className="product-content-section">
              <img src={Image3} alt="Product Image 1" />
              <div className="product-info">
                <header>
                  <h4 className="product-name">Galettes</h4>
                  <p>Sarrasin</p>
                </header>
                <div className="product-type-section">
                  <Link
                    to="/product/5ddb616e1c9d44000033598c/Pack-de-5"
                    className="product-type-link"
                  >
                    <button className="product-type-button">
                      <p>Pack de 5</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-moreinfo-section">
              <div className="moreinfo-details">
                <img src={Bookmark} alt="More Info Icon" />
                <p>Plus d'information</p>
              </div>
              <Link to="/product/5ddb616e1c9d44000033598c/Pack-de-5">
                <button className="moreinfo-button">
                  <img src={ProductArrow} alt="More Info Button Icon" />
                </button>
              </Link>
            </div>
          </div>
          <div className="product">
            <div className="product-content-section">
              <img src={Image4} alt="Product Image 1" />
              <div className="product-info">
                <header>
                  <h4 className="product-name">A venir</h4>
                  <p></p>
                </header>
                <div className="product-type-section">
                  <button className="product-type-button-inactive">
                    <p>On y travaille</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="product-moreinfo-section">
              <div className="moreinfo-details">
                <img src={Bookmark} alt="More Info Icon" />
                <p>Plus d'information</p>
              </div>
              <button className="moreinfo-button">
                <img src={ProductArrow} alt="More Info Button Icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="product-page-company">
          <p className="company-subtitle">A propos de nous</p>
          <h3 className="company-title">
            Notre Compagnie - Biscuiterie & Creperie{" "}
          </h3>
          <p className="company-desc">
            Nous produisont nos produits frais directement dans le centre de
            Papeete. Notre compagnie a pour but de livrer des produits du fenua
            de qualité pour que les clients est une bonne experience culinaire
            de bretagne au milieu du Pacific.
          </p>
          <Link to="/contact">
            <button className="company-contact-button">
              <p>CONTACTEZ-NOUS</p>
            </button>
          </Link>
        </div>
      </section>
      <section className="formulaire-page" id="about">
        <div className="formulaire-background"></div>
        <div className="formulaire-overlay"></div>
        <div className="formulaire-info-section">
          <p className="formulaire-subtitle">CONTACT</p>
          <h3 className="formulaire-title">
            Remplissez notre formulaire et nous seront en contact d'ici peux
          </h3>
          <Link to="/contact">
            <button className="formulaire-button">
              <p>Formulaire</p>
            </button>
          </Link>
        </div>
      </section>
      <section className="footer-page">
        <div className="footer-info">
          <header className="footer-info-header">
            <img src={Crepe} alt="Footer Creperie Icon" />
            <h4>Biscuiterie - Creperie de Tahiti</h4>
          </header>
          <div className="footer-info-content">
            <div className="footer-info-about-column">
              <h4>A propos de nous</h4>
              <p>
                Une creperie local livrant des produits frais de qualité
                directement du Fenua.
              </p>
              <div className="about-column-contact">
                <img src={Mail} alt="" />
                <p>bpcf@gmail.com</p>
              </div>
              <div className="about-column-contact">
                <img src={Telephone} alt="" />
                <p>+87 29 53 65</p>
              </div>
            </div>
            <div className="footer-info-center-column">
              <h4>Compagnie</h4>
              <a href="/#landing-page">
                <p>Home</p>
              </a>
              <Link to="/contact">
                <p>Contact</p>
              </Link>
              <a href="#presentation-page">
                <p>FAQ</p>
              </a>
              <a href="#">
                <p>Reviews</p>
              </a>
              <Link to="/contact">
                <p>Services</p>
              </Link>
            </div>
            <div className="footer-info-center-column">
              <h4>Liens</h4>
              <Link to="/product/5ddb2c361c9d44000033598a/Pack-de-5">
                <p>Crepe</p>
              </Link>
              <Link to="/product/5ddb616e1c9d44000033598c/Pack-de-5">
                <p>Galette</p>
              </Link>
              <a href="#gamme">
                <p>Gamme</p>
              </a>
              <a href="#presentation-page">
                <p>Info</p>
              </a>
            </div>
            <div className="footer-info-email-column">
              <h4>Obtenez nos news et offres</h4>
              <p>Home</p>
            </div>
          </div>
        </div>
        <div className="footer-extra-info">
          <p>© Biscuiterie - Creperie de Tahiti tous droits reservé</p>
          <div className="footer-icon-gallery">
            <img
              className="footer-icon-1"
              src={Google}
              alt="Google Plus Footer Icon"
            />
            <img
              className="footer-icon-2"
              src={Facebook}
              alt="Facebook Footer Icon"
            />
            <img
              className="footer-icon-3"
              src={Instagram}
              alt="Instagram Footer Icon"
            />
          </div>
          <p>39 Rue du General de Gaulre, Papeete, Tahiti</p>
        </div>
      </section>
    </div>
  );
}
