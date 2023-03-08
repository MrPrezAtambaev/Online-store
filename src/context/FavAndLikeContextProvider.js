import React, { createContext, useContext, useState } from 'react'

export const favAndlike = createContext()
export const useFavAndLike  = () => useContext(favAndlike)
const FavAndLikeContextProvider = ({children}) => {
    const [favorite, setFavorite] = useState(false);
    const favProduct = (oneProduct) => {
        const products = JSON.parse(localStorage.getItem("favorites"));
        products.push(oneProduct);
        localStorage.setItem("favorites", JSON.stringify(products));
        setFavorite(true);
      };
    
      function delFavorite(id) {
        let products = JSON.parse(localStorage.getItem('favorites'))
        products = products.map((elem) => elem.id !== id)
        localStorage.setItem('favorites', JSON.stringify(products))
        setFavorite(false)
      }

      const values = {
        delFavorite,
        favProduct,
        favorite
      }

  return (
    <favAndlike.Provider value={values} >
        {children}
    </favAndlike.Provider>

  )
}

export default FavAndLikeContextProvider