import { Carousel } from "react-bootstrap";
import Wedding1 from '../images/wedding1.jpeg';
import Wedding2 from '../images/wedding2.webp';
import Wedding3 from '../images/wedding3.jpeg';
import Wedding4 from '../images/wedding4.jpeg';
import Wedding5 from '../images/wedding5.jpeg';
import Wedding6 from '../images/wedding6.jpeg';


function Wedding() {
  return (
<div>
    <div className="WeddingyMessage">
        <p> Weddings are beautiful moments shared with the love of your life. Photos of weddings will let
          you relive every second of those beautiful moments, forever and ever!
        </p>
     </div>
    <div className="EntireWeddingCarousel">
   
    
    <Carousel data-bs-theme="dark" fade className="backgroundcolorWedding">
        <Carousel.Item>
            <img className="WeddingCarouselImg" src={Wedding1} alt="aggie" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="WeddingCarouselImg" src={Wedding2} alt="aggie" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="WeddingCarouselImg" src={Wedding3} alt="aggie" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="WeddingCarouselImg" src={Wedding4} alt="aggie" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="WeddingCarouselImg" src={Wedding5} alt="aggie" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="WeddingCarouselImg" src={Wedding6} alt="aggie" />
        </Carousel.Item>
    </Carousel>
    </div>  
</div>
    )
};
  

export default Wedding;