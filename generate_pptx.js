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
const PURPLE = '7C3AED';
const RED = 'DC2626';

// Slide 1: Title Slide (Dark Luxury Theme)
let s1 = pptx.addSlide();
s1.background = { color: NAVY };

s1.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.35, h: 7.5, fill: { color: GOLD } });
s1.addShape(pptx.ShapeType.rect, { x: 0.35, y: 0, w: 12.98, h: 0.15, fill: { color: GOLD } });

s1.addText('🍽️ WONDER LAND RESTAURANT SYSTEM', {
    x: 1.0, y: 1.1, w: 11.3, h: 0.5,
    fontSize: 18, fontFace: 'Segoe UI', color: GOLD, bold: true, letterSpacing: 2
});

s1.addText('Software Engineering & UML System Architecture', {
    x: 1.0, y: 1.6, w: 11.3, h: 1.2,
    fontSize: 34, fontFace: 'Segoe UI', color: WHITE, bold: true, breakLine: true
});

s1.addText('Comprehensive UML Models, Use Case Specifications & Fully Realized GUI Implementation', {
    x: 1.0, y: 3.0, w: 11.3, h: 0.6,
    fontSize: 17, fontFace: 'Segoe UI', color: '94A3B8'
});

s1.addShape(pptx.ShapeType.roundRect, { x: 1.0, y: 4.1, w: 11.3, h: 2.6, fill: { color: SLATE }, line: { color: GOLD, width: 1.5 }, rectRadius: 0.15 });

s1.addText('KEY ACADEMIC DELIVERABLES & VERIFIED SYSTEM HIGHLIGHTS:', {
    x: 1.4, y: 4.3, w: 10.5, h: 0.35,
    fontSize: 13, fontFace: 'Segoe UI', color: GOLD, bold: true
});

