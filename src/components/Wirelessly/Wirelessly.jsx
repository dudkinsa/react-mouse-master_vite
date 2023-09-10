import React from 'react';
import './wirelessly.scss';
import bluetooth from '../../img/images/section-2/icons/icon-bluetooth.svg';
import mouseFront from '../../img/images/section-2/mouse-front.png';
import mouseLeft from '../../img/images/section-2/mouse-left.png';

const Wirelessly = () => {
  return (
    <section className="wirelessly">
      <div className="container">
        <div className="wirelessly__content">
          <img
            className="wirelessly__icon"
            src={bluetooth}
            alt="Icon bluetooth"
          />
          <h2 className="wirelessly__title title">Без проводов</h2>
          <p className="wirelessly__desc">
            Беспроводная мышь MX Master 3 работает без проводов до нескольких
            месяцев. Вы закроете приоритетные задачи прежде, чем понадобится
            подзарядка.
          </p>
            <div className="wirelessly__text">
              <div className="text-1">70</div>
              <div className="text-2">дней</div>
            </div>
            <div className="wirelessly__images">
              <img
                className="wirelessly__img-front"
                src={mouseFront}
                alt=" mouse front"
              />
              <img
                className="wirelessly__img-left"
                src={mouseLeft}
                alt=" mouse left"
              />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wirelessly;
