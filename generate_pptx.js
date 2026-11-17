const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const pptx = new pptxgen();

// Enforce exact 16:9 widescreen dimensions (13.333 x 7.5 inches) for WPS Office, Microsoft PowerPoint, and Keynote
pptx.defineLayout({ name: 'WIDESCREEN_16_9', width: 13.333, height: 7.5 });
pptx.layout = 'WIDESCREEN_16_9';

pptx.author = 'Wonder Land Software Engineering Team';
pptx.company = 'Wonder Land Restaurant & Culinary Art';
pptx.title = 'Wonder Land Restaurant Management System - Software Engineering & UML Architecture';

// Color Palette
const NAVY = '0A1128';          // Deep luxury midnight blue
const SLATE_DARK = '1C2541';    // Dark slate card surface
const SLATE_LIGHT = '3A506B';   // Medium slate for badges
const GOLD = 'E4B95B';          // Gourmet warm gold
const GOLD_LIGHT = 'FDF6E2';    // Pale warm gold for highlight cards
const GOLD_AMBER = 'D97706';    // Deep amber for warnings and triggers
const WHITE = 'FFFFFF';
const LIGHT_BG = 'F8FAFC';      // Soft alabaster background
const BORDER_LIGHT = 'E2E8F0';
const TEXT_DARK = '0F172A';
const TEXT_MUTED = '64748B';
const SUCCESS = '10B981';
const BLUE = '2563EB';
const PURPLE = '7C3AED';

const logoPath = path.join(__dirname, 'img', 'logo.png');
const homeBgPath = path.join(__dirname, 'img', 'home_bg.jpeg');
const aboutImgPath = path.join(__dirname, 'img', 'about_img.png');
const margheritaPath = path.join(__dirname, 'img', 'margherita_authentic.jpg');

// ===========================================================================
// Helper: Create Standard Content Slide with Professional Header & Footer
// ===========================================================================
function createSlide(title, categoryBadge, darkTheme = false) {
    let slide = pptx.addSlide();

    // 1. Full-Bleed Background Rectangle
    slide.addShape(pptx.ShapeType.rect, {
        x: 0, y: 0, w: 13.333, h: 7.5,
        fill: { color: darkTheme ? NAVY : LIGHT_BG }
    });

    // 2. Elegant Top Header Banner
    slide.addShape(pptx.ShapeType.rect, {
        x: 0, y: 0, w: 13.333, h: 1.15,
        fill: { color: NAVY }
    });
    slide.addShape(pptx.ShapeType.rect, {
        x: 0, y: 1.12, w: 13.333, h: 0.04,
        fill: { color: GOLD }
    });

    // Logo in Header
    if (fs.existsSync(logoPath)) {
        slide.addImage({ path: logoPath, x: 0.6, y: 0.18, w: 0.8, h: 0.8 });
    }

    // Category Pill / Tag
    slide.addText(categoryBadge.toUpperCase(), {
        x: 1.6, y: 0.22, w: 8.5, h: 0.28,
        fontSize: 10, fontFace: 'Segoe UI', color: GOLD, bold: true, letterSpacing: 1.5
    });

    // Title
    slide.addText(title, {
        x: 1.6, y: 0.48, w: 10.5, h: 0.55,
        fontSize: 21, fontFace: 'Segoe UI', color: WHITE, bold: true
    });

    // System Branding Badge in Top Right
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 10.8, y: 0.35, w: 1.9, h: 0.45,
        fill: { color: SLATE_DARK }, line: { color: GOLD, width: 1 }, rectRadius: 0.1
    });
    slide.addText('WONDER LAND', {
        x: 10.8, y: 0.45, w: 1.9, h: 0.25,
        fontSize: 10, fontFace: 'Segoe UI', color: GOLD, bold: true, align: 'center', letterSpacing: 1
    });

    // Footer
    slide.addShape(pptx.ShapeType.line, {
        x: 0.6, y: 7.05, w: 12.133, h: 0,
        line: { color: darkTheme ? '1E293B' : BORDER_LIGHT, width: 1 }
    });
    slide.addText('Wonder Land Restaurant • Software Engineering & UML System Architecture Specification', {
        x: 0.6, y: 7.12, w: 9.0, h: 0.3,
        fontSize: 9.5, fontFace: 'Segoe UI', color: darkTheme ? '64748B' : TEXT_MUTED
    });
    slide.addText('Confidential • Academic Deliverable', {
        x: 9.6, y: 7.12, w: 3.1, h: 0.3,
        fontSize: 9.5, fontFace: 'Segoe UI', color: darkTheme ? '64748B' : TEXT_MUTED, align: 'right'
    });

    return slide;
}

