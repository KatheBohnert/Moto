import React from "react";
import image1 from '../Assets/termius.png';
import image2 from '../Assets/termius.png';
import image3 from '../Assets/termius.png';
import { CCarouselItem } from '@coreui/react';
import { CCarouselCaption } from '@coreui/react';
import { CCarousel } from '@coreui/react';
import { CImage } from "@coreui/react";



function UncontrolledExample() {
  return (
    
<CCarousel controls indicators>
  <CCarouselItem id="proceso">
    <CImage className="d-block w-100" src={image1} alt="Descripción de la imagen 1" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Primera etiqueta de la diapositiva</h5>
      <p>Contenido representativo para la primera diapositiva.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={image2} alt="Descripción de la imagen 2" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Segunda etiqueta de la diapositiva</h5>
      <p>Contenido representativo para la segunda diapositiva.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={image3} alt="Descripción de la imagen 3" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Tercera etiqueta de la diapositiva</h5>
      <p>Contenido representativo para la tercera diapositiva.</p>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel>
  )
}

export default UncontrolledExample;