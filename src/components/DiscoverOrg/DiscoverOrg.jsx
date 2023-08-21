import React from 'react';
import './discover.scss'
import Albums from '../../images/albums.svg';
import More from '../../images/more.svg';
import Image from '../../images/collage.jpg';


const DiscoverOrg = () => {
  return (
    <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
            <div className='textHome'>
              <h2>Sabors Premium de Carn a Cada Bocado</h2>
    <button className='btnDisvover'>  <img src={Albums} width='20' alt="micro" /> Productes</button>
    <button className='btnDisvover'>   <img src={Albums} width='20' alt="more" />Productes</button>
    <button className='btnDisvover'>   <img src={More} width='20' alt="more" />Productes</button>
  
    <p>Posa't en contacte amb nosaltres per demanar la teva millor carn premium.</p>
    </div>
    <button className='btn btnJoin'>Contacto</button>
  </div>
  <div className='col-md-6'>
  <img className='imgCollage' src={Image} /* width='40' */ alt="covers" />
  </div>
  </div>
  </div>
  );
}

export default DiscoverOrg;