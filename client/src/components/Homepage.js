import React from 'react';
import './Homepage.scss';

export default function Homepage() {
  return (
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
  );
};