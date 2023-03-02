import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProducts } from '../../../context/ProductsContext'

const EditProduct = () => {
    const {editedProduct, getOneProduct, oneProduct} = useProducts()
    const [product, setProduct] = useState({img: '' ,title: '', category: '', color: '', price: '', type: ''})
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        getOneProduct(id)
    }, [])

    useEffect(() => {
        setProduct(oneProduct)
      }, [oneProduct])
    
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
    <>
    {product? (
      <div style={{textAlign: 'center', padding: '3rem'}} >
      <h2 style={{color: 'white', padding: '1rem'}} >Edit product</h2>
      <input type="text" placeholder='' value={product.title} name='title' onChange={handleInp} /> <br />
      <input type="text" placeholder='Category' value={product.category}  name='category' onChange={handleInp} /> <br />
      <input type="text" placeholder='Price' value={product.price}  name='price' onChange={handleInp} /> <br />
      <input type="text" placeholder='Image' value={product.img}  name='img' onChange={handleInp} /> <br />
      <input type="text" placeholder='Color' value={product.color}  name='color' onChange={handleInp} /> <br />
      <input type="text" placeholder='Type' name='type' value={product.type} onChange={handleInp} /> <br />
      <button style={{marginTop: '2rem'}} className='button-3' role='button' onClick={() => {
        editedProduct(product)
        navigate('/')
      }} >
        Save Changes
      </button>
    </div>
    ): (
      <h1>...Loading</h1>
    )}
    </>
  )
}

export default EditProduct