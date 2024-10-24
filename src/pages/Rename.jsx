import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { thunkFetch } from '../redux/thunk';

const Rename = () => {
    const [text,setText]=useState("")
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(thunkFetch())
    },[])
    const params=useParams();
    console.log(params,"useParam");
    const products= useSelector((state)=>state.cart.product)
    console.log(products,"products");
    const data=products.find(x=>x.id==params.id)
    // data have possible for undefined value
    console.log(data,"dynamic");
    useEffect(() => {
        // so undefined case useState occuur in undefined that occur an error ,so we give a if condition if data occur that time is working only
        if (data) {
            setText(data.name);
        }
        // we give in data i dependecy array in intial time have loading time the data will be undefined but after load time the data will be get that time the data will be changed so that time we want to working useEffect so we use dependecy array data value
    }, [data]); 
    
  return (
    <div>
      <form action="">
        <h1>Renaming</h1>
        <input value={text}  onChange={(e)=>setText(e.target.value)}  type='text'>
        </input>
        <button>submit</button>
      </form>
    </div>
  )
}

export default Rename
