import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

import 'swiper/scss/pagination';
import './slider-control.scss';

import image1 from '../../img/images/slider-conrol/png-1.png';
import image2 from '../../img/images/slider-conrol/img-2.jpg';
import image3 from '../../img/images/slider-conrol/png-3.png';
import image4 from '../../img/images/slider-conrol/img-4.jpg';
import image5 from '../../img/images/slider-conrol/img-5.jpg';
import image6 from '../../img/images/slider-conrol/img-6.jpg';

const SliderControl = () => {
  let slides = [
    {
      image: image1,
      title: 'Image control-1',
    },
    {
      image: image2,
      title: 'Image control-2',
    },
    {
      image: image3,
      title: 'Image control-3',
    },
    {
      image: image4,
      title: 'Image control-4',
    },
    {
      image: image5,
      title: 'Image control-5',
    },
    {
      image: image6,
      title: 'Image control-6',
    },
  ];

  return (
      <Swiper
        // className="swiper__slide"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.image}>
                <img src={slide.image} alt={slide.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    
  );
};

export default SliderControl;
