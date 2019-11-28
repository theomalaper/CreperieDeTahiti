import React, { useState } from 'react';
import './Homepage.scss';
import SelectionDotList from './SelectionDotList'
import Image1 from '../docs/artisan.jpg'
import Image2 from '../docs/baked-crepe.jpg'
import Image3 from '../docs/crepe-stack.jpg'
import Image4 from '../docs/crepe-orange.jpg'
import Image5 from '../docs/baked-crepe.jpg'
import Shop from '../docs/shop.svg'
import Clock from '../docs/clock.svg'
import Phone from '../docs/phone.svg'
import Truck from '../docs/truck.svg'
import SlideList from './SlideList'
import Bookmark from '../docs/bookmark-white.png'
import ProductArrow from '../docs/product-button-arrow.svg'
import Crepe from '../docs/crepe.svg'
import Telephone from '../docs/telephone.svg'
import Mail from '../docs/envelope.svg'
import Google from '../docs/google.svg'
import Facebook from '../docs/facebook.svg'
import Instagram from '../docs/instagram.svg'

export default function Homepage() {
  const [slideIndex, setSlideIndex] = useState(3)
  const imageGallery = [Image1, Image2, Image3, Image4, Image5]

  function setIndex(n, e) {
    e.preventDefault()
    if (slideIndex + n> imageGallery.length) {
      setSlideIndex(1)
    } else if (slideIndex + n < 1) {
      setSlideIndex(imageGallery.length - 1)
    } else {
      setSlideIndex(slideIndex + n)
    }
  }

  return (
    <div className="hompage">
      <section className="landing-page">
        <div className="landing-page--background">
          <div className="landing-overlay"></div>
        </div>
       <div className="landing-page--presentation">
         <h1 className="landing-title">Experience de produits de qualité et naturel</h1>
          <p className="landing-paragraph">Vous cherchez des produits de qualité, frais, produits au fenua et completement naturel contactze nous des maintenant pour voir ce que l’on peut faire pour vous</p>
          <button className="landing-contact-button"><p>CONTACTEZ NOUS</p></button>
       </div>
      </section>
      <section id="presentation-page" className="presentation-page">
        <div className="presentation-page--details">
          <div className="presentation-header">
            <div className="page-line"></div>
            <div className="header-info">
              <p>PRODUITS DU FENUA</p>
              <h2>Artisan Crêpier</h2>
            </div>
          </div>
          <div className="presentation-content">
            <h5>Ia orana na</h5>
            <div className="presentation-point">
              <h3 className="top-section-title">Naturel et frais</h3>
              <p>Notre pate est fraiche et faites sur place le jour meme pour assurer la meilleur qualité possible pour le client Nos crepes et galettes sont cuites sur les deux faces pour faire ressortir le gout et permettree une meilleure experience culinaire Nos recettes pour elaborer une pate maison fraiche, fait sur place, le jour de la cuisson de nos galettes et crepes</p>
            </div>
            <div className="presentation-point">
              <h3>Cuisson traditionelle bretonne</h3>
              <p>Notre pate est fraiche et faites sur place le jour meme pour assurer la meilleur qualité possible pour le client Nos crepes et galettes sont cuites sur les deux faces pour faire ressortir le gout et permettree une meilleure experience culinaire</p>
            </div>
            <button className="presentation-product-button"><p>Notre gamme</p></button>
          </div>
        </div>
        <div className="presentation-page--gallery">
          <div className="slider-gallery">
            <SlideList className="slidelist" slideIndex={slideIndex} imageGallery={imageGallery} />
            <div className="slider-button-section">
              <button className="prev" onClick={event => setIndex(-1, event)}><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAv%0D%0Ac3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0i%0D%0AMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUx%0D%0AMnB4IiB2aWV3Qm94PSIwIDAgMTk5LjQwNCAxOTkuNDA0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91%0D%0AbmQ6bmV3IDAgMCAxOTkuNDA0IDE5OS40MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48Zz4K%0D%0ACTxwb2x5Z29uIHBvaW50cz0iMTM1LjQxMiwwIDM1LjcwOSw5OS43MDIgMTM1LjQxMiwxOTkuNDA0%0D%0AIDE2My42OTUsMTcxLjExOSA5Mi4yNzcsOTkuNzAyIDE2My42OTUsMjguMjg1ICAiIGRhdGEtb3Jp%0D%0AZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAw%0D%0AMDAiIGZpbGw9IiM1MTUwNTAiLz4KPC9nPjwvZz4gPC9zdmc+Cg==" alt="Previous Arrow"/></button>
              <button className="next" onClick={event => setIndex(1, event)}><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAv%0D%0Ac3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0i%0D%0AMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUx%0D%0AMnB4IiB2aWV3Qm94PSIwIDAgMTk5LjQwNCAxOTkuNDA0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91%0D%0AbmQ6bmV3IDAgMCAxOTkuNDA0IDE5OS40MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48ZyB0cmFu%0D%0Ac2Zvcm09Im1hdHJpeCgtMSAxLjIyNDY1ZS0xNiAtMS4yMjQ2NWUtMTYgLTEgMTk5LjQwNCAxOTku%0D%0ANDA0KSI+PGc+Cgk8cG9seWdvbiBwb2ludHM9IjEzNS40MTIsMCAzNS43MDksOTkuNzAyIDEzNS40%0D%0AMTIsMTk5LjQwNCAxNjMuNjk1LDE3MS4xMTkgOTIuMjc3LDk5LjcwMiAxNjMuNjk1LDI4LjI4NSAg%0D%0AIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2Nv%0D%0AbG9yPSIjMDAwMDAwIiBmaWxsPSIjRTI4QjI2Ii8+CjwvZz48L2c+IDwvc3ZnPgo=" alt="Next Arrow"/></button>
            </div>
          </div>
          <div className="button-section">
            <SelectionDotList slideIndex={slideIndex}/>
          </div>
        </div>
      </section>
      <section className="process-presentation-stripe">
        <div className="process">
          <div className="process-step">
            <img className="process-step-icon" src={Shop} alt="Process Step Icon 1"/>
            <h3 className="process-step-title">Choisir vos produits</h3>
            <p className="process-step-description">Faites votre choix depuis notre gamme de produits</p>
          </div>
          <div className="process-step">
            <img className="process-step-icon" src={Phone} alt="Process Step Icon 2"/>
            <h3 className="process-step-title">Contactez Nous </h3>
            <p className="process-step-description">Contactez nous depuis notre rubrique contact </p>
          </div>
          <div className="process-step">
            <img className="process-step-icon" src={Clock} alt="Process Step Icon 3"/>
            <h3 className="process-step-title">On vous rappelle</h3>
            <p className="process-step-description">Selon votre commande on vous recontact vite</p>
          </div>
          <div className="process-step">
            <img className="process-step-icon" src={Truck} alt="Process Step Icon 4"/>
            <h3 className="process-step-title">Livraison Rapide</h3>
            <p className="process-step-description">Apres s’etre arranger on vous livre quotidienement </p>
          </div>
        </div>
      </section>
      <section id="product-page" className="product-page">
        <header className="product-page-header">
          <div className="product-page-line"></div>
          <div className="product-header-info">
            <p>EXPLORE</p>
            <h2>Notre Gamme</h2>
          </div>
        </header>
        <div className="product-page-content">
          <div className="product">
            <div className="product-content-section">
              <img src={Image2} alt="Product Image 1"/>
              <div className="product-info">
                <header>
                  <h4 className="product-name">Crepes</h4>
                  <p>Au froment (farine blanche)</p>
                </header>
                <div className="product-type-section">
                  <button className="product-type-button"><p>Pack de 5</p></button>
                  <button className="product-type-button"><p>A l'unité</p></button>
                </div>
              </div>
            </div>
            <div className="product-moreinfo-section">
              <div className="moreinfo-details">
                <img src={Bookmark} alt="More Info Icon" />
                <p>Plus d'information</p>
              </div>
              <button className="moreinfo-button"><img src={ProductArrow} alt="More Info Button Icon"/></button>
            </div>
          </div>
          <div className="product">
            <div className="product-content-section">
              <img src={Image3} alt="Product Image 1"/>
              <div className="product-info">
                <header>
                  <h4 className="product-name">Galettes</h4>
                  <p>Sarrasin</p>
                </header>
                <div className="product-type-section">
                  <button className="product-type-button"><p>Pack de 5</p></button>
                </div>
              </div>
            </div>
            <div className="product-moreinfo-section">
              <div className="moreinfo-details">
                <img src={Bookmark} alt="More Info Icon" />
                <p>Plus d'information</p>
              </div>
              <button className="moreinfo-button"><img src={ProductArrow} alt="More Info Button Icon"/></button>
            </div>
          </div>
          <div className="product">
            <div className="product-content-section">
              <img src={Image4} alt="Product Image 1"/>
              <div className="product-info">
                <header>
                  <h4 className="product-name">A venir</h4>
                  <p></p>
                </header>
                <div className="product-type-section">
                  <button className="product-type-button"><p>On y travaille</p></button>
                </div>
              </div>
            </div>
            <div className="product-moreinfo-section">
              <div className="moreinfo-details">
                <img src={Bookmark} alt="More Info Icon" />
                <p>Plus d'information</p>
              </div>
              <button className="moreinfo-button"><img src={ProductArrow} alt="More Info Button Icon"/></button>
            </div>
          </div>
        </div>
        <div className="product-page-company">
          <p className="company-subtitle">A propos de nous</p>
          <h3 className="company-title">Notre Compagnie - Biscuiterie & Creperie </h3>
          <p className="company-desc">Nous produisont nos produits frais directement dans le centre de Papeete. Notre compagnie a pour but de livrer des produits du fenua de qualité pour que les clients est une bonne experience culinaire de bretagne au milieu du Pacific.</p>
          <button className="company-contact-button"><p>CONTACTEZ-NOUS</p></button>
        </div>
      </section>
      <section className="formulaire-page">
        <div className="formulaire-background"></div>
        <div className="formulaire-overlay"></div>
        <div className="formulaire-info-section">
          <p className="formulaire-subtitle">CONTACT</p>
          <h3 className="formulaire-title">Remplissez notre formulaire et nous seront en contact d'ici peux</h3>
          <button className="formulaire-button"><p>Formulaire</p></button>
        </div>
      </section>
      <section className="footer-page">
        <div className="footer-info">
          <header className="footer-info-header">
            <img src={Crepe} alt="Footer Creperie Icon"/>
            <h4>Biscuiterie - Creperie de Tahiti</h4>
          </header>
          <div className="footer-info-content">
            <div className="footer-info-about-column">
              <h4>A propos de nous</h4>
              <p>Une creperie local livrant des produits frais de qualité directement du Fenua pour une experience bretonne au milieu du Pacifique</p>
              <div className="about-column-contact">
                <img src={Mail} alt=""/>
                <p>bpcf@gmail.com</p>
              </div>
              <div className="about-column-contact">
                <img src={Telephone} alt=""/>
                <p>+87 29 53 65</p>
              </div>
            </div>
            <div className="footer-info-center-column">
              <h4>Compagnie</h4>
              <p>Home</p>
              <p>Services</p>
              <p>FAQ</p>
              <p>Reviews</p>
              <p>Home</p>
            </div>
            <div className="footer-info-center-column">
              <h4>Compagnie</h4>
              <p>Home</p>
              <p>Services</p>
              <p>FAQ</p>
              <p>Reviews</p>
              <p>Home</p>
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
            <img className="footer-icon-1" src={Google} alt="Google Plus Footer Icon"/>
            <img className="footer-icon-2" src={Facebook} alt="Facebook Footer Icon"/>
            <img className="footer-icon-3" src={Instagram} alt="Instagram Footer Icon"/>
          </div>
          <p>39 Rue du General de Gaulre, Papeete, Tahiti</p>
        </div>
      </section>
    </div>
  );
};