// ===========================================================================
// Helper: Create Visual Diagram Showcase Slide
// ===========================================================================
function addDiagramSlide(title, category, svgFilename, analysis) {
    let slide = createSlide(title, category, false);
    const svgPath = path.join(__dirname, 'docs', 'diagrams', svgFilename);

    // Left Stage: Large High-Resolution Diagram Container
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.6, y: 1.35, w: 8.5, h: 5.5,
        fill: { color: WHITE }, line: { color: BORDER_LIGHT, width: 1.2 }, rectRadius: 0.12
    });

    if (fs.existsSync(svgPath)) {
        slide.addImage({ path: svgPath, x: 0.7, y: 1.45, w: 8.3, h: 5.3 });
    }

    // Right Stage: Executive Engineering & Traceability Card
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 9.25, y: 1.35, w: 3.48, h: 5.5,
        fill: { color: WHITE }, line: { color: analysis.accentColor || GOLD, width: 1.5 }, rectRadius: 0.12
    });

    // Card Header Pill
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 9.45, y: 1.55, w: 3.08, h: 0.45,
        fill: { color: analysis.accentColor ? analysis.accentColor : SLATE_DARK }, rectRadius: 0.08
    });
    slide.addText(analysis.badge || 'ENGINEERING SPECIFICATION', {
        x: 9.45, y: 1.62, w: 3.08, h: 0.3,
        fontSize: 10.5, fontFace: 'Segoe UI', color: WHITE, bold: true, align: 'center', letterSpacing: 1
    });

    // Card Title
    slide.addText(analysis.title, {
        x: 9.45, y: 2.15, w: 3.08, h: 0.5,
        fontSize: 14.5, fontFace: 'Segoe UI', color: TEXT_DARK, bold: true
    });

    // Key Bullet Points
    slide.addText(analysis.bullets.join('\n\n'), {
        x: 9.45, y: 2.7, w: 3.08, h: 3.3,
        fontSize: 11, fontFace: 'Segoe UI', color: TEXT_DARK, lineSpacing: 16
    });

    // Live Code Traceability Footer Tag inside card
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 9.45, y: 6.15, w: 3.08, h: 0.55,
        fill: { color: GOLD_LIGHT }, line: { color: GOLD, width: 1 }, rectRadius: 0.08
    });
    slide.addText(`💻 Code: ${analysis.codeFile}`, {
        x: 9.55, y: 6.25, w: 2.88, h: 0.35,
        fontSize: 10, fontFace: 'Consolas', color: GOLD_AMBER, bold: true
    });

    return slide;
}

// ===========================================================================
// SLIDE 1: Title Slide (Luxury Gourmet Dark Theme)
// ===========================================================================
let s1 = pptx.addSlide();
s1.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: NAVY } });

// Background Image Accent on Right Side
if (fs.existsSync(homeBgPath)) {
    s1.addImage({ path: homeBgPath, x: 7.0, y: 0, w: 6.333, h: 7.5 });
    // Gradient overlay box
    s1.addShape(pptx.ShapeType.rect, {
        x: 7.0, y: 0, w: 6.333, h: 7.5,
        fill: { color: NAVY, transparency: 35 }
    });
}

// Golden Decorative Left Border
s1.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.35, h: 7.5, fill: { color: GOLD } });

// Logo on Left
if (fs.existsSync(logoPath)) {
    s1.addImage({ path: logoPath, x: 1.0, y: 0.9, w: 1.5, h: 1.5 });
}

// Brand Badge
s1.addShape(pptx.ShapeType.roundRect, {
    x: 2.7, y: 1.35, w: 4.8, h: 0.45,
    fill: { color: SLATE_DARK }, line: { color: GOLD, width: 1.2 }, rectRadius: 0.1
});
s1.addText('⭐ FINE DINING & SOFTWARE ENGINEERING SYSTEM', {
    x: 2.7, y: 1.45, w: 4.8, h: 0.25,
    fontSize: 10.5, fontFace: 'Segoe UI', color: GOLD, bold: true, align: 'center', letterSpacing: 1.5
});

// Title & Subtitle
s1.addText('Wonder Land Restaurant', {
    x: 1.0, y: 2.7, w: 6.8, h: 1.0,
    fontSize: 38, fontFace: 'Segoe UI', color: WHITE, bold: true
});
s1.addText('Integrated Food Ordering, Table Reservation & Back-Office Management System', {
    x: 1.0, y: 3.75, w: 6.5, h: 0.9,
    fontSize: 18, fontFace: 'Segoe UI', color: GOLD, bold: true, breakLine: true
});
s1.addText('Complete UML Software Design Document, Use Case Specifications & Fully Realized GUI Implementation', {
    x: 1.0, y: 4.8, w: 6.5, h: 0.6,
    fontSize: 13, fontFace: 'Segoe UI', color: '94A3B8'
});

// 4 Creative Metric Pills at the bottom
const pills = [
    { text: '📐 10 UML Models', color: BLUE },
    { text: '💳 COD & Multi-Payment', color: GOLD_AMBER },
    { text: '📍 Live 5-Stage Stepper', color: PURPLE },
    { text: '📊 1-Click Excel Audit', color: SUCCESS }
];

pills.forEach((p, idx) => {
    let px = 1.0 + idx * 2.85;
    s1.addShape(pptx.ShapeType.roundRect, {
        x: px, y: 5.75, w: 2.65, h: 0.8,
        fill: { color: SLATE_DARK }, line: { color: p.color, width: 1.5 }, rectRadius: 0.1
    });
    s1.addText(p.text, {
        x: px, y: 5.95, w: 2.65, h: 0.4,
        fontSize: 12, fontFace: 'Segoe UI', color: WHITE, bold: true, align: 'center'
    });
});

// ===========================================================================
// SLIDE 2: Executive Summary & Project Motivation
// ===========================================================================
let s2 = createSlide('Executive Summary & Project Motivation', 'Project Initiation & Domain');

