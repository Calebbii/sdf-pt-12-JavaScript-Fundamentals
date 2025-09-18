// Array Methods
// filter(), map() find()

const products = [
    { name: "Product 1", price: 900},
    { name: "Product 2", price: 3000},
    { name: "Product 3", price: 4500},
    { name: "Product 4", price: 15000},
    { name: "Product 5", price: 750},
    { name: "Product 6", price: 8000},
]

// Filter() ==> Filter multipe elements based on a certain conditon
const filteredProducts = products.filter((x) => {
    return x.price <= 1000
})

console.log(filteredProducts)

// Map() == forEach()
const productPrice = products.map((product)=> {
    return product.price
})

console.log(productPrice)

const productName = products.map((product)=> {
    return product.name
})

console.log(productName)

const discountedPrice = products.map((product) => {
    return product.price * 0.95
})

console.log(discountedPrice);

// Find
const foundProducts = products.find( (product) => {
    return product.name === "Product 6"
})

console.log(foundProducts);