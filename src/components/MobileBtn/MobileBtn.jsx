import React from 'react';
import MobileNav from '../MobileNav/MobileNav';
import './mobileBtn.scss'


const MobileBtn = () => {
    const [active, setActive] = React.useState(false);
    
    const open = 'mobile-nav-button__icon';
    const close = 'mobile-nav-button__icon active';
   
  return (
    <>
    
      <button className="mobile-nav-button" type="button">
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

   
  
    </>
  )
}

export default MobileBtn