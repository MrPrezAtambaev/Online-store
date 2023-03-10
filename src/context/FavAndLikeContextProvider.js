import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import { useProducts } from './ProductsContext';

export const favAndlike = createContext()
export const useFavAndLike  = () => useContext(favAndlike)
const FavAndLikeContextProvider = ({children}) => {
    const [favorite, setFavorite] = useState(false);
    const [likes, setLike] = useState(false)
    const {likeProduct} = useProducts()

  
      const values = {
        // delFavorite,
        // favProduct,
      }

  return (
    <favAndlike.Provider value={values} >
        {children}
    </favAndlike.Provider>

  )
}

export default FavAndLikeContextProvider