// Card 1: Restaurant Heritage & Food Visual
s2.addShape(pptx.ShapeType.roundRect, {
    x: 0.6, y: 1.4, w: 3.8, h: 5.4,
    fill: { color: WHITE }, line: { color: GOLD, width: 1.5 }, rectRadius: 0.12
});
if (fs.existsSync(aboutImgPath)) {
    s2.addImage({ path: aboutImgPath, x: 0.75, y: 1.55, w: 3.5, h: 2.1 });
}
s2.addShape(pptx.ShapeType.roundRect, {
    x: 0.8, y: 3.8, w: 3.4, h: 0.35,
    fill: { color: NAVY }, rectRadius: 0.08
});
s2.addText('🍽️ CULINARY EXCELLENCE', {
    x: 0.8, y: 3.86, w: 3.4, h: 0.22,
    fontSize: 10.5, fontFace: 'Segoe UI', color: GOLD, bold: true, align: 'center', letterSpacing: 1
});
s2.addText([
    '• 20+ Years Heritage: Wood-fired Neapolitan pizzas, prime steaks, artisan seafood pasta.',
    '• 3 Dining Zones: Seaside Terrace, VIP Private Booths, and Grand Hall.',
    '• Digital Modernization: Connecting gourmet dining with seamless home delivery.'
].join('\n\n'), { x: 0.8, y: 4.3, w: 3.4, h: 2.3, fontSize: 11, fontFace: 'Segoe UI', color: TEXT_DARK, lineSpacing: 16 });

// Card 2: Traditional Dining Pain Points
s2.addShape(pptx.ShapeType.roundRect, {
    x: 4.75, y: 1.4, w: 3.8, h: 5.4,
    fill: { color: WHITE }, line: { color: 'FCA5A5', width: 1.2 }, rectRadius: 0.12
});
s2.addShape(pptx.ShapeType.roundRect, {
    x: 4.95, y: 1.6, w: 3.4, h: 0.4,
    fill: { color: 'DC2626' }, rectRadius: 0.08
});
s2.addText('🚨 TRADITIONAL PAIN POINTS', {
    x: 4.95, y: 1.68, w: 3.4, h: 0.25,
    fontSize: 11, fontFace: 'Segoe UI', color: WHITE, bold: true, align: 'center', letterSpacing: 1
});
s2.addText([
    '• Manual Phone Reservations: Lead to double bookings, unrecorded preferences, and lost guest history.',
    '• Blind Food Tracking: Customers have no real-time visibility into whether their dish is in prep or dispatched.',
    '• Static Paper Menus: Inability to instantly reflect sold-out items or adjust seasonal chef prices.',
    '• Zero Financial Audits: Manual pen-and-paper order books prevent automated sales and tax analytics.'
].join('\n\n'), { x: 4.95, y: 2.2, w: 3.4, h: 4.4, fontSize: 11.5, fontFace: 'Segoe UI', color: TEXT_DARK, lineSpacing: 17 });

// Card 3: The Wonder Land Digital Platform
s2.addShape(pptx.ShapeType.roundRect, {
    x: 8.9, y: 1.4, w: 3.8, h: 5.4,
    fill: { color: WHITE }, line: { color: GOLD, width: 1.5 }, rectRadius: 0.12
});
s2.addShape(pptx.ShapeType.roundRect, {
    x: 9.1, y: 1.6, w: 3.4, h: 0.4,
    fill: { color: GOLD_AMBER }, rectRadius: 0.08
});
s2.addText('✨ THE WONDER LAND SOLUTION', {
    x: 9.1, y: 1.68, w: 3.4, h: 0.25,
    fontSize: 11, fontFace: 'Segoe UI', color: WHITE, bold: true, align: 'center', letterSpacing: 1
});
s2.addText([
    '• Frictionless Customer Experience: Dynamic keyword search, category tabs, cart drawer, and Cash on Delivery (COD).',
    '• Visual Order State Machine: Real-time 5-stage tracking (Pending ➔ Confirmed ➔ Cooking ➔ Delivery ➔ Completed).',
    '• Automated Table Reservations: Instant zone and time-slot booking with live host synchronization.',
    '• Back-Office Management Hub: Menu CRUD, kitchen ticket queue, and 1-Click Excel (.csv) report export.'
].join('\n\n'), { x: 9.1, y: 2.2, w: 3.4, h: 4.4, fontSize: 11.5, fontFace: 'Segoe UI', color: TEXT_DARK, lineSpacing: 17 });

// ===========================================================================
// SLIDE 3: System Stakeholders & Operational Actors
// ===========================================================================
let s3 = createSlide('Operational Actors & Stakeholder Ecosystem', 'Requirements Engineering');

const actorsList = [
    {
        title: 'Customer / Online Guest', icon: '👤', color: BLUE,
        role: 'Primary External Actor',
        duties: 'Explores culinary catalog, manages cart quantities, places orders with Cash on Delivery (COD) or Card, monitors live status on 5-node stepper, and books dining tables.'
    },
    {
        title: 'Restaurant Admin / Manager', icon: '🛡️', color: GOLD_AMBER,
        role: 'System Management Actor',
        duties: 'Authenticates via secure PIN (admin123), controls menu catalog (Full CRUD), updates dish availability (Available / Sold Out), and exports Excel audit reports.'
    },
    {
        title: 'Kitchen Staff / Executive Chef', icon: '👨‍🍳', color: SUCCESS,
        role: 'Fulfillment & Production Actor',
        duties: 'Inspects live order ticket queue, transitions orders from "Confirmed" to "In Kitchen" (Cooking actively), and packs orders for delivery dispatch.'
    },
    {
        title: 'Delivery Courier & Floor Host', icon: '🚚', color: PURPLE,
        role: 'Field & Logistics Actor',
        duties: 'Courier delivers meals and collects Cash on Delivery (COD). Floor host seats arriving guests in booked dining zones (Main Hall, Seaside, VIP).'
    }
];

