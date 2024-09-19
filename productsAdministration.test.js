const {resetProducts,addProduct,removeProduct,getProducts,getProduct,updateProduct } = require('./productsAdministration')

beforeEach(() => {
    resetProducts()
})
beforeEach(() => {
    addProduct('Porshe',20000)
    addProduct('BMW',100_000)
})
afterEach(() => {
    resetProducts()
})


describe('addProduct', () => {
    it('should add a product',() =>{    
        const currentProduct = getProducts() ?? []
        const id = currentProduct.length + 1
        const name = 'Ferrari'
        const price = 300_000

        const product = {id,name,price} 
        const updateProducts = [...currentProduct,product]
 
        expect(addProduct(name,price)).toEqual(updateProducts)
    })

    it('should fail when product is repeated',() => {
        const name = 'Porshe'
        const price = '20000'
        //addProduct(name,price)

        expect(() => addProduct(name,price)).toThrow('product must be unique')

    })
    
    it('should fail when adding a product with no name',() => {
        
        expect(()=> addProduct('',2000)).toThrow('it must contain a name')
    })
    it('should fail when adding a product with no price',() => {
        
        expect(()=> addProduct('Porshe',)).toThrow('it must contain a price')
    })
})

describe('removeProduct',() => {
    it('should remove a product', ()=> {
        
        const name ='BMW'
        const products = getProducts()
       
        
        expect(removeProduct(name)).not.toEqual(products)
    })
    it('should return an error if product does not exist', () => {
        const name = 'Ferrari'
        expect(()=> removeProduct(name)).toThrow('Product does not exist, please enter a valid product')
    })
})



describe('getProduct',() => {
    
    it('it should return an product',() => {
       
        const productId = getProducts().find(product => product.name === 'BMW' );
        const product = getProducts().find(item => item.id === productId.id)
        expect(getProduct(productId.id)).toEqual(product)

    })
    it('it should throw an error if does not exist', ()=> {
        
        expect(() => getProduct('10')).toThrow('Product does not exist, please enter a valid product')
    })
})


describe('updateProduct',() => {
    it('should fail when updating a product that does not exist', () => {
        const product = {
            name:'ThisCarDoesNotExistHa!',
            price:20000
        }
        expect(() => updateProduct('20',product)).toThrow('Product does not exist, please enter a valid product')
    })

    
    it('should update only the price ',() => {
        
        const currentProduct = getProduct(1)
        const id = currentProduct.id
        const updateProductData = {
            name : currentProduct.name,
            price : 50000
        }
        
        expect(updateProduct(id,updateProductData)).not.toEqual(currentProduct)
    })
    it('should update only the name ',() => {

        const currentProduct = getProduct(1)
        const id = currentProduct.id
        const updateProductData = {
            name : 'Ferrari',
            price :currentProduct.name
        }
        
        expect(updateProduct(id,updateProductData)).not.toEqual(currentProduct)
    })
    it('should update a product ',() => {
 
        const currentProduct = getProduct(2)
        const id = currentProduct.id
        const updateProductData = {
            name : 'Ferrari',
            price : 1_000_000
        }
        
        expect(updateProduct(id,updateProductData)).not.toEqual(currentProduct)
    })
})