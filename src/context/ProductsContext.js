import axios from 'axios'
import React, { createContext, useContext, useReducer, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const productContext = createContext()
export const useProducts = () => useContext(productContext)

const API = 'http://localhost:8000/products'

const INIT_STATE = {
    products: [],
    oneProduct: null,
    likes: [],
    favorites: []
}

function reducer(state=INIT_STATE, action) {
    switch (action.type) {
        case 'GET_PRODUCTS': 
            return {...state, products: action.payload}
        case 'GET_ONE_PRODUCTS': 
            return {...state, oneProduct: action.payload}
        // case 'LIKE_PRODUCT':
        //     return {...state, like: action.payload}
        default: 
            return state
    }
}

const ProductsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const navigate = useNavigate()
    const [page, setPage] = useState(1);
    const location = useLocation()

    async function getProducts() {
        const {data} = await axios(`${API}/${window.location.search}`)
        dispatch({
            type: 'GET_PRODUCTS',
            payload: data
        })
    }

    async function addProduct(newProduct) {
        await axios.post(API, newProduct)
        getProducts()
    }

    async function likeProduct(newProduct) {
        await axios.patch(`${API}/${newProduct.id}`, newProduct)
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

    const fetchByParams = (query, value) => {
        const search = new URLSearchParams (location.search);
        if(value == 'all') {
            search.delete(query);
        } else {
            search.set(query, value)
        };

        const url = `${location.pathname}?${search.toString()}`

        navigate(url)
    }

    function setLikeStorage() {
        localStorage.setItem('likes', JSON.stringify(INIT_STATE.likes))
        localStorage.setItem('favorites', JSON.stringify(INIT_STATE.favorites))
    }


    const values = {
        getProducts,
        addProduct,
        products: state.products,
        getOneProduct,
        editedProduct,
        oneProduct: state.oneProduct,
        deleteProduct,
        fetchByParams,
        setPage,
        page,
        setLikeStorage,
        likeProduct
    }

  return (
    <productContext.Provider value={values} >
        {children}
    </productContext.Provider>
  )
}

export default ProductsContextProvider