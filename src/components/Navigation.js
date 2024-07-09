import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    // <nav className="navigation" style={{marginRight: '5%'}}>
    //   <ul>
    //     <li>
    //         <NavLink to="/" activeClassName="active">
    //             HOME
    //         </NavLink>
    //     </li>
    //     <li>
    //         <NavLink to="/contact-us" activeClassName="active">
    //             CONTACT US
    //         </NavLink>
    //     </li>
    //     {/* Add more pages as needed */}
    //   </ul>
    // </nav>
    <nav> 
      <ul>
        <li class="active">
          <NavLink to="/" activeClassName="active">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" activeClassName="active">
            CONTACT US
          </NavLink>
         </li>

      </ul>
    </nav>
  );
};

export default Navigation;