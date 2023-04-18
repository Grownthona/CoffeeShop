import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
//import Home from './components/Home/Home';
import SignUp from './components/Login/SignUp';
import SignIn from './components/Login/SignIn';
import Product from './components/Products/Product';
import ImageUploadForm from './ImageUploadForm';
//import Test from './components/Test';
/*
import React,{useEffect,useState} from 'react'

function App(){
  const[backendData,setBackendData] = useState([{}]);

  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  },[])
  
  return(
    <div className='App'>
      {backendData.users.map((user,i)=>(
        <p key={i}>{user}</p>
       ))}
    </div>
  )
}
*/


function App() {
  return(
    <Router>
       <Routes>
        <Route exact path='/' element={<ImageUploadForm/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/Products' element={<Product/>}></Route>
      </Routes>
    </Router>
    
  )
}

export default App;
