import { getStoredCart } from "../utils/fakeDB";

export const GetData = async () => {
    const loadProducts = await fetch('products.json')
    const products = await loadProducts.json();

    const savedCart = getStoredCart()
    const initialCart = []
    for (const id in savedCart) {
        const exitsProduct = products.find(product => product.id === id)
        if (exitsProduct) {
            const quantity = savedCart[id]
            exitsProduct.quantity = quantity
            initialCart.push(exitsProduct)
        }

    }

    return { products, initialCart }
}