
import React, { useState,useEffect } from "react";
import axios from "axios";

const UploadForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [img, setImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);

    const handle= (value) => {

      img.map((image, index) => (
        console.log(image.title)
      ));
    }
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('http://localhost:5000/multi/images');
          setImages(response.data);
      
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }, []);

  const handleImageChange = (e) => {
    setSelectedImages(Array.from(e.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);

    selectedImages.forEach((image) => {
      formData.append("images", image);
    });
    axios
      .post("http://localhost:5000/multi/add", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const tittle = (e) => {
    setTitle(e.target.value);
  }

  const contentset = (e) => {
    setContent(e.target.value);
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Select images:
        <input type="text" onChange={tittle} name='title' placeholder='tittle'/>
        <input type="text" onChange={contentset} name='content' placeholder='content'/>
        <input
          type="file"
          name="images"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
      </label>
      <button type="submit">Upload</button>
    </form>
    <button onClick={handle}>Work</button>
    </div>
  );
};

export default UploadForm;
