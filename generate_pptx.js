const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_16x9';
pptx.author = 'Software Engineering Team';
pptx.company = 'Wonder Land Restaurant System';
pptx.title = 'Wonder Land Restaurant & Food Ordering Management System - UML & Software Engineering Project';

// Color Palette
const NAVY = '0F172A';
const SLATE = '1E293B';
const GOLD = 'E4B95B';
const DARK_GOLD = 'B45309';
const LIGHT_BG = 'F8FAFC';
const WHITE = 'FFFFFF';
const MUTED = '64748B';
const SUCCESS = '16A34A';
const BLUE = '2563EB';

// Slide 1: Title Slide (Dark Theme)
let s1 = pptx.addSlide();
s1.background = { color: NAVY };

// Decorative shapes
s1.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.3, h: 7.5, fill: { color: GOLD } });
s1.addShape(pptx.ShapeType.rect, { x: 0.3, y: 0, w: 13.03, h: 0.15, fill: { color: GOLD } });

s1.addText('🍽️ WONDER LAND RESTAURANT', {
    x: 1.0, y: 1.2, w: 11.3, h: 0.6,
    fontSize: 20, fontFace: 'Segoe UI', color: GOLD, bold: true, letterSpacing: 2
});

s1.addText('Integrated Food Ordering & Table Reservation System', {
    x: 1.0, y: 1.8, w: 11.3, h: 1.2,
    fontSize: 34, fontFace: 'Segoe UI', color: WHITE, bold: true, breakLine: true
});

s1.addText('Complete UML Software Design Document & Interactive GUI Implementation', {
    x: 1.0, y: 3.2, w: 11.3, h: 0.6,
    fontSize: 18, fontFace: 'Segoe UI', color: '94A3B8'
});

// Card details
s1.addShape(pptx.ShapeType.roundRect, { x: 1.0, y: 4.4, w: 11.3, h: 2.2, fill: { color: SLATE }, line: { color: GOLD, width: 1.5 }, rectRadius: 0.15 });

s1.addText('PROJECT SPECIFICATIONS & ACADEMIC DELIVERABLES:', {
    x: 1.4, y: 4.6, w: 10.5, h: 0.4,
    fontSize: 13, fontFace: 'Segoe UI', color: GOLD, bold: true
});

const s1Points = [
    '1. Complete Set of 14 UML Diagrams (Use Case, Class, Sequence, Activity, State, Component, Deployment, Package, ERD)',
    '2. Fully Implemented & Responsive GUI (Customer Ordering, Live Order State Machine Tracker, Table Reservation, Reviews)',
    '3. Back-Office Management Portal (Real-Time KPIs, Kitchen Dispatch, Menu Catalog CRUD, Table Reservation Control)',
    '4. Complete Traceability: 100% of modeled UML interactions are verified and executable in the live application.'
];
s1.addText(s1Points.join('\n'), {
    x: 1.4, y: 5.1, w: 10.5, h: 1.3,
    fontSize: 12.5, fontFace: 'Segoe UI', color: WHITE, lineSpacing: 22
});

// Helper for Content Slides
function createContentSlide(title, category) {
    let slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };

    // Header bar
    slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.1, fill: { color: NAVY } });
    slide.addShape(pptx.ShapeType.rect, { x: 0, y: 1.05, w: 13.33, h: 0.05, fill: { color: GOLD } });

    slide.addText(category.toUpperCase(), {
        x: 0.8, y: 0.15, w: 10, h: 0.3,
        fontSize: 11, fontFace: 'Segoe UI', color: GOLD, bold: true, letterSpacing: 1.5
    });

    slide.addText(title, {
        x: 0.8, y: 0.42, w: 11.5, h: 0.55,
        fontSize: 22, fontFace: 'Segoe UI', color: WHITE, bold: true
    });

    // Footer
    slide.addText('Wonder Land Restaurant Management System • Software Engineering Project Deliverable', {
        x: 0.8, y: 7.1, w: 10, h: 0.3,
        fontSize: 10, fontFace: 'Segoe UI', color: MUTED
    });

    return slide;
}

// Slide 2: Project Overview & Problem Statement
let s2 = createContentSlide('Executive Summary & Problem Statement', 'Project Initiation');
s2.addShape(pptx.ShapeType.roundRect, { x: 0.8, y: 1.4, w: 5.6, h: 5.3, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1.2 }, rectRadius: 0.15 });
s2.addText('🚨 The Traditional Dining Dilemma', { x: 1.1, y: 1.6, w: 5.0, h: 0.4, fontSize: 16, fontFace: 'Segoe UI', color: 'DC2626', bold: true });
s2.addText([
    '• Manual Phone Reservations: Lead to double bookings, unrecorded guest preferences, and high no-show rates.',
    '• Disconnected Delivery & Kitchen: Inability for customers to know the exact status of their food (Cooking vs Dispatched).',
    '• Static Paper Menus: Inability to instantly update prices, highlight seasonal specials, or mark sold-out ingredients.',
    '• Lack of Analytics: Restaurant managers lack real-time visibility into daily revenue, bestselling dishes, and table turnover.'
].join('\n\n'), { x: 1.1, y: 2.2, w: 5.0, h: 4.2, fontSize: 12.5, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 20 });

