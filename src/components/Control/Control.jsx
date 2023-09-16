import React from 'react';
import './control.scss';
import control from '../../img/images/section-5/control_svg.svg';
import ps from '../../img/images/section-5/brend-icons/ps-svg.svg';
import pr from '../../img/images/section-5/brend-icons/pr-svg.svg';
import browsers from '../../img/images/section-5/brend-icons/browsers-svg.svg';
import word from '../../img/images/section-5/brend-icons/word-svg.svg';
import powerpoint from '../../img/images/section-5/brend-icons/powerpoint-svg.svg';
import exel from '../../img/images/section-5/brend-icons/exel-svg.svg';
import video from '../../img/images/section-5/brend-icons/video-svg.svg';
import SliderControl from '../Slider-control/SliderControl';

const Control = () => {
  return (
    <section className="control">
      <div className="container">
        <div className="control__content">
          <h2 className="control__title title">
            С ИНДИВИДУАЛЬНЫМИ НАСТРОЙКАМИ
          </h2>
          <div className="control__info-text">
            <p>
              Мышь MX Master 3 адаптируется под ваши рабочие процессы. Благодаря
              индивидуальным настройкам, вы сможете настроить кнопки и жесты
              практически под любое используемое приложение.
            </p>
          </div>
          <div className="control__picture">
              <img src={control} alt="Image control" />
             <SliderControl />
          </div>
          <div className="control__apps">
            <div className="apps">
              <div className="apps__icons">
                <ul className="apps__icons-list">
                  <li className="apps__icon-item"><img className="icon-img" src={ps} alt="Icon Ps" /></li>
                  <li className="apps__icon-item"><img className="icon-img" src={pr} alt="Icon Pr" /></li>
                  <li className="apps__icon-item"><img className="icon-img" src={browsers} alt="Icon Browsers" /></li>
                  <li className="apps__icon-item"><img className="icon-img" src={word} alt="Icon" /></li>
                  <li className="apps__icon-item"><img className="icon-img" src={powerpoint} alt="Icon" /></li>
                  <li className="apps__icon-item"><img className="icon-img" src={exel} alt="Icon" /></li>
                  <li className="apps__icon-item"><img className="icon-img" src={video} alt="Icon" /></li>
                </ul>
              </div>
              <div className="apps__info-text">
                <p>
                  Начните работать продуктивнее с момента покупки — устройство
                  предварительно оптимизировано под популярные приложения на
                  Windows и Mac.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Control;
