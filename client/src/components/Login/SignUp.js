import React, { useState } from 'react';
//import axios from 'axios';
import './Loginstyles/Login.css'

export default function SignUp() {
  
  const [formData, setFormData] = useState({ email: '', password: '', username:''});
  const [errors, setErrors] = useState({});

  
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
        alert('Message sent successfully!');
        setFormData({ email: '', password: '', username: ''});
      } else {
        alert('An error occurred while sending the message.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <div>
      <div className='authentication-form'>
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
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}