s2.addShape(pptx.ShapeType.roundRect, { x: 6.8, y: 1.4, w: 5.7, h: 5.3, fill: { color: WHITE }, line: { color: GOLD, width: 1.5 }, rectRadius: 0.15 });
s2.addText('✨ The Wonder Land Solution', { x: 7.1, y: 1.6, w: 5.1, h: 0.4, fontSize: 16, fontFace: 'Segoe UI', color: DARK_GOLD, bold: true });
s2.addText([
    '• Unified Customer Portal: Dynamic menu with live search, category filtering, cart drawer, and frictionless checkout.',
    '• Visual Order State Machine: Real-time 5-stage tracking (Pending ➔ Confirmed ➔ Cooking ➔ Delivery ➔ Completed).',
    '• Automated Table Reservations: Dedicated zone and time-slot booking with instant verification and host synchronization.',
    '• Back-Office Administrative Hub: Complete menu CRUD, live kitchen ticket board, revenue telemetry, and order audits.',
    '• Zero-Install Architecture: Pure HTML5/ES6/LocalStorage design running instantly in any standard browser.'
].join('\n\n'), { x: 7.1, y: 2.2, w: 5.1, h: 4.2, fontSize: 12.5, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 20 });

// Slide 3: Stakeholders & System Actors
let s3 = createContentSlide('Stakeholders & System Actors', 'Requirements Analysis');
const actors = [
    { title: 'Customer / Guest', icon: '👤', color: BLUE, desc: 'Explores culinary menu, places online food orders, tracks delivery progress via live stepper, reserves tables, and submits verified dining reviews.' },
    { title: 'Restaurant Admin / Manager', icon: '🛡️', color: DARK_GOLD, desc: 'Controls menu catalog (CRUD operations), updates dish availability, monitors financial KPIs, audits orders, and oversees daily restaurant operations.' },
    { title: 'Kitchen Staff / Chef', icon: '👨‍🍳', color: SUCCESS, desc: 'Receives live order tickets, tracks cooking pipeline, transitions order status from Confirmed to "In Kitchen" and "Out for Delivery".' },
    { title: 'Host / Floor Staff', icon: '📋', color: '7C3AED', desc: 'Inspects guest table bookings, seats arriving dining parties, manages hall zones (Main Dining, Seaside Terrace, VIP Booth), and frees tables.' }
];

actors.forEach((act, idx) => {
    let col = idx % 2;
    let row = Math.floor(idx / 2);
    let x = 0.8 + col * 5.9;
    let y = 1.4 + row * 2.7;

    s3.addShape(pptx.ShapeType.roundRect, { x: x, y: y, w: 5.7, h: 2.4, fill: { color: WHITE }, line: { color: act.color, width: 1.5 }, rectRadius: 0.15 });
    s3.addText(`${act.icon} Actor: ${act.title}`, { x: x + 0.3, y: y + 0.25, w: 5.1, h: 0.35, fontSize: 16, fontFace: 'Segoe UI', color: act.color, bold: true });
    s3.addText(act.desc, { x: x + 0.3, y: y + 0.7, w: 5.1, h: 1.5, fontSize: 12.5, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 20 });
});

// Slide 4: Functional & Non-Functional Requirements
let s4 = createContentSlide('Functional vs. Non-Functional Requirements', 'Requirements Engineering');
s4.addShape(pptx.ShapeType.roundRect, { x: 0.8, y: 1.4, w: 5.6, h: 5.3, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1.2 }, rectRadius: 0.15 });
s4.addText('⚙️ Key Functional Requirements (FR)', { x: 1.1, y: 1.6, w: 5.0, h: 0.4, fontSize: 15, fontFace: 'Segoe UI', color: BLUE, bold: true });
s4.addText([
    '• FR-01 Menu Browsing & Search: Filter by category and search dynamically by keyword.',
    '• FR-02 Cart Management: Add items, update quantities, calculate line totals, VAT, and delivery fee.',
    '• FR-03 Checkout & Multi-Payment: Support Cash on Delivery, Credit Card, and Digital Wallets.',
    '• FR-04 Order Lifecycle Tracking: Query order status with visual 5-node stepper.',
    '• FR-05 Table Reservation: Select date, time slot, guest count, and seating preference.',
    '• FR-06 Menu CRUD Operations: Create, Read, Update, Delete, and toggle dish availability.',
    '• FR-07 Order Status Management: Admin transitions order states in real-time.'
].join('\n'), { x: 1.1, y: 2.1, w: 5.0, h: 4.4, fontSize: 11.5, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 18 });

s4.addShape(pptx.ShapeType.roundRect, { x: 6.8, y: 1.4, w: 5.7, h: 5.3, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1.2 }, rectRadius: 0.15 });
s4.addText('🛡️ Non-Functional Requirements (NFR)', { x: 7.1, y: 1.6, w: 5.1, h: 0.4, fontSize: 15, fontFace: 'Segoe UI', color: SUCCESS, bold: true });
s4.addText([
    '• NFR-01 Performance & Latency: Instant client-side UI rendering with sub-50ms response times.',
    '• NFR-02 Zero-Configuration Portability: Operates seamlessly on Chrome, Edge, Safari without server installation.',
    '• NFR-03 Reliability & Persistence: LocalStorage persistence guarantees zero state loss on browser refresh.',
    '• NFR-04 Usability & Accessibility: Warm gourmet aesthetics, high contrast, intuitive iconography, responsive design.',
    '• NFR-05 Security & Authorization: PIN-gated admin portal protecting management functions.',
    '• NFR-06 Data Integrity: Referential consistency between orders, menu items, and customer receipts.'
].join('\n'), { x: 7.1, y: 2.1, w: 5.1, h: 4.4, fontSize: 11.5, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 18 });

