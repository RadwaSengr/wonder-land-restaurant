const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'docs', 'diagrams');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

function saveSvg(filename, svgContent) {
    const filePath = path.join(outDir, filename);
    fs.writeFileSync(filePath, svgContent.trim(), 'utf8');
    console.log(`Saved: ${filename}`);
}

// Global Theme Constants for Diagrams
const THEME = {
    navyDark: '#0A1128',
    navyMid: '#0F172A',
    slateDark: '#1E293B',
    slateLight: '#F1F5F9',
    gold: '#E4B95B',
    goldDark: '#B45309',
    goldLight: '#FFFDF5',
    white: '#FFFFFF',
    border: '#CBD5E1',
    textDark: '#0F172A',
    textMuted: '#64748B',
    emerald: '#059669',
    amber: '#D97706',
    rose: '#E11D48',
    blue: '#2563EB'
};

// ===========================================================================
// 1. VISUAL UML: USE CASE DIAGRAM
// ===========================================================================
const useCaseSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 860" width="1200" height="860">
  <defs>
    <style>
      .canvas-bg { fill: #f8fafc; }
      .header-bg { fill: #0a1128; }
      .header-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 20px; font-weight: bold; fill: #ffffff; }
      .header-tag { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #e4b95b; letter-spacing: 1.5px; }
      .sys-box { fill: #ffffff; stroke: #e4b95b; stroke-width: 2; rx: 12; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.05)); }
      .sys-header { fill: #0f172a; }
      .sys-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; font-weight: bold; fill: #e4b95b; letter-spacing: 1px; }
      .actor-card { fill: #ffffff; stroke: #0a1128; stroke-width: 1.8; rx: 10; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.06)); }
      .actor-badge { fill: #0a1128; }
      .actor-badge-gold { fill: #b45309; }
      .actor-badge-green { fill: #059669; }
      .actor-name { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13px; font-weight: bold; fill: #0f172a; text-anchor: middle; }
      .actor-role { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10px; font-weight: 600; fill: #64748b; text-anchor: middle; }
      .uc-capsule { fill: #fffdf7; stroke: #d4af37; stroke-width: 1.8; rx: 22; ry: 22; filter: drop-shadow(0 2px 6px rgba(228,185,91,0.15)); }
      .uc-label { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; font-weight: 700; fill: #0f172a; text-anchor: middle; dominant-baseline: central; }
      .assoc-line { stroke: #334155; stroke-width: 1.6; }
      .inc-line { stroke: #059669; stroke-width: 1.6; stroke-dasharray: 5,4; marker-end: url(#arrowGreen); }
      .ext-line { stroke: #d97706; stroke-width: 1.6; stroke-dasharray: 5,4; marker-end: url(#arrowAmber); }
      .tag-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10px; font-style: italic; font-weight: bold; }
    </style>
    <marker id="arrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#059669" />
    </marker>
    <marker id="arrowAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706" />
    </marker>
  </defs>

  <rect width="100%" height="100%" class="canvas-bg" />

  <!-- Top Executive Banner -->
  <rect x="0" y="0" width="1200" height="70" class="header-bg" />
  <rect x="0" y="68" width="1200" height="3" fill="#e4b95b" />
  <text x="35" y="30" class="header-tag">WONDER LAND RESTAURANT SYSTEM • UML BEHAVIORAL MODEL</text>
  <text x="35" y="55" class="header-title">Visual UML: Use Case Diagram &amp; Operational Boundaries</text>

  <!-- Left Actor: Customer -->
  <g transform="translate(45, 300)">
    <rect width="130" height="150" class="actor-card" />
    <rect width="130" height="36" class="actor-badge" rx="8" />
    <text x="65" y="23" font-family="'Segoe UI', Arial, sans-serif" font-size="12" font-weight="bold" fill="#e4b95b" text-anchor="middle">PRIMARY ACTOR</text>
    <circle cx="65" cy="72" r="18" fill="#e4b95b" stroke="#0a1128" stroke-width="2" />
    <path d="M 52 110 C 52 94, 78 94, 78 110 Z" fill="#0a1128" />
    <text x="65" y="128" class="actor-name">Customer</text>
    <text x="65" y="142" class="actor-role">Online Guest</text>
  </g>

  <!-- System Boundary Container -->
  <rect x="210" y="95" width="760" height="735" class="sys-box" />
  <path d="M 210 95 L 970 95 L 970 135 L 210 135 Z" class="sys-header" rx="10" />
  <text x="590" y="120" class="sys-title" text-anchor="middle">&lt;&lt;System Boundary&gt;&gt; WONDER LAND INTEGRATED PLATFORM</text>

  <!-- Customer Use Cases -->
  <!-- UC01 -->
  <g transform="translate(360, 180)">
    <rect x="-105" y="-22" width="210" height="44" class="uc-capsule" />
    <text x="0" y="0" class="uc-label">UC-01: Browse &amp; Search Menu</text>
  </g>
  <!-- UC02 (Extend) -->
  <g transform="translate(680, 180)">
    <rect x="-105" y="-22" width="210" height="44" class="uc-capsule" stroke="#d97706" />
    <text x="0" y="0" class="uc-label" fill="#9a3412">UC-02: Filter by Category</text>
  </g>

  <!-- UC03 -->
  <g transform="translate(360, 260)">
    <rect x="-105" y="-22" width="210" height="44" class="uc-capsule" />
    <text x="0" y="0" class="uc-label">UC-03: Manage Cart Items</text>
  </g>

  <!-- UC04 -->
  <g transform="translate(360, 350)">
    <rect x="-105" y="-22" width="210" height="44" class="uc-capsule" stroke="#b45309" stroke-width="2.2" />
    <text x="0" y="0" class="uc-label" fill="#b45309">UC-04: Checkout Food Order</text>
  </g>

  <!-- UC05 (Include from Checkout) -->
  <g transform="translate(680, 350)">
    <rect x="-115" y="-24" width="230" height="48" class="uc-capsule" stroke="#059669" stroke-width="2.2" fill="#f0fdf4" />
    <text x="0" y="-3" class="uc-label" fill="#047857">UC-05: Place Order (COD / Card)</text>
    <text x="0" y="13" font-family="'Segoe UI', Arial, sans-serif" font-size="10" font-weight="600" fill="#059669" text-anchor="middle">&lt;&lt;Included Payment Subsystem&gt;&gt;</text>
  </g>

  <!-- UC06 -->
  <g transform="translate(360, 440)">
    <rect x="-105" y="-22" width="210" height="44" class="uc-capsule" />
    <text x="0" y="0" class="uc-label">UC-06: Track Live Order (5-Stage)</text>
  </g>

  <!-- UC07 -->
  <g transform="translate(360, 530)">
    <rect x="-105" y="-22" width="210" height="44" class="uc-capsule" />
    <text x="0" y="0" class="uc-label">UC-07: Reserve Dining Table</text>
  </g>

  <!-- UC08 -->
  <g transform="translate(360, 620)">
    <rect x="-105" y="-22" width="210" height="44" class="uc-capsule" />
    <text x="0" y="0" class="uc-label">UC-08: Submit Guest Review</text>
  </g>

  <!-- Staff / Admin Use Cases -->
  <!-- UC09 -->
  <g transform="translate(800, 620)">
    <rect x="-115" y="-22" width="230" height="44" class="uc-capsule" stroke="#0a1128" />
    <text x="0" y="0" class="uc-label">UC-09: Authenticate Admin PIN</text>
  </g>
  <!-- UC10 -->
  <g transform="translate(800, 700)">
    <rect x="-115" y="-22" width="230" height="44" class="uc-capsule" stroke="#0a1128" />
    <text x="0" y="0" class="uc-label">UC-10: Manage Menu Catalog CRUD</text>
  </g>
  <!-- UC11 -->
  <g transform="translate(800, 490)">
    <rect x="-115" y="-22" width="230" height="44" class="uc-capsule" stroke="#b45309" />
    <text x="0" y="0" class="uc-label" fill="#b45309">UC-11: Kitchen Ticket Dispatch</text>
  </g>
  <!-- UC12 -->
  <g transform="translate(800, 775)">
    <rect x="-115" y="-22" width="230" height="44" class="uc-capsule" stroke="#059669" fill="#f0fdf4" />
    <text x="0" y="0" class="uc-label" fill="#047857">UC-12: 1-Click Excel Export</text>
  </g>

  <!-- Customer Associations (Solid Lines) -->
  <line x1="175" y1="340" x2="255" y2="180" class="assoc-line" />
  <line x1="175" y1="360" x2="255" y2="260" class="assoc-line" />
  <line x1="175" y1="375" x2="255" y2="350" class="assoc-line" stroke-width="2" stroke="#b45309" />
  <line x1="175" y1="390" x2="255" y2="440" class="assoc-line" />
  <line x1="175" y1="410" x2="255" y2="530" class="assoc-line" />
  <line x1="175" y1="430" x2="255" y2="620" class="assoc-line" />

  <!-- Include / Extend Relations -->
  <!-- UC01 -> UC02 (Extend) -->
  <line x1="465" y1="180" x2="570" y2="180" class="ext-line" />
  <text x="518" y="172" class="tag-text" fill="#d97706" text-anchor="middle">&lt;&lt;extend&gt;&gt;</text>

  <!-- UC04 -> UC05 (Include) -->
  <line x1="465" y1="350" x2="560" y2="350" class="inc-line" stroke-width="2" />
  <text x="512" y="342" class="tag-text" fill="#059669" text-anchor="middle">&lt;&lt;include&gt;&gt;</text>

  <!-- Right Actor: Admin / Manager -->
  <g transform="translate(1015, 600)">
    <rect width="145" height="150" class="actor-card" />
    <rect width="145" height="36" class="actor-badge-gold" rx="8" />
    <text x="72" y="23" font-family="'Segoe UI', Arial, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">ADMINISTRATOR</text>
    <circle cx="72" cy="72" r="18" fill="#fed7aa" stroke="#b45309" stroke-width="2" />
    <path d="M 59 110 C 59 94, 85 94, 85 110 Z" fill="#b45309" />
    <text x="72" y="128" class="actor-name">Restaurant Admin</text>
    <text x="72" y="142" class="actor-role">General Manager</text>
  </g>

  <!-- Right Actor: Kitchen Chef -->
  <g transform="translate(1015, 340)">
    <rect width="145" height="150" class="actor-card" />
    <rect width="145" height="36" class="actor-badge-green" rx="8" />
    <text x="72" y="23" font-family="'Segoe UI', Arial, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">KITCHEN CHEF</text>
    <circle cx="72" cy="72" r="18" fill="#bbf7d0" stroke="#059669" stroke-width="2" />
    <path d="M 59 110 C 59 94, 85 94, 85 110 Z" fill="#059669" />
    <text x="72" y="128" class="actor-name">Executive Chef</text>
    <text x="72" y="142" class="actor-role">Food Prep &amp; KOT</text>
  </g>

  <!-- Staff Associations -->
  <line x1="1015" y1="415" x2="915" y2="490" class="assoc-line" />
  <line x1="1015" y1="675" x2="915" y2="620" class="assoc-line" />
  <line x1="1015" y1="685" x2="915" y2="700" class="assoc-line" />
  <line x1="1015" y1="710" x2="915" y2="775" class="assoc-line" stroke="#059669" stroke-width="1.8" />
</svg>`;

saveSvg('01_use_case_diagram.svg', useCaseSvg);

// ===========================================================================
// 2. VISUAL UML: DOMAIN CLASS DIAGRAM
// ===========================================================================
const classDiagramSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="1200" height="900">
  <defs>
    <style>
      .canvas-bg { fill: #f8fafc; }
      .header-bg { fill: #0a1128; }
      .header-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 20px; font-weight: bold; fill: #ffffff; }
      .header-tag { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #e4b95b; letter-spacing: 1.5px; }
      .class-card { fill: #ffffff; stroke: #0f172a; stroke-width: 1.8; rx: 8; filter: drop-shadow(0 3px 10px rgba(0,0,0,0.06)); }
      .class-hdr { fill: #0a1128; }
      .class-hdr-gold { fill: #b45309; }
      .class-hdr-green { fill: #065f46; }
      .class-hdr-blue { fill: #1e3a8a; }
      .class-stereo { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10px; font-style: italic; fill: #e4b95b; text-anchor: middle; }
      .class-name { font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; font-weight: bold; fill: #ffffff; text-anchor: middle; }
      .comp-line { stroke: #cbd5e1; stroke-width: 1; }
      .member-text { font-family: 'Consolas', 'Courier New', monospace; font-size: 11px; fill: #0f172a; }
      .method-text { font-family: 'Consolas', 'Courier New', monospace; font-size: 11px; fill: #1e3a8a; }
      .vis-plus { fill: #059669; font-weight: bold; }
      .vis-minus { fill: #dc2626; font-weight: bold; }
      .vis-prot { fill: #d97706; font-weight: bold; }
      .rel-line { stroke: #1e293b; stroke-width: 1.6; }
      .inher-arrow { fill: #ffffff; stroke: #0a1128; stroke-width: 1.8; }
      .comp-diamond { fill: #0a1128; stroke: #0a1128; stroke-width: 1.5; }
      .card-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #b45309; }
    </style>
  </defs>

  <rect width="100%" height="100%" class="canvas-bg" />

  <!-- Top Executive Banner -->
  <rect x="0" y="0" width="1200" height="70" class="header-bg" />
  <rect x="0" y="68" width="1200" height="3" fill="#e4b95b" />
  <text x="35" y="30" class="header-tag">WONDER LAND RESTAURANT SYSTEM • UML STRUCTURAL MODEL</text>
  <text x="35" y="55" class="header-title">Visual UML: Class Diagram &amp; Domain Object Hierarchy</text>

  <!-- Class 1: User (Abstract Base) -->
  <g transform="translate(480, 95)">
    <rect width="240" height="170" class="class-card" />
    <path d="M 0 0 L 240 0 L 240 40 L 0 40 Z" class="class-hdr" rx="8" />
    <text x="120" y="16" class="class-stereo">&lt;&lt;abstract&gt;&gt;</text>
    <text x="120" y="32" class="class-name">User</text>
    <!-- Attributes -->
    <text x="12" y="58" class="member-text"><tspan class="vis-prot">#</tspan> id: String</text>
    <text x="12" y="74" class="member-text"><tspan class="vis-prot">#</tspan> fullName: String</text>
    <text x="12" y="90" class="member-text"><tspan class="vis-prot">#</tspan> email: String</text>
    <text x="12" y="106" class="member-text"><tspan class="vis-prot">#</tspan> phone: String</text>
    <line x1="0" y1="116" x2="240" y2="116" class="comp-line" />
    <!-- Methods -->
    <text x="12" y="134" class="method-text"><tspan class="vis-plus">+</tspan> login(credentials): Boolean</text>
    <text x="12" y="152" class="method-text"><tspan class="vis-plus">+</tspan> logout(): Void</text>
  </g>

  <!-- Class 2: Customer (Inherits User) -->
  <g transform="translate(180, 320)">
    <rect width="250" height="175" class="class-card" />
    <path d="M 0 0 L 250 0 L 250 38 L 0 38 Z" class="class-hdr-blue" rx="8" />
    <text x="125" y="15" class="class-stereo">&lt;&lt;entity&gt;&gt;</text>
    <text x="125" y="30" class="class-name">Customer</text>
    <!-- Attributes -->
    <text x="12" y="56" class="member-text"><tspan class="vis-minus">-</tspan> deliveryAddress: String</text>
    <text x="12" y="72" class="member-text"><tspan class="vis-minus">-</tspan> orderHistory: List&lt;Order&gt;</text>
    <text x="12" y="88" class="member-text"><tspan class="vis-minus">-</tspan> loyaltyPoints: Integer</text>
    <line x1="0" y1="100" x2="250" y2="100" class="comp-line" />
    <!-- Methods -->
    <text x="12" y="118" class="method-text"><tspan class="vis-plus">+</tspan> placeOrder(cart, payMethod): Order</text>
    <text x="12" y="136" class="method-text"><tspan class="vis-plus">+</tspan> trackOrder(orderId): Status</text>
    <text x="12" y="154" class="method-text"><tspan class="vis-plus">+</tspan> bookTable(details): Reservation</text>
  </g>

  <!-- Class 3: Admin (Inherits User) -->
  <g transform="translate(770, 320)">
    <rect width="250" height="175" class="class-card" />
    <path d="M 0 0 L 250 0 L 250 38 L 0 38 Z" class="class-hdr-gold" rx="8" />
    <text x="125" y="15" class="class-stereo">&lt;&lt;entity&gt;&gt;</text>
    <text x="125" y="30" class="class-name">Admin</text>
    <!-- Attributes -->
    <text x="12" y="56" class="member-text"><tspan class="vis-minus">-</tspan> role: String = "Manager"</text>
    <text x="12" y="72" class="member-text"><tspan class="vis-minus">-</tspan> accessPin: String = "admin123"</text>
    <text x="12" y="88" class="member-text"><tspan class="vis-minus">-</tspan> telemetryLogs: List</text>
    <line x1="0" y1="100" x2="250" y2="100" class="comp-line" />
    <!-- Methods -->
    <text x="12" y="118" class="method-text"><tspan class="vis-plus">+</tspan> mutateOrderStatus(id, status)</text>
    <text x="12" y="136" class="method-text"><tspan class="vis-plus">+</tspan> manageCatalogCRUD(item, op)</text>
    <text x="12" y="154" class="method-text"><tspan class="vis-plus">+</tspan> exportOrdersToExcel(): CSVBlob</text>
  </g>

  <!-- Inheritance lines from Customer & Admin to User -->
  <path d="M 305 320 L 305 285 L 600 285 L 600 265" fill="none" class="rel-line" />
  <path d="M 895 320 L 895 285 L 600 285" fill="none" class="rel-line" />
  <polygon points="600,265 590,285 610,285" class="inher-arrow" />

  <!-- Class 4: Order (Composition with OrderItem) -->
  <g transform="translate(180, 560)">
    <rect width="260" height="210" class="class-card" />
    <path d="M 0 0 L 260 0 L 260 38 L 0 38 Z" class="class-hdr" rx="8" />
    <text x="130" y="15" class="class-stereo">&lt;&lt;aggregate root&gt;&gt;</text>
    <text x="130" y="30" class="class-name">Order</text>
    <text x="12" y="56" class="member-text"><tspan class="vis-minus">-</tspan> orderId: String</text>
    <text x="12" y="72" class="member-text"><tspan class="vis-minus">-</tspan> subtotal: Double</text>
    <text x="12" y="88" class="member-text"><tspan class="vis-minus">-</tspan> tax14: Double</text>
    <text x="12" y="104" class="member-text"><tspan class="vis-minus">-</tspan> deliveryFee: Double = 3.00</text>
    <text x="12" y="120" class="member-text"><tspan class="vis-minus">-</tspan> totalAmount: Double</text>
    <text x="12" y="136" class="member-text"><tspan class="vis-minus">-</tspan> status: OrderStatus</text>
    <line x1="0" y1="146" x2="260" y2="146" class="comp-line" />
    <text x="12" y="164" class="method-text"><tspan class="vis-plus">+</tspan> calculateTotals(): Double</text>
    <text x="12" y="182" class="method-text"><tspan class="vis-plus">+</tspan> advanceState(): OrderStatus</text>
    <text x="12" y="200" class="method-text"><tspan class="vis-plus">+</tspan> canCancel(): Boolean</text>
  </g>

  <!-- Customer 1 -> * Order Association -->
  <line x1="305" y1="495" x2="305" y2="560" class="rel-line" />
  <text x="315" y="515" class="card-text">1</text>
  <text x="315" y="550" class="card-text">0..*</text>

  <!-- Class 5: OrderItem -->
  <g transform="translate(560, 560)">
    <rect width="210" height="145" class="class-card" />
    <path d="M 0 0 L 210 0 L 210 38 L 0 38 Z" class="class-hdr" rx="8" />
    <text x="105" y="15" class="class-stereo">&lt;&lt;entity&gt;&gt;</text>
    <text x="105" y="30" class="class-name">OrderItem</text>
    <text x="12" y="56" class="member-text"><tspan class="vis-minus">-</tspan> quantity: Integer</text>
    <text x="12" y="72" class="member-text"><tspan class="vis-minus">-</tspan> unitPrice: Double</text>
    <text x="12" y="88" class="member-text"><tspan class="vis-minus">-</tspan> itemTotal: Double</text>
    <line x1="0" y1="100" x2="210" y2="100" class="comp-line" />
    <text x="12" y="120" class="method-text"><tspan class="vis-plus">+</tspan> computeItemTotal(): Double</text>
  </g>

  <!-- Composition: Order ◆── OrderItem -->
  <line x1="440" y1="620" x2="560" y2="620" class="rel-line" />
  <polygon points="440,620 452,614 464,620 452,626" class="comp-diamond" />
  <text x="470" y="612" class="card-text">1</text>
  <text x="540" y="612" class="card-text">1..*</text>

  <!-- Class 6: MenuItem -->
  <g transform="translate(880, 560)">
    <rect width="240" height="175" class="class-card" />
    <path d="M 0 0 L 240 0 L 240 38 L 0 38 Z" class="class-hdr-green" rx="8" />
    <text x="120" y="15" class="class-stereo">&lt;&lt;catalog item&gt;&gt;</text>
    <text x="120" y="30" class="class-name">MenuItem</text>
    <text x="12" y="56" class="member-text"><tspan class="vis-prot">#</tspan> id: String</text>
    <text x="12" y="72" class="member-text"><tspan class="vis-prot">#</tspan> title: String</text>
    <text x="12" y="88" class="member-text"><tspan class="vis-prot">#</tspan> category: CategoryEnum</text>
    <text x="12" y="104" class="member-text"><tspan class="vis-prot">#</tspan> price: Double</text>
    <text x="12" y="120" class="member-text"><tspan class="vis-prot">#</tspan> isAvailable: Boolean</text>
    <line x1="0" y1="130" x2="240" y2="130" class="comp-line" />
    <text x="12" y="150" class="method-text"><tspan class="vis-plus">+</tspan> toggleAvailability(): Boolean</text>
    <text x="12" y="166" class="method-text"><tspan class="vis-plus">+</tspan> updatePrice(newPrice)</text>
  </g>

  <!-- OrderItem --> MenuItem aggregation
  <line x1="770" y1="620" x2="880" y2="620" class="rel-line" />
  <text x="785" y="612" class="card-text">*</text>
  <text x="860" y="612" class="card-text">1</text>

  <!-- Class 7: Payment Polymorphism -->
  <g transform="translate(180, 800)">
    <rect width="260" height="75" class="class-card" />
    <path d="M 0 0 L 260 0 L 260 28 L 0 28 Z" class="class-hdr" rx="8" />
    <text x="130" y="18" class="class-name">Payment (COD / Card)</text>
    <text x="12" y="46" class="member-text">method: "Cash on Delivery" | "Card"</text>
    <text x="12" y="62" class="method-text">+ processPayment(): Boolean</text>
  </g>
  <line x1="305" y1="770" x2="305" y2="800" class="rel-line" />
  <text x="315" y="790" class="card-text">1:1</text>
</svg>`;

saveSvg('02_class_diagram.svg', classDiagramSvg);

// ===========================================================================
// 3. VISUAL UML: SEQUENCE DIAGRAM (CHECKOUT & COD ORDER)
// ===========================================================================
const seqCheckoutCodSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 860" width="1200" height="860">
  <defs>
    <style>
      .canvas-bg { fill: #f8fafc; }
      .header-bg { fill: #0a1128; }
      .header-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 20px; font-weight: bold; fill: #ffffff; }
      .header-tag { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #e4b95b; letter-spacing: 1.5px; }
      .lifeline-header { rx: 8; fill: #0f172a; stroke: #e4b95b; stroke-width: 1.5; }
      .lifeline-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13px; font-weight: bold; fill: #ffffff; text-anchor: middle; dominant-baseline: central; }
      .lifeline-dash { stroke: #94a3b8; stroke-width: 1.5; stroke-dasharray: 5,4; }
      .act-bar { fill: #fdf6e2; stroke: #b45309; stroke-width: 1.6; }
      .sync-arrow { stroke: #0a1128; stroke-width: 1.8; marker-end: url(#arrowDark); }
      .reply-arrow { stroke: #059669; stroke-width: 1.6; stroke-dasharray: 5,4; marker-end: url(#arrowGreen); }
      .msg-label { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; font-weight: 700; fill: #0f172a; }
      .alt-container { fill: #fffdf5; stroke: #d97706; stroke-width: 1.6; rx: 8; }
      .alt-header-tag { fill: #d97706; rx: 6; }
      .alt-tag-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #ffffff; text-anchor: middle; dominant-baseline: central; }
    </style>
    <marker id="arrowDark" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0a1128" />
    </marker>
    <marker id="arrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#059669" />
    </marker>
    <marker id="arrowGold" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#b45309" />
    </marker>
  </defs>

  <rect width="100%" height="100%" class="canvas-bg" />

  <!-- Top Executive Banner -->
  <rect x="0" y="0" width="1200" height="70" class="header-bg" />
  <rect x="0" y="68" width="1200" height="3" fill="#e4b95b" />
  <text x="35" y="30" class="header-tag">WONDER LAND RESTAURANT SYSTEM • UML DYNAMIC INTERACTION MODEL</text>
  <text x="35" y="55" class="header-title">Visual UML: Sequence Diagram (Checkout &amp; Cash on Delivery - COD Order)</text>

  <!-- Lifeline 1: Customer -->
  <rect x="50" y="95" width="140" height="42" class="lifeline-header" />
  <text x="120" y="116" class="lifeline-text">:Customer</text>
  <line x1="120" y1="137" x2="120" y2="820" class="lifeline-dash" />

  <!-- Lifeline 2: WebGUI -->
  <rect x="290" y="95" width="160" height="42" class="lifeline-header" />
  <text x="370" y="116" class="lifeline-text">:CustomerWebGUI</text>
  <line x1="370" y1="137" x2="370" y2="820" class="lifeline-dash" />

  <!-- Lifeline 3: CartController -->
  <rect x="550" y="95" width="160" height="42" class="lifeline-header" />
  <text x="630" y="116" class="lifeline-text">:CartController</text>
  <line x1="630" y1="137" x2="630" y2="820" class="lifeline-dash" />

  <!-- Lifeline 4: PaymentService -->
  <rect x="790" y="95" width="160" height="42" class="lifeline-header" />
  <text x="870" y="116" class="lifeline-text">:PaymentService</text>
  <line x1="870" y1="137" x2="870" y2="820" class="lifeline-dash" />

  <!-- Lifeline 5: RestaurantDataStore -->
  <rect x="1010" y="95" width="160" height="42" class="lifeline-header" />
  <text x="1090" y="116" class="lifeline-text">:RestaurantDataStore</text>
  <line x1="1090" y1="137" x2="1090" y2="820" class="lifeline-dash" />

  <!-- Activations -->
  <rect x="115" y="160" width="10" height="640" class="act-bar" />
  <rect x="365" y="170" width="10" height="620" class="act-bar" />
  <rect x="625" y="190" width="10" height="410" class="act-bar" />
  <rect x="865" y="400" width="10" height="110" class="act-bar" />
  <rect x="1085" y="520" width="10" height="130" class="act-bar" />

  <!-- Step 1: Add Item -->
  <line x1="125" y1="180" x2="365" y2="180" class="sync-arrow" />
  <text x="245" y="173" class="msg-label" text-anchor="middle">1: clickAddToCart(dishId, qty)</text>

  <!-- Step 2: Forward to Cart -->
  <line x1="375" y1="205" x2="625" y2="205" class="sync-arrow" />
  <text x="500" y="198" class="msg-label" text-anchor="middle">2: addItemToCart(dishId, qty)</text>

  <!-- Step 3: Self-Call Totals -->
  <path d="M 635 225 L 675 225 L 675 250 L 635 250" fill="none" stroke="#b45309" stroke-width="1.6" marker-end="url(#arrowGold)" />
  <text x="685" y="242" class="msg-label" fill="#b45309">3: computeTotals(subtotal + 14% VAT + $3 delivery)</text>

  <!-- Step 4: Return Cart Badge -->
  <line x1="625" y1="275" x2="375" y2="275" class="reply-arrow" />
  <text x="500" y="268" class="msg-label" text-anchor="middle">4: updateCartBadge(count, total)</text>

  <!-- Step 5: Customer opens checkout -->
  <line x1="125" y1="310" x2="365" y2="310" class="sync-arrow" />
  <text x="245" y="303" class="msg-label" text-anchor="middle">5: openCheckoutModal()</text>

  <line x1="365" y1="335" x2="125" y2="335" class="reply-arrow" />
  <text x="245" y="328" class="msg-label" text-anchor="middle">6: renderCheckoutForm(summary)</text>

  <!-- Step 7: Submit Order with COD -->
  <line x1="125" y1="375" x2="365" y2="375" class="sync-arrow" stroke-width="2.2" stroke="#b45309" />
  <text x="245" y="367" class="msg-label" text-anchor="middle" fill="#b45309">7: submitOrder(info, paymentMethod: "COD")</text>

  <!-- Step 8: Forward to Controller -->
  <line x1="375" y1="400" x2="625" y2="400" class="sync-arrow" />
  <text x="500" y="393" class="msg-label" text-anchor="middle">8: processCheckout(cart, info, isCOD: true)</text>

  <!-- Step 9: Verify COD Policy -->
  <line x1="635" y1="425" x2="865" y2="425" class="sync-arrow" />
  <text x="750" y="418" class="msg-label" text-anchor="middle">9: verifyCODAvailability(address, total)</text>

  <!-- Alt Container: [COD Policy Approved] -->
  <rect x="610" y="445" width="560" height="215" class="alt-container" />
  <rect x="610" y="445" width="160" height="24" class="alt-header-tag" />
  <text x="690" y="457" class="alt-tag-text">[Alt: COD Approved]</text>

  <!-- Step 10: COD Accepted -->
  <line x1="865" y1="485" x2="635" y2="485" class="reply-arrow" />
  <text x="750" y="478" class="msg-label" text-anchor="middle">10: codAccepted(flag: "Collect on Handover")</text>

  <!-- Step 11: Persist in Store -->
  <line x1="635" y1="525" x2="1085" y2="525" class="sync-arrow" stroke-width="2" stroke="#059669" />
  <text x="860" y="518" class="msg-label" text-anchor="middle" fill="#047857">11: persistOrder(newOrder, status: "Pending")</text>

  <!-- Step 12: Confirm Save -->
  <line x1="1085" y1="565" x2="635" y2="565" class="reply-arrow" />
  <text x="860" y="558" class="msg-label" text-anchor="middle">12: orderCommitted(orderId: "#WL-8492")</text>

  <!-- Step 13: Forward Confirmation -->
  <line x1="625" y1="605" x2="375" y2="605" class="reply-arrow" />
  <text x="500" y="598" class="msg-label" text-anchor="middle">13: return confirmationReceipt(orderId)</text>

  <!-- Step 14: Show Receipt & Stepper -->
  <line x1="365" y1="645" x2="125" y2="645" class="reply-arrow" />
  <text x="245" y="638" class="msg-label" text-anchor="middle">14: displayOrderReceiptAndLiveTracker()</text>

  <!-- Step 15: Polling / Sync -->
  <line x1="125" y1="700" x2="365" y2="700" class="sync-arrow" />
  <text x="245" y="693" class="msg-label" text-anchor="middle">15: pollOrderStatus(orderId)</text>

  <!-- Step 16: Render Stepper -->
  <line x1="365" y1="740" x2="125" y2="740" class="reply-arrow" stroke="#b45309" stroke-width="2" />
  <text x="245" y="733" class="msg-label" text-anchor="middle" fill="#b45309">16: renderStepperNode("Node 1: Pending")</text>
</svg>`;

saveSvg('03_sequence_order_food.svg', seqCheckoutCodSvg);

// ===========================================================================
// 4. VISUAL UML: SEQUENCE DIAGRAM (ADMIN MANAGEMENT & EXCEL)
// ===========================================================================
const seqAdminExcelSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 860" width="1200" height="860">
  <defs>
    <style>
      .canvas-bg { fill: #f8fafc; }
      .header-bg { fill: #0a1128; }
      .header-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 20px; font-weight: bold; fill: #ffffff; }
      .header-tag { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #e4b95b; letter-spacing: 1.5px; }
      .lifeline-header { rx: 8; fill: #0f172a; stroke: #e4b95b; stroke-width: 1.5; }
      .lifeline-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13px; font-weight: bold; fill: #ffffff; text-anchor: middle; dominant-baseline: central; }
      .lifeline-dash { stroke: #94a3b8; stroke-width: 1.5; stroke-dasharray: 5,4; }
      .act-bar { fill: #fdf6e2; stroke: #b45309; stroke-width: 1.6; }
      .sync-arrow { stroke: #0a1128; stroke-width: 1.8; marker-end: url(#arrowDark); }
      .reply-arrow { stroke: #059669; stroke-width: 1.6; stroke-dasharray: 5,4; marker-end: url(#arrowGreen); }
      .msg-label { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; font-weight: 700; fill: #0f172a; }
      .excel-tag { fill: #065f46; stroke: #10b981; stroke-width: 1.5; rx: 6; }
    </style>
    <marker id="arrowDark" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0a1128" />
    </marker>
    <marker id="arrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#059669" />
    </marker>
  </defs>

  <rect width="100%" height="100%" class="canvas-bg" />

  <!-- Top Executive Banner -->
  <rect x="0" y="0" width="1200" height="70" class="header-bg" />
  <rect x="0" y="68" width="1200" height="3" fill="#e4b95b" />
  <text x="35" y="30" class="header-tag">WONDER LAND RESTAURANT SYSTEM • BACK-OFFICE TELEMETRY</text>
  <text x="35" y="55" class="header-title">Visual UML: Sequence Diagram (Admin Management &amp; Excel Export)</text>

  <!-- Lifeline 1: Admin / Manager -->
  <rect x="60" y="95" width="160" height="42" class="lifeline-header" fill="#b45309" />
  <text x="140" y="116" class="lifeline-text">:Admin / Manager</text>
  <line x1="140" y1="137" x2="140" y2="820" class="lifeline-dash" />

  <!-- Lifeline 2: AdminDashboardGUI -->
  <rect x="340" y="95" width="170" height="42" class="lifeline-header" />
  <text x="425" y="116" class="lifeline-text">:AdminDashboardGUI</text>
  <line x1="425" y1="137" x2="425" y2="820" class="lifeline-dash" />

  <!-- Lifeline 3: AdminService -->
  <rect x="630" y="95" width="160" height="42" class="lifeline-header" />
  <text x="710" y="116" class="lifeline-text">:AdminService</text>
  <line x1="710" y1="137" x2="710" y2="820" class="lifeline-dash" />

  <!-- Lifeline 4: ExcelExportEngine -->
  <rect x="910" y="95" width="180" height="42" class="lifeline-header" fill="#065f46" stroke="#10b981" />
  <text x="1000" y="116" class="lifeline-text">:ExcelExportEngine</text>
  <line x1="1000" y1="137" x2="1000" y2="820" class="lifeline-dash" />

  <!-- Activations -->
  <rect x="135" y="160" width="10" height="630" class="act-bar" />
  <rect x="420" y="170" width="10" height="600" class="act-bar" />
  <rect x="705" y="190" width="10" height="560" class="act-bar" />
  <rect x="995" y="520" width="10" height="180" class="act-bar" />

  <!-- 1. Enter PIN -->
  <line x1="145" y1="180" x2="420" y2="180" class="sync-arrow" />
  <text x="280" y="173" class="msg-label" text-anchor="middle">1: enterAdminPin("admin123")</text>

  <line x1="430" y1="205" x2="705" y2="205" class="sync-arrow" />
  <text x="565" y="198" class="msg-label" text-anchor="middle">2: verifyCredentials(pin)</text>

  <!-- 3. Load Telemetry -->
  <line x1="715" y1="230" x2="715" y2="255" class="sync-arrow" />
  <text x="725" y="245" class="msg-label">3: loadTelemetryData(sales, orders, tables)</text>

  <line x1="705" y1="280" x2="430" y2="280" class="reply-arrow" />
  <text x="565" y="273" class="msg-label" text-anchor="middle">4: return (telemetryPayload)</text>

  <line x1="420" y1="310" x2="145" y2="310" class="reply-arrow" />
  <text x="280" y="303" class="msg-label" text-anchor="middle">5: renderKPIsAndOrdersBoard()</text>

  <!-- 6. Change Order Status -->
  <line x1="145" y1="355" x2="420" y2="355" class="sync-arrow" stroke="#b45309" stroke-width="2" />
  <text x="280" y="348" class="msg-label" text-anchor="middle" fill="#b45309">6: selectOrderUpdate(id, newStatus: "In Kitchen")</text>

  <line x1="430" y1="380" x2="705" y2="380" class="sync-arrow" />
  <text x="565" y="373" class="msg-label" text-anchor="middle">7: mutateOrderStatus(id, "In Kitchen")</text>

  <line x1="705" y1="410" x2="430" y2="410" class="reply-arrow" />
  <text x="565" y="403" class="msg-label" text-anchor="middle">8: statusUpdated(broadcastStorageEvent)</text>

  <line x1="420" y1="440" x2="145" y2="440" class="reply-arrow" />
  <text x="280" y="433" class="msg-label" text-anchor="middle">9: showToast("Order #WL-8492 updated to In Kitchen")</text>

  <!-- 10. Click Export to Excel -->
  <line x1="145" y1="500" x2="420" y2="500" class="sync-arrow" stroke="#059669" stroke-width="2.2" />
  <text x="280" y="493" class="msg-label" text-anchor="middle" fill="#047857">10: clickExportOrdersExcelBtn()</text>

  <line x1="430" y1="525" x2="705" y2="525" class="sync-arrow" />
  <text x="565" y="518" class="msg-label" text-anchor="middle">11: getOrdersDataset()</text>

  <line x1="715" y1="550" x2="995" y2="550" class="sync-arrow" stroke="#059669" stroke-width="2" />
  <text x="855" y="543" class="msg-label" text-anchor="middle" fill="#047857">12: generateCSV(orders, headers, UTF8_BOM)</text>

  <!-- Self-call format -->
  <path d="M 1005 570 L 1045 570 L 1045 595 L 1005 595" fill="none" stroke="#059669" stroke-width="1.6" />
  <text x="1055" y="587" class="msg-label" fill="#047857">13: serializeOrderRecords()</text>

  <line x1="995" y1="625" x2="715" y2="625" class="reply-arrow" />
  <text x="855" y="618" class="msg-label" text-anchor="middle">14: return blob(text/csv)</text>

  <line x1="705" y1="660" x2="430" y2="660" class="reply-arrow" />
  <text x="565" y="653" class="msg-label" text-anchor="middle">15: triggerBrowserDownload("Wonder_Land_Orders_Report.csv")</text>

  <line x1="420" y1="700" x2="145" y2="700" class="reply-arrow" stroke="#059669" stroke-width="2" />
  <text x="280" y="693" class="msg-label" text-anchor="middle" fill="#047857">16: showToast("Excel report exported successfully")</text>
</svg>`;

saveSvg('05_sequence_admin_management.svg', seqAdminExcelSvg);

// ===========================================================================
// 5. VISUAL UML: ACTIVITY DIAGRAM (END-TO-END WORKFLOW)
// ===========================================================================
const actEndToEndSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="1200" height="900">
  <defs>
    <style>
      .canvas-bg { fill: #f8fafc; }
      .header-bg { fill: #0a1128; }
      .header-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 20px; font-weight: bold; fill: #ffffff; }
      .header-tag { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #e4b95b; letter-spacing: 1.5px; }
      .lane-hdr { fill: #0f172a; stroke: #e4b95b; stroke-width: 1; }
      .lane-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; font-weight: bold; fill: #ffffff; text-anchor: middle; dominant-baseline: central; }
      .lane-border { stroke: #cbd5e1; stroke-width: 1.5; stroke-dasharray: 4,4; }
      .start-circle { fill: #0a1128; }
      .act-box { fill: #ffffff; stroke: #0f172a; stroke-width: 1.8; rx: 16; filter: drop-shadow(0 2px 6px rgba(0,0,0,0.06)); }
      .act-box-gold { fill: #fffdf5; stroke: #b45309; stroke-width: 2; rx: 16; }
      .act-box-green { fill: #f0fdf4; stroke: #059669; stroke-width: 2; rx: 16; }
      .act-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; font-weight: 700; fill: #0f172a; text-anchor: middle; dominant-baseline: central; }
      .dec-diamond { fill: #fffbeb; stroke: #d97706; stroke-width: 2; }
      .fork-join { fill: #0a1128; rx: 4; }
      .flow-arrow { stroke: #1e293b; stroke-width: 1.8; marker-end: url(#arrowFlow); }
      .flow-label { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #b45309; }
      .end-outer { fill: none; stroke: #0a1128; stroke-width: 2.2; }
      .end-inner { fill: #0a1128; }
    </style>
    <marker id="arrowFlow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b" />
    </marker>
  </defs>

  <rect width="100%" height="100%" class="canvas-bg" />

  <!-- Top Executive Banner -->
  <rect x="0" y="0" width="1200" height="70" class="header-bg" />
  <rect x="0" y="68" width="1200" height="3" fill="#e4b95b" />
  <text x="35" y="30" class="header-tag">WONDER LAND RESTAURANT SYSTEM • BUSINESS PROCESS MODEL</text>
  <text x="35" y="55" class="header-title">Visual UML: Activity Diagram (End-to-End Workflow with Swimlanes)</text>

  <!-- 4 Swimlane Headers -->
  <!-- Lane 1: Customer -->
  <rect x="40" y="95" width="270" height="42" class="lane-hdr" />
  <text x="175" y="116" class="lane-title">👤 Customer / Guest</text>
  <line x1="310" y1="95" x2="310" y2="860" class="lane-border" />

  <!-- Lane 2: WebGUI -->
  <rect x="310" y="95" width="290" height="42" class="lane-hdr" fill="#1c2541" />
  <text x="455" y="116" class="lane-title">💻 Web Application (GUI)</text>
  <line x1="600" y1="95" x2="600" y2="860" class="lane-border" />

  <!-- Lane 3: Payment Engine -->
  <rect x="600" y="95" width="290" height="42" class="lane-hdr" fill="#b45309" />
  <text x="745" y="116" class="lane-title">💳 Payment Engine (COD / Card)</text>
  <line x1="890" y1="95" x2="890" y2="860" class="lane-border" />

  <!-- Lane 4: Kitchen & Courier -->
  <rect x="890" y="95" width="270" height="42" class="lane-hdr" fill="#065f46" />
  <text x="1025" y="116" class="lane-title">👨‍🍳 Kitchen &amp; Courier Dispatch</text>

  <!-- START NODE in Customer Lane -->
  <circle cx="175" cy="170" r="14" class="start-circle" />
  <line x1="175" y1="184" x2="175" y2="215" class="flow-arrow" />

  <!-- Action: Browse Menu -->
  <rect x="95" y="215" width="160" height="42" class="act-box" />
  <text x="175" y="236" class="act-text">Browse &amp; Filter Menu</text>

  <line x1="175" y1="257" x2="175" y2="295" class="flow-arrow" />

  <!-- Action: Add to Cart -->
  <rect x="95" y="295" width="160" height="42" class="act-box" />
  <text x="175" y="316" class="act-text">Add Dishes to Cart</text>

  <line x1="255" y1="316" x2="380" y2="316" class="flow-arrow" />

  <!-- Action in WebGUI: Compute Totals -->
  <rect x="380" y="295" width="170" height="42" class="act-box" />
  <text x="465" y="316" class="act-text">Compute Subtotal + VAT</text>

  <line x1="465" y1="337" x2="465" y2="375" class="flow-arrow" />

  <!-- Action in WebGUI: Render Checkout -->
  <rect x="380" y="375" width="170" height="42" class="act-box" />
  <text x="465" y="396" class="act-text">Display Checkout Modal</text>

  <line x1="380" y1="396" x2="255" y2="396" class="flow-arrow" />

  <!-- Action: Select COD -->
  <rect x="95" y="375" width="160" height="42" class="act-box-gold" />
  <text x="175" y="396" class="act-text" fill="#b45309">Select COD &amp; Address</text>

  <line x1="175" y1="417" x2="175" y2="465" class="flow-arrow" />

  <!-- Action: Click Place Order -->
  <rect x="95" y="465" width="160" height="42" class="act-box" />
  <text x="175" y="486" class="act-text">Click "Place Order Now"</text>

  <line x1="255" y1="486" x2="685" y2="486" class="flow-arrow" />

  <!-- Decision Diamond in Payment Engine -->
  <polygon points="745,466 795,486 745,506 695,486" class="dec-diamond" />
  <text x="745" y="486" font-family="'Segoe UI', Arial, sans-serif" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">Payment?</text>

  <!-- Branch: [Cash on Delivery] -->
  <line x1="745" y1="506" x2="745" y2="550" class="flow-arrow" />
  <text x="755" y="530" class="flow-label">[Cash on Delivery]</text>

  <rect x="660" y="550" width="170" height="42" class="act-box-gold" />
  <text x="745" y="571" class="act-text" fill="#b45309">Flag "Pay on Handover"</text>

  <line x1="745" y1="592" x2="745" y2="630" class="flow-arrow" />

  <!-- FORK BAR -->
  <rect x="420" y="630" width="650" height="8" class="fork-join" />

  <!-- Thread A: Customer Live Tracker -->
  <line x1="465" y1="638" x2="465" y2="680" class="flow-arrow" />
  <rect x="380" y="680" width="170" height="42" class="act-box-green" />
  <text x="465" y="701" class="act-text" fill="#047857">Init 5-Stage Stepper</text>

  <!-- Thread B: Kitchen Ticket Dispatch -->
  <line x1="1025" y1="638" x2="1025" y2="680" class="flow-arrow" />
  <rect x="935" y="680" width="180" height="42" class="act-box" />
  <text x="1025" y="701" class="act-text">Chef Cooks Dishes</text>

  <line x1="1025" y1="722" x2="1025" y2="755" class="flow-arrow" />

  <!-- Action: Handover & Collect Cash -->
  <rect x="935" y="755" width="180" height="42" class="act-box-gold" />
  <text x="1025" y="776" class="act-text" fill="#b45309">Deliver &amp; Collect Cash</text>

  <line x1="1025" y1="797" x2="1025" y2="825" class="flow-arrow" />

  <!-- JOIN BAR -->
  <rect x="420" y="825" width="650" height="8" class="fork-join" />

  <!-- Flow to Final State -->
  <line x1="745" y1="833" x2="745" y2="865" class="flow-arrow" />

  <!-- Final Node -->
  <circle cx="745" cy="880" r="16" class="end-outer" />
  <circle cx="745" cy="880" r="10" class="end-inner" />
</svg>`;

saveSvg('06_activity_order_processing.svg', actEndToEndSvg);

// ===========================================================================
// 6. VISUAL UML: STATE MACHINE DIAGRAM (ORDER LIFECYCLE)
// ===========================================================================
const stateOrderLifecycleSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="1200" height="600">
  <defs>
    <style>
      .canvas-bg { fill: #f8fafc; }
      .header-bg { fill: #0a1128; }
      .header-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 20px; font-weight: bold; fill: #ffffff; }
      .header-tag { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #e4b95b; letter-spacing: 1.5px; }
      .state-card { fill: #ffffff; stroke: #0f172a; stroke-width: 1.8; rx: 10; filter: drop-shadow(0 3px 8px rgba(0,0,0,0.06)); }
      .state-hdr { fill: #0f172a; rx: 8; }
      .state-hdr-gold { fill: #b45309; rx: 8; }
      .state-hdr-green { fill: #065f46; rx: 8; }
      .state-hdr-rose { fill: #be123c; rx: 8; }
      .state-name { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13px; font-weight: bold; fill: #ffffff; text-anchor: middle; dominant-baseline: central; }
      .state-body { font-family: 'Consolas', 'Courier New', monospace; font-size: 10.5px; fill: #334155; }
      .trans-line { stroke: #0f172a; stroke-width: 1.8; marker-end: url(#arrowTrans); }
      .trans-cancel { stroke: #e11d48; stroke-width: 1.8; stroke-dasharray: 4,4; marker-end: url(#arrowCancel); }
      .trans-label { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: 700; fill: #0f172a; text-anchor: middle; }
      .guard-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10.5px; font-weight: bold; fill: #e11d48; }
      .start-circle { fill: #0a1128; }
      .end-outer { fill: none; stroke: #0a1128; stroke-width: 2.2; }
      .end-inner { fill: #0a1128; }
    </style>
    <marker id="arrowTrans" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
    </marker>
    <marker id="arrowCancel" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#e11d48" />
    </marker>
  </defs>

  <rect width="100%" height="100%" class="canvas-bg" />

  <!-- Top Executive Banner -->
  <rect x="0" y="0" width="1200" height="70" class="header-bg" />
  <rect x="0" y="68" width="1200" height="3" fill="#e4b95b" />
  <text x="35" y="30" class="header-tag">WONDER LAND RESTAURANT SYSTEM • BEHAVIORAL STATE MODEL</text>
  <text x="35" y="55" class="header-title">Visual UML: State Machine Diagram (Order Lifecycle &amp; Cancellation Guards)</text>

  <!-- START NODE -->
  <circle cx="50" cy="220" r="14" class="start-circle" />
  <line x1="64" y1="220" x2="110" y2="220" class="trans-line" />
  <text x="87" y="210" class="trans-label">checkout()</text>

  <!-- State 1: PENDING -->
  <g transform="translate(110, 160)">
    <rect width="170" height="115" class="state-card" />
    <rect width="170" height="32" class="state-hdr" />
    <text x="85" y="16" class="state-name">1. PENDING</text>
    <text x="12" y="52" class="state-body">entry / saveToStore()</text>
    <text x="12" y="72" class="state-body">do / notifyKitchen()</text>
    <text x="12" y="92" class="state-body">exit / assignKOT()</text>
  </g>

  <!-- Trans 1 -> 2 -->
  <line x1="280" y1="220" x2="350" y2="220" class="trans-line" />
  <text x="315" y="210" class="trans-label">acceptTicket()</text>

  <!-- State 2: CONFIRMED -->
  <g transform="translate(350, 160)">
    <rect width="170" height="115" class="state-card" />
    <rect width="170" height="32" class="state-hdr-gold" />
    <text x="85" y="16" class="state-name">2. CONFIRMED</text>
    <text x="12" y="52" class="state-body">entry / prepIngredients()</text>
    <text x="12" y="72" class="state-body">do / queueInCooklist()</text>
    <text x="12" y="92" class="state-body">exit / alertChef()</text>
  </g>

  <!-- Trans 2 -> 3 -->
  <line x1="520" y1="220" x2="590" y2="220" class="trans-line" stroke-width="2" />
  <text x="555" y="210" class="trans-label">startCooking()</text>

  <!-- State 3: IN KITCHEN (Lockout Guard) -->
  <g transform="translate(590, 160)">
    <rect width="180" height="115" class="state-card" stroke="#b45309" stroke-width="2.2" />
    <rect width="180" height="32" class="state-hdr-gold" />
    <text x="90" y="16" class="state-name">3. IN KITCHEN</text>
    <text x="12" y="52" class="state-body">entry / disableCancel()</text>
    <text x="12" y="72" class="state-body">do / cookAndPlate()</text>
    <text x="12" y="92" class="state-body">exit / boxForDelivery()</text>
  </g>

  <!-- Trans 3 -> 4 -->
  <line x1="770" y1="220" x2="840" y2="220" class="trans-line" />
  <text x="805" y="210" class="trans-label">dispatchCourier()</text>

  <!-- State 4: OUT FOR DELIVERY -->
  <g transform="translate(840, 160)">
    <rect width="170" height="115" class="state-card" />
    <rect width="170" height="32" class="state-hdr" />
    <text x="85" y="16" class="state-name">4. OUT FOR DELIVERY</text>
    <text x="12" y="52" class="state-body">entry / assignCourier()</text>
    <text x="12" y="72" class="state-body">do / transitToClient()</text>
    <text x="12" y="92" class="state-body">exit / handoverMeal()</text>
  </g>

  <!-- Trans 4 -> 5 -->
  <line x1="1010" y1="220" x2="1055" y2="220" class="trans-line" />
  <text x="1032" y="210" class="trans-label">handover()</text>

  <!-- State 5: DELIVERED (Terminal) -->
  <g transform="translate(1055, 160)">
    <rect width="130" height="115" class="state-card" stroke="#065f46" stroke-width="2" />
    <rect width="130" height="32" class="state-hdr-green" />
    <text x="65" y="16" class="state-name">5. DELIVERED</text>
    <text x="10" y="52" class="state-body">entry / collectCOD()</text>
    <text x="10" y="72" class="state-body">do / promptReview()</text>
    <text x="10" y="92" class="state-body">exit / closeOrder()</text>
  </g>

  <!-- End Node -->
  <line x1="1120" y1="275" x2="1120" y2="330" class="trans-line" />
  <circle cx="1120" cy="345" r="14" class="end-outer" />
  <circle cx="1120" cy="345" r="9" class="end-inner" />

  <!-- Cancellation Branch State -->
  <g transform="translate(230, 420)">
    <rect width="180" height="90" class="state-card" stroke="#be123c" stroke-width="2" />
    <rect width="180" height="30" class="state-hdr-rose" />
    <text x="90" y="15" class="state-name">CANCELLED</text>
    <text x="12" y="50" class="state-body">entry / releaseHold()</text>
    <text x="12" y="70" class="state-body">do / notifyCustomer()</text>
  </g>

  <!-- Cancellation Transitions from Pending & Confirmed -->
  <path d="M 195 275 L 195 465 L 230 465" fill="none" class="trans-cancel" />
  <text x="120" y="380" class="guard-text">cancel() [isPending]</text>

  <path d="M 435 275 L 435 465 L 410 465" fill="none" class="trans-cancel" />
  <text x="445" y="380" class="guard-text">cancel() [isConfirmed]</text>

  <!-- End node for Cancelled -->
  <line x1="320" y1="510" x2="320" y2="550" class="trans-line" stroke="#be123c" />
  <circle cx="320" cy="565" r="14" class="end-outer" stroke="#be123c" />
  <circle cx="320" cy="565" r="9" class="end-inner" fill="#be123c" />
</svg>`;

saveSvg('08_state_order_lifecycle.svg', stateOrderLifecycleSvg);

// ===========================================================================
// 7. VISUAL UML: COMPONENT ARCHITECTURE DIAGRAM
// ===========================================================================
const compArchSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <style>
      .canvas-bg { fill: #f8fafc; }
      .header-bg { fill: #0a1128; }
      .header-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 20px; font-weight: bold; fill: #ffffff; }
      .header-tag { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #e4b95b; letter-spacing: 1.5px; }
      .subsystem-box { fill: #ffffff; stroke: #e4b95b; stroke-width: 1.6; stroke-dasharray: 6,4; rx: 12; }
      .subsystem-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13.5px; font-weight: bold; fill: #0a1128; }
      .comp-card { fill: #ffffff; stroke: #0f172a; stroke-width: 1.8; rx: 6; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.06)); }
      .comp-tab { fill: #e4b95b; stroke: #0f172a; stroke-width: 1.2; rx: 2; }
      .comp-header { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13px; font-weight: bold; fill: #0f172a; }
      .comp-stereo { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10px; font-style: italic; fill: #b45309; }
      .comp-desc { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; fill: #64748b; }
      .dep-arrow { stroke: #1e293b; stroke-width: 1.6; stroke-dasharray: 4,4; marker-end: url(#arrowComp); }
    </style>
    <marker id="arrowComp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b" />
    </marker>
  </defs>

  <rect width="100%" height="100%" class="canvas-bg" />

  <!-- Top Executive Banner -->
  <rect x="0" y="0" width="1200" height="70" class="header-bg" />
  <rect x="0" y="68" width="1200" height="3" fill="#e4b95b" />
  <text x="35" y="30" class="header-tag">WONDER LAND RESTAURANT SYSTEM • STRUCTURAL SUBSYSTEMS</text>
  <text x="35" y="55" class="header-title">Visual UML: Component Architecture Diagram (3-Tier Modular Subsystems)</text>

  <!-- TIER 1: Presentation Tier -->
  <rect x="40" y="95" width="1120" height="180" class="subsystem-box" />
  <text x="60" y="122" class="subsystem-title">&lt;&lt;Subsystem&gt;&gt; Presentation Components (Client Web GUI)</text>

  <!-- Comp 1: Customer Portal -->
  <g transform="translate(60, 140)">
    <rect width="320" height="110" class="comp-card" />
    <rect x="-10" y="18" width="20" height="14" class="comp-tab" />
    <rect x="-10" y="54" width="20" height="14" class="comp-tab" />
    <text x="25" y="35" class="comp-stereo">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="56" class="comp-header">CustomerPortalGUI</text>
    <text x="25" y="78" class="comp-desc">Dynamic Menu, Cart Drawer, Checkout,</text>
    <text x="25" y="96" class="comp-desc">and 5-Stage Live Order Stepper Modal</text>
  </g>

  <!-- Comp 2: Admin Dashboard -->
  <g transform="translate(440, 140)">
    <rect width="320" height="110" class="comp-card" />
    <rect x="-10" y="18" width="20" height="14" class="comp-tab" />
    <rect x="-10" y="54" width="20" height="14" class="comp-tab" />
    <text x="25" y="35" class="comp-stereo">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="56" class="comp-header">AdminManagementGUI</text>
    <text x="25" y="78" class="comp-desc">Security PIN Gate, Live KPI Metrics Board,</text>
    <text x="25" y="96" class="comp-desc">Order Dispatch Table, Menu Catalog CRUD</text>
  </g>

  <!-- Comp 3: Table Booking UI -->
  <g transform="translate(820, 140)">
    <rect width="320" height="110" class="comp-card" />
    <rect x="-10" y="18" width="20" height="14" class="comp-tab" />
    <rect x="-10" y="54" width="20" height="14" class="comp-tab" />
    <text x="25" y="35" class="comp-stereo">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="56" class="comp-header">ReservationModalUI</text>
    <text x="25" y="78" class="comp-desc">Time-slot Booking, Party Size Picker,</text>
    <text x="25" y="96" class="comp-desc">Seating Zone (Seaside, Terrace, VIP)</text>
  </g>

  <!-- TIER 2: Business Logic Tier -->
  <rect x="40" y="315" width="1120" height="260" class="subsystem-box" />
  <text x="60" y="342" class="subsystem-title">&lt;&lt;Subsystem&gt;&gt; Application Logic &amp; Business Services Layer</text>

  <!-- Comp 4: Order Processing Engine -->
  <g transform="translate(60, 360)">
    <rect width="320" height="95" class="comp-card" />
    <rect x="-10" y="16" width="20" height="14" class="comp-tab" />
    <rect x="-10" y="48" width="20" height="14" class="comp-tab" />
    <text x="25" y="32" class="comp-stereo">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="52" class="comp-header">OrderProcessingEngine</text>
    <text x="25" y="72" class="comp-desc">Tax calculation, COD verification,</text>
    <text x="25" y="88" class="comp-desc">State machine lifecycle progression</text>
  </g>

  <!-- Comp 5: Menu Catalog Service -->
  <g transform="translate(440, 360)">
    <rect width="320" height="95" class="comp-card" />
    <rect x="-10" y="16" width="20" height="14" class="comp-tab" />
    <rect x="-10" y="48" width="20" height="14" class="comp-tab" />
    <text x="25" y="32" class="comp-stereo">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="52" class="comp-header">MenuCatalogService</text>
    <text x="25" y="72" class="comp-desc">Category filtering, keyword live search,</text>
    <text x="25" y="88" class="comp-desc">Dish availability mutation &amp; persistence</text>
  </g>

  <!-- Comp 6: Excel Exporter -->
  <g transform="translate(820, 360)">
    <rect width="320" height="95" class="comp-card" stroke="#059669" />
    <rect x="-10" y="16" width="20" height="14" class="comp-tab" fill="#059669" />
    <rect x="-10" y="48" width="20" height="14" class="comp-tab" fill="#059669" />
    <text x="25" y="32" class="comp-stereo" fill="#047857">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="52" class="comp-header" fill="#047857">ExcelExportTelemetryEngine</text>
    <text x="25" y="72" class="comp-desc">Orders dataset serialization, CSV</text>
    <text x="25" y="88" class="comp-desc">UTF-8 BOM generator, Browser download</text>
  </g>

  <!-- Comp 7: Table Allocation -->
  <g transform="translate(250, 475)">
    <rect width="320" height="85" class="comp-card" />
    <text x="25" y="30" class="comp-stereo">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="50" class="comp-header">TableAllocationService</text>
    <text x="25" y="70" class="comp-desc">Slot capacity validation &amp; booking lock</text>
  </g>

  <!-- Comp 8: Payment Gateway Strategy -->
  <g transform="translate(630, 475)">
    <rect width="320" height="85" class="comp-card" />
    <text x="25" y="30" class="comp-stereo">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="50" class="comp-header">PaymentStrategyGateway</text>
    <text x="25" y="70" class="comp-desc">Polymorphic COD, Card &amp; Wallet strategy</text>
  </g>

  <!-- TIER 3: Persistence Tier -->
  <rect x="40" y="615" width="1120" height="160" class="subsystem-box" />
  <text x="60" y="642" class="subsystem-title">&lt;&lt;Subsystem&gt;&gt; Persistence &amp; Client Storage Layer</text>

  <!-- Comp 9: LocalStorage Adapter -->
  <g transform="translate(250, 660)">
    <rect width="380" height="95" class="comp-card" />
    <rect x="-10" y="16" width="20" height="14" class="comp-tab" />
    <rect x="-10" y="48" width="20" height="14" class="comp-tab" />
    <text x="25" y="32" class="comp-stereo">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="52" class="comp-header">LocalStoragePersistenceAdapter</text>
    <text x="25" y="72" class="comp-desc">Key: WONDERLAND_SYSTEM_DB_V1</text>
    <text x="25" y="88" class="comp-desc">JSON Serialization &amp; Multi-tab Storage Events</text>
  </g>

  <!-- Comp 10: Mock Demo Seeder -->
  <g transform="translate(680, 660)">
    <rect width="340" height="95" class="comp-card" />
    <rect x="-10" y="16" width="20" height="14" class="comp-tab" />
    <rect x="-10" y="48" width="20" height="14" class="comp-tab" />
    <text x="25" y="32" class="comp-stereo">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="52" class="comp-header">MockDemoSeeder</text>
    <text x="25" y="72" class="comp-desc">Initial dishes catalog &amp; sample orders</text>
    <text x="25" y="88" class="comp-desc">Instant reset button for academic demo</text>
  </g>

  <!-- Dependency Lines -->
  <line x1="220" y1="250" x2="220" y2="360" class="dep-arrow" />
  <line x1="600" y1="250" x2="600" y2="360" class="dep-arrow" />
  <line x1="600" y1="250" x2="980" y2="360" class="dep-arrow" />
  <line x1="980" y1="250" x2="410" y2="475" class="dep-arrow" />
  <line x1="220" y1="455" x2="440" y2="660" class="dep-arrow" />
  <line x1="600" y1="455" x2="440" y2="660" class="dep-arrow" />
</svg>`;

saveSvg('10_component_diagram.svg', compArchSvg);

// ===========================================================================
// 8. VISUAL UML: DEPLOYMENT DIAGRAM (HARDWARE & TOPOLOGY)
// ===========================================================================
const deploySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" width="1200" height="700">
  <defs>
    <style>
      .canvas-bg { fill: #f8fafc; }
      .header-bg { fill: #0a1128; }
      .header-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 20px; font-weight: bold; fill: #ffffff; }
      .header-tag { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #e4b95b; letter-spacing: 1.5px; }
      .node-card { fill: #ffffff; stroke: #0f172a; stroke-width: 2; rx: 10; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.06)); }
      .node-hdr { fill: #0a1128; rx: 8; }
      .node-hdr-gold { fill: #b45309; rx: 8; }
      .node-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13.5px; font-weight: bold; fill: #ffffff; text-anchor: middle; dominant-baseline: central; }
      .art-box { fill: #fffdf5; stroke: #e4b95b; stroke-width: 1.5; rx: 6; }
      .art-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11.5px; font-weight: bold; fill: #0f172a; }
      .art-desc { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10px; fill: #64748b; }
      .net-line { stroke: #0f172a; stroke-width: 2.2; }
      .net-label { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #b45309; text-anchor: middle; }
    </style>
  </defs>

  <rect width="100%" height="100%" class="canvas-bg" />

  <!-- Top Executive Banner -->
  <rect x="0" y="0" width="1200" height="70" class="header-bg" />
  <rect x="0" y="68" width="1200" height="3" fill="#e4b95b" />
  <text x="35" y="30" class="header-tag">WONDER LAND RESTAURANT SYSTEM • PHYSICAL &amp; CLOUD ARCHITECTURE</text>
  <text x="35" y="55" class="header-title">Visual UML: Deployment Diagram (Hardware Nodes, Web Runtimes &amp; Network)</text>

  <!-- Node 1: Client Workstation / Mobile Device -->
  <g transform="translate(60, 120)">
    <rect width="480" height="500" class="node-card" />
    <rect width="480" height="42" class="node-hdr" />
    <text x="240" y="21" class="node-title">&lt;&lt;device&gt;&gt; Client User Device (PC / Smartphone)</text>

    <!-- Execution Environment -->
    <g transform="translate(30, 60)">
      <rect width="420" height="400" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" rx="8" />
      <text x="20" y="25" font-family="'Segoe UI', Arial, sans-serif" font-size="12" font-weight="bold" fill="#0a1128">&lt;&lt;executionEnvironment&gt;&gt; Web Browser (Chrome, Edge, Safari)</text>

      <!-- Artifact 1: Customer Portal -->
      <g transform="translate(20, 45)">
        <rect width="380" height="65" class="art-box" />
        <text x="15" y="25" class="art-title">&lt;&lt;artifact&gt;&gt; index.html (Customer Portal)</text>
        <text x="15" y="45" class="art-desc">Responsive DOM UI, style.css, fontawesome CDN, app.js</text>
      </g>

      <!-- Artifact 2: Admin Portal -->
      <g transform="translate(20, 125)">
        <rect width="380" height="65" class="art-box" />
        <text x="15" y="25" class="art-title">&lt;&lt;artifact&gt;&gt; admin.html (Back-Office Hub)</text>
        <text x="15" y="45" class="art-desc">Admin dashboard, admin.css, admin.js, Excel CSV Exporter</text>
      </g>

      <!-- Artifact 3: JS Engine -->
      <g transform="translate(20, 205)">
        <rect width="380" height="65" class="art-box" />
        <text x="15" y="25" class="art-title">&lt;&lt;runtime&gt;&gt; V8 JavaScript Engine</text>
        <text x="15" y="45" class="art-desc">ES6+ Execution, Event loop, State Machine Stepper Engine</text>
      </g>

      <!-- Artifact 4: LocalStorage Database -->
      <g transform="translate(20, 285)">
        <rect width="380" height="85" class="art-box" stroke="#059669" fill="#f0fdf4" />
        <text x="15" y="25" class="art-title" fill="#047857">&lt;&lt;database&gt;&gt; HTML5 LocalStorage Storage Engine</text>
        <text x="15" y="45" class="art-desc">Key: WONDERLAND_SYSTEM_DB_V1 (Persistent JSON Store)</text>
        <text x="15" y="65" class="art-desc">Cross-tab Storage Event Listener for Real-Time Sync</text>
      </g>
    </g>
  </g>

  <!-- Network Connection -->
  <line x1="540" y1="360" x2="680" y2="360" class="net-line" />
  <rect x="560" y="335" width="100" height="25" fill="#ffffff" stroke="#b45309" rx="4" />
  <text x="610" y="352" class="net-label">&lt;&lt;HTTPS : 443&gt;&gt;</text>

  <!-- Node 2: GitHub Pages Web Server -->
  <g transform="translate(680, 120)">
    <rect width="460" height="500" class="node-card" />
    <rect width="460" height="42" class="node-hdr-gold" />
    <text x="230" y="21" class="node-title">&lt;&lt;server&gt;&gt; GitHub Pages Static Cloud Host</text>

    <!-- Web Server Software -->
    <g transform="translate(30, 60)">
      <rect width="400" height="400" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" rx="8" />
      <text x="20" y="25" font-family="'Segoe UI', Arial, sans-serif" font-size="12" font-weight="bold" fill="#0a1128">&lt;&lt;webServer&gt;&gt; Fastly Edge CDN &amp; NGINX Web Server</text>

      <!-- Repo Distribution -->
      <g transform="translate(20, 50)">
        <rect width="360" height="85" class="art-box" />
        <text x="15" y="25" class="art-title">&lt;&lt;distribution&gt;&gt; radwasengr.github.io</text>
        <text x="15" y="45" class="art-desc">Domain: /wonder-land-restaurant/</text>
        <text x="15" y="65" class="art-desc">Direct static file delivery (Cache-Busted v=2.6.0)</text>
      </g>

      <!-- Asset Files -->
      <g transform="translate(20, 155)">
        <rect width="360" height="100" class="art-box" />
        <text x="15" y="25" class="art-title">&lt;&lt;fileSystem&gt;&gt; Static Web Assets</text>
        <text x="15" y="45" class="art-desc">• HTML5 Documents (index.html, admin.html)</text>
        <text x="15" y="65" class="art-desc">• Stylesheets (style.css, admin.css)</text>
        <text x="15" y="85" class="art-desc">• Vector SVGs &amp; Culinary Photography</text>
      </g>

      <!-- .nojekyll Flag -->
      <g transform="translate(20, 275)">
        <rect width="360" height="65" class="art-box" stroke="#059669" fill="#f0fdf4" />
        <text x="15" y="25" class="art-title" fill="#047857">&lt;&lt;config&gt;&gt; .nojekyll File</text>
        <text x="15" y="45" class="art-desc">Bypasses Jekyll processing for instant deployment</text>
      </g>
    </g>
  </g>
</svg>`;

saveSvg('11_deployment_diagram.svg', deploySvg);

// ===========================================================================
// 9. VISUAL UML: ENTITY-RELATIONSHIP DIAGRAM (ERD)
// ===========================================================================
const erdDatabaseSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 860" width="1200" height="860">
  <defs>
    <style>
      .canvas-bg { fill: #f8fafc; }
      .header-bg { fill: #0a1128; }
      .header-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 20px; font-weight: bold; fill: #ffffff; }
      .header-tag { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #e4b95b; letter-spacing: 1.5px; }
      .entity-box { fill: #ffffff; stroke: #0f172a; stroke-width: 1.8; rx: 8; filter: drop-shadow(0 3px 10px rgba(0,0,0,0.06)); }
      .entity-hdr { fill: #0a1128; }
      .entity-hdr-gold { fill: #b45309; }
      .entity-hdr-green { fill: #065f46; }
      .entity-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13px; font-weight: bold; fill: #ffffff; text-anchor: middle; dominant-baseline: central; }
      .col-text { font-family: 'Consolas', 'Courier New', monospace; font-size: 11px; fill: #0f172a; }
      .pk-pill { fill: #e4b95b; font-weight: bold; }
      .fk-pill { fill: #2563eb; font-weight: bold; }
      .type-text { fill: #64748b; font-size: 10px; }
      .comp-line { stroke: #e2e8f0; stroke-width: 1; }
      .rel-line { stroke: #1e293b; stroke-width: 1.8; }
      .card-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #b45309; }
    </style>
  </defs>

  <rect width="100%" height="100%" class="canvas-bg" />

  <!-- Top Executive Banner -->
  <rect x="0" y="0" width="1200" height="70" class="header-bg" />
  <rect x="0" y="68" width="1200" height="3" fill="#e4b95b" />
  <text x="35" y="30" class="header-tag">WONDER LAND RESTAURANT SYSTEM • RELATIONAL DATA ARCHITECTURE</text>
  <text x="35" y="55" class="header-title">Visual UML: Entity-Relationship Diagram (ERD Relational Schema)</text>

  <!-- Table 1: CUSTOMERS -->
  <g transform="translate(50, 110)">
    <rect width="250" height="210" class="entity-box" />
    <path d="M 0 0 L 250 0 L 250 34 L 0 34 Z" class="entity-hdr" rx="8" />
    <text x="125" y="17" class="entity-title">CUSTOMERS</text>
    <text x="12" y="52" class="col-text"><tspan class="pk-pill">PK</tspan> customer_id <tspan class="type-text">VARCHAR(36)</tspan></text>
    <line x1="0" y1="62" x2="250" y2="62" class="comp-line" />
    <text x="12" y="80" class="col-text">   full_name <tspan class="type-text">VARCHAR(100)</tspan></text>
    <text x="12" y="98" class="col-text">   email <tspan class="type-text">VARCHAR(120)</tspan></text>
    <text x="12" y="116" class="col-text">   phone <tspan class="type-text">VARCHAR(20)</tspan></text>
    <text x="12" y="134" class="col-text">   street_address <tspan class="type-text">TEXT</tspan></text>
    <text x="12" y="152" class="col-text">   city <tspan class="type-text">VARCHAR(50)</tspan></text>
    <text x="12" y="170" class="col-text">   created_at <tspan class="type-text">TIMESTAMP</tspan></text>
  </g>

  <!-- Table 2: ORDERS -->
  <g transform="translate(420, 110)">
    <rect width="260" height="240" class="entity-box" />
    <path d="M 0 0 L 260 0 L 260 34 L 0 34 Z" class="entity-hdr-gold" rx="8" />
    <text x="130" y="17" class="entity-title">ORDERS</text>
    <text x="12" y="52" class="col-text"><tspan class="pk-pill">PK</tspan> order_id <tspan class="type-text">VARCHAR(36)</tspan></text>
    <line x1="0" y1="62" x2="260" y2="62" class="comp-line" />
    <text x="12" y="80" class="col-text"><tspan class="fk-pill">FK</tspan> customer_id <tspan class="type-text">VARCHAR(36)</tspan></text>
    <text x="12" y="98" class="col-text">   subtotal <tspan class="type-text">DECIMAL(10,2)</tspan></text>
    <text x="12" y="116" class="col-text">   tax_amount <tspan class="type-text">DECIMAL(10,2)</tspan></text>
    <text x="12" y="134" class="col-text">   delivery_fee <tspan class="type-text">DECIMAL(10,2)</tspan></text>
    <text x="12" y="152" class="col-text">   total_amount <tspan class="type-text">DECIMAL(10,2)</tspan></text>
    <text x="12" y="170" class="col-text">   order_status <tspan class="type-text">VARCHAR(30)</tspan></text>
    <text x="12" y="188" class="col-text">   payment_method <tspan class="type-text">VARCHAR(30)</tspan></text>
    <text x="12" y="206" class="col-text">   created_at <tspan class="type-text">TIMESTAMP</tspan></text>
  </g>

  <!-- Relationship CUSTOMERS (1) ──── (N) ORDERS -->
  <line x1="300" y1="180" x2="420" y2="180" class="rel-line" />
  <text x="315" y="172" class="card-text">1</text>
  <text x="400" y="172" class="card-text">0..*</text>

  <!-- Table 3: ORDER_ITEMS -->
  <g transform="translate(800, 110)">
    <rect width="260" height="210" class="entity-box" />
    <path d="M 0 0 L 260 0 L 260 34 L 0 34 Z" class="entity-hdr" rx="8" />
    <text x="130" y="17" class="entity-title">ORDER_ITEMS</text>
    <text x="12" y="52" class="col-text"><tspan class="pk-pill">PK</tspan> item_id <tspan class="type-text">VARCHAR(36)</tspan></text>
    <line x1="0" y1="62" x2="260" y2="62" class="comp-line" />
    <text x="12" y="80" class="col-text"><tspan class="fk-pill">FK</tspan> order_id <tspan class="type-text">VARCHAR(36)</tspan></text>
    <text x="12" y="98" class="col-text"><tspan class="fk-pill">FK</tspan> dish_id <tspan class="type-text">VARCHAR(36)</tspan></text>
    <text x="12" y="116" class="col-text">   dish_title <tspan class="type-text">VARCHAR(100)</tspan></text>
    <text x="12" y="134" class="col-text">   unit_price <tspan class="type-text">DECIMAL(10,2)</tspan></text>
    <text x="12" y="152" class="col-text">   quantity <tspan class="type-text">INT</tspan></text>
    <text x="12" y="170" class="col-text">   line_total <tspan class="type-text">DECIMAL(10,2)</tspan></text>
  </g>

  <!-- Relationship ORDERS (1) ──── (N) ORDER_ITEMS -->
  <line x1="680" y1="180" x2="800" y2="180" class="rel-line" />
  <text x="695" y="172" class="card-text">1</text>
  <text x="780" y="172" class="card-text">1..*</text>

  <!-- Table 4: MENU_ITEMS -->
  <g transform="translate(800, 420)">
    <rect width="260" height="210" class="entity-box" />
    <path d="M 0 0 L 260 0 L 260 34 L 0 34 Z" class="entity-hdr-green" rx="8" />
    <text x="130" y="17" class="entity-title">MENU_ITEMS</text>
    <text x="12" y="52" class="col-text"><tspan class="pk-pill">PK</tspan> dish_id <tspan class="type-text">VARCHAR(36)</tspan></text>
    <line x1="0" y1="62" x2="260" y2="62" class="comp-line" />
    <text x="12" y="80" class="col-text"><tspan class="fk-pill">FK</tspan> category_id <tspan class="type-text">VARCHAR(36)</tspan></text>
    <text x="12" y="98" class="col-text">   title <tspan class="type-text">VARCHAR(100)</tspan></text>
    <text x="12" y="116" class="col-text">   description <tspan class="type-text">TEXT</tspan></text>
    <text x="12" y="134" class="col-text">   price <tspan class="type-text">DECIMAL(10,2)</tspan></text>
    <text x="12" y="152" class="col-text">   image_url <tspan class="type-text">VARCHAR(255)</tspan></text>
    <text x="12" y="170" class="col-text">   is_available <tspan class="type-text">BOOLEAN</tspan></text>
  </g>

  <!-- Relationship ORDER_ITEMS (N) ──── (1) MENU_ITEMS -->
  <line x1="930" y1="320" x2="930" y2="420" class="rel-line" />
  <text x="940" y="340" class="card-text">0..*</text>
  <text x="940" y="405" class="card-text">1</text>

  <!-- Table 5: CATEGORIES -->
  <g transform="translate(800, 700)">
    <rect width="260" height="120" class="entity-box" />
    <path d="M 0 0 L 260 0 L 260 34 L 0 34 Z" class="entity-hdr" rx="8" />
    <text x="130" y="17" class="entity-title">CATEGORIES</text>
    <text x="12" y="52" class="col-text"><tspan class="pk-pill">PK</tspan> category_id <tspan class="type-text">VARCHAR(36)</tspan></text>
    <line x1="0" y1="62" x2="260" y2="62" class="comp-line" />
    <text x="12" y="80" class="col-text">   name <tspan class="type-text">VARCHAR(50)</tspan></text>
    <text x="12" y="98" class="col-text">   display_order <tspan class="type-text">INT</tspan></text>
  </g>

  <!-- Relationship CATEGORIES (1) ──── (N) MENU_ITEMS -->
  <line x1="930" y1="630" x2="930" y2="700" class="rel-line" />
  <text x="940" y="650" class="card-text">1..*</text>
  <text x="940" y="685" class="card-text">1</text>

  <!-- Table 6: PAYMENTS -->
  <g transform="translate(420, 420)">
    <rect width="260" height="180" class="entity-box" />
    <path d="M 0 0 L 260 0 L 260 34 L 0 34 Z" class="entity-hdr-gold" rx="8" />
    <text x="130" y="17" class="entity-title">PAYMENTS</text>
    <text x="12" y="52" class="col-text"><tspan class="pk-pill">PK</tspan> payment_id <tspan class="type-text">VARCHAR(36)</tspan></text>
    <line x1="0" y1="62" x2="260" y2="62" class="comp-line" />
    <text x="12" y="80" class="col-text"><tspan class="fk-pill">FK</tspan> order_id <tspan class="type-text">VARCHAR(36)</tspan></text>
    <text x="12" y="98" class="col-text">   method <tspan class="type-text">VARCHAR(30)</tspan> (COD/Card)</text>
    <text x="12" y="116" class="col-text">   amount <tspan class="type-text">DECIMAL(10,2)</tspan></text>
    <text x="12" y="134" class="col-text">   status <tspan class="type-text">VARCHAR(30)</tspan></text>
    <text x="12" y="152" class="col-text">   collected_at <tspan class="type-text">TIMESTAMP</tspan></text>
  </g>

  <!-- Relationship ORDERS (1) ──── (1) PAYMENTS -->
  <line x1="550" y1="350" x2="550" y2="420" class="rel-line" />
  <text x="560" y="370" class="card-text">1</text>
  <text x="560" y="405" class="card-text">1</text>

  <!-- Table 7: TABLE_RESERVATIONS -->
  <g transform="translate(50, 420)">
    <rect width="250" height="210" class="entity-box" />
    <path d="M 0 0 L 250 0 L 250 34 L 0 34 Z" class="entity-hdr" rx="8" />
    <text x="125" y="17" class="entity-title">TABLE_RESERVATIONS</text>
    <text x="12" y="52" class="col-text"><tspan class="pk-pill">PK</tspan> reservation_id <tspan class="type-text">VARCHAR(36)</tspan></text>
    <line x1="0" y1="62" x2="250" y2="62" class="comp-line" />
    <text x="12" y="80" class="col-text"><tspan class="fk-pill">FK</tspan> customer_id <tspan class="type-text">VARCHAR(36)</tspan></text>
    <text x="12" y="98" class="col-text">   guest_name <tspan class="type-text">VARCHAR(100)</tspan></text>
    <text x="12" y="116" class="col-text">   booking_date <tspan class="type-text">DATE</tspan></text>
    <text x="12" y="134" class="col-text">   time_slot <tspan class="type-text">VARCHAR(20)</tspan></text>
    <text x="12" y="152" class="col-text">   party_size <tspan class="type-text">INT</tspan></text>
    <text x="12" y="170" class="col-text">   seating_zone <tspan class="type-text">VARCHAR(50)</tspan></text>
    <text x="12" y="188" class="col-text">   status <tspan class="type-text">VARCHAR(30)</tspan></text>
  </g>

  <!-- Relationship CUSTOMERS (1) ──── (N) TABLE_RESERVATIONS -->
  <line x1="175" y1="320" x2="175" y2="420" class="rel-line" />
  <text x="185" y="340" class="card-text">1</text>
  <text x="185" y="405" class="card-text">0..*</text>
</svg>`;

saveSvg('14_entity_relationship_diagram.svg', erdDatabaseSvg);

console.log('All 10 requested UML diagrams generated in world-class gourmet theme!');
