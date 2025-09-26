// Products Data
const products = [
    {
        id: 1,
        name: "دستگاه تصفیه آب خانگی RO-8",
        price: 3500000,
        image: "src/assets/countertop-purifier.jpg",
        features: ["8 مرحله تصفیه", "خروجی ۲۰۰ لیتر", "گارانتی ۵ ساله"],
        isNew: true,
        category: "خانگی",
        rating: 4.8
    },
    {
        id: 2,
        name: "دستگاه تصفیه زیر سینکی US-6",
        price: 2800000,
        image: "src/assets/under-sink-purifier.jpg",
        features: ["6 مرحله تصفیه", "فشار پایین", "نصب آسان"],
        isNew: false,
        category: "زیر سینکی",
        rating: 4.6
    },
    {
        id: 3,
        name: "تصفیه کننده کل خانه WH-12",
        price: 8500000,
        image: "src/assets/whole-house-system.jpg",
        features: ["تصفیه کل خانه", "ظرفیت ۵۰۰ لیتر", "گارانتی ۱۰ ساله"],
        isNew: true,
        category: "صنعتی",
        rating: 4.9
    },
    {
        id: 4,
        name: "دستگاه تصفیه رومیزی CT-4",
        price: 1500000,
        image: "src/assets/countertop-purifier.jpg",
        features: ["4 مرحله تصفیه", "قابل حمل", "مناسب سفر"],
        isNew: false,
        category: "رومیزی",
        rating: 4.3
    }
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show notification
    showNotification(`${product.name} به سبد خرید اضافه شد`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Reload cart page if we're on it
    if (window.location.pathname.includes('cart.html')) {
        loadCartItems();
    }
}

function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            
            // Reload cart page if we're on it
            if (window.location.pathname.includes('cart.html')) {
                loadCartItems();
            }
        }
    }
}

// Format Price
function formatPrice(price) {
    return price.toLocaleString('fa-IR') + ' تومان';
}

