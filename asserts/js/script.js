const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 999,
        category: "phones",
        image: "https://www.istore.co.za/media/catalog/product/cache/7cbfd4bf9761b066f119e95af17e67c5/i/p/iphone_15_pro_black_titanium_pdp_image_position_3.jpg",
        description: "The latest iPhone with amazing camera and performance"
    },
    {
        id: 2,
        name: "MacBook Air 2022",
        price: 1199,
        category: "laptops",
        image: "https://istorepreowned.co.za/cdn/shop/files/MacBook_Air_M1_2020_-_Space_Grey.png?v=1699424775",
        description: "Lightweight laptop perfect for work and creativity"
    },
    {
        id: 3,
        name: "AirPods Pro",
        price: 249,
        category: "accessories",
        image: "https://m.media-amazon.com/images/I/61SUj2aKoEL.jpg",
        description: "Wireless earbuds with noise cancellation"
    },
    {
        id: 4,
        name: "Samsung Galaxy S24",
        price: 899,
        category: "phones",
        images: "https://shop.vodacom.co.za/media/catalog/product/s/a/samsung_galaxy_s24_5g_256gb_-_main_1_.jpg?store=cbu&image-type=image",
        description: "Android phone with incredible features"
    },
    {
        id: 5,
        name: "Dell Laptop",
        price: 799,
        category: "laptops",
        image: "https://img.evetech.co.za/repository/mobilev1/Laptop/ProImages/dell-inspiron-15-5518-11th-gen-i5-touchscreen-laptop-1000px-v003.webp",
        description: "Reliable laptop for everyday computing"
    },
    {
        id: 6,
        name: "Wireless Mouse",
        price: 49,
        category: "accessories",
        image: "https://m.media-amazon.com/images/I/61Mk3YqYHpL.jpg",
        description: "Ergonomic wireless mouse for productivity"
    }
];

// Step 2: Creating out shopping cart.
// This will store all items the customer whats to buy

let cart = [];

// Step 3: Get refrences to HTML elements
// This connects our JS to specific parts of our webpage

const cartCountElement = document.getElementById('cart-count');
const productsGrid = document.getElementById('products-grid');
const featuredProducts = document.getElementById('featured-products');

//formart price floating
function formatPrice(price) {
    return '$' + price.toFixed(2);
}
console.log('Javascript loaded successfully');
console.log('We have', products.length, 'products')

//Function to create HTML product card (1)
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary btn-small" onclick="addToCart(${product.price})">
                        Add to Cart
                    </button>
                    <button class="btn btn-secondary btn-small" onclick="viewProduct(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `
}

// Display function
function displayProducts(productsToShow = products) {
    // if we are on the products page show this
    if (productsGrid) {
        // create HTML for eact product and join together
        const productsHTML = productsToShow.map(createProductCard).join('');
        productsGrid.innerHTML = productsHTML;
    }

    // if we are on homepage, show first 3 products as featured
    if (featuredProducts) {
        const featuredHTML = productsToShow.slice(0, 3).map(createProductCard).join('');
        featuredProducts.innerHTML = featuredHTML;
    }
}

// function to add product to card
function addToCart(productId) {
    alert('Adding product ' + productId + "to cart! (We\'ll builf this feature next)");
}

// function ro view product details
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    alert('Product: ' + product.name + '\nPrice: ' + formatPrice(product.price) + '\nDiscription: ' + product.description);
}

// wait for the page to fully FontFaceSetLoadEvent, then display products
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContent Loaded, displaying products...');
    displayProducts();
})