import React from 'react';
import lifestyleImage from '../../img/images/section-4/lifestyle-cut.png';
import borderImg from '../../img/images/section-4/border.svg';
import './devices.scss';

const Devices = () => {
  return (
    <section className="devices">
      <div className="container">
     
        <div className="devices__content">
          <h1 className="devices__title title">
            ОДНОВРЕМЕННО С НЕСКОЛЬКИХ УСТРОЙСТВ
          </h1>
          <div className="devices__info-text">
            <p className="devices__text-1">
              С технологией Flow вы сможете работать одновременно на нескольких
              компьютерах, мгновенно переключаясь между разными операционными
              системами — даже между Windows® и macOS. Например, достаточно
              скопировать текст, изображение или файл на MacBook и переместить
              его на Windows PC без задержек.
            </p>
            <br />
            <p className="devices__text-2">
              Клавиатура MX Keys отслеживает перемещение курсора мыши MX Master
              3, благодаря чему ваш текст появится там, где вы работаете в
              текущий момент.
            </p>
          </div>
          <div className="devices__instruction">
            <div className="step-1">
              1. Нажмите и удерживайте папку, чтобы переместить её
            </div>
            <div className="devices__border">
              <img src={borderImg} alt="Border" />
            </div>
            <div className="step-2">
              2. Перенесите папку на любой из соседних экранов
            </div>
            <div className="devices__border">
              <img src={borderImg} alt="Border" />
            </div>
            <div className="step-3">3. Да, всё так просто!</div>
          </div>
          <img
          className="devices__img-big"
          src={lifestyleImage}
          alt="Lifestyle"
        />
        </div>
        </div>\
    </section>
  );
};

export default Devices;