// Slide 5: System Architecture & Tech Stack
let s5 = createContentSlide('Layered Architecture & Technology Stack', 'System Architecture');
const techTiers = [
    { title: '1. Presentation Tier (Client Web GUI)', color: BLUE, items: 'Semantic HTML5, CSS3 Custom Properties (:root), Responsive Flexbox & Grid, FontAwesome 6 Icons, Quicksand Typography' },
    { title: '2. Application / Controller Tier', color: DARK_GOLD, items: 'Vanilla ES6+ JavaScript, Event-Driven Architecture, Cart Manager, State Machine Engine, Form Validators, Modal Controllers' },
    { title: '3. Data Persistence Tier', color: SUCCESS, items: 'HTML5 LocalStorage Storage Engine, JSON Object Serialization, Cross-Tab Storage Events, Default Demonstration Seeder' }
];

techTiers.forEach((tier, i) => {
    s5.addShape(pptx.ShapeType.roundRect, { x: 0.8, y: 1.5 + i * 1.8, w: 11.7, h: 1.5, fill: { color: WHITE }, line: { color: tier.color, width: 1.8 }, rectRadius: 0.12 });
    s5.addText(tier.title, { x: 1.1, y: 1.65 + i * 1.8, w: 11.0, h: 0.35, fontSize: 15, fontFace: 'Segoe UI', color: tier.color, bold: true });
    s5.addText(tier.items, { x: 1.1, y: 2.05 + i * 1.8, w: 11.0, h: 0.7, fontSize: 13, fontFace: 'Segoe UI', color: SLATE });
});

// Slide 6: Complete UML Diagrams Directory
let s6 = createContentSlide('UML Diagrams Directory (All 14 Required Diagrams)', 'UML Modeling Overview');
const umlTableRows = [
    [
        { text: 'Diagram Category', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
        { text: 'Diagram Name & File Reference', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
        { text: 'System Perspective & Role', options: { bold: true, fill: { color: NAVY }, color: WHITE } }
    ],
    ['Use Case Model', '01_use_case_diagram.svg', 'Captures actors (Customer, Admin, Chef) and functional use cases with <<include>> & <<extend>>'],
    ['Static Domain Model', '02_class_diagram.svg', 'Detailed domain classes (User, Customer, Order, MenuItem, Payment, Reservation) with relationships'],
    ['Dynamic Sequence', '03_sequence_order_food.svg', 'Step-by-step lifeline messaging for food selection, checkout, and payment processing'],
    ['Dynamic Sequence', '04_sequence_table_reservation.svg', 'Interactions for table booking, slot availability verification, and confirmation toast'],
    ['Dynamic Sequence', '05_sequence_admin_management.svg', 'Admin authentication, order status mutation, and real-time menu catalog CRUD'],
    ['Dynamic Activity', '06_activity_order_processing.svg', 'Swimlane activity flow for customer ordering, payment gateway branching, and kitchen handoff'],
    ['Dynamic Activity', '07_activity_table_reservation.svg', 'Activity workflow for party size validation, seating allocation, and table turnover'],
    ['State Machine', '08_state_order_lifecycle.svg', 'Lifecycle transitions: Pending ➔ Confirmed ➔ In Kitchen ➔ Out for Delivery ➔ Delivered / Cancelled'],
    ['State Machine', '09_state_reservation_lifecycle.svg', 'Reservation states: Requested ➔ Confirmed ➔ Seated ➔ Completed / Cancelled'],
    ['Architectural Structure', '10_component_diagram.svg', 'Subsystems: Presentation Components, Application Business Services, Persistence Adapter'],
    ['Architectural Physical', '11_deployment_diagram.svg', 'Client Device Node, Browser Execution Environment, HTTP/HTTPS Web Server Node'],
    ['Architectural Package', '12_package_diagram.svg', 'Layered packaging: presentation, business, model, and data with strict <<import>> rules'],
    ['Interaction Collaboration', '13_communication_diagram.svg', 'Numbered message paths between Customer, Cart, OrderManager, Payment, and DataStore'],
    ['Relational Data Model', '14_entity_relationship_diagram.svg', 'Full relational database schema: PKs, FKs, cardinalities (1:1, 1:N, M:N) for persistent storage']
];

s6.addTable(umlTableRows, {
    x: 0.8, y: 1.4, w: 11.7, h: 5.4,
    colW: [2.2, 3.2, 6.3],
    fontSize: 10,
    fontFace: 'Segoe UI',
    border: { pt: 0.5, color: 'CBD5E1' },
    align: 'left',
    valign: 'middle'
});

// Slide 7: Use Case Diagram Details
let s7 = createContentSlide('UML Diagram 01: Use Case Diagram Analysis', 'UML Behavioral Modeling');
s7.addShape(pptx.ShapeType.roundRect, { x: 0.8, y: 1.4, w: 7.2, h: 5.3, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1.2 }, rectRadius: 0.15 });
s7.addText('Core System Use Cases & Relationships', { x: 1.1, y: 1.6, w: 6.6, h: 0.35, fontSize: 15, fontFace: 'Segoe UI', color: NAVY, bold: true });
s7.addText([
    '• UC01 Browse & Search Menu: Customers filter dishes by category and real-time text query.',
    '• UC02 Filter by Category: <<extend>> relationship to specific dietary categories (Starters, Pizzas, Mains, Desserts).',
    '• UC03 Manage Cart Items: Add, increment/decrement quantities, remove items, compute live financial totals.',
    '• UC04 Checkout & Place Order: Enters customer delivery coordinates and submits food order.',
    '• UC05 Process Payment: <<include>> relationship from Checkout; verifies Cash on Delivery, Card, or Digital Wallet.',
    '• UC06 Track Live Order Status: Enter Order ID to inspect real-time progress on state machine stepper.',
    '• UC07 Reserve Dining Table: Enter date, time slot, party size, and seating zone (Main Hall, Patio, VIP).',
    '• UC08 Submit Review: Customer posts verified star rating and dining feedback.',
    '• UC09 Admin Login: Authenticates with security PIN (admin123) to access back-office.',
    '• UC10 Manage Menu Catalog: Full CRUD (Create new dish, Edit price/details, Delete, Toggle Availability).',
    '• UC11 Manage Orders & Kitchen: Admin/Chef transitions order state from Pending up to Delivered.'
].join('\n'), { x: 1.1, y: 2.05, w: 6.6, h: 4.5, fontSize: 11.5, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 18 });

s7.addShape(pptx.ShapeType.roundRect, { x: 8.3, y: 1.4, w: 4.2, h: 5.3, fill: { color: SLATE }, line: { color: GOLD, width: 1.5 }, rectRadius: 0.15 });
s7.addText('Diagram Metadata', { x: 8.6, y: 1.6, w: 3.6, h: 0.35, fontSize: 15, fontFace: 'Segoe UI', color: GOLD, bold: true });
s7.addText([
    'Primary Actors:',
    '• Customer (External User)',
    '• Restaurant Admin (Internal Manager)',
    '• Kitchen Staff / Chef (Fulfillment)',
    '',
    'Key UML Constructs:',
    '• System Boundary Box',
    '• Actor Associations (solid line)',
    '• <<include>> dependency to Payment',
    '• <<extend>> dependency to Filters',
    '',
    'File Reference:',
    'docs/diagrams/01_use_case_diagram.svg'
].join('\n'), { x: 8.6, y: 2.1, w: 3.6, h: 4.3, fontSize: 12, fontFace: 'Segoe UI', color: WHITE, lineSpacing: 19 });

// Slide 8: Domain Class Diagram Analysis
let s8 = createContentSlide('UML Diagram 02: Class Diagram & Domain Modeling', 'UML Structural Modeling');
s8.addShape(pptx.ShapeType.roundRect, { x: 0.8, y: 1.4, w: 11.7, h: 5.3, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1.2 }, rectRadius: 0.15 });

