import React, { useState } from 'react';
import './Homepage.scss';
import SelectionDotList from './SelectionDotList'
import Image1 from '../docs/artisan.jpg'
import Image2 from '../docs/baked-crepe.jpg'
import Image3 from '../docs/crepe-stack.jpg'
import Image4 from '../docs/crepe-orange.jpg'
import Image5 from '../docs/baked-crepe.jpg'
import SlideList from './SlideList'

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
        <div className="process-step">
          <img className="process-step-icon" src="" alt="Process Step Icon 1"/>
          <h5 className="process-step-title">Choisir vos produits</h5>
          <p className="process-step-description">Faites votre choix depuis notre gamme de produits</p>
        </div>
      </section>
    </div>
  );
};