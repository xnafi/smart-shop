import { getStoredCart } from "../utils/fakeDB";

export const GetData = async () => {
    const loadProducts = await fetch('products.json')
    const products = await loadProducts.json();

    const savedCart = getStoredCart()
    const initialCart = []
    for (const id in savedCart) {
        const foundProduct = products.find(product => product.id === id)
        if (foundProduct) {
            const quantity = savedCart[id]
            foundProduct.quantity = quantity
            initialCart.push(foundProduct)
        }
    }

    return { products, initialCart }
}