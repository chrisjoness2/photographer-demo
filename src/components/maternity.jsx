import React from "react";
import { Carousel } from "react-bootstrap";
import aggie1 from '../images/aggie1.JPG';
import aggie2 from '../images/aggie2.JPG'
import aggie3 from '../images/aggie5.JPG';
import aggie4 from '../images/aggie4.JPG';
import aggie7 from '../images/aggie7.JPG';
import aggie6 from '../images/aggie6.JPG';
import aggieflw1 from '../images/aggieflw1.JPG'
import aggieflw2 from '../images/aggieflw2.JPG'
import dark1 from '../images/blkbackgrnd.JPG'

function Maternity() {
    return (
<div>
    <div className="MaternityMessage">
        <p> Maternity photos are pictures that speak a thousand words. You can look at them now and forever
            and remember the journey as your little one was growing inside of you.
        </p>
        <br/>
     </div>
    <div className="EntireMaternityCarousel">
   
    
    <Carousel fade>
        <Carousel.Item>
            <img className="CarouselImg" src={aggie1} alt="aggie" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="CarouselImg" src={aggie2} alt="aggie" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="CarouselImg" src={aggie3} alt="aggie" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="CarouselImg" src={aggie4} alt="aggie" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="CarouselImg" src={dark1} alt="aggie" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="CarouselImg" src={aggie6} alt="aggie" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="CarouselImg" src={aggie7} alt="aggie" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="CarouselImg" src={aggieflw1} alt="aggie" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="CarouselImg" src={aggieflw2} alt="aggie" />
        </Carousel.Item>
    </Carousel>
    </div>  
</div>
    )
};

export default Maternity;