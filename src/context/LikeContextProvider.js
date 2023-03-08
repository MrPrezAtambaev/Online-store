import React, {useState, createContext, useContext, useReducer } from 'react'
import { json } from 'react-router-dom'
import { useProducts } from './ProductsContext'

export const likeContext = createContext()
export const useLike = () => useContext(likeContext)

const INIT_STATE = {
    like: JSON.parse(localStorage.getItem('like'))
}

function reducer(state=INIT_STATE, action) {
    switch(action.type) {
        case "GET_LIKE": 
            return {...state, like: action.payload}
    }
}
const LikeContextProvider = ({children}) => {
    const [likes, setLike] = useState(false);
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    function getLike() {
        let like = JSON.parse(localStorage.getItem('like'))
        
        if(!like) {
            like = {
                proLike: []
            }
            localStorage.setItem('like', JSON.stringify(like))
        }
        dispatch({
            type: 'GET_LIKE',
            payload: like,
        });
    }

        function addLike(id, oneProduct, likeProduct) {
            likeProduct(oneProduct);
            oneProduct.like += 1;
            let STlikes = JSON.parse(localStorage.getItem("likes"));
            STlikes.proLike.push(oneProduct);
            localStorage.setItem("likes", JSON.stringify(STlikes));
            setLike(true);
        }

    // function addLikes(product) {
    //     const like = JSON.parse(localStorage.getItem('like'))
        
    //     if(!like) {
    //         like = {
    //             proLike: []
    //         }
    //     }    

    //     if(product) {
    //         let newProduct = {
    //             item: product
    //         };

    //         let likeFind = like.proLike.find(
    //             (elem) => elem.item.id === product.id
    //         );

    //         if(likeFind) {
    //             like.proLike = like.proLike.filter(
    //                 (elem) => elem.item.id = product.id
    //             )
    //         } else {
    //             like.proLike.push(newProduct)
    //         }

    //         localStorage.setItem('like', JSON.stringify(like))
    //         getLike()
    //     }
    //     setLike(true)
    // }

    function disLike (id, oneProduct, likeProduct) {
        oneProduct.like -= 1
        likeProduct(oneProduct)
        let STlikes = JSON.parse(localStorage.getItem('likes'))
        STlikes = STlikes.filter((elem) => elem.id !== id)
        localStorage.setItem('likes', JSON.stringify(STlikes))
        setLike(false)
        getLike()
    }

    const values = {
        getLike,
        like: state.like,
        addLike,
        disLike,
        likes
    }

  return (
    <likeContext.Provider value={values} >
        {children}
    </likeContext.Provider>
  )
}

export default LikeContextProvider