const classSpecs = [
    { name: 'User (Abstract Base)', color: SLATE, desc: '# id, # fullName, # email, # phone | + login(), + logout()' },
    { name: 'Customer (Inherits User)', color: BLUE, desc: '- deliveryAddress, - orderHistory, - loyaltyPoints | + placeOrder(), + trackOrder(), + bookTable()' },
    { name: 'Admin (Inherits User)', color: DARK_GOLD, desc: '- role="Manager", - accessLevel=1, - adminPin | + manageMenu(), + updateOrderStatus(), + getTelemetry()' },
    { name: 'Order & OrderItem (Composition)', color: SUCCESS, desc: 'Order 1 ➔ 1..* OrderItem. Attributes: subtotal, tax(14%), deliveryFee($3), totalAmount, status | + calculateTotals()' },
    { name: 'MenuItem & Category (Aggregation)', color: '7C3AED', desc: 'Category 1 ➔ * MenuItem. Attributes: id, title, category, price, description, isAvailable, rating | + toggleAvailability()' },
    { name: 'Payment Hierarchy (Polymorphism)', color: SUCCESS, desc: 'Abstract Payment ➔ CashPayment, CreditCardPayment, DigitalWalletPayment | + processPayment(): Boolean' },
    { name: 'TableReservation & Review', color: 'C026D3', desc: 'TableReservation: id, guestName, date, timeSlot, guests, seatingZone, status | Review: rating, comment' }
];

classSpecs.forEach((cls, i) => {
    s8.addShape(pptx.ShapeType.roundRect, { x: 1.1, y: 1.6 + i * 0.72, w: 11.1, h: 0.65, fill: { color: LIGHT_BG }, line: { color: cls.color, width: 1.2 }, rectRadius: 0.08 });
    s8.addText(cls.name, { x: 1.3, y: 1.7 + i * 0.72, w: 3.2, h: 0.45, fontSize: 13, fontFace: 'Segoe UI', color: cls.color, bold: true });
    s8.addText(cls.desc, { x: 4.6, y: 1.7 + i * 0.72, w: 7.4, h: 0.45, fontSize: 11.5, fontFace: 'Consolas', color: SLATE });
});

