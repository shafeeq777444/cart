import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkCartDelete, thunkCartFetch } from "../redux/thunk";

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart);
    useEffect(()=>{
        dispatch(thunkCartFetch())
    },[])
    const dispatch=useDispatch();
    console.log(cart);
    return (
        <div>
            <p>i am cart</p>
            <div>
                {cart.map((x, ind) => (
                    <div key={ind}>
                        <div>{x.id}</div>
                        <div>{x.name}</div>
                        <button onClick={()=>{dispatch(thunkCartDelete(x.id)); dispatch(thunkCartFetch())}} >remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
