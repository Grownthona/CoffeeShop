import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
//import img1 from './images/icon-01.png'

export default function Product(){
    const [product, setFormData] = useState(null);

    useEffect(() => {
        fetch('/Products',{
          method:"GET",
        }) // replace with your server-side route
          .then(response => response.json())
          .then(data => setFormData(data))
          .catch(error => console.log(error));
      }, []);
      
    return (
        <div>
            
            <div className="container">
                <div className="filter-box">
                </div>
                <div className="product-box">
                {product && product.map((item, index) => (
                    <div className="card" key={index}>
                    <img src={item.imageSrc} alt="" />
                        <div className="card-body">
                            <div className="row">
                                <div className="card-title">
                                    <h4>{item.name}</h4>
                                    <h4>{item.price}</h4>
                                </div>
                            </div>
                            <div className='details'>
                                <p className='text'>{item.details}</p>
                            </div>
                            <div className="btn-group">
                                <div className="btn">
                                    <button>Add to Cart</button>
                                    <Link to={`/productsdetail/${item._id}`}>View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}