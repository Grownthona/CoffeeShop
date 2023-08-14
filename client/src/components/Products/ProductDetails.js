import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
          const response = await fetch(`https://dough-bakery-backend.vercel.app/products/productsdetail/${id}`);
          const data = await response.json();
          setProduct(data);
        };
        fetchProduct();
      }, [id]);
      if (!product) {
        return <div>Loading...</div>;
      }
  return (
    <div>
        
        {product && (
             <div>
             <h2>{product.name}</h2>
             <p>{product.details}</p>
             <p>{product.price}</p>
             <img src={product.imageSrc} alt={product.name} />
           </div>
        )
         }
      <h1>Details</h1>
    </div>
  );
}
