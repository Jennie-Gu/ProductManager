import React, { useState, useEffect } from 'react'
import axios from 'axios';
const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products').then(response=>{
          let list = [];
          
          for (let i in response.data.products) {
            list.push(response.data.products[i]);
          }
          setProductList(list)
        });
    
      }, []);

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                setProductList(  // Replace the state
                [ // with a new array
                ...productList, // that contains all the old items
                res.data // and one new item at the end
              ]);
              setTitle("");
              setPrice("");
              setDescription("");
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <div class="main">
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <div class="row">
                <label>Title</label>
                <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </div>
            <div class="row">
                <label>Price</label>
                <input type="text" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </div>
            <div class="row">
                <label>Description</label>
                <input type="text" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
            </div>
            <input class="btn" type="submit" value="Create"/>
        </form>
        <hr class="separate" />
        <div class="products"> 
        <h2>All Products:</h2>
        <ul class="product-list">
      {
                    productList.map( (product,) => 
                        <li class='product'><a href={'http://localhost:3000/' + product._id}>{product.title}</a></li>
                    )
                }
      </ul>
        </div>
        </div>
    )
}
export default ProductForm;

