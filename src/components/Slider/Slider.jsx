import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './slider.scss';

import imageBtnPrev from '../../img/icons/arrow-left.svg';
import imageBtnNext from '../../img/icons/arrow-right.svg';

import wood from '../../img/images/section-3/wood.jpg';
import glass from '../../img/images/section-3/glass.jpg';
import linoleum from '../../img/images/section-3/linoleum.jpg';
import cloth from '../../img/images/section-3/cloth.jpg';
import marble from '../../img/images/section-3/marble.jpg';

import woodTablet from '../../img/images/section-3/wood-tablet.jpg';
import glassTablet from '../../img/images/section-3/glass-tablet.jpg';
import linoleumTablet from '../../img/images/section-3/linoleum-tablet.jpg';
import clothTablet from '../../img/images/section-3/cloth-tablet.jpg';
import marbleTablet from '../../img/images/section-3/marble-tablet.jpg';




import clothTexture from '../../img/images/section-3/cloth-texture.png'
import glassTexture from '../../img/images/section-3/glass-texture.png'
import linoleumTexture from '../../img/images/section-3/linoleum-texture.png'
import marbleTexture from '../../img/images/section-3/marble-texture.png'
import woodTexture from '../../img/images/section-3/wood-texture.png'

const Slider = () => {
  let slides = [
    {
      image: wood,
      // image: '../../img/images/section-/wood.jpg',
      // imageTablet: require('../../img/images/section-4/wood-tablet.jpg'),
      imageTablet :woodTablet,
      title: 'Wood', 
    },
    {
      image:glass,
      imageTablet: glassTablet,
      title: 'Glass',
    },
    {
      image: linoleum,
      imageTablet: linoleumTablet,
      title: 'Linoleum',
    },
    {
      image: cloth,
      imageTablet: clothTablet,

      title: 'Cloth',
    },
    {
      image: marble,
      imageTablet: marbleTablet,
 
      title: 'Marble',
    },
  ];

  return (
    <>
      <div className="swiper__wrapper">
        <Swiper
          className="swiper__slide card"
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            el: '.swiper__pagination',
            clickable: true,
            type: 'custom',
            bulletClass: 'swiper__pagination-img',
          
          }}
          navigation={{
            nextEl: '.swiper__button-next',
            prevEl: '.swiper__button-prev',
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide key={slide.image}>
                <picture>
                  <source  media='(max-width: 760px)' srcSet={slide.imageTablet}/>
                <img src={slide.image} alt={slide.title} />
                </picture>
              </SwiperSlide>
            );
          })}

          <h3 className="swiper__title">Переключите поверхность</h3>

          <div className="swiper__controler none">
            <div className="swiper__button-prev">
              <img src={imageBtnPrev} alt="Button Prev" />
            </div>

            <div className="swiper__pagination">
              <img className='swiper__pagination-img' src={woodTexture} alt="Wood texture" />
              <img className='swiper__pagination-img' src={glassTexture} alt="Glass texture" />
              <img className='swiper__pagination-img' src={linoleumTexture} alt="Linoleum texture" />
              <img className='swiper__pagination-img' src={clothTexture} alt="Cloth texture" />
              <img className='swiper__pagination-img' src={marbleTexture} alt="Marble texture" />
            </div>

            <div className="swiper__button-next">
              <img src={imageBtnNext} alt="Button Next" />
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
