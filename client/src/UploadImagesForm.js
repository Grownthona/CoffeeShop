import React, { useState ,useEffect} from 'react';
import axios from 'axios';


  export default function ImageUploadForm() {
  const [file, setFile] = useState([]);
  const [imageData, setImageData] = useState([]);
  const[newdata,setData] = useState("")
  const[price,setPrice] = useState("")
  const[details,setDetails] = useState("")
  const[catagory,setCatagory] = useState("")


  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleDetails = (e) => {
    setDetails(e.target.value);
  };
  const handleCatagory = (e) => {
    setCatagory(e.target.value);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files);
    //console.log(e.target.files);
  };
  
    useEffect(() => {
      fetch('http://localhost:5000/api/images',{
        method:"GET",
      }) // replace with your server-side route
        .then(response => response.json())
        .then(data => setImageData(data))
        .catch(error => console.log(error));
    }, []);
    
    
/*
    useEffect(() => {
  
      axios.get('http://localhost:5000/api/images') // replace with your server-side route
        .then(res => {
          console.log(res.data);
          setImageData(res.data);
        })
        .catch(error => console.log(error));
    }, []);
    */
   

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', newdata);
    formData.append('price', price);
    formData.append('details', details);
    formData.append('catagory', catagory);
    formData.append('testImage',file);
    console.log(file);
    //console.log(formData);

    

    try {
      const response = await axios.post('http://localhost:5000/products/addproduct', formData)
      console.log(response.data); // the uploaded image file path or URL
    } catch (error) {
      console.error(error);
    }
    

  };
  

  return (
    /*<form onSubmit={handleSubmit} enctype="multipart/form-data">
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
    */
   <div>
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} name='testImage'/>
      <input type="text" onChange={handleChange} name='name'/>
      <input type="text" onChange={handlePrice} name='price'/>
      <input type="text" onChange={handleDetails} name='details'/>
      <input type="text" onChange={handleCatagory} name='catagory'/>
      <button type="submit">Upload</button>
    </form>

   
   </div>
  );
}
