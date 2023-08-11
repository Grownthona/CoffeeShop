import React, { useState } from 'react';
//import axios from 'axios';

import { Link } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import img1 from '../Products/images/facebook.png'
import img2 from '../Products/images/instagram.png'
import img4 from '../Products/images/pinterest.png'
import logo from '../Products/images/dough-boi-bakery-logo-dark.png'
import './Loginstyles/Login.css'

export default function SignUp() {
  
  const [formData, setFormData] = useState({ email: '', password: '', username:''});
  const [errors, setErrors] = useState({});
  const [Message, setMessage] = useState('');

  
  /*const navigate = useNavigate();*/
  
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if(name === 'email'){
      if(!/\S+@\S+\.\S+/.test(value)){
        setErrors({'email' : 'Please include the correct email address'});
      }else{
        setErrors({'email' : undefined});
      }
    }
   
    if(name ==='password'){
      if(value.length <6){
      setErrors({'password' : 'Password must be at least 6 characters long'});
      }else{
        setErrors({'password' : undefined});
      }
    }

    if(name ==='confirm-password'){
      
    }
    
    //console.log('mail errors : '+errors.email);
    //console.log('password error :'+errors.password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setMessage(await response.json());
        setFormData({ email: '', password: '', username: ''});
      } else {
        setMessage(await response.json());
        alert('An error occurred while sending the message.');
      }
    } catch (error) {
      console.error(error);
      setMessage(error);
    }
  };

  return (
    <div>
      <div className="navbar">
                <div className="navbar-logo" href="#"><Link to="/"><img src={logo} alt="logo"/></Link></div>
                <ul className="navbar-menu">
                    <li><Link to="/Products">Menu</Link></li>
                    <li><Link to="/Products">Contract</Link></li>
                    <li><Link to="/Products">About Us</Link></li>
                </ul>
                <ul className="navbar-social">
                    <div className="social-link"><a href="https://www.facebook.com/"><img src={img1} alt="facebook"/></a></div>
                    <div className="social-link"><a href="https://www.instagram.com/"><img src={img2} alt="Instagram"/></a></div>
                    <div className="social-link"><a href="https://www.pinterest.com/"><img src={img4} alt="Social Icon 3"/></a></div>
                </ul>
            </div> 
            
      <div className='authentication-form'>
      <div className='setbg'>
        <div className='form-control'>
       
            <div className='form-group'> 
            <h1>Sign Up</h1>
              <form onSubmit={handleSubmit}>
             
                <label>Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder='Enter your email address'/>
                {errors.email && <span className="error">{errors.email}</span>}

                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder='Enter your username'/>

               
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter your password'/>
                {errors.password && <span className="error">{errors.password}</span>}

              
                <label>Confirm Password</label>
                <input type="password" name="confirm-password" onChange={handleChange} placeholder='Enter your last name'/>
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

                <button className='button-31' type="submit">Sign Up</button>
                <h3>{Message}</h3>
              </form>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}