// Slide 9: Sequence Diagrams (Order & Reservation)
let s9 = createContentSlide('UML Diagrams 03 & 04: Sequence Diagrams Breakdown', 'Dynamic Interaction Modeling');
s9.addShape(pptx.ShapeType.roundRect, { x: 0.8, y: 1.4, w: 5.6, h: 5.3, fill: { color: WHITE }, line: { color: BLUE, width: 1.5 }, rectRadius: 0.15 });
s9.addText('Sequence: Food Ordering & Checkout', { x: 1.1, y: 1.6, w: 5.0, h: 0.35, fontSize: 15, fontFace: 'Segoe UI', color: BLUE, bold: true });
s9.addText([
    '1. selectItem(id, qty) ➔ WebGUI ➔ CartController: addItem()',
    '2. CartController executes self-call computeCartTotals()',
    '3. Customer triggers openCheckoutModal()',
    '4. Customer inputs credentials and triggers submitOrder()',
    '5. CartController delegates to PaymentGateway: executeTransaction()',
    '6. [Alt: Payment Approved] ➔ persistOrder() saved in RestaurantDataStore',
    '7. Unique Order ID (#WL-xxxx) generated and returned to WebGUI',
    '8. WebGUI renders Order Receipt and initializes Live Status Stepper.'
].join('\n\n'), { x: 1.1, y: 2.1, w: 5.0, h: 4.4, fontSize: 12, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 18 });

s9.addShape(pptx.ShapeType.roundRect, { x: 6.8, y: 1.4, w: 5.7, h: 5.3, fill: { color: WHITE }, line: { color: 'C026D3', width: 1.5 }, rectRadius: 0.15 });
s9.addText('Sequence: Dining Table Reservation', { x: 7.1, y: 1.6, w: 5.1, h: 0.35, fontSize: 15, fontFace: 'Segoe UI', color: 'C026D3', bold: true });
s9.addText([
    '1. Guest clicks "Book a Table" ➔ ReservationModal displays form',
    '2. Guest selects Date, Time Slot, Party Size, and Seating Zone',
    '3. submitReservation() dispatches to ReservationController',
    '4. checkTableCapacity(date, time, guests) queries DataStore',
    '5. DataStore returns current occupancy for selected window',
    '6. ReservationController confirms booking and creates record (Status="Confirmed")',
    '7. Record committed to DataStore with unique ID (#RES-xxx)',
    '8. UI presents instant confirmation toast and blocks slot in Host Dashboard.'
].join('\n\n'), { x: 7.1, y: 2.1, w: 5.1, h: 4.4, fontSize: 12, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 18 });

// Slide 10: Activity Diagrams (Swimlanes & Workflows)
let s10 = createContentSlide('UML Diagrams 06 & 07: Activity Workflows with Swimlanes', 'Business Process Modeling');
s10.addShape(pptx.ShapeType.roundRect, { x: 0.8, y: 1.4, w: 11.7, h: 5.3, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1.2 }, rectRadius: 0.15 });

s10.addText('Activity Diagram Swimlane Architecture:', { x: 1.1, y: 1.6, w: 11.0, h: 0.35, fontSize: 16, fontFace: 'Segoe UI', color: NAVY, bold: true });

const actSwimlanes = [
    { title: 'Customer Lane', color: BLUE, text: 'Browses catalog ➔ Selects dishes ➔ Reviews cart ➔ Submits delivery details ➔ Chooses payment method ➔ Monitors live status stepper.' },
    { title: 'Web Application (GUI) Lane', color: DARK_GOLD, text: 'Validates input forms ➔ Calculates subtotal, 14% VAT, and delivery fee ➔ Formats payloads ➔ Renders order receipts and notifications.' },
    { title: 'Payment Engine Lane', color: SUCCESS, text: 'Decision node: [Cash on Delivery] branches to instant order confirmation. [Card/Wallet] invokes gateway verification with success/failure handling.' },
    { title: 'Kitchen / Dispatch Lane', color: '7C3AED', text: 'Fork node triggers parallel threads: Thread A notifies customer with order tracker; Thread B prints KOT in kitchen for food preparation.' }
];

actSwimlanes.forEach((sw, i) => {
    s10.addShape(pptx.ShapeType.roundRect, { x: 1.1, y: 2.1 + i * 1.15, w: 11.1, h: 1.0, fill: { color: LIGHT_BG }, line: { color: sw.color, width: 1.5 }, rectRadius: 0.1 });
    s10.addText(`Swimlane: ${sw.title}`, { x: 1.3, y: 2.2 + i * 1.15, w: 10.7, h: 0.3, fontSize: 14, fontFace: 'Segoe UI', color: sw.color, bold: true });
    s10.addText(sw.text, { x: 1.3, y: 2.52 + i * 1.15, w: 10.7, h: 0.5, fontSize: 12, fontFace: 'Segoe UI', color: SLATE });
});

// Slide 11: State Machine Diagrams (Order & Reservation Lifecycle)
let s11 = createContentSlide('UML Diagrams 08 & 09: State Machine Lifecycle Modeling', 'Behavioral State Modeling');
s11.addShape(pptx.ShapeType.roundRect, { x: 0.8, y: 1.4, w: 11.7, h: 5.3, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1.2 }, rectRadius: 0.15 });

s11.addText('Food Order Lifecycle State Machine (Implemented in GUI Stepper)', { x: 1.1, y: 1.6, w: 11.0, h: 0.35, fontSize: 16, fontFace: 'Segoe UI', color: NAVY, bold: true });

