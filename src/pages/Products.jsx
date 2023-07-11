import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../components/Card'

const Products = () => {
    const [products,setProducts]=useState([])
    const[limit,setLimit]=useState(8)

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get(`https://fakestoreapi.com/products`)
                setProducts(response.data)
            }
            catch(err){
                console.log(err)
            }
        }

        // call the function fetchData()
        fetchData()
    },[])
  return (
    <>
     <div className="container-fluid my-3">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {products.slice(0,limit).map((product,i)=>(
                        <Card item={product} key={i}/>
                    ))}
                    <div className='mx-auto'>
                        <div className="col-5">
                            {limit < products.length &&
                            <button className='btn btn-warning' onClick={()=>setLimit(limit+4)}>Load More</button>}
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Products