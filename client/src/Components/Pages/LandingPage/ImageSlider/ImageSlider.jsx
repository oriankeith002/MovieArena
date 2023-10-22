import React, {Component} from 'react';
import './ImageSlider.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideTester from '../../../assets/test.jpg'


const content = [
  <div className='slider-wrapper' key={1}>
    {/* <img src={slideTester} alt='test1' /> */}
    <p>Am slide one </p>
  </div>,
  <div className='slider-wrapper' key={2}>
    {/* <img src={slideTester} alt='test2' /> */}
    <p>Am slide two</p>
  </div>,
  <div className='slider-wrapper' key={3}>
    {/* <img src={slideTester} alt= 'test3' /> */}
    <p>Am slide 3</p>
  </div>
]

const settings = {
  dots:true,
  // infinite:true,
  speed:500,
  slidesToShow:1,
  slidesToScroll:1,
  autoplay:true
}


const ImageSlider = () => {
  
    // className='our-slider'
    return (
      <div className='our-slider'>
        <Slider {...settings}>
          {content}  
        </Slider>
      </div>
    )
} 

export default ImageSlider;