const s1Points = [
    '• Complete Set of 10 Visual UML Models (Use Case, Class, Sequences, Activity, State Machine, Component, Deployment, ERD)',
    '• Rigorous Use Case Specification: UC-05 Place Order via Cash on Delivery (COD) with complete 10-step flow and exception handling',
    '• Interactive Customer Experience: Dynamic search, category tabs, cart drawer, COD checkout modal, and 5-stage live order tracker',
    '• Staff & Kitchen Management Portal: Real-time telemetry KPIs, order dispatch, menu catalog CRUD, and 1-Click Excel (.csv) export',
    '• 100% Traceability & Compliance: Every modeled UML step is physically implemented, functional, and verifiable in the live application.'
];
s1.addText(s1Points.join('\n'), {
    x: 1.4, y: 4.75, w: 10.5, h: 1.8,
    fontSize: 12, fontFace: 'Segoe UI', color: WHITE, lineSpacing: 20
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

// Slide 2: Project Overview & Executive Summary
let s2 = createContentSlide('Executive Summary & Problem Statement', 'Project Initiation');
s2.addShape(pptx.ShapeType.roundRect, { x: 0.8, y: 1.35, w: 5.6, h: 5.4, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1.2 }, rectRadius: 0.15 });
s2.addText('🚨 The Traditional Dining Dilemma', { x: 1.1, y: 1.55, w: 5.0, h: 0.4, fontSize: 16, fontFace: 'Segoe UI', color: RED, bold: true });
s2.addText([
    '• Manual Phone Reservations: Lead to double bookings, unrecorded guest preferences, and high no-show rates without confirmation.',
    '• Disconnected Delivery & Kitchen: Inability for customers to know the exact status of their food (Cooking vs Dispatched vs In Transit).',
    '• Static Paper Menus: Inability to instantly update prices, highlight seasonal chef specials, or mark sold-out dishes dynamically.',
    '• Lack of Analytics & Excel Audits: Restaurant managers lack real-time visibility into daily revenue, bestselling dishes, and exportable financial audits.'
].join('\n\n'), { x: 1.1, y: 2.1, w: 5.0, h: 4.4, fontSize: 12.5, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 20 });

s2.addShape(pptx.ShapeType.roundRect, { x: 6.8, y: 1.35, w: 5.7, h: 5.4, fill: { color: WHITE }, line: { color: GOLD, width: 1.5 }, rectRadius: 0.15 });
s2.addText('✨ The Wonder Land Digital Solution', { x: 7.1, y: 1.55, w: 5.1, h: 0.4, fontSize: 16, fontFace: 'Segoe UI', color: DARK_GOLD, bold: true });
s2.addText([
    '• Unified Customer Portal: Dynamic menu with live keyword search, category filtering, cart drawer, and frictionless Cash on Delivery (COD) checkout.',
    '• Visual Order State Machine: Real-time 5-stage tracking (Pending ➔ Confirmed ➔ Cooking ➔ Delivery ➔ Completed) with dynamic cancellation lockouts.',
    '• Automated Table Reservations: Dedicated zone and time-slot booking with instant verification and host synchronization.',
    '• Back-Office Administrative Hub: Complete menu CRUD, live kitchen ticket board, revenue telemetry, and 1-Click Excel (.csv) export for audits.',
    '• Zero-Install Architecture: Pure HTML5/ES6/LocalStorage design running instantly in any standard browser.'
].join('\n\n'), { x: 7.1, y: 2.1, w: 5.1, h: 4.4, fontSize: 12.5, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 20 });

// Slide 3: Stakeholders & System Actors
let s3 = createContentSlide('System Stakeholders & Operational Actors', 'Requirements Analysis');
const actors = [
    { title: 'Customer / Guest', icon: '👤', color: BLUE, desc: 'Explores culinary menu, places online food orders with Cash on Delivery (COD) or Card, tracks delivery progress via live stepper, reserves tables, and submits dining reviews.' },
    { title: 'Restaurant Admin / Manager', icon: '🛡️', color: DARK_GOLD, desc: 'Controls menu catalog (CRUD operations), updates dish availability, monitors financial KPIs, audits orders, and exports reports directly to Excel (.csv).' },
    { title: 'Kitchen Staff / Chef', icon: '👨‍🍳', color: SUCCESS, desc: 'Receives live order tickets, tracks cooking pipeline, transitions order status from Confirmed to "In Kitchen" and "Out for Delivery".' },
    { title: 'Dining Host / Delivery Courier', icon: '🚚', color: PURPLE, desc: 'Courier performs physical handover and collects Cash on Delivery (COD). Floor host seats arriving dining parties and manages table turnover.' }
];

actors.forEach((act, idx) => {
    let col = idx % 2;
    let row = Math.floor(idx / 2);
    let x = 0.8 + col * 5.9;
    let y = 1.35 + row * 2.75;

    s3.addShape(pptx.ShapeType.roundRect, { x: x, y: y, w: 5.7, h: 2.5, fill: { color: WHITE }, line: { color: act.color, width: 1.5 }, rectRadius: 0.15 });
    s3.addText(`${act.icon} Actor: ${act.title}`, { x: x + 0.3, y: y + 0.25, w: 5.1, h: 0.35, fontSize: 16, fontFace: 'Segoe UI', color: act.color, bold: true });
    s3.addText(act.desc, { x: x + 0.3, y: y + 0.7, w: 5.1, h: 1.6, fontSize: 12.5, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 20 });
});

// Helper for Visual Diagram Slides
function addVisualDiagramSlide(title, category, svgPath, metadata) {
    let slide = createContentSlide(title, category);

    // Left Area: Diagram Image
    if (fs.existsSync(svgPath)) {
        slide.addImage({ path: svgPath, x: 0.8, y: 1.35, w: 7.5, h: 5.4 });
    } else {
        slide.addShape(pptx.ShapeType.roundRect, { x: 0.8, y: 1.35, w: 7.5, h: 5.4, fill: { color: WHITE }, line: { color: 'CBD5E1', width: 1 }, rectRadius: 0.12 });
        slide.addText(`[Visual Diagram: ${path.basename(svgPath)}]`, { x: 1.0, y: 3.5, w: 7.1, h: 0.5, fontSize: 16, fontFace: 'Segoe UI', color: MUTED, align: 'center' });
    }

    // Right Area: Specification & Engineering Analysis Card
    slide.addShape(pptx.ShapeType.roundRect, { x: 8.5, y: 1.35, w: 4.0, h: 5.4, fill: { color: WHITE }, line: { color: metadata.cardColor || GOLD, width: 1.5 }, rectRadius: 0.12 });

    slide.addText(metadata.cardTitle, {
        x: 8.75, y: 1.55, w: 3.5, h: 0.4,
        fontSize: 15, fontFace: 'Segoe UI', color: metadata.cardColor || DARK_GOLD, bold: true
    });

    slide.addText(metadata.bullets.join('\n\n'), {
        x: 8.75, y: 2.05, w: 3.5, h: 4.4,
        fontSize: 11.5, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 17
    });

    return slide;
}

// Slide 4: Visual UML - Use Case Diagram
addVisualDiagramSlide(
    'Visual UML: Use Case Diagram',
    'UML Behavioral Modeling',
    path.join(__dirname, 'docs', 'diagrams', '01_use_case_diagram.svg'),
    {
        cardTitle: 'Use Case Architecture & Actors',
        cardColor: BLUE,
        bullets: [
            '• System Boundary: Encapsulates all 11 core use cases of the Wonder Land Restaurant System.',
            '• Primary Actors: Customer (External), Admin/Manager (Internal), Kitchen Chef, and Floor Host.',
            '• Core Use Cases: Browse Menu, Manage Cart, Place Order, Track Order, Table Booking, Menu CRUD, Order Dispatch.',
            '• Dependency Relationships: <<include>> link from Checkout to Process Payment; <<extend>> link to Dietary Category Filters.',
            '• Traceability: Maps directly to UI actions in index.html and admin.html.'
        ]
    }
);

// Slide 5: Use Case Specification - UC-05 Place Order (COD)
let s5 = createContentSlide('Use Case Specification: UC-05 Place Order (COD)', 'Formal Requirements Specification');

const uc05Rows = [
    [
        { text: 'Specification Field', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
        { text: 'Formal Engineering Specification Details', options: { bold: true, fill: { color: NAVY }, color: WHITE } }
    ],
    ['Use Case Identifier', 'UC-05: Place Food Order via Cash on Delivery (COD)'],
    ['Primary Actor', 'Customer (External Online Guest)'],
    ['Secondary Actors', 'Restaurant Kitchen Staff (Fulfillment), Delivery Courier (Cash Collector)'],
    ['Pre-Conditions', '1. Customer has selected >= 1 available dish in active cart.\n2. Delivery address and phone number are valid within the delivery radius.'],
    ['Trigger', 'Customer opens cart drawer, clicks "Proceed to Checkout", selects "Cash on Delivery", and clicks "Place Order Now".'],
    ['Main Success Flow (Happy Path)', '1. Customer reviews cart summary (Dishes, Subtotal, 14% VAT, $3 Delivery Fee).\n2. Customer submits Full Name, Mobile Phone, and Delivery Address in Checkout Modal.\n3. Customer selects Payment Option: "Cash on Delivery (COD)".\n4. System validates inputs and checks live inventory availability in RestaurantDataStore.\n5. System instantiates Order entity with unique ID (#WL-xxxx) and status "Pending".\n6. System flags payment as "COD - Collect Upon Handover".\n7. System clears customer active cart and saves order to LocalStorage.\n8. System renders Order Receipt with print action and opens Live Order Tracker.\n9. System broadcasts cross-tab storage event; Admin/Kitchen portal updates dispatch board.'],
    ['Alternative Flows & Exceptions', '4a. Required input missing: System flags empty input in red and halts submission.\n4b. Dish sold out: System alerts customer to remove unavailable dish before checkout.\n8a. Order cancellation: Customer can cancel while in Pending or Confirmed state.'],
    ['Post-Conditions', 'Order is committed to database; status is visible on customer live stepper; KOT queued in kitchen.']
];

s5.addTable(uc05Rows, {
    x: 0.8, y: 1.35, w: 11.7, h: 5.4,
    colW: [2.8, 8.9],
    fontSize: 10.5,
    fontFace: 'Segoe UI',
    border: { pt: 0.5, color: 'CBD5E1' },
    align: 'left',
    valign: 'middle'
});

// Slide 6: Visual UML - Class Diagram & Domain Structure
addVisualDiagramSlide(
    'Visual UML: Class Diagram & Domain Structure',
    'UML Structural Modeling',
    path.join(__dirname, 'docs', 'diagrams', '02_class_diagram.svg'),
    {
        cardTitle: 'Domain Model & OOP Relationships',
        cardColor: SUCCESS,
        bullets: [
            '• Abstract User Base: Common attributes (#id, #fullName, #email, #phone) inherited by Customer and Admin.',
            '• Order & OrderItem (Composition): Strong lifecycle ownership; Order contains 1..* OrderItem instances and calculates financial totals.',
            '• MenuItem & Category (Aggregation): Menu items belong to Category; items can be toggled as Available or Sold Out.',
            '• Polymorphic Payment Hierarchy: Abstract Payment class with concrete subclasses: CashPayment (COD), CreditCardPayment, DigitalWalletPayment.',
            '• Referential Integrity: TableReservation and Review models linked to Customer entity.'
        ]
    }
);

// Slide 7: Visual UML - Sequence Diagram (Checkout & COD Order)
addVisualDiagramSlide(
    'Visual UML: Sequence Diagram (Checkout & COD Order)',
    'Dynamic Interaction Modeling',
    path.join(__dirname, 'docs', 'diagrams', '03_sequence_order_food.svg'),
    {
        cardTitle: 'Checkout & COD Execution Flow',
        cardColor: BLUE,
        bullets: [
            '• Participating Lifelines: :Customer, :WebGUI, :CartController, :PaymentGateway, and :RestaurantDataStore.',
            '• Synchronous Messaging: selectItem() ➔ addItem() ➔ computeCartTotals() self-call updating subtotal, 14% tax, and delivery.',
            '• COD Verification: Customer selects COD; submitOrder(isCOD: true) validates delivery address and flags pending handover.',
            '• State Creation: Order persisted with status "Pending" and unique identifier (#WL-xxxx).',
            '• Real-Time Stepper: UI initializes live 5-stage tracker with polling query pollOrderStatus().'
        ]
    }
);

// Slide 8: Visual UML - Sequence Diagram (Admin Management & Excel)
addVisualDiagramSlide(
    'Visual UML: Sequence Diagram (Admin Management & Excel)',
    'Dynamic Interaction Modeling',
    path.join(__dirname, 'docs', 'diagrams', '05_sequence_admin_management.svg'),
    {
        cardTitle: 'Admin Portal & Excel Export Flow',
        cardColor: DARK_GOLD,
        bullets: [
            '• Participating Lifelines: :Admin, :AdminDashboardGUI, :AdminService, and :ExcelExportEngine.',
            '• PIN Authentication: enterAdminPin("admin123") verifies credentials and unlocks back-office telemetry.',
            '• State Machine Mutation: Admin updates order status (e.g., Pending ➔ "Cooking"); broadcasts cross-tab storage event.',
            '• 1-Click Excel Export: clickExportOrdersExcelBtn() triggers query to database, extracts active order records.',
            '• CSV Generation: Formats structured CSV with UTF-8 BOM, triggering browser file download "Wonder_Land_Orders_Report.csv".'
        ]
    }
);

// Slide 9: Visual UML - Activity Diagram (End-to-End Workflow)
addVisualDiagramSlide(
    'Visual UML: Activity Diagram (End-to-End Workflow)',
    'Business Process Modeling',
    path.join(__dirname, 'docs', 'diagrams', '06_activity_order_processing.svg'),
    {
        cardTitle: 'Swimlane Architecture & Flow',
        cardColor: PURPLE,
        bullets: [
            '• 4 Parallel Swimlanes: Customer Lane, Web Application (GUI) Lane, Payment Engine Lane, Kitchen & Dispatch Lane.',
            '• Customer Actions: Browse menu ➔ Select dishes ➔ Review cart ➔ Enter address ➔ Select COD or Card.',
            '• Decision Node: [Cash on Delivery] branches directly to instant order confirmation. [Card/Wallet] invokes gateway auth.',
            '• Fork Node: Concurrently triggers: Thread A: Notify customer with live tracker; Thread B: Print kitchen order ticket (KOT).',
            '• Merge Node: Food handover and physical COD collection complete the order lifecycle.'
        ]
    }
);

// Slide 10: Visual UML - State Machine Diagram (Order Lifecycle)
addVisualDiagramSlide(
    'Visual UML: State Machine Diagram (Order Lifecycle)',
    'Behavioral State Modeling',
    path.join(__dirname, 'docs', 'diagrams', '08_state_order_lifecycle.svg'),
    {
        cardTitle: 'State Transitions & Guard Rules',
        cardColor: DARK_GOLD,
        bullets: [
            '• State 1: [PENDING] - Initial state on checkout; KOT queued in kitchen; customer stepper at Node 1.',
            '• State 2: [CONFIRMED] - Kitchen accepts ticket; ingredients validated; customer stepper at Node 2.',
            '• State 3: [IN KITCHEN] - Cooking actively in progress; Cancellation guard permanently disabled.',
            '• State 4: [OUT FOR DELIVERY] - Handed to courier; en route to customer destination coordinates.',
            '• State 5: [DELIVERED] - Handover & COD payment complete; terminal final state.',
            '• Guard Condition: cancelOrder() permitted ONLY when status == Pending || Confirmed.'
        ]
    }
);

// Slide 11: Visual UML - Component Architecture Diagram
addVisualDiagramSlide(
    'Visual UML: Component Architecture Diagram',
    'System Structural Architecture',
    path.join(__dirname, 'docs', 'diagrams', '10_component_diagram.svg'),
    {
        cardTitle: 'Modular 3-Tier Architecture',
        cardColor: BLUE,
        bullets: [
            '• Presentation Subsystem: Customer Portal GUI, Admin Management GUI, Table Reservation Modal.',
            '• Application Logic Subsystem: Order Processing Engine, Menu Catalog Service, Table Allocation Service.',
            '• Special Services: Payment Strategy Gateway, Excel Exporter & Telemetry Engine (handles live CSV downloads).',
            '• Persistence Tier: LocalStorage Persistent Adapter with JSON serialization and Mock Demo Seeder.',
            '• Clean Separation of Concerns: Components communicate through well-defined JavaScript API interfaces.'
        ]
    }
);

// Slide 12: Visual UML - Deployment Diagram (Hardware & Topology)
addVisualDiagramSlide(
    'Visual UML: Deployment Diagram (Hardware & Topology)',
    'Physical & Network Architecture',
    path.join(__dirname, 'docs', 'diagrams', '11_deployment_diagram.svg'),
    {
        cardTitle: 'Hardware Nodes & Topology',
        cardColor: SLATE,
        bullets: [
            '• Node 1: Client Workstation / Mobile Device executing Web Browser Runtime (Chrome, Edge, Safari).',
            '• Browser Execution Environment: Holds JavaScript Virtual Machine, DOM Tree, CSSOM, and HTML5 LocalStorage Node.',
            '• Node 2: GitHub Pages / Web Hosting Server delivering static assets (HTML5, CSS3, JS, SVG, JPG).',
            '• Node 3: External CDN Node delivering FontAwesome vector icons and Google Web Fonts over HTTPS (Port 443).',
            '• Zero Server Overhead: Operates without backend runtime requirements; instant client-side execution.'
        ]
    }
);

// Slide 13: Visual UML - Entity-Relationship Diagram (ERD)
addVisualDiagramSlide(
    'Visual UML: Entity-Relationship Diagram (ERD)',
    'Relational Database Modeling',
    path.join(__dirname, 'docs', 'diagrams', '14_entity_relationship_diagram.svg'),
    {
        cardTitle: 'Database Schema & Cardinalities',
        cardColor: SUCCESS,
        bullets: [
            '• CUSTOMERS (1:N) ORDERS: One customer places multiple orders; FK: customer_id in ORDERS.',
            '• ORDERS (1:N) ORDER_ITEMS (N:1) MENU_ITEMS: Resolves M:N relationship between orders and dishes.',
            '• CATEGORIES (1:N) MENU_ITEMS: Categorizes dishes into Starters, Mains, Pizzas, Desserts; FK: category_id.',
            '• ORDERS (1:1) PAYMENTS: Stores payment method (COD, Card, Wallet), transaction date, amount, and status.',
            '• Primary & Foreign Keys: Fully normalized relational design adhering to 3rd Normal Form (3NF).'
        ]
    }
);

// Slide 14: System GUI Implementation - Customer Experience
let s14 = createContentSlide('System GUI Implementation: Customer Experience', 'GUI Implementation');
s14.addShape(pptx.ShapeType.roundRect, { x: 0.8, y: 1.35, w: 11.7, h: 5.4, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1.2 }, rectRadius: 0.15 });

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
    let y = 1.55 + row * 2.55;

    s14.addShape(pptx.ShapeType.roundRect, { x: x, y: y, w: 3.6, h: 2.35, fill: { color: LIGHT_BG }, line: { color: GOLD, width: 1.5 }, rectRadius: 0.12 });
    s14.addText(`${cg.icon} ${cg.title}`, { x: x + 0.2, y: y + 0.2, w: 3.2, h: 0.35, fontSize: 13, fontFace: 'Segoe UI', color: DARK_GOLD, bold: true });
    s14.addText(cg.desc, { x: x + 0.2, y: y + 0.6, w: 3.2, h: 1.55, fontSize: 11.5, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 18 });
});

