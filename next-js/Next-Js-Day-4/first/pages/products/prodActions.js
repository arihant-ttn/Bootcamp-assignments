import React from 'react'
import {GET_REQUEST,GET_SUCCESS,GET_FAILURE,ADD_PRODUCT,DELETE_PRODUCT} from './prodReducer'
const fetchProd = async(dispatch) => {
  dispatch({type:GET_REQUEST});
  try{
    const res= await fetch(`https://dummyjson.com/products?limit=${10}`)
    const data = await res.json();
    const product = data.products.map((item)=>({id:item.id,title:item.title,description:item.description}))
    dispatch({type:GET_SUCCESS,payload:product})
  }catch(error){
    dispatch({type:GET_FAILURE,payload:`Failed to fetch`})
  }


}

const addProduct = (dispatch,id,title,description)=>{

    dispatch({type:ADD_PRODUCT,payload:{id,title,description}})

}
const deleteProd= (dispatch,id)=>{
    dispatch({type:DELETE_PRODUCT,payload:id})
}
export  {fetchProd,addProduct,deleteProd}
