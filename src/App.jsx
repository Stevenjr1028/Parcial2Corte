import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/counterSlice";

export const App = () =>{
  const {counter} =useSelector(state=> state.counter);
  const dispatch= useDispatch();

  return (
    <>
    <h1>App</h1>
    <hr/>
    <span> Counter is {counter} </span>
    <button 
    className="btn btn-primary"
    onClick={()=> dispatch(incremente())}>+1</button>
    </>
  )
}