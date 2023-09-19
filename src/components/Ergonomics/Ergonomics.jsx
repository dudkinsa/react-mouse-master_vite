import React from 'react';
import'./ergonomics.scss'

import image1 from '../../img/images/section-6/image-1.jpg';
import image2 from '../../img/images/section-6/image-2.jpg';

const Ergonomics = () => {
  return (
    <section className="ergonomics">
      <div className="container">
        <div className="ergonomics__grid">

          <div className="ergonomics__picture picture-1">
            <img src={image1} alt="image" />
          </div>

          <div className="ergonomics__description text-1">
            <h2 className="ergonomics__title-1 title">
                КОМФОРТНО. ЭРГОНОМИЧНО. ИНТУИТИВНО
            </h2>
            <div className="ergonomics__info-text-1 text">
              <p>
                Дизайн мыши MX Master 3 разработан так, чтобы с точностью
                повторять форму вашей ладони. Но не менее важны колесико
                прокрутки для большого пальца и расположение кнопок жестов, с
                которыми вы будете творить уверенно как никогда.
              </p>
            </div>
          </div>

          <div className="ergonomics__picture picture-2" >
            <img src={image2} alt="image" />
          </div>

          <div className="ergonomics__description text-2">

            <h2 className="ergonomics__title-2  title test">БЫСТРЕЕ, ЧЕМ КОГДА-ЛИБО</h2>

            <div className="ergonomics__info-text-2 text">
              <p>
                Компьютерная мышь MX Master 3 предлагает ультимативный механизм
                прокрутки со скоростью 1000 строк за 1 секунду. С точностью до
                пикселя. Бесшумно.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Ergonomics;
