let products = []
// {id:1,name:'BMW'},{id:2,name:'Mercedes'},{name:'Audi'}
let counter = 1
const resetProducts = () => {
    return products = []
}

const getProducts = () => {
    return products
}
const addProduct = (name,price) => {
    const findIndex = products.findIndex(product => product.name === name)

    if(!name){
        throw new Error('it must contain a name')
    }
    if(!price){
        throw new Error('it must contain a price')
    }

    if (!products[findIndex]) {
        const id = counter++
        products.push({id,name,price})
        return products
    }else{
        throw new Error('product must be unique')
    }

}

const removeProduct = (name) => {
    const arrayFiltered = products.filter(product => product.name !== name)
    //console.log(arrayFiltered);
    
    if (arrayFiltered.length === 0) {
        throw new Error('Product does not exist')
    }
    return arrayFiltered
}

const getProduct = (id) => {
    const product = products.find(product => product.id === id)
    if (!product) {
        throw new Error('Product does not exist')
    }
    return product
}


module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    //updateProduct
}