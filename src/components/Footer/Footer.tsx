import { useState } from 'react';
import logo from '../../assets/logo.png';

import {Facebook,Instagram} from 'react-feather';

function Footer() {


  return (
    <footer className="text-xs">
      <div className="bg-[#F6D50E]">
        <img src={logo} className="w-1/4 mx-auto mb-1 md:w-1/6" alt="logo O'Jardin"  />

        <button 
        type="button" 
        className="bg-white rounded-full px-2 py-0.5 m-1">
          Contactez-nous
        </button>

        <div className="flex flex-row justify-center p-1">
          <Facebook/> <Instagram/>
        </div>
      </div>

      <div className="bg-black text-white font-medium flex flex-row justify-center p-1" >
        <a className="footer-legal-notice">Mentions légales |</a>
        <a className="mx-1">Confidentialité</a>
        <p className="footer-copyright">©2024</p>
      </div>
    </footer>
  );
}

export default Footer;
