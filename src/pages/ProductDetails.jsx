import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const[product,setProduct]=useState({})
    const params=useParams()
    const id=params.productid

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))

    },[])
    // handling addToCart function
    const addToCart=()=>{
        // fetching data from the local storage if there is data otherwise assign empty array
        let cartItems=JSON.parse(localStorage.getItem('cartItems'))||[]
        const productItem={
            id:product.id,
            title:product.title,
            price:product.price,
            category:product.category,
            image:product.image,
            rating:product.rating,
            quantity:1
        }
        // checkif item is present in the cart or not
        const existingItem=cartItems.find(item=>item.id===productItem.id)
        if(existingItem){
            toast.error('Product is already in the Cart')
        }
        else{
            cartItems.push(productItem)
            localStorage.setItem('cartItems',JSON.stringify(cartItems))
            toast.success(`${productItem.title} is added to Cart`)
        }
    }
  return (
    <>
    <ToastContainer there='colored' position='top-center' />
    <div className="container my-4">
        <div className='row d-flex justify-content-evenly align-items-center shadow'>
            <div className="col-md-4">
                <img src={product.image} alt={product.title} width='400'/>
            </div>
            <div className="col-md-6">
                <h1 className='text-muted'>{product.title}</h1>s
                <h2>${product.price}</h2>
                <p>{product.description}</p>
                <p>category:{product.category}</p>
                <div className="my-2">
                    <button className='btn btn-warning' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>    
        </div>
    </div>
    </>
  )
}

export default ProductDetails