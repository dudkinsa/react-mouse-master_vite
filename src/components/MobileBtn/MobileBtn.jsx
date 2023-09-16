import React from 'react';
import MobileNav from '../MobileNav/MobileNav';
import './mobileBtn.scss'
import logoDark from '../../img/icons/logo-dark.svg';
import logoLight from '../../img/icons/logo-light.svg';


const MobileBtn = () => {
    const [active, setActive] = React.useState(false);
    
    const open = 'mobile-nav-button__icon';
    const close = 'mobile-nav-button__icon active';

   
  return (
    <div className='mobile-nav-button'>
   
    <img className="mobile-nav-button__img" src={active ? logoDark : logoLight} alt="logo" />
      <button className="mobile-nav-button__btn" type="button">
        <span
          onClick={() => {
              setActive(!active);
              
              document.body.classList.toggle('no-scroll');
            }}
            className={active ? close : open
        }
        ></span>
      </button>

      <MobileNav active={active} setActive={setActive} />

   
  
    </div>
  )
}

export default MobileBtn