// Slide 15: System GUI Implementation - Staff & Admin Portal with Excel Export
let s15 = createContentSlide('Staff & Admin Portal with Live Excel Export', 'GUI Implementation');
s15.addShape(pptx.ShapeType.roundRect, { x: 0.8, y: 1.35, w: 11.7, h: 5.4, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1.2 }, rectRadius: 0.15 });

const adminGuiCards = [
    { title: 'Security Gate PIN Access', icon: '🔒', desc: 'Protected by administrative credentials (default PIN: admin123) with session lock and unlock capabilities.' },
    { title: 'Real-Time KPI Dashboard', icon: '📊', desc: 'Live calculation of Total Sales Revenue, Total Orders Placed, Active Kitchen Queue, and Table Bookings.' },
    { title: '1-Click Excel (.csv) Export', icon: '📗', desc: 'Download complete structured spreadsheet with Order IDs, customer phones, addresses, line items, COD payments, and statuses.' },
    { title: 'Live Orders Dispatch Board', icon: '🧾', desc: 'Full dispatch table with customer info, address, items, and an inline status dropdown to advance the order state machine.' },
    { title: 'Menu Catalog CRUD', icon: '🍲', desc: 'Add new dishes, edit price/description/photos, delete items, and toggle availability (Available / Sold Out) in one click.' },
    { title: 'Table Reservations Control', icon: '🪑', desc: 'View party size and seating zone; action buttons to Seat arriving guests or Cancel/Free tables.' }
];