actorsList.forEach((act, idx) => {
    let col = idx % 2;
    let row = Math.floor(idx / 2);
    let x = 0.6 + col * 6.2;
    let y = 1.45 + row * 2.75;

    s3.addShape(pptx.ShapeType.roundRect, {
        x: x, y: y, w: 5.9, h: 2.5,
        fill: { color: WHITE }, line: { color: act.color, width: 1.5 }, rectRadius: 0.12
    });

    s3.addShape(pptx.ShapeType.roundRect, {
        x: x + 0.3, y: y + 0.25, w: 5.3, h: 0.45,
        fill: { color: act.color }, rectRadius: 0.08
    });
    s3.addText(`${act.icon} Actor: ${act.title}`, {
        x: x + 0.4, y: y + 0.32, w: 5.1, h: 0.3,
        fontSize: 13.5, fontFace: 'Segoe UI', color: WHITE, bold: true
    });

    s3.addText(`Role Scope: ${act.role}`, {
        x: x + 0.3, y: y + 0.8, w: 5.3, h: 0.3,
        fontSize: 11, fontFace: 'Segoe UI', color: act.color, bold: true
    });

    s3.addText(act.duties, {
        x: x + 0.3, y: y + 1.15, w: 5.3, h: 1.2,
        fontSize: 11.5, fontFace: 'Segoe UI', color: TEXT_DARK, lineSpacing: 17
    });
});

// ===========================================================================
// SLIDE 4: Layered Architecture & Technology Foundations
// ===========================================================================
let s4 = createSlide('Layered System Architecture & Technology Stack', 'System Architecture');

const archTiers = [
    {
        title: '1. Presentation Layer (Client Web GUI)',
        tech: 'Semantic HTML5 • CSS3 Custom Properties (:root) • Responsive Flex/Grid • FontAwesome 6',
        desc: 'Delivers a responsive user experience across desktop, tablet, and mobile screens. Includes interactive search filters, sliding cart drawer, modal dialogs, and glowing CSS status steppers.'
    },
    {
        title: '2. Application & Controller Engine',
        tech: 'Vanilla ES6+ JavaScript • Event-Driven Architecture • State Machine • Tax/Total Calculator',
        desc: 'Executes core restaurant business rules: cart operations, 14% VAT calculation, flat $3 delivery fee, inventory validation, PIN authentication, and live multi-tab synchronization.'
    },
    {
        title: '3. Persistence & Reporting Engine',
        tech: 'HTML5 LocalStorage Engine • JSON Object Serialization • Excel UTF-8 BOM CSV Exporter',
        desc: 'Zero-database lightweight client storage guaranteeing persistence across refreshes. Features automated initial seed data and 1-Click Excel spreadsheet generation for financial audits.'
    }
];

archTiers.forEach((tier, i) => {
    s4.addShape(pptx.ShapeType.roundRect, {
        x: 0.6, y: 1.45 + i * 1.8, w: 12.133, h: 1.6,
        fill: { color: WHITE }, line: { color: i === 0 ? BLUE : (i === 1 ? GOLD_AMBER : SUCCESS), width: 1.5 }, rectRadius: 0.12
    });

    s4.addText(tier.title, {
        x: 0.9, y: 1.6 + i * 1.8, w: 11.5, h: 0.35,
        fontSize: 15, fontFace: 'Segoe UI', color: i === 0 ? BLUE : (i === 1 ? GOLD_AMBER : SUCCESS), bold: true
    });
    s4.addText(`Technologies: ${tier.tech}`, {
        x: 0.9, y: 1.95 + i * 1.8, w: 11.5, h: 0.3,
        fontSize: 11.5, fontFace: 'Segoe UI', color: TEXT_MUTED, bold: true
    });
    s4.addText(tier.desc, {
        x: 0.9, y: 2.3 + i * 1.8, w: 11.5, h: 0.65,
        fontSize: 11.5, fontFace: 'Segoe UI', color: TEXT_DARK
    });
});

// ===========================================================================
// SLIDE 5: Visual UML - Use Case Diagram
// ===========================================================================
addDiagramSlide(
    'Visual UML: Use Case Diagram',
    'UML Behavioral Modeling',
    '01_use_case_diagram.svg',
    {
        badge: 'UML USE CASE MODEL',
        accentColor: BLUE,
        title: 'Functional Boundary & Actor Goals',
        bullets: [
            '• System Boundary: Encompasses all 11 functional use cases of the restaurant ecosystem.',
            '• Primary Actors: Customer (External Guest), Admin/Manager (Internal), Chef, and Floor Host.',
            '• Core Use Cases: Browse Menu, Manage Cart, Place Order, Track Order, Table Booking, Menu CRUD, Order Dispatch.',
            '• <<include>> Relationship: UC04 (Checkout) strictly includes UC05 (Process Payment).',
            '• <<extend>> Relationship: UC01 (Browse Menu) extends UC02 (Dietary Category Filter).'
        ],
        codeFile: 'index.html, admin.html, app.js'
    }
);

// ===========================================================================
// SLIDE 6: Use Case Specification - UC-05 Place Order (COD)
// ===========================================================================
let s6 = createSlide('Use Case Specification: UC-05 Place Order (COD)', 'Formal Requirements Specification');

