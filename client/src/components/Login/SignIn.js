import React,{ useState } from "react";
import './Loginstyles/Login.css';

export default function SignIn(){

    const [formData, setFormData] = useState({ email: '', password: ''});

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/users/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error(error);
          }
      };
    return(
    <div>
      <div className='authentication-form'>
        <div className='form-control'>
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