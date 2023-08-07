import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
//import img1 from './images/icon-01.png'

export default function Product(){
    const [product, setFormData] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch('/Products',{
          method:"GET",
        }) // replace with your server-side route
          .then(response => response.json())
          .then(data => setFormData(data))
          .catch(error => console.log(error));
      }, []);
      const handleAddToCart = (value) => {
        // Handle the value
        const productId = value._id;
        console.log(value._id);
        fetch('http://localhost:5000/products/addcart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId, quantity })
          });
        };
        return (
        <div>
            <div className="container">
                <div className="filter-box">
                    
                </div>
                <div className="product-box">
                {product && product.map((item, index) => {
                    const base64Data = btoa(String.fromCharCode(...new Uint8Array(item.imageSrc.data.data))
                    );
                    return(
                    <div className="card" key={index}>
                        
                    <img src={`data:${item.imageSrc.contentType};base64,${base64Data}`} alt="lala" />
                        <div className="card-body">
                            <div className="row">
                                <div className="card-title">
                                    <h4>{item.name}</h4>
                                    <p>{item._id}</p>
                                    <h4>{item.price}</h4>
                                </div>
                            </div>
                            <div className='details'>
                                <p className='text'>{item.details}</p>
                            </div>
                            <div className="btn-group">
                                <div className="btn">
                                    <Link onClick={() => handleAddToCart(item)} to={`/cart/${item._id}`}>Add to Cart</Link>
                                    <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)}/>
                                    <Link to={`/productsdetail/${item._id}`}>View Details</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                    })}
                </div>
            </div>
        </div>
    )
}