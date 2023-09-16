import React from 'react';
import { NavLink } from 'react-router-dom';

import MobileBtn from '../MobileBtn/MobileBtn';

import logoLight from '../../img/icons/logo-dark.svg';


import './header.scss';

const Header = () => {
  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  return (
    <header className="header">
      <div className="big-container">
        <div className="container">
        <MobileBtn />
          <div className="header__row">
           
              <div className="header__logo">
                  <img src={logoLight} alt="Logo" />
              </div>
              <MobileBtn />
          
            <nav className="header__nav">
              <ul className="nav-list">
                <li className="nav-list__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    to="/"
                  >
                    РАБОТАЙТЕ БЕЗ ПРОВОДОВ
                  </NavLink>
                </li>
                <li className="nav-list__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    to="/2"
                  >
                    ГДЕ УГОДНО
                  </NavLink>
                </li>
                <li className="nav-list__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    to="/3"
                  >
                    С КОМФОРТОМ
                  </NavLink>
                </li>
                <li className="nav-list__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    to="/4"
                  >
                    С РАЗНЫХ УСТРОЙСТВ
                  </NavLink>
                </li>
                <li className="nav-list__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    to="/5"
                  >
                    В ЛЮБОЕ ВРЕМЯ
                  </NavLink>
                </li>
                <li className="nav-list__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    to="/6"
                  >
                    И ЕЩЕ БЫСТРЕЕ
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
