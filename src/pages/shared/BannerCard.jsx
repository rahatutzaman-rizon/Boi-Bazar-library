
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// banner card styles
import './bannerCard.css'



function BannerCard() {
  return (
    <div className='banner-card'>
     
     <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://i.ibb.co/0Xqg2qY/hand-drawn-flat-design-book-club-illustration-23-2149330600.jpg"
      className="max-w-sm rounded-lg shadow-2xl"
    />
   </div>

    </div>
  )
}

export default BannerCard