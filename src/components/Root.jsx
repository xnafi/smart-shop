import React, { createContext, useState } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export const ProductsContext = createContext([]);
export const CartContext = createContext()
function Root() {
    const { products, initialCart } = useLoaderData()
    const [cart, setCart] = useState(initialCart)
    return (
        <>
            <ProductsContext.Provider value={products}>
                <CartContext.Provider value={[cart, setCart]}>
                    <Header />
                    <Outlet />
                    <Footer />
                </CartContext.Provider>

            </ProductsContext.Provider>

        </>
    )
}

export default Root