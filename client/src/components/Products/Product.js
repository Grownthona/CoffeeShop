import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './Product.css';
//import img1 from './images/icon-01.png'
import logo from './images/dough-boi-bakery-logo-dark.png'
import img1 from './images/facebook.png'
import img2 from './images/instagram.png'
import img4 from './images/pinterest.png'
import { BsCart2 } from "react-icons/bs";


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
            <div className="container">
                <div className="catagories">
                <h3>Catagories</h3>
                    <div className="box">
                        <div className="form-check">
                            <Form>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                        
                                        <Form.Check type={type} id={`default-${type}`} label={`Cake`} />
                                        <Form.Check type={type} id={`default-${type}`} label={`Pastry`}/>
                                        <Form.Check type={type} id={`default-${type}`} label={`Muffin`}/>
                                        <Form.Check type={type} id={`default-${type}`} label={`Brownie`}/>
                                        <Form.Check type={type} id={`default-${type}`} label={`Cookie`}/>
                                        <Form.Check type={type} id={`default-${type}`} label={`Donut`}/>
                                    </div>
                                ))}
                            </Form>
                        </div>
                    </div>
                </div>
                
                <div className="product-box">
                {product && product.map((item, index) => {
                    const base64Data = btoa(String.fromCharCode(...new Uint8Array(item.imageSrc.data.data))
                    );
                    return(
                    <div className="card" key={index}>
                    <div className='image-box'>
                        <img src={`data:${item.imageSrc.contentType};base64,${base64Data}`} alt="lala" />
                    </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="card-title">
                                    <Link to={`/productsdetail/${item._id}`} style={{textDecoration: 'none',color:'black'}}>{item.name}</Link> 
                                    <p>{item.price} Tk</p>
                                </div>
                            </div>
                            <div className='details'>
                                <p className='text'>{item.details}</p>
                            </div>
                            <div className="btn-group">
                                <div className="btn">
                                    <BsCart2/>
                                    <Link onClick={() => handleAddToCart(item)} to={`/cart/${item._id}`} style={{textDecoration: 'none',color:'white',paddingLeft:'15px'}}>Add to Cart</Link>
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