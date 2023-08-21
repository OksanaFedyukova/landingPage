import React from 'react';
import './footer.scss';
import Facebook  from '../../images/facebook.svg';
import Instagram  from '../../images/more.svg';

const Footer = () => {
  return (
    <footer className='footer'>  
         <div className='container-sm'>
         <ul className='footnav'>
            <li> <a href="/">Qui som?</a>
            </li>
            <li><a href="/">Contacte</a>
             </li>
         </ul>
        <ul className='socialM'>
           <li><a href="/">  <img src={Instagram} width='15' alt="Instagram" /> Instagram</a>
          </li> 
          <li> <a href="/">  <img src={Facebook} width='15' alt="faceboor" /> Facebook</a>
           </li>
        </ul>
         </div>
    </footer>
 
  )
};

export default Footer;