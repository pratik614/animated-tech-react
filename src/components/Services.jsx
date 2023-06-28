import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"  //predefined css file for carousel
import Img1 from "../assets/3.jpg";
import Img2 from "../assets/4.jpg";

function Services() {
    return (
        <div className='body' >
            <Carousel infiniteLoop autoPlay showStatus={false}
            showArrows={false} interval={1000} showThumbs={false}>
                <div>
                    <img src={Img1} alt='item1' />
                    <p className='legend'>Full Stack</p>
                </div>
                <div>
                    <img src={Img2} alt='item2' />
                    <p className='legend'>peer-to-peer support</p>
                </div>
            </Carousel>

        </div>
    )
}

export default Services
