/**
 * Wonder Land Restaurant - Admin & Staff Management Portal Logic
 * Implements administrative controls, order status management, and menu CRUD
 */

(function () {
    'use strict';

    const AUTH_SESSION_KEY = 'WL_ADMIN_AUTHENTICATED';
    const VALID_PIN = 'admin123';

    // DOM Elements
    const loginGate = document.getElementById('loginGate');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const adminPinInput = document.getElementById('adminPinInput');
    const btnLogout = document.getElementById('btnLogout');
    const btnSeedData = document.getElementById('btnSeedData');

    // Authentication Checks
    function checkAuth() {
        const isAuth = sessionStorage.getItem(AUTH_SESSION_KEY) === 'true';
        if (loginGate) {
            loginGate.style.display = isAuth ? 'none' : 'flex';
        }
        if (isAuth) {
            refreshDashboard();
        }
    }

    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const pin = adminPinInput.value.trim();
            if (pin === VALID_PIN) {
                sessionStorage.setItem(AUTH_SESSION_KEY, 'true');
                loginGate.style.display = 'none';
                adminPinInput.value = '';
                refreshDashboard();
            } else {
                alert('Invalid PIN code! (Hint: use "admin123")');
                adminPinInput.value = '';
                adminPinInput.focus();
            }
        });
    }

    if (btnLogout) {
        btnLogout.addEventListener('click', function () {
            sessionStorage.removeItem(AUTH_SESSION_KEY);
            checkAuth();
        });
    }

    if (btnSeedData) {
        btnSeedData.addEventListener('click', function () {
            if (confirm('Reset entire system database to default demonstration seed data?')) {
                WonderLandApp.resetDB();
                refreshDashboard();
                alert('Database successfully restored to default demonstration state!');
            }
        });
    }

    // Tab Navigation Logic
    window.switchTab = function (tabId) {
        document.querySelectorAll('.admin-tab-section').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));

        const targetSection = document.getElementById(tabId);
        if (targetSection) targetSection.classList.add('active');

        const activeLink = document.querySelector(`.tab-link[data-tab="${tabId}"]`);
        if (activeLink) activeLink.classList.add('active');

        const titleMap = {
            tabOverview: 'Executive Operational Dashboard',
            tabOrders: 'Live Orders Management & Dispatch',
            tabMenu: 'Culinary Menu Catalog (CRUD)',
            tabReservations: 'Table Seating & Guest Reservations'
        };
        const titleEl = document.getElementById('pageSectionTitle');
        if (titleEl && titleMap[tabId]) titleEl.textContent = titleMap[tabId];
    };

    document.querySelectorAll('.tab-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Dashboard Data Refresh
    function refreshDashboard() {
        const db = WonderLandApp.getDB();
        renderKPIs(db);
        renderOverviewRecentOrders(db);
        renderAllOrders(db);
        renderMenuCatalog(db);
        renderReservations(db);
    }

    // 1. Render KPIs
    function renderKPIs(db) {
        const totalRevenue = db.orders
            .filter(o => o.status !== 'Cancelled')
            .reduce((sum, o) => sum + o.total, 0);

        const totalOrders = db.orders.length;
        const kitchenQueue = db.orders.filter(o => o.status === 'In Kitchen' || o.status === 'Confirmed' || o.status === 'Pending').length;
        const totalTables = db.reservations.length;

        document.getElementById('kpiRevenue').textContent = `$${totalRevenue.toFixed(2)}`;
        document.getElementById('kpiOrders').textContent = totalOrders;
        document.getElementById('kpiKitchen').textContent = kitchenQueue;
        document.getElementById('kpiTables').textContent = totalTables;

        const badge = document.getElementById('sidebarOrderBadge');
        if (badge) badge.textContent = kitchenQueue;
    }

    // 2. Render Overview Table
    function renderOverviewRecentOrders(db) {
        const tbody = document.getElementById('overviewRecentOrdersTable');
        if (!tbody) return;

        const recent = db.orders.slice(0, 5);
        if (recent.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:20px; color:#94a3b8;">No orders recorded yet.</td></tr>';
            return;
        }

        tbody.innerHTML = recent.map(o => `
            <tr>
                <td><strong>#${o.id}</strong></td>
                <td>
                    <div style="font-weight:600;">${o.customerName}</div>
                    <div style="font-size:11.5px; color:#64748b;">${o.phone}</div>
                </td>
                <td>${o.items.reduce((s, i) => s + i.quantity, 0)} items</td>
                <td><strong style="color:#0f172a;">$${o.total.toFixed(2)}</strong></td>
                <td><span style="font-size:12px; color:#475569;">${o.paymentMethod}</span></td>
                <td><span class="status-pill status-${o.status.toLowerCase().replace(/\\s+/g, '-')}">${o.status}</span></td>
                <td>
                    <select class="status-select-inline" onchange="handleOrderStatusChange('${o.id}', this.value)">
                        <option value="Pending" ${o.status === 'Pending' ? 'selected' : ''}>Pending</option>
                        <option value="Confirmed" ${o.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                        <option value="In Kitchen" ${o.status === 'In Kitchen' ? 'selected' : ''}>In Kitchen</option>
                        <option value="Out for Delivery" ${o.status === 'Out for Delivery' ? 'selected' : ''}>Out for Delivery</option>
                        <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                        <option value="Cancelled" ${o.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                    </select>
                </td>
            </tr>
        `).join('');
    }

    // 3. Render Orders Management
    function renderAllOrders(db) {
        const tbody = document.getElementById('allOrdersTableBody');
        if (!tbody) return;

        const filter = document.getElementById('orderFilterStatus')?.value || 'ALL';
        let filtered = db.orders;
        if (filter !== 'ALL') {
            filtered = db.orders.filter(o => o.status === filter);
        }

        if (filtered.length === 0) {
            tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:30px; color:#94a3b8;">No orders matching filter "${filter}".</td></tr>`;
            return;
        }

        tbody.innerHTML = filtered.map(o => {
            const timeStr = new Date(o.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', month: 'short', day: 'numeric' });
            const itemsBrief = o.items.map(it => `${it.quantity}x ${it.title}`).join(', ');

            return `
                <tr>
                    <td><strong style="color:#0369a1;">#${o.id}</strong></td>
                    <td style="font-size:12px; color:#64748b;">${timeStr}</td>
                    <td>
                        <div style="font-weight:600;">${o.customerName}</div>
                        <div style="font-size:11.5px; color:#64748b;">${o.phone}</div>
                    </td>
                    <td style="max-width: 200px; font-size:12px; color:#475569;">
                        ${o.address}
                        ${o.notes ? `<div style="font-style:italic; color:#b45309;">Note: ${o.notes}</div>` : ''}
                    </td>
                    <td style="max-width: 220px; font-size:12px; color:#334155;">${itemsBrief}</td>
                    <td>
                        <div><strong style="color:#15803d;">$${o.total.toFixed(2)}</strong></div>
                        <div style="font-size:11px; color:#64748b;">${o.paymentMethod}</div>
                    </td>
                    <td>
                        <select class="status-select-inline" onchange="handleOrderStatusChange('${o.id}', this.value)">
                            <option value="Pending" ${o.status === 'Pending' ? 'selected' : ''}>Pending</option>
                            <option value="Confirmed" ${o.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                            <option value="In Kitchen" ${o.status === 'In Kitchen' ? 'selected' : ''}>In Kitchen</option>
                            <option value="Out for Delivery" ${o.status === 'Out for Delivery' ? 'selected' : ''}>Out for Delivery</option>
                            <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                            <option value="Cancelled" ${o.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                        </select>
                    </td>
                    <td>
                        <button type="button" class="btn-admin btn-admin-secondary" style="padding:4px 8px; font-size:12px;" onclick="viewOrderReceipt('${o.id}')">
                            <i class="fa-solid fa-file-invoice"></i> Audit
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    // Status Mutator Handler
    window.handleOrderStatusChange = function (orderId, newStatus) {
        WonderLandApp.updateOrderStatus(orderId, newStatus);
        refreshDashboard();
    };

    // View Order Receipt in Admin Modal
    window.viewOrderReceipt = function (orderId) {
        const order = WonderLandApp.getOrderById(orderId);
        if (!order) return;

        const body = document.getElementById('adminReceiptBody');
        const itemsRows = order.items.map(it => `
            <div style="display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px dashed #e2e8f0; font-size:13px;">
                <span>${it.quantity}x ${it.title}</span>
                <span>$${it.lineTotal.toFixed(2)}</span>
            </div>
        `).join('');

        body.innerHTML = `
            <div style="text-align:center; margin-bottom:18px;">
                <h2 style="font-size:20px; color:#0f172a;">WONDER LAND RESTAURANT</h2>
                <div style="font-size:12px; color:#64748b;">Official Guest Dining Receipt</div>
                <div style="font-size:14px; font-weight:bold; margin-top:6px; color:#0369a1;">Order: #${order.id}</div>
                <div style="font-size:11px; color:#94a3b8;">${new Date(order.createdAt).toLocaleString()}</div>
            </div>

            <div style="background:#f8fafc; padding:12px; border-radius:8px; margin-bottom:16px; font-size:12.5px;">
                <div><strong>Customer:</strong> ${order.customerName}</div>
                <div><strong>Phone:</strong> ${order.phone}</div>
                <div><strong>Address:</strong> ${order.address}</div>
                <div><strong>Payment:</strong> ${order.paymentMethod}</div>
                <div><strong>Status:</strong> <span class="status-pill status-${order.status.toLowerCase().replace(/\\s+/g, '-')}">${order.status}</span></div>
            </div>

            <div style="margin-bottom:16px;">
                <h4 style="font-size:12px; text-transform:uppercase; color:#64748b; margin-bottom:8px;">Order Line Items</h4>
                ${itemsRows}
            </div>

            <div style="padding-top:10px; font-size:13px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                    <span>Subtotal:</span>
                    <span>$${order.subtotal.toFixed(2)}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                    <span>VAT (14%):</span>
                    <span>$${order.tax.toFixed(2)}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                    <span>Delivery Service:</span>
                    <span>$${order.deliveryFee.toFixed(2)}</span>
                </div>
                <div style="display:flex; justify-content:space-between; font-size:16px; font-weight:bold; border-top:2px solid #0f172a; padding-top:6px; color:#0f172a;">
                    <span>Total Amount:</span>
                    <span style="color:#15803d;">$${order.total.toFixed(2)}</span>
                </div>
            </div>
        `;

        document.getElementById('adminReceiptModal').classList.add('active');
    };

    // Filter Change Event
    const orderFilter = document.getElementById('orderFilterStatus');
    if (orderFilter) {
        orderFilter.addEventListener('change', () => {
            renderAllOrders(WonderLandApp.getDB());
        });
    }

    // 4. Render Menu Catalog (CRUD)
    function renderMenuCatalog(db) {
        const tbody = document.getElementById('menuCatalogTableBody');
        if (!tbody) return;

        tbody.innerHTML = db.menu.map(item => `
            <tr>
                <td><img src="${item.image}" alt="${item.title}" class="dish-thumb"></td>
                <td>
                    <div style="font-weight:700; color:#0f172a;">${item.title}</div>
                    <div style="font-size:11px; color:#d97706;"><i class="fa-solid fa-star"></i> ${item.rating || 4.8} / 5.0</div>
                </td>
                <td><span style="text-transform:uppercase; font-size:11.5px; font-weight:600; background:#f1f5f9; padding:3px 8px; border-radius:4px; color:#475569;">${item.category}</span></td>
                <td><strong style="color:#0f172a;">$${item.price.toFixed(2)}</strong></td>
                <td style="max-width:240px; font-size:12px; color:#64748b;">${item.description}</td>
                <td>
                    <button type="button" class="btn-admin ${item.isAvailable ? 'btn-admin-secondary' : 'btn-admin-danger'}" style="font-size:11px; padding:4px 10px;" onclick="toggleDishAvailability('${item.id}')">
                        <i class="fa-solid ${item.isAvailable ? 'fa-circle-check' : 'fa-circle-xmark'}"></i> ${item.isAvailable ? 'Available' : 'Sold Out'}
                    </button>
                </td>
                <td>
                    <div style="display:flex; gap:6px;">
                        <button type="button" class="btn-admin btn-admin-secondary" style="padding:6px 10px;" onclick="openEditDishModal('${item.id}')" title="Edit Dish">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button type="button" class="btn-admin btn-admin-danger" style="padding:6px 10px;" onclick="deleteDish('${item.id}')" title="Delete Dish">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    // Toggle Dish Availability
    window.toggleDishAvailability = function (dishId) {
        const db = WonderLandApp.getDB();
        const item = db.menu.find(m => m.id === dishId);
        if (item) {
            item.isAvailable = !item.isAvailable;
            WonderLandApp.saveDB(db);
            refreshDashboard();
        }
    };

    // Delete Dish
    window.deleteDish = function (dishId) {
        if (confirm('Are you sure you want to delete this dish from the menu catalog?')) {
            const db = WonderLandApp.getDB();
            db.menu = db.menu.filter(m => m.id !== dishId);
            WonderLandApp.saveDB(db);
            refreshDashboard();
        }
    };

    // Dish Modal Controls (Add / Edit)
    const dishModal = document.getElementById('dishModal');
    const dishForm = document.getElementById('dishForm');
    const dishModalTitle = document.getElementById('dishModalTitle');
    const btnOpenAddDishModal = document.getElementById('btnOpenAddDishModal');
    const closeDishModal = document.getElementById('closeDishModal');
    const cancelDishModal = document.getElementById('cancelDishModal');

    function openDishModal(isEdit = false, item = null) {
        dishForm.reset();
        if (isEdit && item) {
            dishModalTitle.textContent = 'Edit Culinary Dish';
            document.getElementById('dishFormId').value = item.id;
            document.getElementById('dishTitle').value = item.title;
            document.getElementById('dishCategory').value = item.category;
            document.getElementById('dishPrice').value = item.price;
            document.getElementById('dishImage').value = item.image;
            document.getElementById('dishDescription').value = item.description;
            document.getElementById('dishAvailability').value = item.isAvailable ? 'true' : 'false';
        } else {
            dishModalTitle.textContent = 'Create Culinary Menu Item';
            document.getElementById('dishFormId').value = '';
            document.getElementById('dishImage').value = './img/food1.png';
        }
        dishModal.classList.add('active');
    }

    if (btnOpenAddDishModal) {
        btnOpenAddDishModal.addEventListener('click', () => openDishModal(false));
    }

    window.openEditDishModal = function (dishId) {
        const db = WonderLandApp.getDB();
        const item = db.menu.find(m => m.id === dishId);
        if (item) openDishModal(true, item);
    };

    function hideDishModal() {
        dishModal.classList.remove('active');
    }

    if (closeDishModal) closeDishModal.addEventListener('click', hideDishModal);
    if (cancelDishModal) cancelDishModal.addEventListener('click', hideDishModal);

    if (dishForm) {
        dishForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const db = WonderLandApp.getDB();
            const dishId = document.getElementById('dishFormId').value;
            const title = document.getElementById('dishTitle').value.trim();
            const category = document.getElementById('dishCategory').value;
            const price = parseFloat(document.getElementById('dishPrice').value);
            const image = document.getElementById('dishImage').value.trim();
            const description = document.getElementById('dishDescription').value.trim();
            const isAvailable = document.getElementById('dishAvailability').value === 'true';

            if (dishId) {
                // Update
                const item = db.menu.find(m => m.id === dishId);
                if (item) {
                    item.title = title;
                    item.category = category;
                    item.price = price;
                    item.image = image;
                    item.description = description;
                    item.isAvailable = isAvailable;
                }
            } else {
                // Create
                const newId = 'm-' + Date.now();
                db.menu.unshift({
                    id: newId,
                    title: title,
                    category: category,
                    price: price,
                    image: image,
                    description: description,
                    isAvailable: isAvailable,
                    rating: 5.0
                });
            }

            WonderLandApp.saveDB(db);
            hideDishModal();
            refreshDashboard();
        });
    }

    // 5. Render Reservations
    function renderReservations(db) {
        const tbody = document.getElementById('reservationsTableBody');
        if (!tbody) return;

        tbody.innerHTML = db.reservations.map(r => `
            <tr>
                <td><strong style="color:#7c3aed;">#${r.id}</strong></td>
                <td><strong>${r.guestName}</strong></td>
                <td style="font-size:12px; color:#64748b;">${r.phone}</td>
                <td>
                    <div><strong>${r.date}</strong></div>
                    <div style="font-size:11.5px; color:#64748b;">${r.timeSlot}</div>
                </td>
                <td><i class="fa-solid fa-users"></i> ${r.guests} guests</td>
                <td><span style="font-size:12px; font-weight:600; color:#0f172a;">${r.seatingZone}</span></td>
                <td style="font-size:12px; color:#475569; max-width:180px;">${r.specialRequests || 'None'}</td>
                <td><span class="status-pill status-${r.status.toLowerCase().replace(/\\s+/g, '-')}">${r.status}</span></td>
                <td>
                    <div style="display:flex; gap:6px;">
                        <button type="button" class="btn-admin btn-admin-primary" style="padding:4px 8px; font-size:11px;" onclick="updateReservationStatus('${r.id}', 'Seated')" title="Guest Arrived">
                            <i class="fa-solid fa-chair"></i> Seat
                        </button>
                        <button type="button" class="btn-admin btn-admin-danger" style="padding:4px 8px; font-size:11px;" onclick="updateReservationStatus('${r.id}', 'Cancelled')" title="Cancel Table">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    window.updateReservationStatus = function (resId, status) {
        const db = WonderLandApp.getDB();
        const res = db.reservations.find(r => r.id === resId);
        if (res) {
            res.status = status;
            WonderLandApp.saveDB(db);
            refreshDashboard();
        }
    };

    // Cross-Tab Live Synchronization
    window.addEventListener('storage', function (e) {
        if (e.key === 'WONDERLAND_SYSTEM_DB_V3') {
            refreshDashboard();
        }
    });

    // Start Auth Check on load
    checkAuth();

})();
