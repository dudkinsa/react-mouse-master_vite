import React from 'react';

import Slider from '../Slider/Slider';
import './table.scss';

const Table = () => {
  return (
    <section className="table">
      <div className="container">
        <div className="table__content">
          <h2 className="table__title title">За любым столом</h2>
          <p className="table__description">
            Исследуйте ландшафты своего дома, не отвлекаясь от работы. MX Master
            3 достаточно компактная, чтобы сменить рабочее место и перенестись с
            ноутбуком на кухню.
          </p>
          <div className="info">
            <div className="info__left">
              <h2 className="info__title title">В 5 раз</h2>
              <p className="imfo__description">точнее предшественников</p>
            </div>
            <div className="info__right">
              <h2 className="info__title title">4 000</h2>
              <p className="info__description">
                точек на дюйм чувствительность датчика
              </p>
            </div>
          </div>
        </div>
        <Slider />
        <div className="table__content">
          <p className="table__description">
            Благодаря технологии Logitecch Darkfierd, MX Master 3 работает на
            любой поверхности, даже на стекле.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Table;
