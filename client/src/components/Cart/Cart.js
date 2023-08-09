
import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
    const [product, setProduct] = useState(null);
    //const { id } = useParams();

   /* useEffect(() => {
        const fetchProduct = async () => {
          const response = await fetch(`http://localhost:5000/products/cart`);
          const data = await response.json();
          console.log(data);
          setProduct(data);
        };
        fetchProduct();
      }, []);
      if (!product) {
        return <div>Loading...</div>;
      }
      */
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
}