const uc05Rows = [
    [
        { text: 'Specification Field', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
        { text: 'Formal Engineering Specification Details', options: { bold: true, fill: { color: NAVY }, color: WHITE } }
    ],
    ['Use Case Identifier', 'UC-05: Place Food Order via Cash on Delivery (COD)'],
    ['Primary Actor', 'Customer (External Online Guest)'],
    ['Secondary Actors', 'Restaurant Kitchen Staff (Fulfillment), Delivery Courier (Cash Collector)'],
    ['Pre-Conditions', '1. Customer has selected >= 1 available dish in active cart.\n2. Delivery address and mobile phone are valid within restaurant delivery radius.'],
    ['Trigger', 'Customer opens cart drawer, clicks "Proceed to Checkout", selects "Cash on Delivery", and clicks "Place Order Now".'],
    ['Main Success Flow (10 Steps)', '1. Customer reviews cart summary (Dishes, Subtotal, 14% VAT, $3 Delivery Fee).\n2. Customer submits Full Name, Mobile Phone, and Delivery Address in Checkout Modal.\n3. Customer selects Payment Option: "Cash on Delivery (COD)".\n4. System validates inputs and checks live inventory availability in RestaurantDataStore.\n5. System instantiates Order entity with unique ID (#WL-xxxx) and status "Pending".\n6. System flags payment as "COD - Collect Upon Physical Handover".\n7. System clears customer active cart and saves order to LocalStorage.\n8. System renders Order Receipt with print action and opens Live Order Tracker.\n9. System broadcasts cross-tab storage event; Admin/Kitchen portal updates dispatch board.\n10. Delivery Courier collects cash upon physical food delivery and marks status "Delivered".'],
    ['Alternative Flows & Exceptions', '4a. Required input missing: System highlights empty fields and halts submission.\n4b. Dish sold out: System alerts customer to remove unavailable dish before checkout.\n8a. Order cancellation: Customer can cancel while in Pending or Confirmed state.'],
    ['Post-Conditions', 'Order is committed to database; status is visible on customer live stepper; KOT queued in kitchen.']
];

s6.addTable(uc05Rows, {
    x: 0.6, y: 1.35, w: 12.133, h: 5.5,
    colW: [2.6, 9.533],
    fontSize: 10.5,
    fontFace: 'Segoe UI',
    border: { pt: 0.5, color: BORDER_LIGHT },
    align: 'left',
    valign: 'middle'
});

// ===========================================================================
// SLIDE 7: Visual UML - Class Diagram & Domain Structure
// ===========================================================================
addDiagramSlide(
    'Visual UML: Class Diagram & Domain Structure',
    'UML Structural Modeling',
    '02_class_diagram.svg',
    {
        badge: 'UML DOMAIN CLASS MODEL',
        accentColor: SUCCESS,
        title: 'OOP Architecture & Entity Relations',
        bullets: [
            '• Abstract User Base: Common attributes (#id, #fullName, #email, #phone) inherited by Customer and Admin.',
            '• Order & OrderItem (Composition): Order owns 1..* OrderItem instances and calculates financial totals (Subtotal, VAT, Delivery).',
            '• MenuItem & Category (Aggregation): Menu items belong to Category; items can be toggled as Available or Sold Out.',
            '• Polymorphic Payment Hierarchy: Abstract Payment class extended by CashPayment (COD), CreditCardPayment, DigitalWalletPayment.',
            '• Referential Integrity: TableReservation and Review models linked to Customer entity.'
        ],
        codeFile: 'app.js: class Order, OrderItem, MenuItem'
    }
);

// ===========================================================================
// SLIDE 8: Visual UML - Sequence Diagram (Checkout & COD Order)
// ===========================================================================
addDiagramSlide(
    'Visual UML: Sequence Diagram (Checkout & COD Order)',
    'Dynamic Interaction Modeling',
    '03_sequence_order_food.svg',
    {
        badge: 'INTERACTION SEQUENCE',
        accentColor: BLUE,
        title: 'Customer Checkout & COD Lifelines',
        bullets: [
            '• Participating Lifelines: :Customer, :WebGUI, :CartController, :PaymentGateway, and :RestaurantDataStore.',
            '• Synchronous Messaging: selectItem() ➔ addItem() ➔ computeCartTotals() self-call calculating subtotal, 14% tax, and delivery.',
            '• COD Verification: Customer selects COD; submitOrder(isCOD: true) validates address and flags pending physical handover.',
            '• State Creation: Order persisted with status "Pending" and unique identifier (#WL-xxxx).',
            '• Real-Time Stepper: UI initializes live 5-stage tracker with polling query pollOrderStatus().'
        ],
        codeFile: 'app.js: placeOrder(), renderOrderTracker()'
    }
);

// ===========================================================================
// SLIDE 9: Visual UML - Sequence Diagram (Admin Management & Excel)
// ===========================================================================
addDiagramSlide(
    'Visual UML: Sequence Diagram (Admin Management & Excel)',
    'Dynamic Interaction Modeling',
    '05_sequence_admin_management.svg',
    {
        badge: 'INTERACTION SEQUENCE',
        accentColor: GOLD_AMBER,
        title: 'Admin Hub & Live Excel Export',
        bullets: [
            '• Participating Lifelines: :Admin, :AdminDashboardGUI, :AdminService, and :ExcelExportEngine.',
            '• PIN Authentication: enterAdminPin("admin123") verifies credentials and unlocks back-office telemetry.',
            '• State Machine Mutation: Admin updates order status (e.g., Pending ➔ "Cooking"); broadcasts cross-tab storage event.',
            '• 1-Click Excel Export: clickExportOrdersExcelBtn() queries database, extracts active order records.',
            '• CSV Generation: Formats structured CSV with UTF-8 BOM, triggering browser file download "Wonder_Land_Orders_Report.csv".'
        ],
        codeFile: 'admin.js: handleOrderStatusChange(), exportToExcel()'
    }
);

// ===========================================================================
// SLIDE 10: Visual UML - Activity Diagram (End-to-End Workflow)
// ===========================================================================
addDiagramSlide(
    'Visual UML: Activity Diagram (End-to-End Workflow)',
    'Business Process Modeling',
    '06_activity_order_processing.svg',
    {
        badge: 'ACTIVITY SWIMLANES',
        accentColor: PURPLE,
        title: 'Customer-to-Kitchen Workflow',
        bullets: [
            '• 4 Parallel Swimlanes: Customer Lane, Web Application (GUI) Lane, Payment Engine Lane, Kitchen & Dispatch Lane.',
            '• Customer Actions: Browse menu ➔ Select dishes ➔ Review cart ➔ Enter address ➔ Select COD or Card.',
            '• Decision Node: [Cash on Delivery] branches directly to instant order confirmation. [Card/Wallet] invokes gateway auth.',
            '• Fork Node: Concurrently triggers: Thread A: Notify customer with live tracker; Thread B: Print kitchen order ticket (KOT).',
            '• Merge Node: Food handover and physical COD collection complete the order lifecycle.'
        ],
        codeFile: 'app.js, admin.js, style.css'
    }
);

// ===========================================================================
// SLIDE 11: Visual UML - State Machine Diagram (Order Lifecycle)
// ===========================================================================
addDiagramSlide(
    'Visual UML: State Machine Diagram (Order Lifecycle)',
    'Behavioral State Modeling',
    '08_state_order_lifecycle.svg',
    {
        badge: 'BEHAVIORAL STATE MACHINE',
        accentColor: GOLD_AMBER,
        title: 'Order States & Cancellation Guards',
        bullets: [
            '• State 1: [PENDING] - Initial state on checkout; KOT queued in kitchen; customer stepper at Node 1.',
            '• State 2: [CONFIRMED] - Kitchen accepts ticket; ingredients validated; customer stepper at Node 2.',
            '• State 3: [IN KITCHEN] - Cooking actively in progress; Cancellation guard permanently disabled.',
            '• State 4: [OUT FOR DELIVERY] - Handed to courier; en route to customer destination coordinates.',
            '• State 5: [DELIVERED] - Handover & COD payment complete; terminal final state.',
            '• Guard Condition: cancelOrder() permitted ONLY when status == Pending || Confirmed.'
        ],
        codeFile: 'app.js: renderOrderTracker(), cancelOrder()'
    }
);

// ===========================================================================
// SLIDE 12: Visual UML - Component Architecture Diagram
// ===========================================================================
addDiagramSlide(
    'Visual UML: Component Architecture Diagram',
    'System Structural Architecture',
    '10_component_diagram.svg',
    {
        badge: 'COMPONENT SUBSYSTEMS',
        accentColor: BLUE,
        title: '3-Tier Subsystems & Interfaces',
        bullets: [
            '• Presentation Subsystem: Customer Portal GUI, Admin Management GUI, Table Reservation Modal.',
            '• Application Logic Subsystem: Order Processing Engine, Menu Catalog Service, Table Allocation Service.',
            '• Special Services: Payment Strategy Gateway, Excel Exporter & Telemetry Engine (handles live CSV downloads).',
            '• Persistence Tier: LocalStorage Persistent Adapter with JSON serialization and Mock Demo Seeder.',
            '• Clean Separation of Concerns: Components communicate through well-defined JavaScript API interfaces.'
        ],
        codeFile: 'style.css, app.js, admin.js'
    }
);

// ===========================================================================
// SLIDE 13: Visual UML - Deployment Diagram (Hardware & Topology)
// ===========================================================================
addDiagramSlide(
    'Visual UML: Deployment Diagram (Hardware & Topology)',
    'Physical & Network Architecture',
    '11_deployment_diagram.svg',
    {
        badge: 'PHYSICAL DEPLOYMENT',
        accentColor: SLATE_DARK,
        title: 'Hardware Nodes & Execution Environment',
        bullets: [
            '• Node 1: Client Workstation / Mobile Device executing Web Browser Runtime (Chrome, Edge, Safari).',
            '• Browser Execution Environment: Holds JavaScript Virtual Machine, DOM Tree, CSSOM, and HTML5 LocalStorage Node.',
            '• Node 2: GitHub Pages / Web Hosting Server delivering static assets (HTML5, CSS3, JS, SVG, JPG).',
            '• Node 3: External CDN Node delivering FontAwesome vector icons and Google Web Fonts over HTTPS (Port 443).',
            '• Zero Server Overhead: Operates without backend runtime requirements; instant client-side execution.'
        ],
        codeFile: 'index.html, admin.html, .nojekyll'
    }
);

// ===========================================================================
// SLIDE 14: Visual UML - Entity-Relationship Diagram (ERD)
// ===========================================================================
addDiagramSlide(
    'Visual UML: Entity-Relationship Diagram (ERD)',
    'Relational Database Modeling',
    '14_entity_relationship_diagram.svg',
    {
        badge: 'RELATIONAL DATA MODEL',
        accentColor: SUCCESS,
        title: 'Entities, PK/FK Keys & Cardinalities',
        bullets: [
            '• CUSTOMERS (1:N) ORDERS: One customer places multiple orders; FK: customer_id in ORDERS.',
            '• ORDERS (1:N) ORDER_ITEMS (N:1) MENU_ITEMS: Resolves M:N relationship between orders and dishes.',
            '• CATEGORIES (1:N) MENU_ITEMS: Categorizes dishes into Starters, Mains, Pizzas, Desserts; FK: category_id.',
            '• ORDERS (1:1) PAYMENTS: Stores payment method (COD, Card, Wallet), transaction date, amount, and status.',
            '• Primary & Foreign Keys: Fully normalized relational design adhering to 3rd Normal Form (3NF).'
        ],
        codeFile: 'LocalStorage Key: WONDERLAND_SYSTEM_DB_V1'
    }
);

// ===========================================================================
// SLIDE 15: System GUI Implementation - Customer Experience
// ===========================================================================
let s15 = createSlide('System GUI Implementation: Customer Experience', 'Live GUI Verification');

const custFeatures = [
    { title: 'Interactive Menu & Live Search', icon: '🔍', desc: 'Real-time keyword filtering + category tabs (Starters, Mains, Pizzas, Desserts). Cards display photos, prices, ratings, and "Add to Cart".' },
    { title: 'Slide-in Cart Drawer', icon: '🛒', desc: 'Floating badge with live item count. Slide-out panel to adjust quantities, remove dishes, and view subtotal, 14% VAT, and delivery fee.' },
    { title: 'Cash on Delivery Checkout Modal', icon: '💳', desc: 'Full address capture, special chef notes, and radio choice between Cash on Delivery (COD), Credit Card, and Digital Wallets.' },
    { title: 'Live Order Tracker (State Machine)', icon: '📍', desc: 'Search by Order ID (#WL-xxxx). Visual glowing stepper animates through 5 stages with order details and cancel action.' },
    { title: 'Table Reservation Modal', icon: '🍽️', desc: 'Select Date, Time slot, Guest count, and Seating Zone (Main Hall, Seaside Patio, VIP Room) with instant booking ID.' },
    { title: 'Verified Guest Reviews', icon: '⭐', desc: 'Submit ratings and commentary directly from the page; automatically published to live testimonials and persisted.' }
];

custFeatures.forEach((cg, idx) => {
    let col = idx % 3;
    let row = Math.floor(idx / 3);
    let x = 0.6 + col * 4.1;
    let y = 1.45 + row * 2.65;

    s15.addShape(pptx.ShapeType.roundRect, {
        x: x, y: y, w: 3.9, h: 2.45,
        fill: { color: WHITE }, line: { color: GOLD, width: 1.5 }, rectRadius: 0.12
    });
    s15.addText(`${cg.icon} ${cg.title}`, {
        x: x + 0.25, y: y + 0.25, w: 3.4, h: 0.35,
        fontSize: 13, fontFace: 'Segoe UI', color: GOLD_AMBER, bold: true
    });
    s15.addText(cg.desc, {
        x: x + 0.25, y: y + 0.7, w: 3.4, h: 1.6,
        fontSize: 11.5, fontFace: 'Segoe UI', color: TEXT_DARK, lineSpacing: 18
    });
});

// ===========================================================================
// SLIDE 16: Staff & Admin Portal with Live Excel Export
// ===========================================================================
let s16 = createSlide('Staff & Admin Portal with Live Excel Export', 'Live GUI Verification');

const adminFeatures = [
    { title: 'Security Gate PIN Access', icon: '🔒', desc: 'Protected by administrative credentials (default PIN: admin123) with session lock and unlock capabilities.' },
    { title: 'Real-Time KPI Dashboard', icon: '📊', desc: 'Live calculation of Total Sales Revenue, Total Orders Placed, Active Kitchen Queue, and Table Bookings.' },
    { title: '1-Click Excel (.csv) Export', icon: '📗', desc: 'Download complete structured spreadsheet with Order IDs, customer phones, addresses, line items, COD payments, and statuses.' },
    { title: 'Live Orders Dispatch Board', icon: '🧾', desc: 'Full dispatch table with customer info, address, items, and an inline status dropdown to advance the order state machine.' },
    { title: 'Menu Catalog CRUD', icon: '🍲', desc: 'Add new dishes, edit price/description/photos, delete items, and toggle availability (Available / Sold Out) in one click.' },
    { title: 'Table Reservations Control', icon: '🪑', desc: 'View party size and seating zone; action buttons to Seat arriving guests or Cancel/Free tables.' }
];

adminFeatures.forEach((cg, idx) => {
    let col = idx % 3;
    let row = Math.floor(idx / 3);
    let x = 0.6 + col * 4.1;
    let y = 1.45 + row * 2.65;

    s16.addShape(pptx.ShapeType.roundRect, {
        x: x, y: y, w: 3.9, h: 2.45,
        fill: { color: WHITE }, line: { color: BLUE, width: 1.5 }, rectRadius: 0.12
    });
    s16.addText(`${cg.icon} ${cg.title}`, {
        x: x + 0.25, y: y + 0.25, w: 3.4, h: 0.35,
        fontSize: 13, fontFace: 'Segoe UI', color: BLUE, bold: true
    });
    s16.addText(cg.desc, {
        x: x + 0.25, y: y + 0.7, w: 3.4, h: 1.6,
        fontSize: 11.5, fontFace: 'Segoe UI', color: TEXT_DARK, lineSpacing: 18
    });
});

// ===========================================================================
// SLIDE 17: UML-to-Implementation Traceability Matrix
// ===========================================================================
let s17 = createSlide('UML-to-Implementation Traceability Matrix', 'Verification & Compliance');
s17.addText('Proving that 100% of modeled UML interactions are physically realized and executable in the code:', {
    x: 0.6, y: 1.25, w: 12.133, h: 0.3,
    fontSize: 12, fontFace: 'Segoe UI', color: TEXT_MUTED, italic: true
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

s17.addTable(traceRows, {
    x: 0.6, y: 1.6, w: 12.133, h: 5.2,
    colW: [2.8, 4.5, 4.833],
    fontSize: 10,
    fontFace: 'Segoe UI',
    border: { pt: 0.5, color: BORDER_LIGHT },
    align: 'left',
    valign: 'middle'
});

// ===========================================================================
// SLIDE 18: Testing & Quality Assurance
// ===========================================================================
let s18 = createSlide('Testing, Verification & Quality Assurance', 'Quality Assurance');

const testCards = [
    { title: 'Functional Unit Testing', desc: 'Verified cart calculations (Subtotal + 14% VAT + $3 Delivery Fee). Verified that reducing item quantity to zero removes the line item automatically.' },
    { title: 'State Transition Testing', desc: 'Verified that updating order status in admin.html (e.g. from Confirmed to "In Kitchen") immediately updates the open tracker in index.html via storage events.' },
    { title: 'Guard Condition Testing', desc: 'Tested cancellation rules: "Cancel Order" button is enabled in Pending and Confirmed states, and safely disabled/hidden once Cooking has started.' },
    { title: 'Excel Export Testing', desc: 'Verified that clicking "Export to Excel (.csv)" in admin.html generates a UTF-8 BOM CSV that opens seamlessly in Microsoft Excel with Arabic and English characters.' }
];

testCards.forEach((tc, idx) => {
    let col = idx % 2;
    let row = Math.floor(idx / 2);
    let x = 0.6 + col * 6.2;
    let y = 1.45 + row * 2.75;

    s18.addShape(pptx.ShapeType.roundRect, {
        x: x, y: y, w: 5.9, h: 2.5,
        fill: { color: WHITE }, line: { color: SUCCESS, width: 1.5 }, rectRadius: 0.12
    });
    s18.addText(`✅ ${tc.title}`, {
        x: x + 0.3, y: y + 0.25, w: 5.3, h: 0.35,
        fontSize: 15, fontFace: 'Segoe UI', color: SUCCESS, bold: true
    });
    s18.addText(tc.desc, {
        x: x + 0.3, y: y + 0.7, w: 5.3, h: 1.6,
        fontSize: 12, fontFace: 'Segoe UI', color: TEXT_DARK, lineSpacing: 20
    });
});

// ===========================================================================
// SLIDE 19: Project Conclusion & Live Cloud Links
// ===========================================================================
let s19 = pptx.addSlide();
s19.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: NAVY } });
s19.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.35, h: 7.5, fill: { color: GOLD } });

