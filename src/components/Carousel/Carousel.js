import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.scss'
import img from '../../assets/image/1.jpg'
import img1 from '../../assets/image/2.jpg'
import img2 from '../../assets/image/3.jpg'

class Carousel extends React.Component {
  render () {
    let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    }
    return (
      <div className='wrapperCarousel'>
        <Slider {...settings}>
          <div>
            <img src={img} alt={'img'} className='carouselImage' />
          </div>
          <div>
            <img src={img1} alt={'img'} className='carouselImage' />
          </div>
          <div>
            <img src={img2} alt={'img'}className='carouselImage' />
          </div>
        </Slider>
      </div>
    )
  }
}

export default Carousel
