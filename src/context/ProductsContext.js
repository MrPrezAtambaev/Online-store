import axios from 'axios'
import React, { createContext, useContext, useReducer, useState } from 'react'

export const productContext = createContext()
export const useProducts = () => useContext(productContext)

const API = 'http://localhost:8000/products'

const INIT_STATE = {
    products: [],
    oneProduct: null 
}

function reducer(state=INIT_STATE, action) {
    switch (action.type) {
        case 'GET_PRODUCTS': 
            return {...state, products: action.payload}
        case 'GET_ONE_PRODUCTS': 
            return {...state, oneProduct: action.payload}
        default: 
            return state
    }
}

const ProductsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    async function getProducts() {
        const {data} = await axios(API)
        dispatch({
            type: 'GET_PRODUCTS',
            payload: data
        })
    }

    async function addProduct(newProduct) {
        await axios.post(API, newProduct)
        getProducts()
    }

    async function getOneProduct(id) {
        dispatch({
            type: 'GET_ONE_PRODUCTS',
            payload: null
        })
        const {data} = await axios(`${API}/${id}`)
        dispatch({
            type: 'GET_ONE_PRODUCTS',
            payload: data
        })
    }

    async function editedProduct(newProduct) {
        await axios.patch(`${API}/${newProduct.id}`, newProduct)
        getProducts()
    }

    async function deleteProduct(id) {
        await axios.delete(`${API}/${id}`)
        getProducts()
    }

    const values = {
        getProducts,
        addProduct,
        products: state.products,
        getOneProduct,
        editedProduct,
        oneProduct: state.oneProduct,
        deleteProduct
    }

  return (
    <productContext.Provider value={values} >
        {children}
    </productContext.Provider>
  )
}

export default ProductsContextProvider