// Create Product Card
function createProductCard(product) {
    return `
        <div class="product-card animate-fade-in">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-content">
                ${product.isNew ? '<span class="product-badge">جدید</span>' : ''}
                <h3 class="product-name">${product.name}</h3>
                <div class="product-features">
                    ${product.features.map(feature => 
                        `<span class="feature-badge">${feature}</span>`
                    ).join('')}
                </div>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        افزودن به سبد
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Load Featured Products (Homepage)
function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    
    const featuredProducts = products.slice(0, 4);
    container.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

// Load All Products (Products Page)
function loadAllProducts() {
    const container = document.getElementById('allProducts');
    if (!container) return;
    
    container.innerHTML = products.map(product => createProductCard(product)).join('');
    
    // Update results count
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = products.length;
    }
}

// Search Products
function searchProducts(term) {
    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.features.some(feature => feature.toLowerCase().includes(term.toLowerCase()))
    );
    
    const container = document.getElementById('allProducts');
    const resultsCount = document.getElementById('resultsCount');
    
    if (container) {
        if (filtered.length > 0) {
            container.innerHTML = filtered.map(product => createProductCard(product)).join('');
        } else {
            container.innerHTML = `
                <div class="no-results">
                    <p>محصولی با این مشخصات یافت نشد</p>
                    <button class="btn btn-primary" onclick="clearSearch()">مشاهده همه محصولات</button>
                </div>
            `;
        }
    }
    
    if (resultsCount) {
        resultsCount.textContent = filtered.length;
    }
}

// Sort Products
function sortProducts(sortBy) {
    let sorted = [...products];
    
    switch (sortBy) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
            break;
        default:
            // Keep original order
            break;
    }
    
    const container = document.getElementById('allProducts');
    if (container) {
        container.innerHTML = sorted.map(product => createProductCard(product)).join('');
    }
}

// Clear Search
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    loadAllProducts();
}

// Load Cart Items (Cart Page)
function loadCartItems() {
    const container = document.getElementById('cartItems');
    const summary = document.getElementById('cartSummary');
    
    if (!container || !summary) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <svg class="empty-cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                <h3>سبد خرید شما خالی است</h3>
                <p>برای مشاهده محصولات به صفحه محصولات بروید</p>
                <a href="products.html" class="btn btn-primary">مشاهده محصولات</a>
            </div>
        `;
        summary.innerHTML = '';
        return;
    }
    
    // Render cart items
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <div class="cart-item-features">
                    ${item.features.map(feature => 
                        `<span class="feature-badge">${feature}</span>`
                    ).join('')}
                </div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">حذف</button>
            </div>
        </div>
    `).join('');
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 5000000 ? 0 : 200000;
    const total = subtotal + shipping;
    
    // Render summary
    summary.innerHTML = `
        <h3>خلاصه سفارش</h3>
        <div class="summary-row">
            <span>جمع کل:</span>
            <span>${formatPrice(subtotal)}</span>
        </div>
        <div class="summary-row">
            <span>هزینه ارسال:</span>
            <span>${shipping === 0 ? 'رایگان' : formatPrice(shipping)}</span>
        </div>
        <div class="summary-total">
            <span>مجموع نهایی:</span>
            <span>${formatPrice(total)}</span>
        </div>
        <button class="btn btn-primary checkout-btn" onclick="checkout()">تکمیل خرید</button>
    `;
}

// Checkout Process
function checkout() {
    if (cart.length === 0) {
        showNotification('سبد خرید شما خالی است');
        return;
    }
    
    // Simulate checkout process
    showNotification('در حال پردازش سفارش...');
    
    setTimeout(() => {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showNotification('سفارش شما با موفقیت ثبت شد');
        
        // Redirect to profile page
        setTimeout(() => {
            window.location.href = 'profile.html';
        }, 1500);
    }, 2000);
}

// Load Product Detail
function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        window.location.href = 'products.html';
        return;
    }
    
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        window.location.href = 'products.html';
        return;
    }
    
    // Update page content
    const container = document.getElementById('productDetail');
    if (container) {
        container.innerHTML = `
            <div class="product-detail-content">
                <div class="product-detail-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-detail-info">
                    ${product.isNew ? '<span class="product-badge">جدید</span>' : ''}
                    <h1>${product.name}</h1>
                    <div class="product-rating">
                        <div class="stars">
                            ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                        </div>
                        <span>(${product.rating})</span>
                    </div>
                    <div class="product-price-large">${formatPrice(product.price)}</div>
                    <div class="product-features-large">
                        <h3>ویژگی‌ها:</h3>
                        ${product.features.map(feature => 
                            `<div class="feature-item">✓ ${feature}</div>`
                        ).join('')}
                    </div>
                    <div class="product-actions-large">
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">افزودن به سبد خرید</button>
                        <a href="contact.html" class="btn btn-secondary">مشاوره رایگان</a>
                    </div>
                </div>
            </div>
        `;
    }
}

// Contact Form
function submitContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    showNotification('در حال ارسال پیام...');
    
    setTimeout(() => {
        showNotification('پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.');
        event.target.reset();
    }, 2000);
}

// Newsletter Subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (email) {
        showNotification('با موفقیت در خبرنامه عضو شدید');
        event.target.reset();
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

// Show Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: '#0369a1',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        zIndex: '1000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Initialize page
function initializePage() {
    updateCartCount();
    
    const path = window.location.pathname;
    
    if (path.includes('index.html') || path === '/') {
        loadFeaturedProducts();
    } else if (path.includes('products.html')) {
        loadAllProducts();
        
        // Setup search
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchProducts(e.target.value);
            });
        }
        
        // Setup sort
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                sortProducts(e.target.value);
            });
        }
    } else if (path.includes('cart.html')) {
        loadCartItems();
    } else if (path.includes('product-detail.html')) {
        loadProductDetail();
    }
    
    // Setup contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', submitContactForm);
    }
    
    // Setup newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', subscribeNewsletter);
    }
    
    // Setup mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
}

// Auth functionality
function initializeAuth() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        const passwordToggle = document.getElementById('passwordToggle');
        const passwordInput = document.getElementById('password');
        
        // Password visibility toggle
        if (passwordToggle && passwordInput) {
            passwordToggle.addEventListener('click', function() {
                const type = passwordInput.type === 'password' ? 'text' : 'password';
                passwordInput.type = type;
                
                const icon = passwordToggle.querySelector('svg');
                if (type === 'text') {
                    icon.innerHTML = `
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L12 12m3.878-3.878L21 21m-6.122-6.122L12 12m0-8c-4.478 0-8.268 2.943-9.542 7a10.025 10.025 0 002.699 5.699M12 4c1.36 0 2.678.227 3.878.665"/>
                    `;
                } else {
                    icon.innerHTML = `
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    `;
                }
            });
        }
        
        // Login form submission
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            if (validateLoginForm(email, password)) {
                handleLogin(email, password, rememberMe);
            }
        });
    }
    
    // Register form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const passwordToggle = document.getElementById('passwordToggle');
        const confirmPasswordToggle = document.getElementById('confirmPasswordToggle');
        
        // Password visibility toggles
        if (passwordToggle && passwordInput) {
            passwordToggle.addEventListener('click', function() {
                togglePasswordVisibility(passwordInput, passwordToggle);
            });
        }
        
        if (confirmPasswordToggle && confirmPasswordInput) {
            confirmPasswordToggle.addEventListener('click', function() {
                togglePasswordVisibility(confirmPasswordInput, confirmPasswordToggle);
            });
        }
        
        // Password strength indicator
        if (passwordInput) {
            passwordInput.addEventListener('input', function() {
                updatePasswordStrength(passwordInput.value);
            });
        }
        
        // Confirm password matching
        if (confirmPasswordInput) {
            confirmPasswordInput.addEventListener('input', function() {
                validatePasswordMatch();
            });
        }
        
        // Register form submission
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                password: document.getElementById('password').value,
                confirmPassword: document.getElementById('confirmPassword').value,
                agreeTerms: document.getElementById('agreeTerms').checked,
                newsletter: document.getElementById('newsletter').checked
            };
            
            if (validateRegisterForm(formData)) {
                handleRegister(formData);
            }
        });
    }
}

function togglePasswordVisibility(input, toggle) {
    const type = input.type === 'password' ? 'text' : 'password';
    input.type = type;
    
    const icon = toggle.querySelector('svg');
    if (type === 'text') {
        icon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L12 12m3.878-3.878L21 21m-6.122-6.122L12 12m0-8c-4.478 0-8.268 2.943-9.542 7a10.025 10.025 0 002.699 5.699M12 4c1.36 0 2.678.227 3.878.665"/>
        `;
    } else {
        icon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
        `;
    }
}

function updatePasswordStrength(password) {
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');
    
    if (!strengthFill || !strengthText) return;
    
    const strength = calculatePasswordStrength(password);
    
    strengthFill.className = 'strength-fill';
    
    if (password.length === 0) {
        strengthText.textContent = 'رمز عبور خود را وارد کنید';
        return;
    }
    
    if (strength < 3) {
        strengthFill.classList.add('weak');
        strengthText.textContent = 'رمز عبور ضعیف';
    } else if (strength < 4) {
        strengthFill.classList.add('medium');
        strengthText.textContent = 'رمز عبور متوسط';
    } else {
        strengthFill.classList.add('strong');
        strengthText.textContent = 'رمز عبور قوی';
    }
}

function calculatePasswordStrength(password) {
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    
    // Character variety checks
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    return Math.min(strength, 5);
}

function validatePasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    
    if (confirmPassword && password !== confirmPassword) {
        confirmPasswordError.textContent = 'رمز عبور و تأیید آن مطابقت ندارند';
        return false;
    } else {
        confirmPasswordError.textContent = '';
        return true;
    }
}

function validateLoginForm(email, password) {
    let isValid = true;
    
    // Email validation
    const emailError = document.getElementById('emailError');
    if (!email) {
        emailError.textContent = 'ایمیل الزامی است';
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'فرمت ایمیل صحیح نیست';
        isValid = false;
    } else {
        emailError.textContent = '';
    }
    
    // Password validation
    const passwordError = document.getElementById('passwordError');
    if (!password) {
        passwordError.textContent = 'رمز عبور الزامی است';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }
    
    return isValid;
}

function validateRegisterForm(formData) {
    let isValid = true;
    
    // First name validation
    const firstNameError = document.getElementById('firstNameError');
    if (!formData.firstName.trim()) {
        firstNameError.textContent = 'نام الزامی است';
        isValid = false;
    } else {
        firstNameError.textContent = '';
    }
    
    // Last name validation
    const lastNameError = document.getElementById('lastNameError');
    if (!formData.lastName.trim()) {
        lastNameError.textContent = 'نام خانوادگی الزامی است';
        isValid = false;
    } else {
        lastNameError.textContent = '';
    }
    
    // Email validation
    const emailError = document.getElementById('emailError');
    if (!formData.email) {
        emailError.textContent = 'ایمیل الزامی است';
        isValid = false;
    } else if (!isValidEmail(formData.email)) {
        emailError.textContent = 'فرمت ایمیل صحیح نیست';
        isValid = false;
    } else {
        emailError.textContent = '';
    }
    
    // Phone validation
    const phoneError = document.getElementById('phoneError');
    if (!formData.phone) {
        phoneError.textContent = 'شماره تلفن الزامی است';
        isValid = false;
    } else if (!isValidPhone(formData.phone)) {
        phoneError.textContent = 'شماره تلفن صحیح نیست';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }
    
    // Password validation
    const passwordError = document.getElementById('passwordError');
    if (!formData.password) {
        passwordError.textContent = 'رمز عبور الزامی است';
        isValid = false;
    } else if (formData.password.length < 8) {
        passwordError.textContent = 'رمز عبور باید حداقل ۸ کاراکتر باشد';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }
    
    // Confirm password validation
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (formData.password !== formData.confirmPassword) {
        confirmPasswordError.textContent = 'رمز عبور و تأیید آن مطابقت ندارند';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }
    
    // Terms agreement validation
    if (!formData.agreeTerms) {
        alert('برای ثبت نام باید با شرایط و قوانین موافقت کنید');
        isValid = false;
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^09[0-9]{9}$/;
    return phoneRegex.test(phone);
}

function handleLogin(email, password, rememberMe) {
    const loginBtn = document.getElementById('loginBtn');
    const loginLoading = document.getElementById('loginLoading');
    
    // Show loading state
    loginBtn.classList.add('loading');
    
    // Simulate API call
    setTimeout(() => {
        // Store user data (in real app, this would come from server)
        const userData = {
            email: email,
            name: 'کاربر محترم',
            loginTime: new Date().toISOString()
        };
        
        if (rememberMe) {
            localStorage.setItem('userData', JSON.stringify(userData));
        } else {
            sessionStorage.setItem('userData', JSON.stringify(userData));
        }
        
        // Show success message
        showNotification('ورود با موفقیت انجام شد!');
        
        // Redirect to home page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }, 2000);
}

function handleRegister(formData) {
    const registerBtn = document.getElementById('registerBtn');
    
    // Show loading state
    registerBtn.classList.add('loading');
    
    // Simulate API call
    setTimeout(() => {
        // Store user data (in real app, this would come from server)
        const userData = {
            email: formData.email,
            name: `${formData.firstName} ${formData.lastName}`,
            phone: formData.phone,
            newsletter: formData.newsletter,
            registerTime: new Date().toISOString()
        };
        
        localStorage.setItem('userData', JSON.stringify(userData));
        
        // Show success message
        showNotification('ثبت نام با موفقیت انجام شد!');
        
        // Redirect to home page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }, 2000);
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    initializeAuth();
});
