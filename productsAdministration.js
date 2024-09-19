let products = []
let counter = 1
const resetProducts = () => {
    counter = 1
    return products = []
}

const getProducts = () => {
    return products
}
const addProduct = (name,price) => {
    const findIndex = products.findIndex(product => product.name === name)

    if(!name) throw new Error('it must contain a name')
    
    if(!price) throw new Error('it must contain a price')

    if (!products[findIndex]) {
        const id = counter++
        products.push({id,name,price})
        return products
    }
    throw new Error('product must be unique')
    

}

const removeProduct = (name) => {
    const arrayFiltered = products.filter(product => product.name !== name)
    
    if (arrayFiltered.length === 0) throw new Error('Product does not exist')

    return products = arrayFiltered
}

const getProduct = (id) => {
    const product = products.find(product => product.id === id)
    if (!product) throw new Error('Product does not exist')
    
    return product
}

const updateProduct = (id,properties) => {
    const findIndex = products.findIndex(product => product.id === id)
    const {name,price} = properties

    if (findIndex === -1) throw new Error('should fail when updating a product that does not exist')
    
    products[findIndex] = {
        ...products[findIndex],
        name: !name ? products[findIndex].name : name,
        price : !price ? products[findIndex].price : price
    }
    return products[findIndex]
}


module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct
}