const stateFlow = [
    { state: '1. PENDING', color: DARK_GOLD, entry: 'Order created via checkout form; saved to LocalStorage.' },
    { state: '2. CONFIRMED', color: BLUE, entry: 'Staff validates inventory and confirms ticket.' },
    { state: '3. IN KITCHEN', color: DARK_GOLD, entry: 'Chef starts preparation; ingredients assembled and cooked.' },
    { state: '4. OUT FOR DELIVERY', color: '7C3AED', entry: 'Dispatched with courier; in transit to customer coordinates.' },
    { state: '5. DELIVERED', color: SUCCESS, entry: 'Handover complete; order closed; review requested.' }
];

stateFlow.forEach((st, i) => {
    s11.addShape(pptx.ShapeType.roundRect, { x: 1.1 + i * 2.24, y: 2.1, w: 2.1, h: 2.2, fill: { color: LIGHT_BG }, line: { color: st.color, width: 1.8 }, rectRadius: 0.12 });
    s11.addText(st.state, { x: 1.2 + i * 2.24, y: 2.25, w: 1.9, h: 0.35, fontSize: 12, fontFace: 'Segoe UI', color: st.color, bold: true, align: 'center' });
    s11.addText(st.entry, { x: 1.2 + i * 2.24, y: 2.7, w: 1.9, h: 1.4, fontSize: 11, fontFace: 'Segoe UI', color: SLATE, align: 'center', lineSpacing: 16 });
});

s11.addShape(pptx.ShapeType.roundRect, { x: 1.1, y: 4.6, w: 11.2, h: 1.8, fill: { color: '#FEE2E2' }, line: { color: '#DC2626', width: 1.5 }, rectRadius: 0.12 });
s11.addText('Cancellation Branch Rule (Guard Condition):', { x: 1.4, y: 4.75, w: 10.6, h: 0.3, fontSize: 13.5, fontFace: 'Segoe UI', color: '#991B1B', bold: true });
s11.addText([
    '• Orders can be cancelled by the Customer or Admin ONLY when in [Pending] or [Confirmed] states.',
    '• Once the order transitions to [In Kitchen] (Cooking started), the cancel action is safely locked out.',
    '• Every state transition triggers window storage events, updating the live customer stepper in real time!'
].join('\n'), { x: 1.4, y: 5.1, w: 10.6, h: 1.1, fontSize: 12, fontFace: 'Segoe UI', color: '#7F1D1D', lineSpacing: 18 });

// Slide 12: Architectural Diagrams (Component, Deployment, Package, ERD)
let s12 = createContentSlide('UML Diagrams 10 to 14: Structural & Physical Architecture', 'System Architecture');
const archGrid = [
    { title: 'Component Diagram (10)', icon: '🧩', desc: 'Presentation Components (Portal, Cart, Tracker) ➔ Business Services (OrderEngine, CatalogService, PaymentStrategy) ➔ Storage Adapters.' },
    { title: 'Deployment Diagram (11)', icon: '🖥️', desc: 'Client Device Node executing Browser Runtime, HTML5 LocalStorage Node, communicating over HTTPS to Static Host Node.' },
    { title: 'Package Diagram (12)', icon: '📦', desc: 'Layered packages: com.wonderland.presentation, .business, .model, .data with unidirectional <<import>> dependencies.' },
    { title: 'ERD Database Schema (14)', icon: '🗄️', desc: 'Relational entities: CUSTOMERS, ORDERS, ORDER_ITEMS, MENU_ITEMS, CATEGORIES, PAYMENTS, TABLE_RESERVATIONS, REVIEWS with PK/FK links.' }
];

archGrid.forEach((ag, idx) => {
    let col = idx % 2;
    let row = Math.floor(idx / 2);
    let x = 0.8 + col * 5.9;
    let y = 1.4 + row * 2.7;

    s12.addShape(pptx.ShapeType.roundRect, { x: x, y: y, w: 5.7, h: 2.4, fill: { color: WHITE }, line: { color: NAVY, width: 1.5 }, rectRadius: 0.15 });
    s12.addText(`${ag.icon} ${ag.title}`, { x: x + 0.3, y: y + 0.25, w: 5.1, h: 0.35, fontSize: 15, fontFace: 'Segoe UI', color: NAVY, bold: true });
    s12.addText(ag.desc, { x: x + 0.3, y: y + 0.7, w: 5.1, h: 1.5, fontSize: 12.5, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 20 });
});

// Slide 13: Live GUI Implementation - Customer Experience
let s13 = createContentSlide('System GUI Implementation: Customer Experience', 'GUI Implementation');
s13.addShape(pptx.ShapeType.roundRect, { x: 0.8, y: 1.4, w: 11.7, h: 5.3, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1.2 }, rectRadius: 0.15 });

