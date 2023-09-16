import React from 'react';
import { NavLink } from 'react-router-dom';
import './mobileNav.scss';


const MobileNav = ({ active}) => {
  const activeLink = 'mobile-nav__link mobile-nav__link--active';
  const normalLink = 'mobile-nav__link';

  const activeNav = 'mobile-nav__wrapper active';
  const normalNav = 'mobile-nav__wrapper';



  return (
    

    <div className={active ? activeNav : normalNav}>
    
      <nav className="mobile-nav">
        <ul className="mobile-nav__list">
          <li className="mobile-nav__item">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/"
            >
                Без проводов
            </NavLink>
          </li>
          <li className="mobile-nav__item">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/2"
            >
               За любым столом
            </NavLink>
          </li>
          <li className="mobile-nav__item">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/3"
            >
               Одновременно с нескольких устройств
            </NavLink>
          </li>
          <li className="mobile-nav__item">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/4"
            >
               С индивидуальными настройками
            </NavLink>
          </li>
          <li className="mobile-nav__item">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/5"
            >
               Быстрее, <br /> чем когда-либо
            </NavLink>
          </li>
          <li className="mobile-nav__item">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/6"
            >
               Комфортно. <br/>Эргономично. Интуитивно
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    
  );
};

export default MobileNav;
