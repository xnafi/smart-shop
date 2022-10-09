export const GetData = async () => {
    const loadProducts = await fetch('products.json')
    const products = await loadProducts.json();


    return products
}