import React,{useState, useEffect} from 'react'

const Effect = () => {
    const [num,setNum]=useState(1)
    const[data,setData]=useState(10)

    useEffect(()=>{
        alert('this is a effect')
    },[num])
  return (
    <>
    <h1>{num}</h1>
    <button className='btn btn-success' onClick={()=>setNum(num+2)}>Click</button>
    <h1>{data}</h1>
    <button className='btn btn-info' onDoubleClick={()=>setData(data+5)}>Click</button>
    </>
  )
}

export default Effect