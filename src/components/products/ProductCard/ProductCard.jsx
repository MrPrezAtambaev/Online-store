import React from 'react';
import './ProductCard.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../../context/ProductsContext';

const ProductCard = ({card}) => {
  const {deleteProduct} = useProducts()
  const navigate = useNavigate()
  return (
        <div className="product_card">
          <div className="product_card_sort">
              <div className='product_card_content'>
                  <img src="https://m.media-amazon.com/images/I/51-+O3-wFxL._AC_UF1000,1000_QL80_.jpg" alt="" className="prd_content_img" />

                  <span className="prd_content_span">{card.category}</span>
                <div className="prd_content_flex">
                      <h5 className='prd_content_title'>
                        {card.title}
                      </h5>
                      <h6 className='prd_content_price' >
                        ${card.price}
                      </h6>
                </div>

                <button className='prd_content_btn'>
                    Buy Now
                </button>

                <button onClick={() => navigate(`/edit/${card.id}`)} className="prd_content_btn_2">
                    Edit
                </button>
                <button onClick={() => navigate(`/details/${card.id}`)} className="prd_content_btn_2">
                    Details
                </button>
                <button onClick={() => deleteProduct(card.id)} className="prd_content_btn_2">
                    Delete
                </button>
              </div>

            </div>
        </div>
  )
}

export default ProductCard