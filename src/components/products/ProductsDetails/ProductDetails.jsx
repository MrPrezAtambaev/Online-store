import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProducts } from '../../../context/ProductsContext'

const ProductDetails = () => {
    const {getOneProduct, oneProduct} = useProducts()
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getOneProduct(id)
    }, [])
  return (
    <>
    {oneProduct? (
        <div className="product_card">
          <div className="product_card_sort">
              <div className='product_card_content'>
                  <img src="https://m.media-amazon.com/images/I/51-+O3-wFxL._AC_UF1000,1000_QL80_.jpg" alt="" className="prd_content_img" />

                  <span className="prd_content_span">{oneProduct.category}</span>
                <div className="prd_content_flex">
                      <h5 className='prd_content_title'>
                        {oneProduct.title}
                      </h5>
                      <h6 className='prd_content_price' >
                        ${oneProduct.price}
                      </h6>
                </div>

                <button className='prd_content_btn'>
                    Buy Now
                </button>

                <button onClick={() => navigate(`/edit/${oneProduct.id}`)} className="prd_content_btn_2">
                    Edit
                </button>
              </div>

            </div>
        </div>
    ): (
        <h1>Loading</h1>
    )}
    </>
  )
}

export default ProductDetails