adminGuiCards.forEach((cg, idx) => {
    let col = idx % 3;
    let row = Math.floor(idx / 3);
    let x = 1.1 + col * 3.8;
    let y = 1.55 + row * 2.55;

    s15.addShape(pptx.ShapeType.roundRect, { x: x, y: y, w: 3.6, h: 2.35, fill: { color: LIGHT_BG }, line: { color: BLUE, width: 1.5 }, rectRadius: 0.12 });
    s15.addText(`${cg.icon} ${cg.title}`, { x: x + 0.2, y: y + 0.2, w: 3.2, h: 0.35, fontSize: 13, fontFace: 'Segoe UI', color: BLUE, bold: true });
    s15.addText(cg.desc, { x: x + 0.2, y: y + 0.6, w: 3.2, h: 1.55, fontSize: 11.5, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 18 });
});

// Slide 16: UML-to-Implementation Traceability Matrix
let s16 = createContentSlide('UML-to-Implementation Traceability Matrix', 'Verification & Compliance');
s16.addText('Proving that 100% of modeled UML interactions are physically realized and executable in the code:', {
    x: 0.8, y: 1.25, w: 11.7, h: 0.35,
    fontSize: 13, fontFace: 'Segoe UI', color: SLATE, italic: true
});

const traceRows = [
    [
        { text: 'UML Diagram Model', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
        { text: 'Code Implementation (File / Function / ID)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
        { text: 'Live GUI Verification in Application', options: { bold: true, fill: { color: NAVY }, color: WHITE } }
    ],
    ['Use Case Diagram (01)', 'app.js: renderDynamicMenu(), addToCart(), bookTable()', 'Live search (#menuSearchInput), category tabs, cart, reservation modal'],
    ['Use Case Spec: UC-05 Place Order (COD)', 'app.js: placeOrder(customerInfo, "COD")', 'Checkout modal (#checkoutModal) with radio COD selection & receipt modal'],
    ['Class Diagram (02)', 'app.js: classes Order, OrderItem, MenuItem, Payment', 'Domain object instantiation, line-item subtotaling, 14% tax computation'],
    ['Sequence: Checkout & COD (03)', 'app.js: placeOrder(), Order.calculateTotals()', 'Checkout validation, COD policy flag, unique ID (#WL-xxxx) generation'],
    ['Sequence: Admin & Excel (05)', 'admin.js: handleOrderStatusChange(), exportOrdersToExcel()', 'Inline status dropdown updating stepper live + green Excel export button'],
    ['Activity: End-to-End Flow (06)', 'app.js & admin.js: full customer-to-kitchen lifecycle', 'Cart checkout branching to COD ➔ Kitchen dispatch ➔ Handover'],
    ['State Machine Diagram (08)', 'app.js: renderOrderTracker(), cancelOrder()', 'Animated glowing 5-node stepper with cancellation locking in Cooking state'],
    ['Component Architecture (10)', 'app.js, admin.js, style.css, admin.css modular layers', 'Client Web GUI, application logic services, LocalStorage adapter'],
    ['Deployment Diagram (11)', 'Single-page web distribution topology', 'Works offline or hosted on GitHub Pages with zero backend setup'],
    ['Entity-Relationship Diagram (14)', 'HTML5 LocalStorage Key: WONDERLAND_SYSTEM_DB_V1', 'Structured JSON relational entities: orders, menu, reservations, reviews']
];

s16.addTable(traceRows, {
    x: 0.8, y: 1.6, w: 11.7, h: 5.2,
    colW: [2.8, 4.4, 4.5],
    fontSize: 10,
    fontFace: 'Segoe UI',
    border: { pt: 0.5, color: 'CBD5E1' },
    align: 'left',
    valign: 'middle'
});

// Slide 17: Testing & Quality Assurance
let s17 = createContentSlide('Testing, Verification & Quality Assurance', 'Quality Assurance');
const testCards = [
    { title: 'Functional Unit Testing', desc: 'Verified cart calculations (Subtotal + 14% VAT + $3 Delivery Fee). Verified that reducing item quantity to zero removes the line item automatically.' },
    { title: 'State Transition Testing', desc: 'Verified that updating order status in admin.html (e.g. from Confirmed to "In Kitchen") immediately updates the open tracker in index.html via storage events.' },
    { title: 'Guard Condition Testing', desc: 'Tested cancellation rules: "Cancel Order" button is enabled in Pending and Confirmed states, and safely disabled/hidden once Cooking has started.' },
    { title: 'Excel Export Testing', desc: 'Verified that clicking "Export to Excel (.csv)" in admin.html generates a UTF-8 BOM CSV that opens seamlessly in Microsoft Excel with Arabic and English characters.' }
];

testCards.forEach((tc, idx) => {
    let col = idx % 2;
    let row = Math.floor(idx / 2);
    let x = 0.8 + col * 5.9;
    let y = 1.35 + row * 2.75;

    s17.addShape(pptx.ShapeType.roundRect, { x: x, y: y, w: 5.7, h: 2.5, fill: { color: WHITE }, line: { color: SUCCESS, width: 1.5 }, rectRadius: 0.15 });
    s17.addText(`✅ ${tc.title}`, { x: x + 0.3, y: y + 0.25, w: 5.1, h: 0.35, fontSize: 15, fontFace: 'Segoe UI', color: SUCCESS, bold: true });
    s17.addText(tc.desc, { x: x + 0.3, y: y + 0.7, w: 5.1, h: 1.6, fontSize: 12.5, fontFace: 'Segoe UI', color: SLATE, lineSpacing: 20 });
});

// Slide 18: Conclusion & Summary
let s18 = pptx.addSlide();
s18.background = { color: NAVY };

s18.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.35, h: 7.5, fill: { color: GOLD } });

