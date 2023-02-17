import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
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
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <div class="main">
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <div class="row">
                <label>Title</label>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </div>
            <div class="row">
                <label>Price</label>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </div>
            <div class="row">
                <label>Description</label>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </div>
            <input class="btn" type="submit" value="Create"/>
        </form>
        </div>
    )
}
export default ProductForm;

