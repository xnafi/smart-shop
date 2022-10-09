import React, { createContext } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export const ProductsContext = createContext([]);
function Root() {
    const products = useLoaderData()
    return (
        <>
            <ProductsContext.Provider value={products}>
                <Header />
                <Outlet />
                <Footer />
            </ProductsContext.Provider>

        </>
    )
}

export default Root