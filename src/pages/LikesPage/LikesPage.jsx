import React, { useEffect, useState } from 'react'
import { useProducts } from '../../context/ProductsContext'

const LikesPage = () => {
  const {setLikeStorage, getOneProduct} = useProducts()


  // useEffect(() => {
  //   if(localStorage.getItem('username')) {
  //     setLikeStorage()
  //   }
  // }, [])

  // function likeProduct () {
  //   let oneProduct = getOneProduct()
  // }

  return (
    <>
     
    </>
  )
}

export default LikesPage