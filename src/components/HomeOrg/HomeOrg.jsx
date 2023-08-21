import React from 'react';
import Image from '../../images/pork3.jpg';
import './home.scss';

const HomeOrg = () => {
  return (
  
    <div className='container-fluid'>
          <div className='row'>
          <div className='col-sm-2'>
            <div className='circle1'></div>
          </div>
            <div className='col-sm-4'>
              <picture>
                <source media = 'min-width: 900px'/>
              <img className='imgGirl' src={Image}   alt="carne" /></picture>
           </div>
            <div className='col-sm-6'>
{/*             <div className='circle2'></div>
 */}             <div className='textHome'> 
<h1>"Carns de porc selectes, passió per la qualitat."</h1>
      <p> Lluis Espinet Soler</p>
      <br />
      <button className='btn btnJoin'>Contacto</button>
      </div>
      </div>
     </div>
    </div>
  
    
  );
};

export default HomeOrg;