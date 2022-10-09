import React, { useContext, useState } from 'react'
import { addToDb } from '../utils/fakeDB';
import Product from './Product';
import { CartContext, ProductsContext } from './Root'

const Shop = () => {
  const products = useContext(ProductsContext);
  const initialCart = useContext(CartContext);
  const [cart, setCart] = useState(initialCart)


  const handleBuy = (product) => {
    let newCart = []
    const exicts = products.find(pro => pro.id === product.id)
    if (!exicts) {
      product.quantity = 1
      newCart = [...cart, product]
    } else {
      const rest = cart.filter(pro => pro.id !== product.id)
      exicts.quantity = exicts.quantity + 1
      newCart = [...rest, exicts]
    }
    setCart(newCart)
    addToDb(product.id)
    console.log(cart);

  }
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        {
          products.map(product => <Product key={product.id} product={product} handleBuy={handleBuy} />)
        }
      </div>
    </div>
  )
}

export default Shop
