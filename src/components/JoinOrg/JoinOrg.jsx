import React from 'react';
import './join.scss';

const JoinOrg = () => {
  return (
    <main>
       <div className='container'>
    <div className='row'>
         <div className='col-sm-6'>
    <h1>Posa't en contacte amb nosaltres per demanar la teva millor carn  <span className='fun'>premium.</span></h1>
    <div className='circle2'></div>
    <div className='circle1'></div>
  </div>
  <div className='col-sm-6'>
  <div id="registration-form">
  <div class='fieldset'>
    <form>
  
      <div class='row'>
        <label for='firstname'>Nombre</label>
        <input type="text" name='firstname' id='firstname'/>
      </div>
      <div class='row'>
        <label for="email">E-mail</label>
        <input type="text"  name='email' />
      </div>
      <div class='row'>
        <label for="mensaje ">Mensaje </label>
        <input type="text"  name='mensaje ' />
      </div>
      {/* <div class='row'>
        <label for="cemail">Password</label>
        <input type="text"  name='rassword' />
      </div> */}
      {/* <input type="submit" value="Submit"/> */}
      <button className='btn btnSubmit'>Enviar</button>
    </form>
  </div>
</div>
  </div>
  </div>
  </div>
  </main>
  );
}

export default JoinOrg;