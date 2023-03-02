import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../../../context/ProductsContext'

const AddProduct = () => {
    const {getProducts, addProduct} = useProducts()
    const [product, setProduct] = useState({img: '' ,title: '', category: '', color: '', price: '', type: ''})
    const navigate = useNavigate()

    useEffect(() => {
      getProducts()
    }, [])

    const handleInp = e => {
      if(e.target.name === 'price') {
        let obj = {
          ...product,
          price: Number(e.target.value)
        };
        setProduct(obj)
      } else {
        let obj = {
          ...product,
          [e.target.name]: e.target.value
        };
        setProduct(obj)
      }
    }
    
    return (
      <div>
        <h2>Add product</h2>
        <input type="text" placeholder='Image' name='img' onChange={handleInp} /> <br />
        <input type="text" placeholder='Title' name='title' onChange={handleInp} /> <br />
        <input type="text" placeholder='Category' name='category' onChange={handleInp} /> <br />
        <input type="text" placeholder='Type' name='type' onChange={handleInp} /> <br />
        <input type="text" placeholder='Color' name='color' onChange={handleInp} /> <br />
        <input type="number" placeholder='Price' name='price' onChange={handleInp} /> <br />
        <button onClick={() => {
          addProduct(product);
          navigate('/')
        }} >
          Save
        </button>
    </div>
  )
}

export default AddProduct