import React from 'react';
import './Homepage.scss';

export default function Homepage() {

  const imageGallery = ['https://github.com/theomalaper/CreperieDeTahiti/blob/master/doc/artisan.jpg?raw=true', 'https://github.com/theomalaper/CreperieDeTahiti/blob/master/doc/baked-crepe.jpg?raw=true', 'https://github.com/theomalaper/CreperieDeTahiti/blob/master/doc/crepe-steaming.jpg?raw=true', 'https://github.com/theomalaper/CreperieDeTahiti/blob/master/doc/crepe-stack.jpg?raw=true', 'https://github.com/theomalaper/CreperieDeTahiti/blob/master/doc/cookies.jpg?raw=true']

  return (
    <div className="hompage">
      <section className="landing-page">
        <div className="landing-page--background">
         <img className="landing-background-image" src="https://github.com/theomalaper/CreperieDeTahiti/blob/master/doc/crepe-orange.jpg?raw=true" alt="Landing Page Background"/>
          <div className="landing-overlay"></div>
        </div>
       <div className="landing-page--presentation">
         <h1 className="landing-title">Experience de produits de qualité et naturel</h1>
          <p className="landing-paragraph">Vous cherchez des produits de qualité, frais, produits au fenua et completement naturel contactze nous des maintenant pour voir ce que l’on peut faire pour vous</p>
          <button className="landing-contact-button"><p>CONTACTEZ NOUS</p></button>
       </div>
      </section>
      <section className="presentation-page">
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
            <img className="slides"src="https://github.com/theomalaper/CreperieDeTahiti/blob/master/doc/cookies.jpg?raw=true" alt="Gallery Photo"/>
            <a className="prev"><img src="" alt="Previous Arrow"/></a>
            <a className="next"><img src="" alt="Next Arrow"/></a>
          </div>
          <div className="button section">
            <button>.</button>
            <button>.</button>
            <button>.</button>
            <button>.</button>
            <button>.</button>
          </div>
        </div>
      </section>
    </div>
  );
};