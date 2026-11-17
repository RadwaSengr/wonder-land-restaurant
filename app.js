/**
 * Wonder Land Restaurant - Core Application Engine & Data Management
 * Software Engineering Implementation matching UML Modeling Specifications
 */

(function () {
    'use strict';

    // Storage Key
    const DB_KEY = 'WONDERLAND_SYSTEM_DB_V3';

    // Default Seed Data with 100% Accurate Image-to-Dish Matching
    const DEFAULT_SEED_DATA = {
        menu: [
            {
                id: 'm1',
                title: 'CLASSIC CHICKEN CAESAR SALAD',
                category: 'starters',
                price: 16.00,
                description: 'Crisp romaine hearts, tender herb-grilled chicken breast, artisan golden croutons, and aged Italian parmesan shavings with creamy Caesar dressing.',
                image: './img/food1.png',
                isAvailable: true,
                rating: 4.9
            },
            {
                id: 'm2',
                title: 'CRISPY DYNAMITE SHRIMP',
                category: 'starters',
                price: 22.00,
                description: 'Golden crispy tempura shrimp glazed in our signature sweet chili sriracha dynamite sauce, garnished with fresh spring scallions.',
                image: './img/food2.png',
                isAvailable: true,
                rating: 4.8
            },
            {
                id: 'm3',
                title: 'HERBED CHEESY GARLIC FLATBREAD',
                category: 'starters',
                price: 9.00,
                description: 'Stone-baked artisan flatbread brushed with roasted garlic butter, molten mozzarella cheese, and aromatic fresh garden basil.',
                image: './img/food9.jpeg',
                isAvailable: true,
                rating: 4.7
            },
            {
                id: 'm4',
                title: 'MEDITERRANEAN CRISPY FATTOUSH',
                category: 'starters',
                price: 12.00,
                description: 'Crisp garden cucumbers, vine-ripened cherry tomatoes, fresh mint, and parsley tossed in pomegranate sumac vinaigrette with toasted pita chips.',
                image: './img/gallery3.jpeg',
                isAvailable: true,
                rating: 4.6
            },
            {
                id: 'm5',
                title: 'RUSTIC MUSHROOM & SWEET CORN PIZZA',
                category: 'pizzas',
                price: 24.00,
                description: 'Stone-hearth pizza topped with creamy mozzarella, savory sliced portobello mushrooms, sweet golden corn, oregano, and extra virgin olive oil.',
                image: './img/food12.jpeg',
                isAvailable: true,
                rating: 4.9
            },
            {
                id: 'm6',
                title: 'AUTHENTIC NEAPOLITAN MARGHERITA',
                category: 'pizzas',
                price: 20.00,
                description: 'Traditional wood-fired pizza with charred crust, San Marzano tomato coulis, fresh mozzarella di bufala, and sweet garden basil leaves.',
                image: './img/margherita_authentic.jpg',
                isAvailable: true,
                rating: 4.9
            },
            {
                id: 'm7',
                title: 'CHARBROILED PRIME LAMB CHOPS',
                category: 'mains',
                price: 42.00,
                description: 'Succulent Australian prime lamb cutlets seared over open hardwood charcoal, served with roasted tomatoes, caramelized onion, and garlic cream dip.',
                image: './img/food4.png',
                isAvailable: true,
                rating: 5.0
            },
            {
                id: 'm8',
                title: 'CHARCOAL GRILLED SKEWERED KOFTA',
                category: 'mains',
                price: 34.00,
                description: 'Premium spiced minced beef and lamb infused with Mediterranean herbs and onions, grilled over glowing embers, served with tahini dip.',
                image: './img/food7.jpeg',
                isAvailable: true,
                rating: 4.8
            },
            {
                id: 'm9',
                title: 'EXECUTIVE GOURMET SHISH KEBAB',
                category: 'mains',
                price: 38.00,
                description: 'Marinated tender beef cubes skewered with bell peppers, zucchini, and baby mushrooms, flame-kissed and served with smoky barbecue dip.',
                image: './img/gallery1.jpeg',
                isAvailable: true,
                rating: 4.9
            },
            {
                id: 'm10',
                title: 'SIGNATURE GRILLED CHICKEN SUB & FRIES',
                category: 'mains',
                price: 18.00,
                description: 'Marinated grilled chicken breast slices, melted cheddar, crisp lettuce, and tomatoes in a toasted baguette with crispy golden french fries.',
                image: './img/gallery4.jpeg',
                isAvailable: true,
                rating: 4.8
            },
            {
                id: 'm11',
                title: 'FLUFFY BUTTERMILK BERRY PANCAKES',
                category: 'desserts',
                price: 14.00,
                description: 'Stack of golden fluffy buttermilk pancakes layered with fresh strawberries, wild blackberries, whipped vanilla cream, and 100% pure maple syrup.',
                image: './img/food8.jpeg',
                isAvailable: true,
                rating: 4.9
            },
            {
                id: 'm12',
                title: 'HONEY-GLAZED TROPICAL FRUIT BOWL',
                category: 'desserts',
                price: 13.00,
                description: 'Freshly diced sweet melons, golden pineapple, kiwi slices, and strawberries drizzled with natural blossom honey glaze and fresh garden mint.',
                image: './img/food10.jpeg',
                isAvailable: true,
                rating: 4.6
            },
            {
                id: 'm13',
                title: 'TRIO ARTISAN GELATO MILKSHAKES',
                category: 'desserts',
                price: 11.00,
                description: 'Handcrafted creamy Italian gelato milkshakes: rich dark Belgian chocolate, sweet wild strawberry, and sun-ripened peach fruit smoothie.',
                image: './img/food3.png',
                isAvailable: true,
                rating: 4.8
            }
        ],
        orders: [
            {
                id: 'WL-101',
                customerName: 'Sarah Johnson',
                phone: '+20 100 123 4567',
                address: '14 Al-Gezira St, Zamalek, Cairo',
                notes: 'Please ring bell twice and leave with security.',
                items: [
                    { id: 'm8', title: 'CHARCOAL GRILLED SKEWERED KOFTA', price: 34.00, quantity: 2, lineTotal: 68.00 },
                    { id: 'm5', title: 'RUSTIC MUSHROOM & SWEET CORN PIZZA', price: 24.00, quantity: 1, lineTotal: 24.00 }
                ],
                subtotal: 92.00,
                tax: 12.88,
                deliveryFee: 3.00,
                total: 107.88,
                paymentMethod: 'Credit / Debit Card',
                status: 'Delivered',
                createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
            },
            {
                id: 'WL-102',
                customerName: 'Omar Khaled',
                phone: '+20 111 888 9999',
                address: 'Building 45, Road 9, Maadi, Cairo',
                notes: 'Extra garlic sauce please.',
                items: [
                    { id: 'm7', title: 'CHARBROILED PRIME LAMB CHOPS', price: 42.00, quantity: 1, lineTotal: 42.00 },
                    { id: 'm11', title: 'FLUFFY BUTTERMILK BERRY PANCAKES', price: 14.00, quantity: 2, lineTotal: 28.00 }
                ],
                subtotal: 70.00,
                tax: 9.80,
                deliveryFee: 3.00,
                total: 82.80,
                paymentMethod: 'Cash on Delivery',
                status: 'In Kitchen',
                createdAt: new Date(Date.now() - 3600000 * 1).toISOString()
            },
            {
                id: 'WL-103',
                customerName: 'Elena Rostova',
                phone: '+20 122 555 4321',
                address: 'Villa 12, Compound Jasmine, New Cairo',
                notes: 'No plastic cutlery needed.',
                items: [
                    { id: 'm2', title: 'CRISPY DYNAMITE SHRIMP', price: 22.00, quantity: 2, lineTotal: 44.00 },
                    { id: 'm12', title: 'HONEY-GLAZED TROPICAL FRUIT BOWL', price: 13.00, quantity: 1, lineTotal: 13.00 }
                ],
                subtotal: 57.00,
                tax: 7.98,
                deliveryFee: 3.00,
                total: 67.98,
                paymentMethod: 'Vodafone Cash / Fawry',
                status: 'Confirmed',
                createdAt: new Date(Date.now() - 1800000).toISOString()
            },
            {
                id: 'WL-104',
                customerName: 'Tarek Mansour',
                phone: '+20 102 333 7777',
                address: '22 Al-Ahram St, Heliopolis, Cairo',
                notes: 'Hot food please.',
                items: [
                    { id: 'm5', title: 'RUSTIC MUSHROOM & SWEET CORN PIZZA', price: 24.00, quantity: 2, lineTotal: 48.00 },
                    { id: 'm3', title: 'HERBED CHEESY GARLIC FLATBREAD', price: 9.00, quantity: 1, lineTotal: 9.00 }
                ],
                subtotal: 57.00,
                tax: 7.98,
                deliveryFee: 3.00,
                total: 67.98,
                paymentMethod: 'Credit / Debit Card',
                status: 'Out for Delivery',
                createdAt: new Date(Date.now() - 2700000).toISOString()
            }
        ],
        reservations: [
            {
                id: 'RES-201',
                guestName: 'Dr. Ahmed Hassan',
                phone: '+20 100 987 6543',
                date: '2026-11-20',
                timeSlot: 'Dinner (20:00)',
                guests: 4,
                seatingZone: 'VIP Private Booth',
                specialRequests: 'Anniversary celebration. Quiet table preferred.',
                status: 'Confirmed',
                createdAt: new Date(Date.now() - 86400000).toISOString()
            },
            {
                id: 'RES-202',
                guestName: 'Nour El-Din',
                phone: '+20 114 444 2222',
                date: '2026-11-21',
                timeSlot: 'Lunch (14:00)',
                guests: 2,
                seatingZone: 'Romantic Outdoor Patio',
                specialRequests: 'Window/garden view.',
                status: 'Confirmed',
                createdAt: new Date(Date.now() - 43200000).toISOString()
            },
            {
                id: 'RES-203',
                guestName: 'Mona Youssef',
                phone: '+20 120 777 9999',
                date: '2026-11-19',
                timeSlot: 'Dinner (19:30)',
                guests: 6,
                seatingZone: 'Indoor Main Dining',
                specialRequests: 'High chair needed for child.',
                status: 'Seated',
                createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
            }
        ],
        reviews: [
            {
                id: 'rev-1',
                author: 'Youssef El-Sherif',
                rating: 5,
                comment: 'The stone-baked pizzas are honestly the best in town. The crust is blistered to perfection and the ambiance is unforgettable!',
                date: '2026-11-10'
            },
            {
                id: 'rev-2',
                author: 'Mariam Adel',
                rating: 5,
                comment: 'We booked the VIP private booth for our family dinner. The service, steak cuts, and truffle pasta were world class.',
                date: '2026-11-14'
            },
            {
                id: 'rev-3',
                author: 'Khaled Bahaa',
                rating: 5,
                comment: 'Wonder Land sets the standard for fine dining. Lightning-fast online ordering and super fresh hot food delivered home!',
                date: '2026-11-16'
            }
        ]
    };

    // Database Access Layer (DataStore Pattern)
    const DB = {
        load: function () {
            try {
                const stored = localStorage.getItem(DB_KEY);
                if (stored) {
                    return JSON.parse(stored);
                }
            } catch (e) {
                console.warn('Storage read error, using memory fallback:', e);
            }
            this.save(DEFAULT_SEED_DATA);
            return JSON.parse(JSON.stringify(DEFAULT_SEED_DATA));
        },
        save: function (data) {
            try {
                localStorage.setItem(DB_KEY, JSON.stringify(data));
                window.dispatchEvent(new Event('wonderland-db-updated'));
            } catch (e) {
                console.error('Storage write error:', e);
            }
        },
        reset: function () {
            this.save(DEFAULT_SEED_DATA);
            return JSON.parse(JSON.stringify(DEFAULT_SEED_DATA));
        }
    };

    // Active Shopping Cart in memory (persisted in session)
    let cart = [];
    try {
        const storedCart = sessionStorage.getItem('WL_CART');
        if (storedCart) cart = JSON.parse(storedCart);
    } catch (e) {}

    function saveCart() {
        try {
            sessionStorage.setItem('WL_CART', JSON.stringify(cart));
        } catch (e) {}
        updateCartBadge();
        renderCartDrawer();
    }

    // Expose Global App API
    window.WonderLandApp = {
        getDB: () => DB.load(),
        saveDB: (data) => DB.save(data),
        resetDB: () => DB.reset(),
        getCart: () => cart,

        // Cart Actions
        addToCart: function (itemId) {
            const db = DB.load();
            const item = db.menu.find(m => m.id === itemId);
            if (!item || !item.isAvailable) {
                showToast('Sorry, this dish is currently sold out!', 'warning');
                return;
            }
            const existing = cart.find(c => c.id === itemId);
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    image: item.image,
                    quantity: 1
                });
            }
            saveCart();
            showToast(`Added "${item.title}" to cart!`, 'success');
        },

        updateCartQuantity: function (itemId, delta) {
            const index = cart.findIndex(c => c.id === itemId);
            if (index !== -1) {
                cart[index].quantity += delta;
                if (cart[index].quantity <= 0) {
                    cart.splice(index, 1);
                }
                saveCart();
            }
        },

        removeFromCart: function (itemId) {
            cart = cart.filter(c => c.id !== itemId);
            saveCart();
            showToast('Item removed from cart', 'info');
        },

        clearCart: function () {
            cart = [];
            saveCart();
        },

        // Checkout Action
        placeOrder: function (customerDetails) {
            if (cart.length === 0) {
                showToast('Your cart is empty! Add dishes before checkout.', 'error');
                return null;
            }
            const db = DB.load();
            const orderId = 'WL-' + Math.floor(1000 + Math.random() * 9000);
            
            let subtotal = 0;
            const items = cart.map(c => {
                const lineTotal = c.price * c.quantity;
                subtotal += lineTotal;
                return {
                    id: c.id,
                    title: c.title,
                    price: c.price,
                    quantity: c.quantity,
                    lineTotal: lineTotal
                };
            });

            const tax = Number((subtotal * 0.14).toFixed(2));
            const deliveryFee = 3.00;
            const total = Number((subtotal + tax + deliveryFee).toFixed(2));

            const newOrder = {
                id: orderId,
                customerName: customerDetails.name,
                phone: customerDetails.phone,
                address: customerDetails.address,
                notes: customerDetails.notes || '',
                items: items,
                subtotal: subtotal,
                tax: tax,
                deliveryFee: deliveryFee,
                total: total,
                paymentMethod: customerDetails.paymentMethod,
                status: 'Pending',
                createdAt: new Date().toISOString()
            };

            db.orders.unshift(newOrder);
            DB.save(db);
            cart = [];
            saveCart();

            return newOrder;
        },

        // Order Tracking Query
        getOrderById: function (orderId) {
            const db = DB.load();
            const cleanId = orderId.trim().toUpperCase();
            return db.orders.find(o => o.id === cleanId || o.id === '#' + cleanId);
        },

        // Order Status Mutator (Admin / Cancel flow)
        updateOrderStatus: function (orderId, newStatus) {
            const db = DB.load();
            const order = db.orders.find(o => o.id === orderId);
            if (order) {
                order.status = newStatus;
                DB.save(db);
                return true;
            }
            return false;
        },

        // Table Reservation
        bookTable: function (reservationData) {
            const db = DB.load();
            const resId = 'RES-' + Math.floor(100 + Math.random() * 900);
            const newRes = {
                id: resId,
                guestName: reservationData.name,
                phone: reservationData.phone,
                date: reservationData.date,
                timeSlot: reservationData.timeSlot,
                guests: parseInt(reservationData.guests, 10) || 2,
                seatingZone: reservationData.seatingZone || 'Indoor Main Dining',
                specialRequests: reservationData.notes || '',
                status: 'Confirmed',
                createdAt: new Date().toISOString()
            };

            db.reservations.unshift(newRes);
            DB.save(db);
            return newRes;
        },

        // Review Submission
        addReview: function (author, rating, comment) {
            const db = DB.load();
            const newRev = {
                id: 'rev-' + Date.now(),
                author: author,
                rating: rating,
                comment: comment,
                date: new Date().toISOString().split('T')[0]
            };
            db.reviews.unshift(newRev);
            DB.save(db);
            return newRev;
        }
    };

    // UI Renderers & Dom Event Wiring
    function updateCartBadge() {
        const badges = document.querySelectorAll('.cart-badge');
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        badges.forEach(b => {
            b.textContent = count;
            b.style.display = count > 0 ? 'inline-flex' : 'none';
        });
    }

    function renderCartDrawer() {
        const cartItemsContainer = document.getElementById('cartDrawerItems');
        const subtotalEl = document.getElementById('cartSubtotal');
        const taxEl = document.getElementById('cartTax');
        const deliveryEl = document.getElementById('cartDelivery');
        const totalEl = document.getElementById('cartTotal');
        const checkoutBtn = document.getElementById('cartCheckoutBtn');

        if (!cartItemsContainer) return;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart-state">
                    <i class="fa-solid fa-utensils"></i>
                    <p>Your culinary cart is empty.</p>
                    <a href="#menu" class="btn btn-secondary" onclick="document.getElementById('cartDrawer').classList.remove('active')">Explore Menu</a>
                </div>
            `;
            if (subtotalEl) subtotalEl.textContent = '$0.00';
            if (taxEl) taxEl.textContent = '$0.00';
            if (deliveryEl) deliveryEl.textContent = '$0.00';
            if (totalEl) totalEl.textContent = '$0.00';
            if (checkoutBtn) checkoutBtn.disabled = true;
            return;
        }

        let subtotal = 0;
        let html = '';
        cart.forEach(item => {
            const line = item.price * item.quantity;
            subtotal += line;
            html += `
                <div class="cart-item-row" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
                    <div class="cart-item-info">
                        <h4>${item.title}</h4>
                        <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                        <div class="cart-item-controls">
                            <button type="button" class="btn-qty" onclick="WonderLandApp.updateCartQuantity('${item.id}', -1)">-</button>
                            <span class="qty-count">${item.quantity}</span>
                            <button type="button" class="btn-qty" onclick="WonderLandApp.updateCartQuantity('${item.id}', 1)">+</button>
                            <button type="button" class="btn-remove-item" onclick="WonderLandApp.removeFromCart('${item.id}')" title="Remove item">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                    <div class="cart-item-subtotal">$${line.toFixed(2)}</div>
                </div>
            `;
        });

        cartItemsContainer.innerHTML = html;
        const tax = subtotal * 0.14;
        const delivery = 3.00;
        const total = subtotal + tax + delivery;

        if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
        if (deliveryEl) deliveryEl.textContent = `$${delivery.toFixed(2)}`;
        if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
        if (checkoutBtn) checkoutBtn.disabled = false;
    }

    function renderDynamicMenu(filterCategory = 'all', searchQuery = '') {
        const container = document.getElementById('dynamicMenuItemsContainer');
        if (!container) return;

        const db = DB.load();
        const query = searchQuery.trim().toLowerCase();

        const filtered = db.menu.filter(item => {
            const matchesCat = filterCategory === 'all' || item.category === filterCategory;
            const matchesSearch = !query || 
                item.title.toLowerCase().includes(query) || 
                item.description.toLowerCase().includes(query);
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="no-menu-results">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <p>No culinary dishes found matching "<strong>${searchQuery}</strong>".</p>
                    <button class="btn btn-secondary" onclick="document.getElementById('menuSearchInput').value=''; WonderLandApp.renderMenu('all', '');">View All Dishes</button>
                </div>
            `;
            return;
        }

        let html = '<div class="menu-items-grid">';
        filtered.forEach(item => {
            const isSoldOut = !item.isAvailable;
            html += `
                <div class="menu-dish-card ${isSoldOut ? 'sold-out' : ''}" data-id="${item.id}">
                    <div class="dish-card-img-wrap">
                        <img src="${item.image}" alt="${item.title}" loading="lazy">
                        <span class="dish-card-category">${item.category.toUpperCase()}</span>
                        ${isSoldOut ? '<span class="dish-badge-soldout">SOLD OUT</span>' : ''}
                    </div>
                    <div class="dish-card-content">
                        <div class="dish-card-header">
                            <h3>${item.title}</h3>
                            <span class="dish-price">$${item.price.toFixed(2)}</span>
                        </div>
                        <p class="dish-desc">${item.description}</p>
                        <div class="dish-card-footer">
                            <div class="dish-rating">
                                <i class="fa-solid fa-star"></i>
                                <span>${item.rating || 4.8}</span>
                            </div>
                            <button type="button" class="btn btn-add-cart ${isSoldOut ? 'disabled' : ''}" 
                                onclick="WonderLandApp.addToCart('${item.id}')" ${isSoldOut ? 'disabled' : ''}>
                                <i class="fa-solid fa-cart-plus"></i> ${isSoldOut ? 'Unavailable' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        html += '</div>';

        container.innerHTML = html;
    }

    // Live Order Tracking UI Render
    function renderOrderTracker(order) {
        const detailsContainer = document.getElementById('trackerResultContainer');
        if (!detailsContainer) return;

        if (!order) {
            detailsContainer.innerHTML = `
                <div class="tracker-empty-state error">
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <h3>Order Not Found</h3>
                    <p>No active order found with this Order ID. Please check your confirmation receipt.</p>
                </div>
            `;
            detailsContainer.style.display = 'block';
            return;
        }

        const stages = ['Pending', 'Confirmed', 'In Kitchen', 'Out for Delivery', 'Delivered'];
        const isCancelled = order.status === 'Cancelled';
        const currentIndex = stages.indexOf(order.status);

        let stepperHtml = '<div class="order-stepper-track">';
        stages.forEach((st, idx) => {
            let stateClass = '';
            if (isCancelled) {
                stateClass = 'cancelled';
            } else if (idx < currentIndex) {
                stateClass = 'completed';
            } else if (idx === currentIndex) {
                stateClass = 'current';
            }

            let icon = 'fa-check';
            if (st === 'Pending') icon = 'fa-file-invoice';
            if (st === 'Confirmed') icon = 'fa-thumbs-up';
            if (st === 'In Kitchen') icon = 'fa-kitchen-set';
            if (st === 'Out for Delivery') icon = 'fa-motorcycle';
            if (st === 'Delivered') icon = 'fa-box-open';

            stepperHtml += `
                <div class="step-node ${stateClass}">
                    <div class="step-circle"><i class="fa-solid ${icon}"></i></div>
                    <div class="step-label">${st}</div>
                </div>
            `;
            if (idx < stages.length - 1) {
                const lineClass = (!isCancelled && idx < currentIndex) ? 'active' : '';
                stepperHtml += `<div class="step-connector ${lineClass}"></div>`;
            }
        });
        stepperHtml += '</div>';

        let itemsHtml = order.items.map(it => `
            <div class="tracker-item-row">
                <span>${it.quantity}x ${it.title}</span>
                <strong>$${it.lineTotal.toFixed(2)}</strong>
            </div>
        `).join('');

        const canCancel = (order.status === 'Pending' || order.status === 'Confirmed') && !isCancelled;

        detailsContainer.innerHTML = `
            <div class="tracker-card">
                <div class="tracker-header">
                    <div>
                        <span class="tracker-order-id">#${order.id}</span>
                        <div class="tracker-order-date">Placed: ${new Date(order.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', month: 'short', day: 'numeric'})}</div>
                    </div>
                    <span class="status-pill status-${order.status.toLowerCase().replace(/\\s+/g, '-')}">
                        ${isCancelled ? '<i class="fa-solid fa-ban"></i> Cancelled' : order.status}
                    </span>
                </div>

                ${stepperHtml}

                <div class="tracker-info-grid">
                    <div>
                        <h4><i class="fa-solid fa-location-dot"></i> Delivery Address</h4>
                        <p>${order.customerName}<br>${order.phone}<br>${order.address}</p>
                    </div>
                    <div>
                        <h4><i class="fa-solid fa-wallet"></i> Payment &amp; Total</h4>
                        <p>Method: <strong>${order.paymentMethod}</strong><br>Status: <strong>${order.paymentMethod === 'Cash on Delivery' ? 'Pay upon receipt' : 'Paid Online'}</strong><br>Grand Total: <strong class="highlight-price">$${order.total.toFixed(2)}</strong></p>
                    </div>
                </div>

                <div class="tracker-items-summary">
                    <h4>Ordered Items (${order.items.length})</h4>
                    ${itemsHtml}
                    <div class="tracker-total-bar">
                        <span>Grand Total (Inc. 14% VAT + $3 Delivery):</span>
                        <strong>$${order.total.toFixed(2)}</strong>
                    </div>
                </div>

                ${canCancel ? `
                    <div class="tracker-actions">
                        <button type="button" class="btn btn-danger-outline" onclick="WonderLandApp.handleCustomerCancel('${order.id}')">
                            <i class="fa-solid fa-xmark"></i> Cancel This Order
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
        detailsContainer.style.display = 'block';
    }

    // Cancel order handler
    window.WonderLandApp.handleCustomerCancel = function (orderId) {
        if (confirm(`Are you sure you want to cancel order #${orderId}?`)) {
            WonderLandApp.updateOrderStatus(orderId, 'Cancelled');
            showToast(`Order #${orderId} has been cancelled.`, 'info');
            const updated = WonderLandApp.getOrderById(orderId);
            renderOrderTracker(updated);
        }
    };

    // Review renderer
    function renderReviews() {
        const container = document.getElementById('dynamicTestimonialsContainer');
        if (!container) return;
        const db = DB.load();
        let html = '';
        db.reviews.forEach(r => {
            let stars = '';
            for (let i = 0; i < 5; i++) {
                stars += `<i class="fa-solid fa-star ${i < r.rating ? 'active' : ''}"></i>`;
            }
            html += `
                <div class="testimonial-card">
                    <div class="stars">${stars}</div>
                    <p class="review-comment">"${r.comment}"</p>
                    <div class="reviewer-meta">
                        <div class="avatar"><i class="fa-solid fa-user"></i></div>
                        <div>
                            <h4>${r.author}</h4>
                            <span class="review-date">${r.date} • Verified Guest</span>
                        </div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    }

    // Toast notification utility
    function showToast(message, type = 'info') {
        let toastContainer = document.getElementById('wlToastContainer');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.id = 'wlToastContainer';
            toastContainer.className = 'wl-toast-container';
            document.body.appendChild(toastContainer);
        }

        const toast = document.createElement('div');
        toast.className = `wl-toast wl-toast-${type}`;
        
        let icon = 'fa-circle-info';
        if (type === 'success') icon = 'fa-circle-check';
        if (type === 'warning') icon = 'fa-triangle-exclamation';
        if (type === 'error') icon = 'fa-circle-exclamation';

        toast.innerHTML = `
            <i class="fa-solid ${icon}"></i>
            <span>${message}</span>
            <button type="button" class="toast-close" onclick="this.parentElement.remove()">&times;</button>
        `;

        toastContainer.appendChild(toast);
        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    }

    // Expose renderers to global scope
    window.WonderLandApp.renderMenu = renderDynamicMenu;
    window.WonderLandApp.renderCart = renderCartDrawer;
    window.WonderLandApp.renderReviews = renderReviews;
    window.WonderLandApp.showToast = showToast;
    window.WonderLandApp.renderTracker = renderOrderTracker;

    // Initialize application on DOM ready
    document.addEventListener('DOMContentLoaded', function () {
        // Initial render
        updateCartBadge();
        renderCartDrawer();
        renderDynamicMenu('all', '');
        renderReviews();

        // Menu category filter buttons
        const categoryButtons = document.querySelectorAll('.menu-category-btn');
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                categoryButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const cat = this.getAttribute('data-category');
                const searchVal = document.getElementById('menuSearchInput')?.value || '';
                renderDynamicMenu(cat, searchVal);
            });
        });

        // Search input live filter
        const searchInput = document.getElementById('menuSearchInput');
        if (searchInput) {
            searchInput.addEventListener('input', function () {
                const activeCatBtn = document.querySelector('.menu-category-btn.active');
                const cat = activeCatBtn ? activeCatBtn.getAttribute('data-category') : 'all';
                renderDynamicMenu(cat, this.value);
            });
        }

        // Cart Drawer Toggles
        const openCartBtns = document.querySelectorAll('.open-cart-btn');
        const closeCartBtn = document.getElementById('closeCartDrawer');
        const cartDrawer = document.getElementById('cartDrawer');
        const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');

        function openCart() {
            if (cartDrawer) cartDrawer.classList.add('active');
            if (cartDrawerOverlay) cartDrawerOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            renderCartDrawer();
        }

        function closeCart() {
            if (cartDrawer) cartDrawer.classList.remove('active');
            if (cartDrawerOverlay) cartDrawerOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        openCartBtns.forEach(b => b.addEventListener('click', openCart));
        if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
        if (cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', closeCart);

        // Checkout Modal Wiring
        const checkoutModal = document.getElementById('checkoutModal');
        const closeCheckoutModal = document.getElementById('closeCheckoutModal');
        const checkoutForm = document.getElementById('checkoutForm');
        const openCheckoutBtn = document.getElementById('cartCheckoutBtn');

        if (openCheckoutBtn) {
            openCheckoutBtn.addEventListener('click', () => {
                closeCart();
                if (checkoutModal) {
                    checkoutModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    // Populate summary in modal
                    const orderSummaryEl = document.getElementById('checkoutModalSummary');
                    if (orderSummaryEl) {
                        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 1.14 + 3.00;
                        orderSummaryEl.innerHTML = `
                            <p>Items in cart: <strong>${cart.reduce((s, i) => s + i.quantity, 0)} items</strong></p>
                            <p>Payable Total: <strong class="highlight-price">$${total.toFixed(2)}</strong></p>
                        `;
                    }
                }
            });
        }

        if (closeCheckoutModal) {
            closeCheckoutModal.addEventListener('click', () => {
                checkoutModal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        if (checkoutForm) {
            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const payMethodRadio = document.querySelector('input[name="paymentMethod"]:checked');
                const customerDetails = {
                    name: document.getElementById('custName').value.trim(),
                    phone: document.getElementById('custPhone').value.trim(),
                    address: document.getElementById('custAddress').value.trim(),
                    notes: document.getElementById('custNotes')?.value.trim() || '',
                    paymentMethod: payMethodRadio ? payMethodRadio.value : 'Cash on Delivery'
                };

                const newOrder = WonderLandApp.placeOrder(customerDetails);
                if (newOrder) {
                    checkoutModal.classList.remove('active');
                    checkoutForm.reset();
                    showToast(`Order #${newOrder.id} placed successfully!`, 'success');
                    
                    // Show confirmation modal with direct tracking
                    const receiptModal = document.getElementById('orderReceiptModal');
                    const receiptContent = document.getElementById('receiptModalContent');
                    if (receiptModal && receiptContent) {
                        receiptContent.innerHTML = `
                            <div class="receipt-success-badge"><i class="fa-solid fa-circle-check"></i></div>
                            <h2>Order Confirmed!</h2>
                            <p>Thank you for choosing Wonder Land Restaurant.</p>
                            <div class="receipt-id-box">Order ID: <strong>#${newOrder.id}</strong></div>
                            <p>Total Charged: <strong>$${newOrder.total.toFixed(2)}</strong> via <strong>${newOrder.paymentMethod}</strong></p>
                            <div class="receipt-actions">
                                <button type="button" class="btn btn-primary" onclick="WonderLandApp.openTrackerWithId('${newOrder.id}')">
                                    <i class="fa-solid fa-location-crosshairs"></i> Track Live Order
                                </button>
                                <button type="button" class="btn btn-secondary" onclick="document.getElementById('orderReceiptModal').classList.remove('active'); document.body.style.overflow='';">
                                    Continue Browsing
                                </button>
                            </div>
                        `;
                        receiptModal.classList.add('active');
                    }
                }
            });
        }

        // Live Order Tracker Modal Wiring
        const trackerModal = document.getElementById('trackerModal');
        const closeTrackerModal = document.getElementById('closeTrackerModal');
        const openTrackerBtns = document.querySelectorAll('.open-tracker-btn');
        const trackerSearchForm = document.getElementById('trackerSearchForm');

        function openTracker(defaultId = '') {
            if (trackerModal) {
                trackerModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                if (defaultId) {
                    document.getElementById('trackerOrderIdInput').value = defaultId;
                    const order = WonderLandApp.getOrderById(defaultId);
                    renderOrderTracker(order);
                }
            }
        }

        window.WonderLandApp.openTrackerWithId = function (orderId) {
            const receiptModal = document.getElementById('orderReceiptModal');
            if (receiptModal) receiptModal.classList.remove('active');
            openTracker(orderId);
        };

        openTrackerBtns.forEach(b => b.addEventListener('click', () => openTracker()));
        if (closeTrackerModal) {
            closeTrackerModal.addEventListener('click', () => {
                trackerModal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        if (trackerSearchForm) {
            trackerSearchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const idInput = document.getElementById('trackerOrderIdInput').value;
                const order = WonderLandApp.getOrderById(idInput);
                renderOrderTracker(order);
            });
        }

        // Reservation Form Submission Override
        const reservationForm = document.getElementById('modalReserveForm');
        if (reservationForm) {
            reservationForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const resData = {
                    name: document.getElementById('resName').value.trim(),
                    phone: document.getElementById('resPhone').value.trim(),
                    date: document.getElementById('resDate').value,
                    timeSlot: document.getElementById('resTime').value,
                    guests: document.getElementById('resGuests').value,
                    seatingZone: document.getElementById('resZone')?.value || 'Indoor Main Dining',
                    notes: document.getElementById('resNotes')?.value.trim() || ''
                };

                const res = WonderLandApp.bookTable(resData);
                reservationForm.reset();
                const modal = document.getElementById('reserveModal');
                if (modal) modal.classList.remove('active');
                document.body.style.overflow = '';
                
                showToast(`Table reserved! Booking ID: #${res.id} for ${res.guests} guests on ${res.date}.`, 'success');
            });
        }

        // Review Form Submission Wiring
        const reviewForm = document.getElementById('submitReviewForm');
        if (reviewForm) {
            reviewForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const author = document.getElementById('reviewerName').value.trim();
                const rating = parseInt(document.getElementById('reviewerRating').value, 10);
                const comment = document.getElementById('reviewerComment').value.trim();

                WonderLandApp.addReview(author, rating, comment);
                renderReviews();
                reviewForm.reset();
                showToast('Thank you! Your verified review has been published.', 'success');
            });
        }

        // Cross-tab Synchronization
        window.addEventListener('storage', (e) => {
            if (e.key === DB_KEY) {
                renderDynamicMenu();
                renderReviews();
                const activeId = document.getElementById('trackerOrderIdInput')?.value;
                if (activeId) {
                    const order = WonderLandApp.getOrderById(activeId);
                    if (order) renderOrderTracker(order);
                }
            }
        });
    });

})();