if (fs.existsSync(logoPath)) {
    s19.addImage({ path: logoPath, x: 1.0, y: 0.8, w: 1.3, h: 1.3 });
}

s19.addText('PROJECT CONCLUSION & VERIFIED SUCCESS', {
    x: 2.6, y: 1.0, w: 9.5, h: 0.4,
    fontSize: 14, fontFace: 'Segoe UI', color: GOLD, bold: true, letterSpacing: 2
});

s19.addText('Wonder Land Restaurant Management System', {
    x: 2.6, y: 1.4, w: 9.5, h: 0.7,
    fontSize: 30, fontFace: 'Segoe UI', color: WHITE, bold: true
});

s19.addShape(pptx.ShapeType.roundRect, {
    x: 1.0, y: 2.4, w: 11.333, h: 3.8,
    fill: { color: SLATE_DARK }, line: { color: GOLD, width: 1.5 }, rectRadius: 0.15
});

const summaryPoints = [
    '🎯 Complete Requirements Fulfillment: Covers all requested UML diagrams (Use Case, Class, Sequences, Activity, State, Component, Deployment, ERD).',
    '📐 Academic Excellence: Formal Use Case Specification (UC-05 Place Order via COD) with complete pre/post conditions and exception flows.',
    '💻 Practical GUI Verification: 100% of modeled diagrams are physically realized in clean semantic HTML5, CSS3, and ES6 JavaScript.',
    '📊 Administrative Power: Includes live KPI telemetry, kitchen order dispatch, menu catalog CRUD, and 1-Click Excel (.csv) export.',
    '⚡ Live Cloud Deployment: Hosted on GitHub Pages: https://radwasengr.github.io/wonder-land-restaurant/'
];

s19.addText(summaryPoints.join('\n\n'), {
    x: 1.4, y: 2.7, w: 10.5, h: 3.2,
    fontSize: 13, fontFace: 'Segoe UI', color: WHITE, lineSpacing: 22
});

s19.addText('Thank You! Questions & Discussion Welcomed.', {
    x: 1.0, y: 6.5, w: 11.333, h: 0.4,
    fontSize: 16, fontFace: 'Segoe UI', color: GOLD, bold: true, align: 'center'
});

// Save Presentation
const outPptxPath = path.join(__dirname, 'presentation', 'Wonder_Land_Restaurant_Project_Presentation.pptx');
pptx.writeFile({ fileName: outPptxPath }).then(fileName => {
    console.log(`PowerPoint Presentation created successfully at: ${fileName}`);
}).catch(err => {
    console.error('Error generating PowerPoint:', err);
});
