import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/' + id).then(response=>{
          setProduct(response.data.product);
        });
    
      }, []);

    return (
    <div class="detail">
            <h3>{product.title}</h3>
            <div>Price: ${product.price}</div>
            <div>Description: {product.description}</div>
    </div>
    )
}
export default ProductDetail;