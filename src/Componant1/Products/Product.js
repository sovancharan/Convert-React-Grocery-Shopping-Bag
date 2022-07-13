import React from 'react'
import Header from '../../Componant/Layout/Header/Header'
import ImportantLink from '../../Componant/Layout/ImportantLink/ImportantLink'
import ShoppingBag from '../../Componant/YourProfileLayout/ShoppingBag/ShoppingBag'

const Product = () => {
  return (
    <div>
      <Header/>
      <ShoppingBag/>
      <ImportantLink/>
    </div>
  )
}

export default Product