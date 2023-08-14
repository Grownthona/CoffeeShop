import React,{ useState } from "react";

import { Link ,Navigate} from 'react-router-dom';
import img1 from '../Products/images/facebook.png'
import img2 from '../Products/images/instagram.png'
import img4 from '../Products/images/pinterest.png'
import logo from '../Products/images/dough-boi-bakery-logo-dark.png'
import './Loginstyles/Login.css';

export default function SignIn(){

    const [formData, setFormData] = useState({ email: '', password: ''});
    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://dough-bakery-backend.vercel.app/users/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
              setLoggedIn(true);
            } 
          } catch (error) {
            console.error(error);
          }
      };

      if (loggedIn) {
        // Redirect to another page after successful login
        localStorage.setItem('session', JSON.stringify(formData.email));
        return <Navigate to="/checkout" />;
      }
    return(
    <div>
      <div className="navbar">
                <div className="navbar-logo" href="#"><Link to="/"><img src={logo} alt="logo"/></Link></div>
                <ul className="navbar-menu">
                    <li><Link to="/products">Menu</Link></li>
                    <li><Link to="/products">Contract</Link></li>
                    <li><Link to="/products">About Us</Link></li>
                </ul>
                <ul className="navbar-social">
                    <div className="social-link"><a href="https://www.facebook.com/"><img src={img1} alt="facebook"/></a></div>
                    <div className="social-link"><a href="https://www.instagram.com/"><img src={img2} alt="Instagram"/></a></div>
                    <div className="social-link"><a href="https://www.pinterest.com/"><img src={img4} alt="Social Icon 3"/></a></div>
                    <div className="social-link"><Link to="/SignUp">
                    <button className="button-7" role="button">Sign Up</button></Link></div>
                </ul>
            </div> 
      <div className='authentication-form'>
        <div className='form-controll'>
            <div className='form-group'> 
               <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder='Enter your email address'/>
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter your password'/>
                <button className='button-31' type="submit">Sign In</button> 
              </form>
            </div>
        </div>
      </div>
    </div>
    )
}