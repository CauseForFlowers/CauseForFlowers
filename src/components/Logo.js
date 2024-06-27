import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo" style={{marginLeft: '5%'}}>
        <Link to="/">
            <img src="Logo_FFC_Removed2.png" alt="Logo" />
        </Link>
    </div>
  );
};

export default Logo;