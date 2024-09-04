// src/pages/Sobre.js
import React from 'react';
import logo_removebg from '../assets/images/logo_removebg.png';  // Import
import './Sobre.css'

const Sobre = () => {
  return (
    <div className="sobre">
      <div className='logo-removebg'>
        <img src={logo_removebg} alt="Logo da ONG" />  {/* Uso da imagem importada */}
      </div>
      <div className='about-title'>
        <h1>Sobre o projeto</h1>
      </div>
      <div className='about-text'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend metus a fringilla convallis. Quisque vehicula scelerisque erat, ac condimentum nulla placerat sit amet. Mauris orci est, tristique in feugiat quis, laoreet at augue. Fusce risus magna, porttitor eu eros quis, eleifend mattis risus. Aliquam imperdiet metus a metus iaculis, ut egestas nibh vulputate. Phasellus in eleifend sapien, et laoreet nunc. Integer vulputate enim ut nisi hendrerit, eu placerat velit viverra. Aenean nec scelerisque est. Aliquam tincidunt mollis lorem vitae pellentesque. Duis id arcu dapibus, consequat purus ac, consequat libero. Aliquam varius nisi in justo semper maximus. Vivamus tincidunt urna sit amet magna feugiat, sed tempus enim euismod.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend metus a fringilla convallis. Quisque vehicula scelerisque erat, ac condimentum nulla placerat sit amet. Mauris orci est, tristique in feugiat quis, laoreet at augue. Fusce risus magna, porttitor eu eros quis, eleifend mattis risus. Aliquam imperdiet metus a metus iaculis, ut egestas nibh vulputate. Phasellus in eleifend sapien, et laoreet nunc. Integer vulputate enim ut nisi hendrerit, eu placerat velit viverra. Aenean nec scelerisque est. Aliquam tincidunt mollis lorem vitae pellentesque. Duis id arcu dapibus, consequat purus ac, consequat libero. Aliquam varius nisi in justo semper maximus. Vivamus tincidunt urna sit amet magna feugiat, sed tempus enim euismod.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend metus a fringilla convallis. Quisque vehicula scelerisque erat, ac condimentum nulla placerat sit amet. Mauris orci est, tristique in feugiat quis, laoreet at augue. Fusce risus magna, porttitor eu eros quis, eleifend mattis risus. Aliquam imperdiet metus a metus iaculis, ut egestas nibh vulputate. Phasellus in eleifend sapien, et laoreet nunc. Integer vulputate enim ut nisi hendrerit, eu placerat velit viverra. Aenean nec scelerisque est. Aliquam tincidunt mollis lorem vitae pellentesque. Duis id arcu dapibus, consequat purus ac, consequat libero. Aliquam varius nisi in justo semper maximus. Vivamus tincidunt urna sit amet magna feugiat, sed tempus enim euismod.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend metus a fringilla convallis. Quisque vehicula scelerisque erat, ac condimentum nulla placerat sit amet. Mauris orci est, tristique in feugiat quis, laoreet at augue. Fusce risus magna, porttitor eu eros quis, eleifend mattis risus. Aliquam imperdiet metus a metus iaculis, ut egestas nibh vulputate. Phasellus in eleifend sapien, et laoreet nunc. Integer vulputate enim ut nisi hendrerit, eu placerat velit viverra. Aenean nec scelerisque est. Aliquam tincidunt mollis lorem vitae pellentesque. Duis id arcu dapibus, consequat purus ac, consequat libero. Aliquam varius nisi in justo semper maximus. Vivamus tincidunt urna sit amet magna feugiat, sed tempus enim euismod.</p>
      </div>
    </div>
  );
};

export default Sobre;
