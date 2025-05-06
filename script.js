// Product Data
const products = {
    mobiles: [
        {
            id: 1,
            name: "iPhone 14 Pro",
            description: "6.1-inch Super Retina XDR display, A16 Bionic chip",
            price: 129999,
            image: "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            name: "Samsung Galaxy S23 Ultra",
            description: "6.8-inch Dynamic AMOLED, Snapdragon 8 Gen 2",
            price: 124999,
            image: "https://images.unsplash.com/photo-1676046187537-910fd9d65b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            name: "OnePlus 11 5G",
            description: "6.7-inch Fluid AMOLED, Snapdragon 8 Gen 2",
            price: 56999,
            image: "https://images.unsplash.com/photo-1678286770015-8978e9b5b5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            name: "Google Pixel 7 Pro",
            description: "6.7-inch QHD+ OLED, Google Tensor G2",
            price: 84999,
            image: "https://images.unsplash.com/photo-1664474614083-fc44b0b8b6e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            name: "Xiaomi 13 Pro",
            description: "6.73-inch AMOLED, Snapdragon 8 Gen 2",
            price: 79999,
            image: "https://images.unsplash.com/photo-1675855635773-0f36edfc9a8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 6,
            name: "Vivo X90 Pro",
            description: "6.78-inch AMOLED, MediaTek Dimensity 9200",
            price: 84990,
            image: "https://images.unsplash.com/photo-1676911949306-9a4b6d8280c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 7,
            name: "Oppo Find N2 Flip",
            description: "6.8-inch foldable AMOLED, MediaTek Dimensity 9000+",
            price: 89999,
            image: "https://images.unsplash.com/photo-1676911949306-9a4b6d8280c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 8,
            name: "Nothing Phone (2)",
            description: "6.7-inch OLED, Snapdragon 8+ Gen 1",
            price: 44999,
            image: "https://images.unsplash.com/photo-1659789203493-3c8d8e571f06?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 9,
            name: "Realme GT Neo 5",
            description: "6.74-inch AMOLED, Snapdragon 8+ Gen 1",
            price: 35999,
            image: "https://images.unsplash.com/photo-1620288627223-53302f4e50ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 10,
            name: "Motorola Edge 40 Pro",
            description: "6.67-inch pOLED, Snapdragon 8 Gen 2",
            price: 74999,
            image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
    ],
    laptops: [
        {
            id: 11,
            name: "MacBook Pro 14-inch",
            description: "M2 Pro chip, 16GB RAM, 512GB SSD",
            price: 194900,
            image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 12,
            name: "Dell XPS 15",
            description: "Intel Core i7, 16GB RAM, 512GB SSD, RTX 3050",
            price: 159990,
            image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 13,
            name: "HP Spectre x360",
            description: "Intel Core i7, 16GB RAM, 1TB SSD, 4K OLED",
            price: 149990,
            image: "https://images.unsplash.com/photo-1586211082272-66b47cdc65a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 14,
            name: "Asus ROG Zephyrus G14",
            description: "Ryzen 9, 16GB RAM, 1TB SSD, RTX 3060",
            price: 129990,
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 15,
            name: "Lenovo ThinkPad X1 Carbon",
            description: "Intel Core i7, 16GB RAM, 512GB SSD",
            price: 139990,
            image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 16,
            name: "Microsoft Surface Laptop 5",
            description: "Intel Core i7, 16GB RAM, 512GB SSD",
            price: 134990,
            image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 17,
            name: "Acer Swift 5",
            description: "Intel Core i7, 16GB RAM, 1TB SSD",
            price: 99990,
            image: "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 18,
            name: "MSI Creator Z16",
            description: "Intel Core i7, 32GB RAM, 1TB SSD, RTX 3060",
            price: 189990,
            image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 19,
            name: "Razer Blade 15",
            description: "Intel Core i7, 16GB RAM, 1TB SSD, RTX 3070",
            price: 199990,
            image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 20,
            name: "LG Gram 17",
            description: "Intel Core i7, 16GB RAM, 1TB SSD",
            price: 149990,
            image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
    ],
    clothes: [
        {
            id: 21,
            name: "Men's Formal Shirt",
            description: "Premium cotton formal shirt with slim fit",
            price: 1499,
            image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 22,
            name: "Women's Summer Dress",
            description: "Floral print cotton dress with puff sleeves",
            price: 1999,
            image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb095d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 23,
            name: "Men's Jeans",
            description: "Slim fit stretchable jeans with premium denim",
            price: 2499,
            image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 24,
            name: "Women's Jumpsuit",
            description: "Casual denim jumpsuit with belt",
            price: 2999,
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 25,
            name: "Men's T-Shirt Pack",
            description: "Pack of 3 premium cotton t-shirts",
            price: 999,
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 26,
            name: "Women's Blouse",
            description: "Silk blouse with button-down collar",
            price: 1799,
            image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 27,
            name: "Men's Blazer",
            description: "Slim fit blazer with notch lapel",
            price: 4999,
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 28,
            name: "Women's Skirt",
            description: "Midi length pleated skirt",
            price: 1599,
            image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 29,
            name: "Men's Sweatshirt",
            description: "Fleece-lined hooded sweatshirt",
            price: 1299,
            image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 30,
            name: "Women's Cardigan",
            description: "Oversized knit cardigan with pockets",
            price: 2199,
            image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
    ]
};

// Shopping Cart
let cart = [];

// DOM Elements
const mobileGrid = document.getElementById('mobile-grid');
const laptopGrid = document.getElementById('laptop-grid');
const clothesGrid = document.getElementById('clothes-grid');
const cartModal = document.getElementById('cart-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const closeModal = document.querySelector('.close');

// Display Products
function displayProducts() {
    // Display Mobiles
    products.mobiles.forEach(product => {
        const productCard = createProductCard(product);
        mobileGrid.appendChild(productCard);
    });

    // Display Laptops
    products.laptops.forEach(product => {
        const productCard = createProductCard(product);
        laptopGrid.appendChild(productCard);
    });

    // Display Clothes
    products.clothes.forEach(product => {
        const productCard = createProductCard(product);
        clothesGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="product-price">₹${product.price.toLocaleString('en-IN')}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `;
    
    return card;
}

// Add to Cart
function addToCart(productId) {
    // Find product in all categories
    let product;
    for (const category in products) {
        product = products[category].find(p => p.id === productId);
        if (product) break;
    }
    
    if (!product) return;
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
}

// Update Cart
function updateCart() {
    // Update cart items display
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        cartTotalElement.textContent = '₹0';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>₹${item.price.toLocaleString('en-IN')} x ${item.quantity}</p>
                </div>
            </div>
            <div class="cart-item-price">
                ₹${itemTotal.toLocaleString('en-IN')}
            </div>
            <button class="cart-item-remove" data-id="${item.id}">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Update total
    cartTotalElement.textContent = `₹${total.toLocaleString('en-IN')}`;
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.cart-item-remove').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.getAttribute('data-id'));
            addToCart(productId);
            
            // Show success message
            const originalText = e.currentTarget.textContent;
            e.currentTarget.textContent = 'Added!';
            e.currentTarget.style.backgroundColor = '#2ecc71';
            
            setTimeout(() => {
                e.currentTarget.textContent = originalText;
                e.currentTarget.style.backgroundColor = '#3498db';
            }, 1000);
        });
    });
    
    // Cart modal
    document.querySelector('a[href="#cart"]').addEventListener('click', (e) => {
        e.preventDefault();
        cartModal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        alert(`Thank you for your purchase! Total: ₹${cartTotalElement.textContent}`);
        cart = [];
        updateCart();
        cartModal.style.display = 'none';
    });
    
    // Shop now button
    document.querySelector('.shop-now').addEventListener('click', () => {
        window.location.href = '#mobiles';
    });
});
