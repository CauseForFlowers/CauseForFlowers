import React from 'react';
import { FaPhoneAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div >
      <br></br>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><h2 style={{fontSize: '48px'}}>Contact Us</h2> </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <p>
          We would love to hear from you! Please feel free to reach out to us through the following
          contact methods. <br></br><br></br>
          NOTE: The 25% is returned after I have come to pick up the flowers to take it back.
        </p>
      </div>

      <div className='centered' style={{paddingBottom: '50px', paddingTop: '20px'}}>
        <div class="card" style={{background: 'lightyellow' }} >FFFFF0
          <div class="bg" style={{background: '#FFFFF0'}}>
            <div style={{padding:'10px', fontSize: 32}}>
              
              <div style={{ fontSize: 24}}>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <MdEmail ></MdEmail> &nbsp; info@example.com
              </div><br></br>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <FaPhoneAlt></FaPhoneAlt> &nbsp; (123) 456-7890
              </div>
              </div>
            </div>
          </div>
          <div class="blob-y"></div>
        </div>  
      </div>
        
    </div>
  );
};

export default ContactUs;