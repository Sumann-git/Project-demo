import React,{useState} from 'react'

const IncrementDecrement = () => {
    const[num,setNum]=useState(1)
    const[data,setData]=useState(5)
    const increase=()=>{
        setNum(num+1)
    }
    const add=()=>{
        setData(data+1)
    }

    // const decrease=()=>{
    //     setNum(num-1)
    // }
  return (
    <>
    <h1 className="text-success">{num}</h1>
    {num<9 &&
    <button className="btn btn-primary" onClick={increase}>Increment</button>}
    {num>1 && 
     <button className="btn btn-danger" onClick={()=>setNum(num-1)}>Decrement</button>
    }

    <h1 className="my text-success">{data}</h1>
    {data<14 &&
    <button className="b btn btn-primary" onClick={add}>Addition</button>}
    {data>5 && 
     <button className="b btn btn-danger" onClick={()=>setData(data-1)}>Subtraction</button>
    }
   
    </>
  )
}

export default IncrementDecrement