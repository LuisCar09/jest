const {resetProducts,addProduct,removeProduct,getProducts,getProduct,updateProduct } = require('./productsAdministration')

beforeEach(() => {
    resetProducts()
})
afterEach(() => {
    resetProducts()
})


describe('addProduct', () => {
    it('should add a product',() =>{    
        const currentProduct = getProducts() ?? []
        const id = currentProduct.length + 1
        const name = 'BMW'
        const price = 300000
        
        
        const product = {id,name,price} 
        const updateProducts = [...currentProduct,product]
 
        expect(addProduct(name,price)).toEqual(updateProducts)
    })

    it('should fail when product is repeated',() => {
        const name = 'Audi'
        const price = '1000'
        addProduct(name,price)

        expect(() => addProduct(name,price)).toThrow('product must be unique')

    })
    
    it('should fail when adding a product with no name',() => {
        
        expect(()=> addProduct('',2000)).toThrow('it must contain a name')
    })
    it('should fail when adding a product with no name',() => {
        
        expect(()=> addProduct('Porshe',)).toThrow('it must contain a price')
    })
})

describe('removeProduct',() => {
    it('should remove a product', ()=> {
        addProduct('Porshe',20000)
        addProduct('BMW',100000)
        const name ='BMW'
        const products = getProducts()
       
        
        expect(removeProduct(name)).not.toEqual(products)
    })
    it('should return an error if product does not exist', () => {
        const name = 'Ferrari'
        expect(()=> removeProduct(name)).toThrow('Product does not exist')
    })
})



// ### Test obtener producto

// El siguiente test que vamos a hacer es el de obtener un producto. Para ello, vamos a usar la función **getProduct**. Esta función recibe un parámetro: el id del producto. Devuelve un objeto con los datos del producto. Si el producto no existe, la función lanzará un error.

describe('getProduct',() => {
    
    it('it should return an product',() => {
        addProduct('Porshe',20000)
        addProduct('BMW',100000)
        //console.log(getProducts());
        
        const id = 5;
        const product = getProducts().find(item => item.id === id)
        //console.log(product);
        
        expect(getProduct(id)).toEqual(product)

    })
})