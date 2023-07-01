import React, { useState ,useEffect} from 'react';
import axios from 'axios';


  export default function ImageUploadForm() {
  const [file, setFile] = useState(null);
  const [imageData, setImageData] = useState([]);
  const[newdata,setData] = useState("")

  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files);
    console.log(e.target.files);
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
    formData.append('name', newdata);
    formData.append('name', newdata);
    formData.append('name', newdata);
    formData.append('testImage',file);

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
      <input type="text" onChange={handleChange} name='price'/>
      <input type="text" onChange={handleChange} name='details'/>
      <input type="text" onChange={handleChange} name='catagory'/>
      <button type="submit">Upload</button>
    </form>

    <div>
    {imageData && (imageData.map((singleData,index) => {
        
        const base64Data = btoa(String.fromCharCode(...new Uint8Array(singleData.images.data.data))
        );
         
       return <img key={index} src={`data:${singleData.images.contentType};base64,${base64Data}`} alt='lala'/>
       }
   ))}
    </div>
   </div>
  );
}