import React from 'react';
import './control.scss';
import control from '../../img/images/section-5/control_svg.svg'


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
          <img src={control} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Control;
