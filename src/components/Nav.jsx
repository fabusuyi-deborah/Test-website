import React from 'react';
// import { useState } from 'react';
import  paaq  from '../assets/paaq.jpg';

const Nav = () => {
  return (
    <div className="w-full  py-4 px-6 flex justify-between items-center">
      {/* Logo and Brand */}
      <div className="flex items-center">
        <div className="mr-2">
          <img src={paaq} alt="Logo" />
        </div>
      </div>
      
    </div>
  );
}

export default Nav;