import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';

export default function Cart() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
          const response = await fetch(`http://localhost:5000/products/cart`);
          const data = await response.json();
          console.log(data);
          setProduct(data);
        };
        fetchProduct();
      }, [id]);
      if (!product) {
        return <div>Loading...</div>;
      }
  return (
    <div>
        
        {product && product.map((item, index) => {
                  
                    return(
                    <div className="card" key={index}>
                        
                   
                        <div className="card-body">
                            <div className="row">
                                <div className="card-title">
                                    <h4>{item.productId.name}</h4>
                                    <p>{item.productId.category}</p>
                                    <h4>{item.productId.price}</h4>
                                    <p>{item.quantity}</p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    )
                    })}
      <h1>Cart</h1>
    </div>
  );
}
