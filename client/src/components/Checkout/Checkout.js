import React,{useState,useEffect} from 'react';

//import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import img1 from '../Products/images/facebook.png'
import img2 from '../Products/images/instagram.png'
import img4 from '../Products/images/pinterest.png'
import logo from '../Products/images/dough-boi-bakery-logo-dark.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Checkout() {

    const [cartItems, setCartItems] = useState([]);

    const savedCartItems = localStorage.getItem('cartItems');

    useEffect(() => {
        // Load cart items from localStorage when the component mounts
        if (savedCartItems) {
          setCartItems(JSON.parse(savedCartItems));
        }
      }, []);
     
    
      useEffect(() => {
        // Save cart items to localStorage whenever the cartItems state changes
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
      }, [cartItems]);

      const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.cartPrice || 0), 0);
      };

    const ShowCartList = () => {
        
        return(

            <div>
                {cartItems.map((item, index) => (
                <><div className='CartShow' key={index}>
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">{item.name}</h6>
                                <small className="text-muted">{item.category}</small>
                            </div>
                            <span className="text-muted">${item.cartPrice}</span>
                        </li>
                    </div></> 
                ))}
            </div>
        )
      };
    //setCartItems(savedCartItems);
    return(
    <div className="maincontainer">
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
                    <div className='social-link'><Link to="/cart"style={{textDecoration: 'none',color:'black',paddingLeft:'0px'}}><BsCart2/>{cartItems.length}</Link></div>
                </ul>
            </div> 
     <div className="container">
       <div className="py-5 text-center">
         
         <h2>Checkout form</h2>
         <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
       </div>

       <div className="row">
         <div className="col-md-4 order-md-2 mb-4">
           <h4 className="d-flex justify-content-between align-items-center mb-3">
             <span className="text-muted">Your cart</span>
             <span className="badge badge-secondary badge-pill">3</span>
           </h4>
           <ul className="list-group mb-3">
             

             {ShowCartList()}
             <li className="list-group-item d-flex justify-content-between bg-light">
               <div className="text-success">
                 <h6 className="my-0">Promo code</h6>
                 <small>EXAMPLECODE</small>
               </div>
               <span className="text-success">-$5</span>
             </li>
             <li className="list-group-item d-flex justify-content-between">
               <span>Total (USD)</span>
               <strong>${calculateTotalPrice()}</strong>
             </li>
           </ul>
         </div>

         <div className="col-md-8 order-md-1">
           <h4 className="mb-3">Billing address</h4>
           <form className="needs-validation" novalidate>
             <div className="row">
               <div className="col-md-6 mb-3">
                 <label for="firstName">First name</label>
                 <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                 <div className="invalid-feedback">
                   Valid first name is required.
                 </div>
               </div>
               <div className="col-md-6 mb-3">
                 <label for="lastName">Last name</label>
                 <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                 <div className="invalid-feedback">
                   Valid last name is required.
                 </div>
               </div>
             </div>

             <div className="mb-3">
               <label for="username">Username</label>
               <div className="input-group">
                 <input type="text" className="form-control" id="username" placeholder="Username" required />
                 <div className="invalid-feedback">
                   Your username is required.
                 </div>
               </div>
             </div>

             <div className="mb-3">
               <label for="email">Email <span className="text-muted">(Optional)</span></label>
               <input type="email" className="form-control" id="email" placeholder="you@example.com" />
               <div className="invalid-feedback">
                 Please enter a valid email address for shipping updates.
               </div>
             </div>

             <div className="mb-3">
               <label for="address">Address</label>
               <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
               <div className="invalid-feedback">
                 Please enter your shipping address.
               </div>
             </div>

             <div className="mb-3">
               <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
               <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
             </div>

             <div className="row">
               <div className="col-md-5 mb-3">
                 <label for="country">Country</label>
                 <select className="custom-select d-block w-100" id="country" required>
                   <option value="">Choose...</option>
                   <option>United States</option>
                 </select>
                 <div className="invalid-feedback">
                   Please select a valid country.
                 </div>
               </div>
               <div className="col-md-4 mb-3">
                 <label for="state">State</label>
                 <select className="custom-select d-block w-100" id="state" required>
                   <option value="">Choose...</option>
                   <option>California</option>
                 </select>
                 <div className="invalid-feedback">
                   Please provide a valid state.
                 </div>
               </div>
               <div className="col-md-3 mb-3">
                 <label for="zip">Zip</label>
                 <input type="text" className="form-control" id="zip" placeholder="" required />
                 <div className="invalid-feedback">
                   Zip code required.
                 </div>
               </div>
             </div>
             <hr className="mb-4" />
             <div className="custom-control custom-checkbox">
               <input type="checkbox" className="custom-control-input" id="same-address" />
               <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
             </div>
             <div className="custom-control custom-checkbox">
               <input type="checkbox" className="custom-control-input" id="save-info" />
               <label className="custom-control-label" for="save-info">Save this information for next time</label>
             </div>
             <hr className="mb-4" />

             <h4 className="mb-3">Payment</h4>

             <div className="d-block my-3">
               <div className="custom-control custom-radio">
                 <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required />
                 <label className="custom-control-label" for="credit">Credit card</label>
               </div>
               <div className="custom-control custom-radio">
                 <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                 <label className="custom-control-label" for="debit">Debit card</label>
               </div>
               <div className="custom-control custom-radio">
                 <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                 <label className="custom-control-label" for="paypal">Paypal</label>
               </div>
             </div>
             <div className="row">
               <div className="col-md-6 mb-3">
                 <label for="cc-name">Name on card</label>
                 <input type="text" className="form-control" id="cc-name" placeholder="" required />
                 <small className="text-muted">Full name as displayed on card</small>
                 <div className="invalid-feedback">
                   Name on card is required
                 </div>
               </div>
               <div className="col-md-6 mb-3">
                 <label for="cc-number">Credit card number</label>
                 <input type="text" className="form-control" id="cc-number" placeholder="" required />
                 <div className="invalid-feedback">
                   Credit card number is required
                 </div>
               </div>
             </div>
             <div className="row">
               <div className="col-md-3 mb-3">
                 <label for="cc-expiration">Expiration</label>
                 <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                 <div className="invalid-feedback">
                   Expiration date required
                 </div>
               </div>
               <div className="col-md-3 mb-3">
                 <label for="cc-expiration">CVV</label>
                 <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                 <div className="invalid-feedback">
                   Security code required
                 </div>
               </div>
             </div>
             <hr className="mb-4" />
             <button className="btn btn-primary btn-lg btn-block" type="button">Continue to checkout</button>
           </form>
         </div>
       </div>

       <footer className="my-5 pt-5 text-muted text-center text-small">
         <p className="mb-1">&copy; 2020-2021 therichpost.com</p>
         <ul className="list-inline">
           <li className="list-inline-item"><a href="#">Privacy</a></li>
           <li className="list-inline-item"><a href="#">Terms</a></li>
           <li className="list-inline-item"><a href="#">Support</a></li>
         </ul>
       </footer>
     </div>
  
   </div>
    )
   
}