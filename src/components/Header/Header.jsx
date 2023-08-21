import React from 'react';
import './header.scss';
import Logo from '../../images/logoSS.jpg';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav>  
         <div className='navbar'>
          <ul>
            <a href="/">
              <li><img src={Logo} width='55' alt="Sabores" /></li>  
              <li><span> Lluis Espinet Soler</span></li>
            </a>
            </ul>
            <ul>
                <li>
                    <Link to ="/discover">Els nostres productes
</Link>
                </li>
                <li>
                <Link to ="/join">Contacte</Link>
                </li>
            </ul>
         </div>
    </nav>
 
  )
};

export default Header;