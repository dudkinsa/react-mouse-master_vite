import React from 'react';
import { NavLink } from 'react-router-dom';
import './promo.scss';
import promoIMG from '../../img/images/section-1/promo.png';
import arrow from '../../img/icons/arrow.svg';

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <h1 className="promo__title title">Работайте продуктивнее</h1>
          <picture className ="promo__picture">
            <img src={promoIMG} alt="Mouse" />
          </picture >
          <p className="promo__text">
            Создана для эффективной работы, программирования и творчества
          </p>
          <NavLink className="promo__arrow" to="#!">
            <img src={arrow} alt="arrow" />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Promo;