const custGuiCards = [
    { title: 'Interactive Menu & Live Search', icon: '🔍', desc: 'Real-time keyword filtering + category tabs (Starters, Mains, Pizzas, Desserts). Cards display photos, prices, ratings, and "Add to Cart".' },
    { title: 'Slide-in Cart Drawer', icon: '🛒', desc: 'Floating badge with live item count. Slide-out panel to adjust quantities, remove dishes, and view subtotal, 14% VAT, and delivery fee.' },
    { title: 'Frictionless Checkout Modal', icon: '💳', desc: 'Full address capture, special chef notes, and radio choice between Cash on Delivery, Credit Card, and Vodafone Cash/Fawry.' },
    { title: 'Live Order Tracker (State Machine)', icon: '📍', desc: 'Search by Order ID (#WL-xxxx). Visual glowing stepper animates through 5 stages with order details and cancel action.' },
    { title: 'Table Reservation Modal', icon: '🍽️', desc: 'Select Date, Time slot, Guest count, and Seating Zone (Main Hall, Seaside Patio, VIP Room) with instant booking ID.' },
    { title: 'Verified Guest Reviews', icon: '⭐', desc: 'Submit ratings and commentary directly from the page; automatically published to live testimonials and persisted.' }
];

custGuiCards.forEach((cg, idx) => {
    let col = idx % 3;
    let row = Math.floor(idx / 3);
    let x = 1.1 + col * 3.8;
    let y = 1.6 + row * 2.5;

    s13.addShape(pptx.ShapeType.roundRect, { x: x, y: y, w: 3.6, h: 2.3, fill: { color: LIGHT_BG }, line: { color: GOLD, width: 1.5 }, rectRadius: 0.12 });
    s13.addText(`${cg.icon} ${cg.title}`, { x: x + 0.2, y: y + 0.2, w: 3.2, h: 0.35, fontSize: 13, fontFace: 'Segoe UI', color: DARK_GOLD, bold: true });
    s13.addText(cg.desc, { x: x + 0.2, y: y + 0.6, w: 3.2, h: 1.5, fontSize: 11.5, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 18 });
});

// Slide 14: Live GUI Implementation - Admin Management Portal
let s14 = createContentSlide('System GUI Implementation: Staff & Admin Portal', 'GUI Implementation');
s14.addShape(pptx.ShapeType.roundRect, { x: 0.8, y: 1.4, w: 11.7, h: 5.3, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1.2 }, rectRadius: 0.15 });

const adminGuiCards = [
    { title: 'Security Gate PIN Access', icon: '🔒', desc: 'Protected by administrative credentials (default PIN: admin123) with session lock and unlock capabilities.' },
    { title: 'Real-Time KPI Dashboard', icon: '📊', desc: 'Live calculation of Total Sales Revenue, Total Orders Placed, Active Kitchen Queue, and Table Bookings.' },
    { title: 'Live Orders Management', icon: '🧾', desc: 'Full dispatch table with customer info, address, items, and an inline status dropdown to advance the order state machine.' },
    { title: 'Menu Catalog CRUD', icon: '🍲', desc: 'Add new dishes, edit price/description/photos, delete items, and toggle availability (Available / Sold Out) in one click.' },
    { title: 'Table Reservations Host Control', icon: '🪑', desc: 'View party size and seating zone; action buttons to Seat arriving guests or Cancel/Free tables.' },
    { title: 'Demo Seed Data Restoration', icon: '🔄', desc: 'Instant reset button to reload realistic sample orders and dishes for easy presentation and grading.' }
];

adminGuiCards.forEach((cg, idx) => {
    let col = idx % 3;
    let row = Math.floor(idx / 3);
    let x = 1.1 + col * 3.8;
    let y = 1.6 + row * 2.5;

    s14.addShape(pptx.ShapeType.roundRect, { x: x, y: y, w: 3.6, h: 2.3, fill: { color: LIGHT_BG }, line: { color: BLUE, width: 1.5 }, rectRadius: 0.12 });
    s14.addText(`${cg.icon} ${cg.title}`, { x: x + 0.2, y: y + 0.2, w: 3.2, h: 0.35, fontSize: 13, fontFace: 'Segoe UI', color: BLUE, bold: true });
    s14.addText(cg.desc, { x: x + 0.2, y: y + 0.6, w: 3.2, h: 1.5, fontSize: 11.5, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 18 });
});

// Slide 15: UML-to-Implementation Traceability Matrix
let s15 = createContentSlide('UML-to-Implementation Traceability Matrix', 'Verification & Compliance');
s15.addText('Proving that 100% of modeled UML interactions are physically implemented in the codebase:', {
    x: 0.8, y: 1.25, w: 11.7, h: 0.35,
    fontSize: 13, fontFace: 'Segoe UI', color: SLATE, italic: true
});

