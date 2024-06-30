// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'img1.jpg' },
    { id: 2, name: 'Product 2', price: 39.99, image: 'img2.jpg' },
    { id: 3, name: 'Product 3', price: 19.99, image: 'img3.jpg' },
    { id: 4, name: 'Product 4', price: 99.99, image: 'img5.jpg' },
    { id: 5, name: 'Product 5', price: 49.99, image: 'img6.jpg' },
];

const cart = [];

// Function to display products
function displayProducts() {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productElement);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert('Product added to cart');
    displayCart();
}

// Function to display cart items
function displayCart() {
    const cartContainer = document.querySelector('.cart-container');
    if (cartContainer) {
        cartContainer.innerHTML = '';
        cart.forEach((product, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${product.name} - $${product.price}</span>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });
    }
}

// Function to remove product from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Initialize product display
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.product-grid')) {
        displayProducts();
    }
    if (document.querySelector('.cart-container')) {
        displayCart();
    }
});
