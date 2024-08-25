// class = (ES6 feature) provides a more structured and cleaner way to 
//               work with objects compared to traditional constructor functions
//               ex. static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

const products = [
    {name: "shirt", price: 19.99}, 
    {name: "Pants", price: 22.50},
    {name: "Underwear", price: 100.00},
    {name: "pan", price: 24.49},
    {name: "Cap", price: 9.99}
]

function calculateAllProducts(products, tax) {
    let total = 0;

    products.forEach(product => {
        total += product.price;
    });

    const tatalWithTax = total + (total * tax);

    return tatalWithTax;
}

function displayProducts(products) {
    products.forEach(product => {
        console.log(`Product: ${product.name}, Price: ${product.price}`);
    })
}

// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();

displayProducts(products);

const total = (product3).calculateTotal(salesTax);
const totalAllProduct = calculateAllProducts(products, salesTax);
// console.log(`Total price (with tax) ${total.toFixed(2)}`,total);
console.log(`Total price (with tax): $${totalAllProduct.toFixed(2)}`);
