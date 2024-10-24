import React, { useEffect } from "react";
import { thunkCartFetch, thunkCartPost, thunkFetch } from "../redux/thunk";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const products=useSelector((state)=>state.cart.product)
    console.log(products,"products");
    useEffect(() => {
        dispatch(thunkFetch())
    }, []);
    return (
        <div>
            <h1 >Products</h1>
            <div>{products.map((x,ind)=>(
                <div key={ind}>
                <div>{x.id}</div>
                <div>{x.name}</div>
                <button onClick={()=>{
                    dispatch(thunkCartPost(x))
                    navigate("/cart")
                }}>addToCart</button>
                <button onClick={()=>navigate(`/rename/${x.id}`)}>rename</button>
                </div>
            ))}</div>

        </div>
    );
};

export default Home;