const traceRows = [
    [
        { text: 'UML Diagram Element', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
        { text: 'Code Implementation (File / Function / ID)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
        { text: 'Live GUI Verification in Application', options: { bold: true, fill: { color: NAVY }, color: WHITE } }
    ],
    ['UC01 / UC02 Browse & Filter', 'app.js: renderDynamicMenu(cat, query)', 'Menu search box (#menuSearchInput) & category tabs'],
    ['UC03 Manage Cart Items', 'app.js: addToCart(), updateCartQuantity()', 'Cart slide-out drawer (#cartDrawer) & count badge'],
    ['UC04 / UC05 Checkout & Pay', 'app.js: placeOrder(), Order.calculateTotals()', 'Checkout modal (#checkoutModal) with COD, Card, Wallet'],
    ['UC06 Track Order Status', 'app.js: renderOrderTracker(order)', 'Visual stepper (#trackerModal) showing real-time stage'],
    ['UC07 Table Reservation', 'app.js: bookTable(resData)', 'Reservation modal (#reservationModal) with zone & time'],
    ['UC10 Menu Catalog CRUD', 'admin.js: openDishModal(), deleteDish()', 'Admin menu table (#menuCatalogTableBody) Add/Edit modal'],
    ['UC11 Order Status Update', 'admin.js: handleOrderStatusChange()', 'Status dropdown in admin.html updates customer stepper live'],
    ['Order State Machine', 'State nodes: Pending ➔ Confirmed ➔ Cooking ➔ Delivery', 'Animated CSS stepper (.step-circle, .step-connector)'],
    ['DataStore Singleton', 'app.js: DB.load(), DB.save(), DB.reset()', 'HTML5 LocalStorage (Key: WONDERLAND_SYSTEM_DB_V1)']
];

s15.addTable(traceRows, {
    x: 0.8, y: 1.65, w: 11.7, h: 5.1,
    colW: [2.8, 4.4, 4.5],
    fontSize: 10.5,
    fontFace: 'Segoe UI',
    border: { pt: 0.5, color: 'CBD5E1' },
    align: 'left',
    valign: 'middle'
});

// Slide 16: Verification & Testing
let s16 = createContentSlide('Testing, Verification & Quality Assurance', 'Quality Assurance');
const testCards = [
    { title: 'Functional Unit Testing', desc: 'Verified cart calculations (Subtotal + 14% VAT + $3 Delivery Fee). Verified that reducing item quantity to zero removes the line item automatically.' },
    { title: 'State Transition Testing', desc: 'Verified that updating order status in admin.html (e.g. from Confirmed to "In Kitchen") immediately updates the open tracker in index.html via storage events.' },
    { title: 'Guard Condition Testing', desc: 'Tested cancellation rules: "Cancel Order" button is enabled in Pending and Confirmed states, and safely disabled/hidden once Cooking has started.' },
    { title: 'Cross-Device Responsiveness', desc: 'Tested on desktop widescreen (1920x1080), laptop (1366x768), tablet (iPad 768px), and mobile phone (iPhone/Android 375px) with adaptive drawers and grids.' }
];

testCards.forEach((tc, idx) => {
    let col = idx % 2;
    let row = Math.floor(idx / 2);
    let x = 0.8 + col * 5.9;
    let y = 1.4 + row * 2.7;

    s16.addShape(pptx.ShapeType.roundRect, { x: x, y: y, w: 5.7, h: 2.4, fill: { color: WHITE }, line: { color: SUCCESS, width: 1.5 }, rectRadius: 0.15 });
    s16.addText(`✅ ${tc.title}`, { x: x + 0.3, y: y + 0.25, w: 5.1, h: 0.35, fontSize: 15, fontFace: 'Segoe UI', color: SUCCESS, bold: true });
    s16.addText(tc.desc, { x: x + 0.3, y: y + 0.7, w: 5.1, h: 1.5, fontSize: 12.5, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 20 });
});

// Slide 17: Conclusion & Summary
let s17 = pptx.addSlide();
s17.background = { color: NAVY };

s17.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.3, h: 7.5, fill: { color: GOLD } });

s17.addText('PROJECT CONCLUSION & SUMMARY', {
    x: 1.0, y: 1.0, w: 11.3, h: 0.5,
    fontSize: 16, fontFace: 'Segoe UI', color: GOLD, bold: true, letterSpacing: 2
});

s17.addText('A Complete, End-to-End Software Engineering Solution', {
    x: 1.0, y: 1.5, w: 11.3, h: 0.8,
    fontSize: 28, fontFace: 'Segoe UI', color: WHITE, bold: true
});

s17.addShape(pptx.ShapeType.roundRect, { x: 1.0, y: 2.6, w: 11.3, h: 3.8, fill: { color: SLATE }, line: { color: GOLD, width: 1.5 }, rectRadius: 0.15 });

const summaryPoints = [
    '🎯 Requirements Met: Fully addresses every course requirement with 14 detailed UML diagrams and an interactive GUI.',
    '📐 Theoretical Rigor: Complete UML models adhering to standard OMG specifications (Structural, Behavioral, and Architectural).',
    '💻 Practical Excellence: 100% of modeled diagrams are physically realized in clean semantic HTML5, CSS3, and ES6 JavaScript.',
    '⚡ Zero Barriers: No complex web server or database setup required; double-clicking index.html or admin.html launches immediately.',
    '📄 Comprehensive Documentation: Accompanied by Word (.docx), HTML, Markdown, and PowerPoint (.pptx) deliverables.'
];

s17.addText(summaryPoints.join('\n\n'), {
    x: 1.4, y: 2.9, w: 10.5, h: 3.2,
    fontSize: 13.5, fontFace: 'Segoe UI', color: WHITE, lineSpacing: 22
});

s17.addText('Thank You! Questions & Discussion Welcomed.', {
    x: 1.0, y: 6.7, w: 11.3, h: 0.4,
    fontSize: 16, fontFace: 'Segoe UI', color: GOLD, bold: true, align: 'center'
});

// Save Presentation
const outPptxPath = path.join(__dirname, 'presentation', 'Wonder_Land_Restaurant_Project_Presentation.pptx');
pptx.writeFile({ fileName: outPptxPath }).then(fileName => {
    console.log(`PowerPoint Presentation created successfully at: ${fileName}`);
}).catch(err => {
    console.error('Error generating PowerPoint:', err);
});