s18.addText('PROJECT CONCLUSION & SUMMARY', {
    x: 1.0, y: 1.0, w: 11.3, h: 0.5,
    fontSize: 16, fontFace: 'Segoe UI', color: GOLD, bold: true, letterSpacing: 2
});

s18.addText('A Complete, End-to-End Software Engineering Solution', {
    x: 1.0, y: 1.5, w: 11.3, h: 0.8,
    fontSize: 28, fontFace: 'Segoe UI', color: WHITE, bold: true
});

s18.addShape(pptx.ShapeType.roundRect, { x: 1.0, y: 2.5, w: 11.3, h: 3.8, fill: { color: SLATE }, line: { color: GOLD, width: 1.5 }, rectRadius: 0.15 });

const summaryPoints = [
    '🎯 Complete Requirements Fulfillment: Covers all requested UML diagrams (Use Case, Class, Sequences, Activity, State, Component, Deployment, ERD).',
    '📐 Academic Excellence: Formal Use Case Specification (UC-05 Place Order via COD) with complete pre/post conditions and exception flows.',
    '💻 Practical GUI Verification: 100% of modeled diagrams are physically realized in clean semantic HTML5, CSS3, and ES6 JavaScript.',
    '📊 Administrative Power: Includes live KPI telemetry, kitchen order dispatch, menu catalog CRUD, and 1-Click Excel (.csv) export.',
    '⚡ Live Cloud Deployment: Hosted on GitHub Pages: https://radwasengr.github.io/wonder-land-restaurant/'
];

s18.addText(summaryPoints.join('\n\n'), {
    x: 1.4, y: 2.8, w: 10.5, h: 3.2,
    fontSize: 13, fontFace: 'Segoe UI', color: WHITE, lineSpacing: 22
});

s18.addText('Thank You! Questions & Discussion Welcomed.', {
    x: 1.0, y: 6.6, w: 11.3, h: 0.4,
    fontSize: 16, fontFace: 'Segoe UI', color: GOLD, bold: true, align: 'center'
});

// Save Presentation
const outPptxPath = path.join(__dirname, 'presentation', 'Wonder_Land_Restaurant_Project_Presentation.pptx');
pptx.writeFile({ fileName: outPptxPath }).then(fileName => {
    console.log(`PowerPoint Presentation created successfully at: ${fileName}`);
}).catch(err => {
    console.error('Error generating PowerPoint:', err);
});
