const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'docs', 'diagrams');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

// Helper to save SVG
function saveSvg(filename, svgContent) {
    const filePath = path.join(outDir, filename);
    fs.writeFileSync(filePath, svgContent.trim(), 'utf8');
    console.log(`Saved: ${filename}`);
}

// ---------------------------------------------------------------------------
// 1. USE CASE DIAGRAM
// ---------------------------------------------------------------------------
const useCaseSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 800" width="1100" height="800">
  <defs>
    <style>
      .bg { fill: #f8fafc; }
      .system-box { fill: #ffffff; stroke: #3b82f6; stroke-width: 2.5; stroke-dasharray: 6,4; rx: 12; }
      .system-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 20px; font-weight: bold; fill: #1e3a8a; text-anchor: middle; }
      .actor-head { fill: #fef08a; stroke: #1e293b; stroke-width: 2; }
      .actor-body { stroke: #1e293b; stroke-width: 2; stroke-linecap: round; }
      .actor-label { font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; font-weight: bold; fill: #0f172a; text-anchor: middle; }
      .usecase-ellipse { fill: #eff6ff; stroke: #2563eb; stroke-width: 1.8; rx: 85; ry: 26; }
      .usecase-label { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13px; font-weight: 600; fill: #1e40af; text-anchor: middle; dominant-baseline: central; }
      .line { stroke: #475569; stroke-width: 1.5; }
      .include-line { stroke: #059669; stroke-width: 1.5; stroke-dasharray: 5,4; marker-end: url(#arrowGreen); }
      .extend-line { stroke: #d97706; stroke-width: 1.5; stroke-dasharray: 5,4; marker-end: url(#arrowOrange); }
      .dep-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-style: italic; font-weight: 600; }
    </style>
    <marker id="arrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#059669" />
    </marker>
    <marker id="arrowOrange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706" />
    </marker>
  </defs>

  <rect width="100%" height="100%" class="bg" />

  <!-- Diagram Header -->
  <text x="550" y="35" font-family="'Segoe UI', Arial, sans-serif" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">Use Case Diagram: Wonder Land Restaurant Management System</text>

  <!-- System Boundary -->
  <rect x="220" y="55" width="660" height="720" class="system-box" />
  <text x="550" y="85" class="system-title">&lt;&lt;System&gt;&gt; Wonder Land Restaurant Platform</text>

  <!-- Left Actor: Customer -->
  <g transform="translate(100, 260)">
    <circle cx="0" cy="0" r="16" class="actor-head" />
    <line x1="0" y1="16" x2="0" y2="60" class="actor-body" />
    <line x1="-24" y1="32" x2="24" y2="32" class="actor-body" />
    <line x1="0" y1="60" x2="-20" y2="105" class="actor-body" />
    <line x1="0" y1="60" x2="20" y2="105" class="actor-body" />
    <text x="0" y="125" class="actor-label">Customer</text>
  </g>

  <!-- Right Actor: Admin / Manager -->
  <g transform="translate(990, 220)">
    <circle cx="0" cy="0" r="16" class="actor-head" fill="#fed7aa" />
    <line x1="0" y1="16" x2="0" y2="60" class="actor-body" />
    <line x1="-24" y1="32" x2="24" y2="32" class="actor-body" />
    <line x1="0" y1="60" x2="-20" y2="105" class="actor-body" />
    <line x1="0" y1="60" x2="20" y2="105" class="actor-body" />
    <text x="0" y="125" class="actor-label">Restaurant Admin</text>
  </g>

  <!-- Right Actor: Kitchen Staff / Chef -->
  <g transform="translate(990, 520)">
    <circle cx="0" cy="0" r="16" class="actor-head" fill="#bbf7d0" />
    <line x1="0" y1="16" x2="0" y2="60" class="actor-body" />
    <line x1="-24" y1="32" x2="24" y2="32" class="actor-body" />
    <line x1="0" y1="60" x2="-20" y2="105" class="actor-body" />
    <line x1="0" y1="60" x2="20" y2="105" class="actor-body" />
    <text x="0" y="125" class="actor-label">Kitchen Staff / Chef</text>
  </g>

  <!-- Use Cases: Customer Side -->
  <!-- UC1: Browse Menu & Search -->
  <g transform="translate(370, 130)">
    <ellipse cx="0" cy="0" class="usecase-ellipse" />
    <text x="0" y="0" class="usecase-label">UC01: Browse &amp; Search Menu</text>
  </g>
  <!-- UC2: Filter Category -->
  <g transform="translate(680, 130)">
    <ellipse cx="0" cy="0" class="usecase-ellipse" />
    <text x="0" y="0" class="usecase-label">UC02: Filter Menu by Category</text>
  </g>
  <!-- UC3: Manage Cart -->
  <g transform="translate(370, 220)">
    <ellipse cx="0" cy="0" class="usecase-ellipse" />
    <text x="0" y="0" class="usecase-label">UC03: Manage Cart Items</text>
  </g>
  <!-- UC4: Checkout & Order -->
  <g transform="translate(370, 310)">
    <ellipse cx="0" cy="0" class="usecase-ellipse" />
    <text x="0" y="0" class="usecase-label">UC04: Checkout &amp; Place Order</text>
  </g>
  <!-- UC5: Process Payment -->
  <g transform="translate(680, 310)">
    <ellipse cx="0" cy="0" class="usecase-ellipse" fill="#f0fdf4" stroke="#16a34a" />
    <text x="0" y="0" class="usecase-label" fill="#15803d">UC05: Process Payment</text>
  </g>
  <!-- UC6: Track Order Status -->
  <g transform="translate(370, 400)">
    <ellipse cx="0" cy="0" class="usecase-ellipse" />
    <text x="0" y="0" class="usecase-label">UC06: Track Live Order Status</text>
  </g>
  <!-- UC7: Book Table Reservation -->
  <g transform="translate(370, 490)">
    <ellipse cx="0" cy="0" class="usecase-ellipse" />
    <text x="0" y="0" class="usecase-label">UC07: Reserve Dining Table</text>
  </g>
  <!-- UC8: Submit Review & Rating -->
  <g transform="translate(370, 580)">
    <ellipse cx="0" cy="0" class="usecase-ellipse" />
    <text x="0" y="0" class="usecase-label">UC08: Submit Review &amp; Rating</text>
  </g>

  <!-- Use Cases: Admin & Kitchen Side -->
  <!-- UC9: Admin Login / Auth -->
  <g transform="translate(680, 220)">
    <ellipse cx="0" cy="0" class="usecase-ellipse" fill="#fff7ed" stroke="#ea580c" />
    <text x="0" y="0" class="usecase-label" fill="#c2410c">UC09: Authenticate / Login</text>
  </g>
  <!-- UC10: Manage Menu Catalog -->
  <g transform="translate(680, 400)">
    <ellipse cx="0" cy="0" class="usecase-ellipse" fill="#fff7ed" stroke="#ea580c" />
    <text x="0" y="0" class="usecase-label" fill="#c2410c">UC10: Manage Menu (CRUD)</text>
  </g>
  <!-- UC11: Manage Orders -->
  <g transform="translate(680, 490)">
    <ellipse cx="0" cy="0" class="usecase-ellipse" fill="#fff7ed" stroke="#ea580c" />
    <text x="0" y="0" class="usecase-label" fill="#c2410c">UC11: Manage &amp; Update Orders</text>
  </g>
  <!-- UC12: Manage Reservations -->
  <g transform="translate(680, 580)">
    <ellipse cx="0" cy="0" class="usecase-ellipse" fill="#fff7ed" stroke="#ea580c" />
    <text x="0" y="0" class="usecase-label" fill="#c2410c">UC12: Manage Reservations</text>
  </g>
  <!-- UC13: View Analytics & Reports -->
  <g transform="translate(680, 670)">
    <ellipse cx="0" cy="0" class="usecase-ellipse" fill="#fff7ed" stroke="#ea580c" />
    <text x="0" y="0" class="usecase-label" fill="#c2410c">UC13: View Sales Analytics</text>
  </g>
  <!-- UC14: Update Cooking Status -->
  <g transform="translate(420, 670)">
    <ellipse cx="0" cy="0" class="usecase-ellipse" fill="#f0fdf4" stroke="#16a34a" />
    <text x="0" y="0" class="usecase-label" fill="#15803d">UC14: Update Kitchen Status</text>
  </g>

  <!-- Associations: Customer to UCs -->
  <line x1="125" y1="280" x2="285" y2="135" class="line" />
  <line x1="125" y1="290" x2="285" y2="220" class="line" />
  <line x1="125" y1="300" x2="285" y2="310" class="line" />
  <line x1="125" y1="315" x2="285" y2="400" class="line" />
  <line x1="125" y1="330" x2="285" y2="490" class="line" />
  <line x1="125" y1="345" x2="285" y2="580" class="line" />

  <!-- Associations: Admin to UCs -->
  <line x1="965" y1="240" x2="765" y2="220" class="line" />
  <line x1="965" y1="250" x2="765" y2="400" class="line" />
  <line x1="965" y1="260" x2="765" y2="490" class="line" />
  <line x1="965" y1="270" x2="765" y2="580" class="line" />
  <line x1="965" y1="280" x2="765" y2="670" class="line" />

  <!-- Associations: Kitchen Staff to UCs -->
  <line x1="965" y1="540" x2="765" y2="490" class="line" />
  <line x1="965" y1="560" x2="505" y2="670" class="line" />

  <!-- Relationships: Include / Extend -->
  <!-- UC04 includes UC05 (Process Payment) -->
  <line x1="455" y1="310" x2="595" y2="310" class="include-line" />
  <text x="525" y="302" class="dep-text" fill="#059669" text-anchor="middle">&lt;&lt;include&gt;&gt;</text>

  <!-- UC01 extends UC02 (Filter) -->
  <line x1="595" y1="130" x2="455" y2="130" class="extend-line" />
  <text x="525" y="122" class="dep-text" fill="#d97706" text-anchor="middle">&lt;&lt;extend&gt;&gt;</text>
</svg>`;

saveSvg('01_use_case_diagram.svg', useCaseSvg);

// ---------------------------------------------------------------------------
// 2. CLASS DIAGRAM
// ---------------------------------------------------------------------------
const classDiagramSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 950" width="1300" height="950">
  <defs>
    <style>
      .bg { fill: #f8fafc; }
      .class-box { fill: #ffffff; stroke: #334155; stroke-width: 1.8; rx: 6; }
      .class-header { fill: #1e293b; }
      .class-header-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 15px; font-weight: bold; fill: #ffffff; text-anchor: middle; }
      .class-section-divider { stroke: #cbd5e1; stroke-width: 1.2; }
      .attr-text { font-family: 'Consolas', monospace; font-size: 11.5px; fill: #0f172a; }
      .method-text { font-family: 'Consolas', monospace; font-size: 11.5px; fill: #1e3a8a; }
      .assoc-line { stroke: #475569; stroke-width: 1.5; }
      .multiplicity { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #64748b; }
      .inheritance-line { stroke: #0284c7; stroke-width: 1.8; marker-end: url(#hollowTriangle); }
      .comp-diamond { fill: #0f172a; stroke: #0f172a; }
      .agg-diamond { fill: #ffffff; stroke: #0f172a; stroke-width: 1.5; }
    </style>
    <marker id="hollowTriangle" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="10" markerHeight="10" orient="auto">
      <polygon points="0 0, 11 6, 0 12" fill="#ffffff" stroke="#0284c7" stroke-width="1.5" />
    </marker>
  </defs>

  <rect width="100%" height="100%" class="bg" />

  <text x="650" y="32" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">Class Diagram: Wonder Land Restaurant System Domain Model</text>

  <!-- CLASS: User (Abstract Base) -->
  <g transform="translate(60, 60)">
    <rect width="220" height="150" class="class-box" />
    <rect width="220" height="32" class="class-header" fill="#0f172a" />
    <text x="110" y="21" class="class-header-text">&lt;&lt;abstract&gt;&gt; User</text>
    <text x="10" y="52" class="attr-text"># id: String</text>
    <text x="10" y="68" class="attr-text"># fullName: String</text>
    <text x="10" y="84" class="attr-text"># email: String</text>
    <text x="10" y="100" class="attr-text"># phone: String</text>
    <line x1="0" y1="108" x2="220" y2="108" class="class-section-divider" />
    <text x="10" y="126" class="method-text">+ login(credentials): Boolean</text>
    <text x="10" y="142" class="method-text">+ logout(): Void</text>
  </g>

  <!-- CLASS: Customer (inherits User) -->
  <g transform="translate(30, 260)">
    <rect width="240" height="150" class="class-box" />
    <rect width="240" height="32" class="class-header" fill="#0369a1" />
    <text x="120" y="21" class="class-header-text">Customer</text>
    <text x="10" y="52" class="attr-text">- deliveryAddress: String</text>
    <text x="10" y="68" class="attr-text">- orderHistory: List&lt;Order&gt;</text>
    <text x="10" y="84" class="attr-text">- loyaltyPoints: Integer</text>
    <line x1="0" y1="92" x2="240" y2="92" class="class-section-divider" />
    <text x="10" y="110" class="method-text">+ placeOrder(cart): Order</text>
    <text x="10" y="126" class="method-text">+ trackOrder(orderId): OrderStatus</text>
    <text x="10" y="142" class="method-text">+ bookTable(reservation): Boolean</text>
  </g>
  <!-- Inheritance Customer -> User -->
  <line x1="150" y1="260" x2="150" y2="210" class="inheritance-line" />

  <!-- CLASS: Admin (inherits User) -->
  <g transform="translate(320, 60)">
    <rect width="230" height="150" class="class-box" />
    <rect width="230" height="32" class="class-header" fill="#b45309" />
    <text x="115" y="21" class="class-header-text">Admin</text>
    <text x="10" y="52" class="attr-text">- role: String = "Manager"</text>
    <text x="10" y="68" class="attr-text">- accessLevel: Integer = 1</text>
    <text x="10" y="84" class="attr-text">- adminPin: String</text>
    <line x1="0" y1="92" x2="230" y2="92" class="class-section-divider" />
    <text x="10" y="110" class="method-text">+ manageMenu(action, item): Void</text>
    <text x="10" y="126" class="method-text">+ updateOrderStatus(id, st): Void</text>
    <text x="10" y="142" class="method-text">+ getFinancialSummary(): Report</text>
  </g>
  <!-- Inheritance Admin -> User -->
  <line x1="320" y1="135" x2="280" y2="135" class="inheritance-line" />

  <!-- CLASS: Order -->
  <g transform="translate(360, 260)">
    <rect width="250" height="230" class="class-box" />
    <rect width="250" height="32" class="class-header" fill="#15803d" />
    <text x="125" y="21" class="class-header-text">Order</text>
    <text x="10" y="52" class="attr-text">- orderId: String</text>
    <text x="10" y="68" class="attr-text">- orderDate: DateTime</text>
    <text x="10" y="84" class="attr-text">- customerInfo: CustomerInfo</text>
    <text x="10" y="100" class="attr-text">- status: OrderStatus</text>
    <text x="10" y="116" class="attr-text">- subtotal: Double</text>
    <text x="10" y="132" class="attr-text">- tax: Double</text>
    <text x="10" y="148" class="attr-text">- deliveryFee: Double</text>
    <text x="10" y="164" class="attr-text">- totalAmount: Double</text>
    <line x1="0" y1="172" x2="250" y2="172" class="class-section-divider" />
    <text x="10" y="190" class="method-text">+ calculateTotals(): Double</text>
    <text x="10" y="206" class="method-text">+ advanceStatus(): OrderStatus</text>
    <text x="10" y="222" class="method-text">+ cancelOrder(): Boolean</text>
  </g>

  <!-- Customer -> Order (1 to 0..*) -->
  <line x1="270" y1="335" x2="360" y2="335" class="assoc-line" />
  <text x="278" y="325" class="multiplicity">1</text>
  <text x="335" y="325" class="multiplicity">0..*</text>

  <!-- CLASS: OrderItem (Composition with Order) -->
  <g transform="translate(710, 260)">
    <rect width="220" height="150" class="class-box" />
    <rect width="220" height="32" class="class-header" fill="#15803d" />
    <text x="110" y="21" class="class-header-text">OrderItem</text>
    <text x="10" y="52" class="attr-text">- itemId: String</text>
    <text x="10" y="68" class="attr-text">- quantity: Integer</text>
    <text x="10" y="84" class="attr-text">- unitPrice: Double</text>
    <text x="10" y="100" class="attr-text">- specialInstructions: String</text>
    <line x1="0" y1="108" x2="220" y2="108" class="class-section-divider" />
    <text x="10" y="126" class="method-text">+ getLineTotal(): Double</text>
    <text x="10" y="142" class="method-text">+ updateQuantity(qty): Void</text>
  </g>

  <!-- Order Composition diamond to OrderItem -->
  <polygon points="610,335 622,329 634,335 622,341" class="comp-diamond" />
  <line x1="634" y1="335" x2="710" y2="335" class="assoc-line" />
  <text x="640" y="325" class="multiplicity">1</text>
  <text x="690" y="325" class="multiplicity">1..*</text>

  <!-- CLASS: MenuItem -->
  <g transform="translate(1010, 260)">
    <rect width="240" height="190" class="class-box" />
    <rect width="240" height="32" class="class-header" fill="#7c3aed" />
    <text x="120" y="21" class="class-header-text">MenuItem</text>
    <text x="10" y="52" class="attr-text">- id: String</text>
    <text x="10" y="68" class="attr-text">- title: String</text>
    <text x="10" y="84" class="attr-text">- category: String</text>
    <text x="10" y="100" class="attr-text">- price: Double</text>
    <text x="10" y="116" class="attr-text">- description: String</text>
    <text x="10" y="132" class="attr-text">- imagePath: String</text>
    <text x="10" y="148" class="attr-text">- isAvailable: Boolean</text>
    <line x1="0" y1="154" x2="240" y2="154" class="class-section-divider" />
    <text x="10" y="172" class="method-text">+ updateDetails(data): Void</text>
    <text x="10" y="188" class="method-text">+ toggleAvailability(): Boolean</text>
  </g>
  <!-- OrderItem -> MenuItem (Association) -->
  <line x1="930" y1="335" x2="1010" y2="335" class="assoc-line" />
  <text x="940" y="325" class="multiplicity">1..*</text>
  <text x="990" y="325" class="multiplicity">1</text>

  <!-- CLASS: Category -->
  <g transform="translate(1030, 60)">
    <rect width="200" height="130" class="class-box" />
    <rect width="200" height="32" class="class-header" fill="#6d28d9" />
    <text x="100" y="21" class="class-header-text">Category</text>
    <text x="10" y="52" class="attr-text">- slug: String</text>
    <text x="10" y="68" class="attr-text">- displayName: String</text>
    <text x="10" y="84" class="attr-text">- icon: String</text>
    <line x1="0" y1="92" x2="200" y2="92" class="class-section-divider" />
    <text x="10" y="112" class="method-text">+ getItems(): List&lt;MenuItem&gt;</text>
  </g>
  <!-- MenuItem -> Category (Aggregation) -->
  <polygon points="1130,260 1124,248 1130,236 1136,248" class="agg-diamond" />
  <line x1="1130" y1="236" x2="1130" y2="190" class="assoc-line" />
  <text x="1140" y="248" class="multiplicity">*</text>
  <text x="1140" y="205" class="multiplicity">1</text>

  <!-- CLASS: Payment (Abstract) & Subclasses -->
  <g transform="translate(360, 560)">
    <rect width="250" height="140" class="class-box" />
    <rect width="250" height="32" class="class-header" fill="#047857" />
    <text x="125" y="21" class="class-header-text">&lt;&lt;abstract&gt;&gt; Payment</text>
    <text x="10" y="52" class="attr-text"># paymentId: String</text>
    <text x="10" y="68" class="attr-text"># amount: Double</text>
    <text x="10" y="84" class="attr-text"># paymentDate: DateTime</text>
    <text x="10" y="100" class="attr-text"># status: PaymentStatus</text>
    <line x1="0" y1="108" x2="250" y2="108" class="class-section-divider" />
    <text x="10" y="126" class="method-text">+ processPayment(): Boolean</text>
  </g>
  <!-- Order -> Payment (1 to 1) -->
  <line x1="485" y1="490" x2="485" y2="560" class="assoc-line" />
  <text x="495" y="505" class="multiplicity">1</text>
  <text x="495" y="545" class="multiplicity">1</text>

  <!-- Subclasses of Payment -->
  <!-- CashPayment -->
  <g transform="translate(200, 750)">
    <rect width="180" height="90" class="class-box" />
    <rect width="180" height="28" class="class-header" fill="#059669" />
    <text x="90" y="19" class="class-header-text" font-size="13">CashPayment</text>
    <text x="10" y="46" class="attr-text">- tenderedAmount: Double</text>
    <text x="10" y="62" class="attr-text">- changeDue: Double</text>
    <text x="10" y="80" class="method-text">+ processPayment(): Bool</text>
  </g>
  <line x1="290" y1="750" x2="420" y2="700" class="inheritance-line" />

  <!-- CreditCardPayment -->
  <g transform="translate(400, 750)">
    <rect width="200" height="105" class="class-box" />
    <rect width="200" height="28" class="class-header" fill="#059669" />
    <text x="100" y="19" class="class-header-text" font-size="13">CreditCardPayment</text>
    <text x="10" y="46" class="attr-text">- cardNumberMasked: String</text>
    <text x="10" y="62" class="attr-text">- cardHolder: String</text>
    <text x="10" y="78" class="attr-text">- authTransactionId: String</text>
    <text x="10" y="96" class="method-text">+ processPayment(): Bool</text>
  </g>
  <line x1="485" y1="750" x2="485" y2="700" class="inheritance-line" />

  <!-- DigitalWalletPayment -->
  <g transform="translate(620, 750)">
    <rect width="200" height="90" class="class-box" />
    <rect width="200" height="28" class="class-header" fill="#059669" />
    <text x="100" y="19" class="class-header-text" font-size="13">DigitalWalletPayment</text>
    <text x="10" y="46" class="attr-text">- provider: String // Fawry/VF</text>
    <text x="10" y="62" class="attr-text">- walletPhone: String</text>
    <text x="10" y="80" class="method-text">+ processPayment(): Bool</text>
  </g>
  <line x1="680" y1="750" x2="550" y2="700" class="inheritance-line" />

  <!-- CLASS: TableReservation -->
  <g transform="translate(30, 480)">
    <rect width="240" height="200" class="class-box" />
    <rect width="240" height="32" class="class-header" fill="#c026d3" />
    <text x="120" y="21" class="class-header-text">TableReservation</text>
    <text x="10" y="52" class="attr-text">- reservationId: String</text>
    <text x="10" y="68" class="attr-text">- guestName: String</text>
    <text x="10" y="84" class="attr-text">- guestPhone: String</text>
    <text x="10" y="100" class="attr-text">- reserveDate: Date</text>
    <text x="10" y="116" class="attr-text">- timeSlot: String</text>
    <text x="10" y="132" class="attr-text">- partySize: Integer</text>
    <text x="10" y="148" class="attr-text">- seatingZone: SeatingZone</text>
    <text x="10" y="164" class="attr-text">- status: ReserveStatus</text>
    <line x1="0" y1="172" x2="240" y2="172" class="class-section-divider" />
    <text x="10" y="190" class="method-text">+ confirmBooking(): Void</text>
  </g>
  <!-- Customer -> TableReservation (1 to 0..*) -->
  <line x1="150" y1="410" x2="150" y2="480" class="assoc-line" />
  <text x="160" y="425" class="multiplicity">1</text>
  <text x="160" y="465" class="multiplicity">0..*</text>

  <!-- CLASS: Review -->
  <g transform="translate(710, 480)">
    <rect width="220" height="150" class="class-box" />
    <rect width="220" height="32" class="class-header" fill="#e11d48" />
    <text x="110" y="21" class="class-header-text">Review</text>
    <text x="10" y="52" class="attr-text">- reviewId: String</text>
    <text x="10" y="68" class="attr-text">- customerName: String</text>
    <text x="10" y="84" class="attr-text">- ratingStars: Integer (1-5)</text>
    <text x="10" y="100" class="attr-text">- comment: String</text>
    <text x="10" y="116" class="attr-text">- createdAt: DateTime</text>
    <line x1="0" y1="124" x2="220" y2="124" class="class-section-divider" />
    <text x="10" y="142" class="method-text">+ publishReview(): Void</text>
  </g>

  <!-- CLASS: LocalStorageDataStore (Singleton Repository) -->
  <g transform="translate(980, 560)">
    <rect width="280" height="180" class="class-box" />
    <rect width="280" height="32" class="class-header" fill="#334155" />
    <text x="140" y="21" class="class-header-text">&lt;&lt;Singleton&gt;&gt; RestaurantDataStore</text>
    <text x="10" y="52" class="attr-text">- instance: RestaurantDataStore</text>
    <text x="10" y="68" class="attr-text">- storageKey: String = "WL_DATA"</text>
    <line x1="0" y1="76" x2="280" y2="76" class="class-section-divider" />
    <text x="10" y="94" class="method-text">+ getAllOrders(): List&lt;Order&gt;</text>
    <text x="10" y="110" class="method-text">+ saveOrder(order): Boolean</text>
    <text x="10" y="126" class="method-text">+ getMenuItems(): List&lt;MenuItem&gt;</text>
    <text x="10" y="142" class="method-text">+ getReservations(): List&lt;Reserve&gt;</text>
    <text x="10" y="158" class="method-text">+ syncState(): Void</text>
  </g>
</svg>`;

saveSvg('02_class_diagram.svg', classDiagramSvg);

// ---------------------------------------------------------------------------
// 3. SEQUENCE DIAGRAM: ORDER FOOD & CHECKOUT
// ---------------------------------------------------------------------------
const seqOrderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 800" width="1100" height="800">
  <defs>
    <style>
      .bg { fill: #f8fafc; }
      .lifeline { stroke: #94a3b8; stroke-width: 1.5; stroke-dasharray: 4,4; }
      .actor-box { fill: #1e293b; rx: 6; }
      .actor-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13.5px; font-weight: bold; fill: #ffffff; text-anchor: middle; dominant-baseline: central; }
      .activation { fill: #dbeafe; stroke: #2563eb; stroke-width: 1.5; }
      .sync-msg { stroke: #1e3a8a; stroke-width: 1.6; marker-end: url(#arrowBlue); }
      .reply-msg { stroke: #059669; stroke-width: 1.5; stroke-dasharray: 5,4; marker-end: url(#arrowGreen); }
      .msg-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; font-weight: 600; fill: #0f172a; }
      .alt-box { fill: none; stroke: #d97706; stroke-width: 1.5; stroke-dasharray: 4,4; rx: 4; }
      .alt-header { fill: #fef3c7; stroke: #d97706; stroke-width: 1; }
      .alt-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #92400e; }
    </style>
    <marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e3a8a" />
    </marker>
    <marker id="arrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#059669" />
    </marker>
  </defs>

  <rect width="100%" height="100%" class="bg" />

  <text x="550" y="32" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">Sequence Diagram: Customer Checkout &amp; Cash on Delivery (COD) Order</text>

  <!-- Lifeline Headers -->
  <!-- 1. Customer -->
  <rect x="50" y="60" width="120" height="40" class="actor-box" fill="#0284c7" />
  <text x="110" y="80" class="actor-title">:Customer</text>
  <line x1="110" y1="100" x2="110" y2="760" class="lifeline" />

  <!-- 2. UI / Boundary -->
  <rect x="250" y="60" width="130" height="40" class="actor-box" fill="#475569" />
  <text x="315" y="80" class="actor-title">:WebGUI (Client)</text>
  <line x1="315" y1="100" x2="315" y2="760" class="lifeline" />

  <!-- 3. CartController -->
  <rect x="470" y="60" width="130" height="40" class="actor-box" fill="#2563eb" />
  <text x="535" y="80" class="actor-title">:CartController</text>
  <line x1="535" y1="100" x2="535" y2="760" class="lifeline" />

  <!-- 4. PaymentGateway -->
  <rect x="680" y="60" width="140" height="40" class="actor-box" fill="#059669" />
  <text x="750" y="80" class="actor-title">:PaymentGateway</text>
  <line x1="750" y1="100" x2="750" y2="760" class="lifeline" />

  <!-- 5. DataStore / Storage -->
  <rect x="900" y="60" width="150" height="40" class="actor-box" fill="#7c3aed" />
  <text x="975" y="80" class="actor-title">:RestaurantDataStore</text>
  <line x1="975" y1="100" x2="975" y2="760" class="lifeline" />

  <!-- Activations -->
  <rect x="105" y="120" width="10" height="620" class="activation" />
  <rect x="310" y="130" width="10" height="600" class="activation" />
  <rect x="530" y="150" width="10" height="350" class="activation" />
  <rect x="745" y="380" width="10" height="100" class="activation" />
  <rect x="970" y="490" width="10" height="120" class="activation" />

  <!-- Messages -->
  <!-- 1. Browse & Add item -->
  <line x1="115" y1="140" x2="310" y2="140" class="sync-msg" />
  <text x="210" y="133" class="msg-text" text-anchor="middle">1: selectItem(itemId, qty)</text>

  <!-- 2. Forward to CartController -->
  <line x1="320" y1="155" x2="530" y2="155" class="sync-msg" />
  <text x="425" y="148" class="msg-text" text-anchor="middle">2: addItem(itemId, qty)</text>

  <!-- 3. Self call: calculateTotals -->
  <path d="M 540 180 L 575 180 L 575 205 L 540 205" fill="none" stroke="#1e3a8a" stroke-width="1.5" marker-end="url(#arrowBlue)" />
  <text x="585" y="196" class="msg-text">3: computeCartTotals()</text>

  <!-- 4. Update Cart Badge -->
  <line x1="530" y1="230" x2="320" y2="230" class="reply-msg" />
  <text x="425" y="222" class="msg-text" text-anchor="middle">4: return updatedCartView</text>

  <!-- 5. Customer clicks Checkout -->
  <line x1="115" y1="265" x2="310" y2="265" class="sync-msg" />
  <text x="210" y="258" class="msg-text" text-anchor="middle">5: openCheckoutModal()</text>

  <!-- 6. Display Checkout Dialog -->
  <line x1="310" y1="290" x2="115" y2="290" class="reply-msg" />
  <text x="210" y="283" class="msg-text" text-anchor="middle">6: renderCheckoutForm()</text>

  <!-- 7. Submit order details & payment -->
  <line x1="115" y1="335" x2="310" y2="335" class="sync-msg" />
  <text x="210" y="328" class="msg-text" text-anchor="middle">7: submitOrder(customerInfo, paymentMethod: "COD")</text>

  <!-- 8. Validate & Prepare -->
  <line x1="320" y1="360" x2="530" y2="360" class="sync-msg" />
  <text x="425" y="353" class="msg-text" text-anchor="middle">8: processCheckout(cart, info, isCOD: true)</text>

  <!-- 9. Process Payment with Gateway -->
  <line x1="540" y1="390" x2="745" y2="390" class="sync-msg" />
  <text x="640" y="383" class="msg-text" text-anchor="middle">9: verifyCODAvailability(customerAddress, total)</text>

  <!-- Alt Block: Payment Success / Failure -->
  <rect x="510" y="415" width="480" height="200" class="alt-box" />
  <rect x="510" y="415" width="120" height="20" class="alt-header" />
  <text x="518" y="429" class="alt-text">[COD Approved]</text>

  <!-- 10. Payment confirmed -->
  <line x1="745" y1="460" x2="540" y2="460" class="reply-msg" />
  <text x="640" y="453" class="msg-text" text-anchor="middle">10: codAccepted(flag: "Pay on Handover")</text>

  <!-- 11. Save Order to Database / LocalStorage -->
  <line x1="540" y1="500" x2="970" y2="500" class="sync-msg" />
  <text x="755" y="493" class="msg-text" text-anchor="middle">11: persistOrder(newOrder: Order)</text>

  <!-- 12. Confirm save -->
  <line x1="970" y1="535" x2="540" y2="535" class="reply-msg" />
  <text x="755" y="528" class="msg-text" text-anchor="middle">12: orderSavedSuccess(orderId: "#WL-8492")</text>

  <!-- 13. Forward to UI -->
  <line x1="530" y1="570" x2="320" y2="570" class="reply-msg" />
  <text x="425" y="563" class="msg-text" text-anchor="middle">13: return orderConfirmation(orderId)</text>

  <!-- 14. Display Receipt & Tracking Modal -->
  <line x1="310" y1="610" x2="115" y2="610" class="reply-msg" />
  <text x="210" y="603" class="msg-text" text-anchor="middle">14: showOrderReceiptAndLiveTracker()</text>

  <!-- 15. Track status query -->
  <line x1="115" y1="670" x2="310" y2="670" class="sync-msg" />
  <text x="210" y="663" class="msg-text" text-anchor="middle">15: pollOrderStatus(orderId)</text>

  <!-- 16. Current Stepper Status -->
  <line x1="310" y1="710" x2="115" y2="710" class="reply-msg" />
  <text x="210" y="703" class="msg-text" text-anchor="middle">16: renderStepperState("Pending / In Kitchen")</text>
</svg>`;

saveSvg('03_sequence_order_food.svg', seqOrderSvg);

// ---------------------------------------------------------------------------
// 4. SEQUENCE DIAGRAM: TABLE RESERVATION
// ---------------------------------------------------------------------------
const seqReserveSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 680" width="1000" height="680">
  <defs>
    <style>
      .bg { fill: #f8fafc; }
      .lifeline { stroke: #94a3b8; stroke-width: 1.5; stroke-dasharray: 4,4; }
      .actor-box { fill: #1e293b; rx: 6; }
      .actor-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13.5px; font-weight: bold; fill: #ffffff; text-anchor: middle; dominant-baseline: central; }
      .activation { fill: #fdf4ff; stroke: #c026d3; stroke-width: 1.5; }
      .sync-msg { stroke: #86198f; stroke-width: 1.6; marker-end: url(#arrowPurple); }
      .reply-msg { stroke: #059669; stroke-width: 1.5; stroke-dasharray: 5,4; marker-end: url(#arrowGreen); }
      .msg-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; font-weight: 600; fill: #0f172a; }
    </style>
    <marker id="arrowPurple" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#86198f" />
    </marker>
    <marker id="arrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#059669" />
    </marker>
  </defs>

  <rect width="100%" height="100%" class="bg" />

  <text x="500" y="32" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">Sequence Diagram: Dining Table Reservation Workflow</text>

  <!-- Lifeline Headers -->
  <rect x="60" y="60" width="130" height="40" class="actor-box" fill="#0284c7" />
  <text x="125" y="80" class="actor-title">:Customer</text>
  <line x1="125" y1="100" x2="125" y2="640" class="lifeline" />

  <rect x="290" y="60" width="150" height="40" class="actor-box" fill="#475569" />
  <text x="365" y="80" class="actor-title">:ReservationModal</text>
  <line x1="365" y1="100" x2="365" y2="640" class="lifeline" />

  <rect x="540" y="60" width="160" height="40" class="actor-box" fill="#a21caf" />
  <text x="620" y="80" class="actor-title">:ReservationController</text>
  <line x1="620" y1="100" x2="620" y2="640" class="lifeline" />

  <rect x="790" y="60" width="160" height="40" class="actor-box" fill="#7c3aed" />
  <text x="870" y="80" class="actor-title">:RestaurantDataStore</text>
  <line x1="870" y1="100" x2="870" y2="640" class="lifeline" />

  <!-- Activations -->
  <rect x="120" y="120" width="10" height="500" class="activation" />
  <rect x="360" y="130" width="10" height="480" class="activation" />
  <rect x="615" y="240" width="10" height="300" class="activation" />
  <rect x="865" y="310" width="10" height="180" class="activation" />

  <!-- Messages -->
  <!-- 1. Open modal -->
  <line x1="130" y1="140" x2="360" y2="140" class="sync-msg" />
  <text x="245" y="133" class="msg-text" text-anchor="middle">1: click "Book a Table"</text>

  <!-- 2. Show form -->
  <line x1="360" y1="180" x2="130" y2="180" class="reply-msg" />
  <text x="245" y="173" class="msg-text" text-anchor="middle">2: displayBookingForm(zones, slots)</text>

  <!-- 3. Fill details -->
  <line x1="130" y1="230" x2="360" y2="230" class="sync-msg" />
  <text x="245" y="223" class="msg-text" text-anchor="middle">3: submitReservation(date, time, guests, zone)</text>

  <!-- 4. Controller validate -->
  <line x1="370" y1="250" x2="615" y2="250" class="sync-msg" />
  <text x="490" y="243" class="msg-text" text-anchor="middle">4: checkTableCapacity(date, time, guests)</text>

  <!-- 5. Query capacity -->
  <line x1="625" y1="290" x2="865" y2="290" class="sync-msg" />
  <text x="745" y="283" class="msg-text" text-anchor="middle">5: getReservationsByDate(date)</text>

  <line x1="865" y1="330" x2="625" y2="330" class="reply-msg" />
  <text x="745" y="323" class="msg-text" text-anchor="middle">6: return existingBookings</text>

  <!-- 7. Save booking -->
  <line x1="625" y1="380" x2="865" y2="380" class="sync-msg" />
  <text x="745" y="373" class="msg-text" text-anchor="middle">7: saveReservation(newRecord: Status="Confirmed")</text>

  <line x1="865" y1="420" x2="625" y2="420" class="reply-msg" />
  <text x="745" y="413" class="msg-text" text-anchor="middle">8: bookingSaved(resId: "#RES-309")</text>

  <!-- 9. Return to UI -->
  <line x1="615" y1="470" x2="370" y2="470" class="reply-msg" />
  <text x="490" y="463" class="msg-text" text-anchor="middle">9: reservationSuccess(resId)</text>

  <!-- 10. Display confirmation -->
  <line x1="360" y1="520" x2="130" y2="520" class="reply-msg" />
  <text x="245" y="513" class="msg-text" text-anchor="middle">10: showSuccessToastAndDetails()</text>
</svg>`;

saveSvg('04_sequence_table_reservation.svg', seqReserveSvg);

// ---------------------------------------------------------------------------
// 5. SEQUENCE DIAGRAM: ADMIN MANAGEMENT
// ---------------------------------------------------------------------------
const seqAdminSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 680" width="1000" height="680">
  <defs>
    <style>
      .bg { fill: #f8fafc; }
      .lifeline { stroke: #94a3b8; stroke-width: 1.5; stroke-dasharray: 4,4; }
      .actor-box { fill: #1e293b; rx: 6; }
      .actor-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13.5px; font-weight: bold; fill: #ffffff; text-anchor: middle; dominant-baseline: central; }
      .activation { fill: #ffedd5; stroke: #ea580c; stroke-width: 1.5; }
      .sync-msg { stroke: #c2410c; stroke-width: 1.6; marker-end: url(#arrowOrange); }
      .reply-msg { stroke: #059669; stroke-width: 1.5; stroke-dasharray: 5,4; marker-end: url(#arrowGreen); }
      .msg-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; font-weight: 600; fill: #0f172a; }
    </style>
    <marker id="arrowOrange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#ea580c" />
    </marker>
    <marker id="arrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#059669" />
    </marker>
  </defs>

  <rect width="100%" height="100%" class="bg" />

  <text x="500" y="32" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">Sequence Diagram: Admin Management &amp; Excel Export</text>

  <!-- Lifeline Headers -->
  <rect x="60" y="60" width="130" height="40" class="actor-box" fill="#b45309" />
  <text x="125" y="80" class="actor-title">:Admin / Manager</text>
  <line x1="125" y1="100" x2="125" y2="650" class="lifeline" />

  <rect x="290" y="60" width="150" height="40" class="actor-box" fill="#475569" />
  <text x="365" y="80" class="actor-title">:AdminDashboardGUI</text>
  <line x1="365" y1="100" x2="365" y2="650" class="lifeline" />

  <rect x="540" y="60" width="160" height="40" class="actor-box" fill="#ea580c" />
  <text x="620" y="80" class="actor-title">:AdminService</text>
  <line x1="620" y1="100" x2="620" y2="650" class="lifeline" />

  <rect x="790" y="60" width="160" height="40" class="actor-box" fill="#15803d" />
  <text x="870" y="80" class="actor-title">:ExcelExportEngine</text>
  <line x1="870" y1="100" x2="870" y2="650" class="lifeline" />

  <!-- Activations -->
  <rect x="120" y="120" width="10" height="510" class="activation" />
  <rect x="360" y="130" width="10" height="490" class="activation" />
  <rect x="615" y="160" width="10" height="450" class="activation" />
  <rect x="865" y="470" width="10" height="130" class="activation" />

  <!-- 1. Login with PIN -->
  <line x1="130" y1="140" x2="360" y2="140" class="sync-msg" />
  <text x="245" y="133" class="msg-text" text-anchor="middle">1: enterAdminPin("admin123")</text>

  <line x1="370" y1="165" x2="615" y2="165" class="sync-msg" />
  <text x="490" y="158" class="msg-text" text-anchor="middle">2: verifyCredentials(pin)</text>

  <!-- 3. Fetch Dashboard Telemetry -->
  <line x1="625" y1="190" x2="625" y2="215" class="sync-msg" />
  <text x="635" y="205" class="msg-text">3: loadTelemetryData()</text>

  <line x1="615" y1="240" x2="370" y2="240" class="reply-msg" />
  <text x="490" y="233" class="msg-text" text-anchor="middle">4: return (orders, revenue, menu)</text>

  <line x1="360" y1="265" x2="130" y2="265" class="reply-msg" />
  <text x="245" y="258" class="msg-text" text-anchor="middle">5: renderKPIsAndOrdersTable()</text>

  <!-- 6. Admin selects Order and changes status -->
  <line x1="130" y1="310" x2="360" y2="310" class="sync-msg" />
  <text x="245" y="303" class="msg-text" text-anchor="middle">6: selectOrderUpdate(id, newStatus: "Cooking")</text>

  <line x1="370" y1="335" x2="615" y2="335" class="sync-msg" />
  <text x="490" y="328" class="msg-text" text-anchor="middle">7: mutateOrderStatus(id, "Cooking")</text>

  <line x1="615" y1="365" x2="370" y2="365" class="reply-msg" />
  <text x="490" y="358" class="msg-text" text-anchor="middle">8: statusUpdated(broadcastStorageEvent)</text>

  <line x1="360" y1="390" x2="130" y2="390" class="reply-msg" />
  <text x="245" y="383" class="msg-text" text-anchor="middle">9: showToast("Order status updated to Cooking")</text>

  <!-- 10. Admin clicks Export to Excel -->
  <line x1="130" y1="445" x2="360" y2="445" class="sync-msg" />
  <text x="245" y="438" class="msg-text" text-anchor="middle">10: clickExportOrdersExcelBtn()</text>

  <line x1="370" y1="470" x2="615" y2="470" class="sync-msg" />
  <text x="490" y="463" class="msg-text" text-anchor="middle">11: getOrdersDataset()</text>

  <line x1="625" y1="495" x2="865" y2="495" class="sync-msg" />
  <text x="745" y="488" class="msg-text" text-anchor="middle">12: formatCSVPayload(orders, UTF8_BOM)</text>

  <line x1="865" y1="530" x2="625" y2="530" class="reply-msg" />
  <text x="745" y="523" class="msg-text" text-anchor="middle">13: return generatedBlob(type: "text/csv")</text>

  <line x1="615" y1="560" x2="370" y2="560" class="reply-msg" />
  <text x="490" y="553" class="msg-text" text-anchor="middle">14: triggerBrowserDownload("Wonder_Land_Orders_Report.csv")</text>

  <line x1="360" y1="595" x2="130" y2="595" class="reply-msg" />
  <text x="245" y="588" class="msg-text" text-anchor="middle">15: showToast("Excel spreadsheet downloaded successfully")</text>
</svg>`;

saveSvg('05_sequence_admin_management.svg', seqAdminSvg);

// ---------------------------------------------------------------------------
// 6. ACTIVITY DIAGRAM: ORDER FOOD & CHECKOUT
// ---------------------------------------------------------------------------
const actOrderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 900" width="1100" height="900">
  <defs>
    <style>
      .bg { fill: #f8fafc; }
      .swimlane-line { stroke: #94a3b8; stroke-width: 1.5; stroke-dasharray: 5,4; }
      .swimlane-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 15px; font-weight: bold; fill: #1e3a8a; text-anchor: middle; }
      .swimlane-header { fill: #e2e8f0; }
      .start-node { fill: #0f172a; }
      .end-outer { fill: none; stroke: #0f172a; stroke-width: 2; }
      .end-inner { fill: #0f172a; }
      .action-rect { fill: #ffffff; stroke: #2563eb; stroke-width: 1.8; rx: 16; }
      .action-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; font-weight: 600; fill: #0f172a; text-anchor: middle; dominant-baseline: central; }
      .decision-diamond { fill: #fef3c7; stroke: #d97706; stroke-width: 1.8; }
      .fork-bar { fill: #0f172a; }
      .flow-arrow { stroke: #334155; stroke-width: 1.6; marker-end: url(#actArrow); }
      .guard-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #b45309; }
    </style>
    <marker id="actArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155" />
    </marker>
  </defs>

  <rect width="100%" height="100%" class="bg" />

  <text x="550" y="32" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">Activity Diagram: End-to-End Workflow (Customer Order to Kitchen Fulfillment)</text>

  <!-- Swimlane Header Backgrounds -->
  <rect x="40" y="55" width="250" height="35" class="swimlane-header" />
  <rect x="290" y="55" width="270" height="35" class="swimlane-header" fill="#cbd5e1" />
  <rect x="560" y="55" width="270" height="35" class="swimlane-header" />
  <rect x="830" y="55" width="230" height="35" class="swimlane-header" fill="#cbd5e1" />

  <!-- Swimlane Titles -->
  <text x="165" y="78" class="swimlane-title">Customer</text>
  <text x="425" y="78" class="swimlane-title">Web Application (GUI)</text>
  <text x="695" y="78" class="swimlane-title">Payment Engine</text>
  <text x="945" y="78" class="swimlane-title">Kitchen / Dispatch</text>

  <!-- Swimlane Separator Lines -->
  <line x1="290" y1="55" x2="290" y2="870" class="swimlane-line" />
  <line x1="560" y1="55" x2="560" y2="870" class="swimlane-line" />
  <line x1="830" y1="55" x2="830" y2="870" class="swimlane-line" />

  <!-- Start Node -->
  <circle cx="165" cy="120" r="12" class="start-node" />
  <line x1="165" y1="132" x2="165" y2="165" class="flow-arrow" />

  <!-- Action: Browse Menu -->
  <rect x="90" y="165" width="150" height="40" class="action-rect" />
  <text x="165" y="185" class="action-text">Browse &amp; Filter Menu</text>
  <line x1="165" y1="205" x2="165" y2="245" class="flow-arrow" />

  <!-- Action: Add Items to Cart -->
  <rect x="90" y="245" width="150" height="40" class="action-rect" />
  <text x="165" y="265" class="action-text">Add Items to Cart</text>
  <line x1="240" y1="265" x2="350" y2="265" class="flow-arrow" />

  <!-- Action: Compute Totals -->
  <rect x="350" y="245" width="160" height="40" class="action-rect" stroke="#059669" />
  <text x="430" y="265" class="action-text" fill="#065f46">Calculate Subtotal &amp; Tax</text>
  <line x1="430" y1="285" x2="430" y2="325" class="flow-arrow" />

  <!-- Action: Click Checkout -->
  <rect x="90" y="325" width="150" height="40" class="action-rect" />
  <text x="165" y="345" class="action-text">Proceed to Checkout</text>
  <line x1="430" y1="325" x2="240" y2="345" class="flow-arrow" />
  <line x1="165" y1="365" x2="165" y2="405" class="flow-arrow" />

  <!-- Action: Enter Details & Pick Payment -->
  <rect x="80" y="405" width="170" height="45" class="action-rect" />
  <text x="165" y="420" class="action-text">Enter Contact Info &amp;</text>
  <text x="165" y="436" class="action-text">Select Payment Method</text>
  <line x1="250" y1="427" x2="350" y2="427" class="flow-arrow" />

  <!-- Action: Validate Form Inputs -->
  <rect x="350" y="407" width="160" height="40" class="action-rect" stroke="#059669" />
  <text x="430" y="427" class="action-text" fill="#065f46">Validate Delivery Form</text>
  <line x1="430" y1="447" x2="430" y2="480" class="flow-arrow" />

  <!-- Decision: Form Valid? -->
  <polygon points="430,480 460,500 430,520 400,500" class="decision-diamond" />
  <text x="445" y="490" class="guard-text">[Valid]</text>
  <line x1="400" y1="500" x2="250" y2="500" class="flow-arrow" />
  <text x="310" y="490" class="guard-text">[Invalid]</text>
  <!-- Return to enter details if invalid -->
  <line x1="250" y1="500" x2="200" y2="450" class="flow-arrow" />

  <line x1="460" y1="500" x2="610" y2="500" class="flow-arrow" />

  <!-- Decision: Payment Type -->
  <polygon points="640,480 670,500 640,520 610,500" class="decision-diamond" />
  <!-- Cash vs Online -->
  <line x1="640" y1="480" x2="640" y2="430" class="flow-arrow" />
  <text x="645" y="460" class="guard-text">[Cash on Delivery]</text>

  <line x1="670" y1="500" x2="720" y2="500" class="flow-arrow" />
  <text x="670" y="490" class="guard-text">[Card / Wallet]</text>

  <!-- Action: Process Online Gateway -->
  <rect x="720" y="480" width="100" height="40" class="action-rect" stroke="#16a34a" />
  <text x="770" y="500" class="action-text" font-size="11">Verify &amp; Charge</text>
  <line x1="770" y1="520" x2="770" y2="560" class="flow-arrow" />

  <!-- Decision: Payment Success? -->
  <polygon points="770,560 795,580 770,600 745,580" class="decision-diamond" />
  <line x1="745" y1="580" x2="510" y2="580" class="flow-arrow" />
  <text x="600" y="570" class="guard-text">[Success or Cash]</text>

  <!-- Connect Cash path -->
  <line x1="640" y1="430" x2="510" y2="430" class="flow-arrow" />
  <line x1="510" y1="430" x2="510" y2="580" />

  <!-- Action: Persist Order & Generate ID -->
  <rect x="350" y="610" width="160" height="45" class="action-rect" stroke="#7c3aed" />
  <text x="430" y="625" class="action-text">Save Order in Store</text>
  <text x="430" y="641" class="action-text">&amp; Generate #Order-ID</text>
  <line x1="430" y1="580" x2="430" y2="610" class="flow-arrow" />
  <line x1="430" y1="655" x2="430" y2="685" class="flow-arrow" />

  <!-- Fork Bar: Notify Customer & Kitchen in parallel -->
  <rect x="250" y="685" width="700" height="8" class="fork-bar" />

  <!-- Thread 1 to Customer -->
  <line x1="350" y1="693" x2="165" y2="730" class="flow-arrow" />
  <rect x="80" y="730" width="170" height="45" class="action-rect" />
  <text x="165" y="745" class="action-text">Show Receipt &amp;</text>
  <text x="165" y="761" class="action-text">Track Live Status Stepper</text>

  <!-- Thread 2 to Kitchen -->
  <line x1="880" y1="693" x2="945" y2="730" class="flow-arrow" />
  <rect x="860" y="730" width="170" height="45" class="action-rect" stroke="#b45309" />
  <text x="945" y="745" class="action-text">Receive Ticket in Kitchen</text>
  <text x="945" y="761" class="action-text">&amp; Start Food Preparation</text>

  <!-- Join Bar -->
  <rect x="250" y="810" width="700" height="8" class="fork-bar" />
  <line x1="165" y1="775" x2="350" y2="810" class="flow-arrow" />
  <line x1="945" y1="775" x2="880" y2="810" class="flow-arrow" />

  <!-- Final End Node -->
  <line x1="600" y1="818" x2="600" y2="845" class="flow-arrow" />
  <circle cx="600" cy="855" r="14" class="end-outer" />
  <circle cx="600" cy="855" r="9" class="end-inner" />
</svg>`;

saveSvg('06_activity_order_processing.svg', actOrderSvg);

// ---------------------------------------------------------------------------
// 7. ACTIVITY DIAGRAM: TABLE RESERVATION
// ---------------------------------------------------------------------------
const actReserveSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700" width="900" height="700">
  <defs>
    <style>
      .bg { fill: #f8fafc; }
      .swimlane-line { stroke: #94a3b8; stroke-width: 1.5; stroke-dasharray: 5,4; }
      .swimlane-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 15px; font-weight: bold; fill: #1e3a8a; text-anchor: middle; }
      .swimlane-header { fill: #e2e8f0; }
      .start-node { fill: #0f172a; }
      .end-outer { fill: none; stroke: #0f172a; stroke-width: 2; }
      .end-inner { fill: #0f172a; }
      .action-rect { fill: #ffffff; stroke: #c026d3; stroke-width: 1.8; rx: 16; }
      .action-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; font-weight: 600; fill: #0f172a; text-anchor: middle; dominant-baseline: central; }
      .decision-diamond { fill: #fef3c7; stroke: #d97706; stroke-width: 1.8; }
      .flow-arrow { stroke: #334155; stroke-width: 1.6; marker-end: url(#actArrow2); }
      .guard-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #b45309; }
    </style>
    <marker id="actArrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155" />
    </marker>
  </defs>

  <rect width="100%" height="100%" class="bg" />

  <text x="450" y="32" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">Activity Diagram: Table Reservation Workflow</text>

  <!-- Swimlane Headers -->
  <rect x="40" y="55" width="280" height="35" class="swimlane-header" />
  <rect x="320" y="55" width="300" height="35" class="swimlane-header" fill="#cbd5e1" />
  <rect x="620" y="55" width="240" height="35" class="swimlane-header" />

  <text x="180" y="78" class="swimlane-title">Guest / Customer</text>
  <text x="470" y="78" class="swimlane-title">Reservation System</text>
  <text x="740" y="78" class="swimlane-title">Restaurant Host / Staff</text>

  <line x1="320" y1="55" x2="320" y2="670" class="swimlane-line" />
  <line x1="620" y1="55" x2="620" y2="670" class="swimlane-line" />

  <!-- Start -->
  <circle cx="180" cy="115" r="12" class="start-node" />
  <line x1="180" y1="127" x2="180" y2="155" class="flow-arrow" />

  <!-- Action: Open Booking Modal -->
  <rect x="100" y="155" width="160" height="40" class="action-rect" />
  <text x="180" y="175" class="action-text">Click "Book a Table"</text>
  <line x1="180" y1="195" x2="180" y2="230" class="flow-arrow" />

  <!-- Action: Enter Reservation Criteria -->
  <rect x="90" y="230" width="180" height="45" class="action-rect" />
  <text x="180" y="245" class="action-text">Select Date, Time,</text>
  <text x="180" y="261" class="action-text">Guests &amp; Seating Zone</text>
  <line x1="270" y1="252" x2="380" y2="252" class="flow-arrow" />

  <!-- Action: Check Table Availability -->
  <rect x="380" y="232" width="180" height="40" class="action-rect" stroke="#059669" />
  <text x="470" y="252" class="action-text" fill="#065f46">Check Slot Availability</text>
  <line x1="470" y1="272" x2="470" y2="310" class="flow-arrow" />

  <!-- Decision: Slot Available? -->
  <polygon points="470,310 500,330 470,350 440,330" class="decision-diamond" />
  <!-- No: Suggest other slot -->
  <line x1="440" y1="330" x2="270" y2="330" class="flow-arrow" />
  <text x="330" y="320" class="guard-text">[Fully Booked]</text>
  <line x1="180" y1="330" x2="180" y2="275" class="flow-arrow" />

  <!-- Yes -->
  <line x1="470" y1="350" x2="470" y2="390" class="flow-arrow" />
  <text x="480" y="375" class="guard-text">[Available]</text>

  <!-- Action: Record Reservation & Generate ID -->
  <rect x="380" y="390" width="180" height="45" class="action-rect" stroke="#7c3aed" />
  <text x="470" y="405" class="action-text">Record in DataStore</text>
  <text x="470" y="421" class="action-text">&amp; Generate Res-ID</text>
  <line x1="380" y1="412" x2="270" y2="412" class="flow-arrow" />
  <line x1="560" y1="412" x2="660" y2="412" class="flow-arrow" />

  <!-- Action: Show Confirmation Toast to Guest -->
  <rect x="90" y="390" width="180" height="45" class="action-rect" />
  <text x="180" y="405" class="action-text">Display Confirmation</text>
  <text x="180" y="421" class="action-text">Toast &amp; Save Details</text>

  <!-- Action: Host Notified in Dashboard -->
  <rect x="660" y="390" width="170" height="45" class="action-rect" stroke="#b45309" />
  <text x="745" y="405" class="action-text">Table Blocked in</text>
  <text x="745" y="421" class="action-text">Admin Host Schedule</text>
  <line x1="745" y1="435" x2="745" y2="480" class="flow-arrow" />

  <!-- Action: Host Greets & Seats Guest -->
  <rect x="660" y="480" width="170" height="45" class="action-rect" stroke="#b45309" />
  <text x="745" y="495" class="action-text">Guest Arrives: Verify</text>
  <text x="745" y="511" class="action-text">ID &amp; Mark as "Seated"</text>
  <line x1="745" y1="525" x2="745" y2="570" class="flow-arrow" />

  <!-- Action: Complete Dining -->
  <rect x="660" y="570" width="170" height="40" class="action-rect" stroke="#059669" />
  <text x="745" y="590" class="action-text" fill="#065f46">Mark Table "Completed"</text>
  <line x1="745" y1="610" x2="745" y2="640" class="flow-arrow" />

  <!-- End Node -->
  <circle cx="745" cy="650" r="14" class="end-outer" />
  <circle cx="745" cy="650" r="9" class="end-inner" />
</svg>`;

saveSvg('07_activity_table_reservation.svg', actReserveSvg);

// ---------------------------------------------------------------------------
// 8. STATE MACHINE DIAGRAM: ORDER LIFECYCLE
// ---------------------------------------------------------------------------
const stateOrderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 550" width="1100" height="550">
  <defs>
    <style>
      .bg { fill: #f8fafc; }
      .state-box { fill: #ffffff; stroke: #1e3a8a; stroke-width: 2; rx: 14; }
      .state-header { fill: #1e40af; rx: 12; }
      .state-name { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13.5px; font-weight: bold; fill: #ffffff; text-anchor: middle; }
      .state-body-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; fill: #334155; }
      .trans-line { stroke: #0284c7; stroke-width: 1.8; marker-end: url(#stateArrow); }
      .trans-cancel { stroke: #e11d48; stroke-width: 1.8; stroke-dasharray: 5,4; marker-end: url(#stateCancelArrow); }
      .trans-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: 600; fill: #0f172a; }
      .start-node { fill: #0f172a; }
      .end-outer { fill: none; stroke: #0f172a; stroke-width: 2; }
      .end-inner { fill: #0f172a; }
    </style>
    <marker id="stateArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
    </marker>
    <marker id="stateCancelArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#e11d48" />
    </marker>
  </defs>

  <rect width="100%" height="100%" class="bg" />

  <text x="550" y="35" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">State Machine Diagram: Food Order Lifecycle</text>

  <!-- Start -->
  <circle cx="50" cy="180" r="14" class="start-node" />
  <line x1="64" y1="180" x2="110" y2="180" class="trans-line" />
  <text x="85" y="170" class="trans-text" text-anchor="middle">checkout()</text>

  <!-- State 1: Pending / Created -->
  <g transform="translate(110, 135)">
    <rect width="150" height="90" class="state-box" />
    <rect width="150" height="28" class="state-header" fill="#0284c7" />
    <text x="75" y="19" class="state-name">Pending (Created)</text>
    <text x="10" y="48" class="state-body-text">entry / saveToStore()</text>
    <text x="10" y="66" class="state-body-text">do / notifyStaff()</text>
    <text x="10" y="84" class="state-body-text">exit / logTimestamp()</text>
  </g>

  <!-- Transition 1 -> 2 -->
  <line x1="260" y1="180" x2="330" y2="180" class="trans-line" />
  <text x="295" y="168" class="trans-text" text-anchor="middle">confirmOrder()</text>

  <!-- State 2: Confirmed -->
  <g transform="translate(330, 135)">
    <rect width="150" height="90" class="state-box" />
    <rect width="150" height="28" class="state-header" fill="#0284c7" />
    <text x="75" y="19" class="state-name">Confirmed</text>
    <text x="10" y="48" class="state-body-text">entry / assignTicket()</text>
    <text x="10" y="66" class="state-body-text">do / queueInKitchen()</text>
    <text x="10" y="84" class="state-body-text">exit / printKOT()</text>
  </g>

  <!-- Transition 2 -> 3 -->
  <line x1="480" y1="180" x2="550" y2="180" class="trans-line" />
  <text x="515" y="168" class="trans-text" text-anchor="middle">startCooking()</text>

  <!-- State 3: In Kitchen / Preparing -->
  <g transform="translate(550, 135)">
    <rect width="160" height="90" class="state-box" />
    <rect width="160" height="28" class="state-header" fill="#d97706" />
    <text x="80" y="19" class="state-name">In Kitchen (Cooking)</text>
    <text x="10" y="48" class="state-body-text">entry / chefStartsPrep()</text>
    <text x="10" y="66" class="state-body-text">do / assembleIngredients()</text>
    <text x="10" y="84" class="state-body-text">exit / packAndSeal()</text>
  </g>

  <!-- Transition 3 -> 4 -->
  <line x1="710" y1="180" x2="780" y2="180" class="trans-line" />
  <text x="745" y="168" class="trans-text" text-anchor="middle">dispatchOrder()</text>

  <!-- State 4: Out for Delivery -->
  <g transform="translate(780, 135)">
    <rect width="160" height="90" class="state-box" />
    <rect width="160" height="28" class="state-header" fill="#7c3aed" />
    <text x="80" y="19" class="state-name">Out for Delivery</text>
    <text x="10" y="48" class="state-body-text">entry / handToDriver()</text>
    <text x="10" y="66" class="state-body-text">do / transitToCustomer()</text>
    <text x="10" y="84" class="state-body-text">exit / collectPayment()</text>
  </g>

  <!-- Transition 4 -> 5 -->
  <line x1="860" y1="225" x2="860" y2="340" class="trans-line" />
  <text x="870" y="285" class="trans-text">handoverConfirmed()</text>

  <!-- State 5: Delivered / Completed -->
  <g transform="translate(780, 340)">
    <rect width="160" height="90" class="state-box" />
    <rect width="160" height="28" class="state-header" fill="#059669" />
    <text x="80" y="19" class="state-name">Delivered (Done)</text>
    <text x="10" y="48" class="state-body-text">entry / closeOrder()</text>
    <text x="10" y="66" class="state-body-text">do / requestReview()</text>
    <text x="10" y="84" class="state-body-text">exit / archiveOrder()</text>
  </g>

  <!-- End 1 -->
  <line x1="780" y1="385" x2="710" y2="385" class="trans-line" />
  <circle cx="690" cy="385" r="14" class="end-outer" />
  <circle cx="690" cy="385" r="9" class="end-inner" />

  <!-- Cancellation State -->
  <g transform="translate(220, 360)">
    <rect width="160" height="80" class="state-box" stroke="#e11d48" />
    <rect width="160" height="28" class="state-header" fill="#e11d48" />
    <text x="80" y="19" class="state-name">Cancelled</text>
    <text x="10" y="48" class="state-body-text">entry / logReason()</text>
    <text x="10" y="66" class="state-body-text">exit / issueRefundIfPaid()</text>
  </g>

  <!-- Cancel transitions from Pending and Confirmed -->
  <path d="M 180 225 L 180 400 L 220 400" fill="none" class="trans-cancel" />
  <text x="120" y="320" class="trans-text" fill="#e11d48">cancel()</text>

  <path d="M 405 225 L 405 390 L 380 390" fill="none" class="trans-cancel" />
  <text x="415" y="300" class="trans-text" fill="#e11d48">cancel() [Within 5m]</text>

  <!-- End 2 (From Cancelled) -->
  <line x1="300" y1="440" x2="300" y2="490" class="trans-line" stroke="#e11d48" />
  <circle cx="300" cy="505" r="14" class="end-outer" />
  <circle cx="300" cy="505" r="9" class="end-inner" />
</svg>`;

saveSvg('08_state_order_lifecycle.svg', stateOrderSvg);

// ---------------------------------------------------------------------------
// 9. STATE MACHINE DIAGRAM: TABLE RESERVATION LIFECYCLE
// ---------------------------------------------------------------------------
const stateReserveSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 950 480" width="950" height="480">
  <defs>
    <style>
      .bg { fill: #f8fafc; }
      .state-box { fill: #ffffff; stroke: #701a75; stroke-width: 2; rx: 14; }
      .state-header { fill: #a21caf; rx: 12; }
      .state-name { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13.5px; font-weight: bold; fill: #ffffff; text-anchor: middle; }
      .state-body-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; fill: #334155; }
      .trans-line { stroke: #a21caf; stroke-width: 1.8; marker-end: url(#statePurpArrow); }
      .trans-cancel { stroke: #e11d48; stroke-width: 1.8; stroke-dasharray: 5,4; marker-end: url(#stateCancelArrow2); }
      .trans-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: 600; fill: #0f172a; }
      .start-node { fill: #0f172a; }
      .end-outer { fill: none; stroke: #0f172a; stroke-width: 2; }
      .end-inner { fill: #0f172a; }
    </style>
    <marker id="statePurpArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#a21caf" />
    </marker>
    <marker id="stateCancelArrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#e11d48" />
    </marker>
  </defs>

  <rect width="100%" height="100%" class="bg" />

  <text x="475" y="35" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">State Machine Diagram: Table Reservation Lifecycle</text>

  <!-- Start -->
  <circle cx="50" cy="150" r="14" class="start-node" />
  <line x1="64" y1="150" x2="120" y2="150" class="trans-line" />
  <text x="90" y="140" class="trans-text" text-anchor="middle">request()</text>

  <!-- State 1: Requested -->
  <g transform="translate(120, 110)">
    <rect width="150" height="80" class="state-box" />
    <rect width="150" height="28" class="state-header" />
    <text x="75" y="19" class="state-name">Requested</text>
    <text x="10" y="48" class="state-body-text">entry / checkAvailability()</text>
    <text x="10" y="66" class="state-body-text">exit / holdTable()</text>
  </g>

  <line x1="270" y1="150" x2="350" y2="150" class="trans-line" />
  <text x="310" y="140" class="trans-text" text-anchor="middle">autoConfirm()</text>

  <!-- State 2: Confirmed -->
  <g transform="translate(350, 110)">
    <rect width="150" height="80" class="state-box" />
    <rect width="150" height="28" class="state-header" fill="#0284c7" />
    <text x="75" y="19" class="state-name">Confirmed</text>
    <text x="10" y="48" class="state-body-text">entry / sendSMSAlert()</text>
    <text x="10" y="66" class="state-body-text">do / reserveSeatingZone()</text>
  </g>

  <line x1="500" y1="150" x2="580" y2="150" class="trans-line" />
  <text x="540" y="140" class="trans-text" text-anchor="middle">guestArrives()</text>

  <!-- State 3: Seated / Occupied -->
  <g transform="translate(580, 110)">
    <rect width="150" height="80" class="state-box" />
    <rect width="150" height="28" class="state-header" fill="#d97706" />
    <text x="75" y="19" class="state-name">Seated (Active)</text>
    <text x="10" y="48" class="state-body-text">entry / openTableTab()</text>
    <text x="10" y="66" class="state-body-text">do / serveMeal()</text>
  </g>

  <line x1="730" y1="150" x2="800" y2="150" class="trans-line" />
  <text x="765" y="140" class="trans-text" text-anchor="middle">billSettled()</text>

  <!-- State 4: Completed -->
  <g transform="translate(800, 110)">
    <rect width="120" height="80" class="state-box" />
    <rect width="120" height="28" class="state-header" fill="#059669" />
    <text x="60" y="19" class="state-name">Completed</text>
    <text x="10" y="48" class="state-body-text">entry / clearTable()</text>
    <text x="10" y="66" class="state-body-text">exit / freeSlot()</text>
  </g>

  <line x1="860" y1="190" x2="860" y2="250" class="trans-line" />
  <circle cx="860" cy="265" r="14" class="end-outer" />
  <circle cx="860" cy="265" r="9" class="end-inner" />

  <!-- Cancellation -->
  <g transform="translate(230, 300)">
    <rect width="150" height="70" class="state-box" stroke="#e11d48" />
    <rect width="150" height="26" class="state-header" fill="#e11d48" />
    <text x="75" y="18" class="state-name">Cancelled</text>
    <text x="10" y="46" class="state-body-text">entry / releaseHold()</text>
  </g>

  <path d="M 195 190 L 195 335 L 230 335" fill="none" class="trans-cancel" />
  <text x="140" y="270" class="trans-text" fill="#e11d48">cancel()</text>

  <path d="M 425 190 L 425 335 L 380 335" fill="none" class="trans-cancel" />
  <text x="435" y="270" class="trans-text" fill="#e11d48">cancelBooking()</text>

  <line x1="305" y1="370" x2="305" y2="420" class="trans-line" stroke="#e11d48" />
  <circle cx="305" cy="435" r="14" class="end-outer" />
  <circle cx="305" cy="435" r="9" class="end-inner" />
</svg>`;

saveSvg('09_state_reservation_lifecycle.svg', stateReserveSvg);

// ---------------------------------------------------------------------------
// 10. COMPONENT DIAGRAM
// ---------------------------------------------------------------------------
const componentSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 700" width="1100" height="700">
  <defs>
    <style>
      .bg { fill: #f8fafc; }
      .comp-box { fill: #ffffff; stroke: #334155; stroke-width: 1.8; rx: 4; }
      .comp-header { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13.5px; font-weight: bold; fill: #0f172a; }
      .comp-stereotype { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-style: italic; fill: #64748b; }
      .comp-icon { fill: #ffffff; stroke: #334155; stroke-width: 1.2; }
      .comp-tab { fill: #ffffff; stroke: #334155; stroke-width: 1.2; }
      .interface-circle { fill: #ffffff; stroke: #0284c7; stroke-width: 1.8; }
      .interface-socket { fill: none; stroke: #0284c7; stroke-width: 1.8; }
      .dep-arrow { stroke: #64748b; stroke-width: 1.5; stroke-dasharray: 4,4; marker-end: url(#compArrow); }
      .subsystem-boundary { fill: none; stroke: #94a3b8; stroke-width: 1.5; stroke-dasharray: 6,4; rx: 10; }
    </style>
    <marker id="compArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b" />
    </marker>
  </defs>

  <rect width="100%" height="100%" class="bg" />

  <text x="550" y="32" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">Component Diagram: Wonder Land Restaurant System Architecture</text>

  <!-- Component Helper Macro -->
  <!-- Layer 1: Presentation Tier -->
  <rect x="50" y="60" width="1000" height="150" class="subsystem-boundary" />
  <text x="70" y="85" font-family="'Segoe UI', Arial, sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a">&lt;&lt;Subsystem&gt;&gt; Presentation Components (Client Web GUI)</text>

  <!-- Comp 1: Customer Portal UI -->
  <g transform="translate(80, 100)">
    <rect width="260" height="85" class="comp-box" />
    <rect x="-10" y="15" width="20" height="12" class="comp-tab" />
    <rect x="-10" y="45" width="20" height="12" class="comp-tab" />
    <text x="25" y="35" class="comp-stereotype">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="55" class="comp-header">Customer Portal GUI</text>
    <text x="25" y="72" font-family="'Segoe UI', Arial, sans-serif" font-size="11" fill="#64748b">Menu, Cart Drawer, Checkout, Tracker</text>
  </g>

  <!-- Comp 2: Admin Dashboard UI -->
  <g transform="translate(420, 100)">
    <rect width="270" height="85" class="comp-box" />
    <rect x="-10" y="15" width="20" height="12" class="comp-tab" />
    <rect x="-10" y="45" width="20" height="12" class="comp-tab" />
    <text x="25" y="35" class="comp-stereotype">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="55" class="comp-header">Admin Management GUI</text>
    <text x="25" y="72" font-family="'Segoe UI', Arial, sans-serif" font-size="11" fill="#64748b">Menu CRUD, Orders Board, Analytics</text>
  </g>

  <!-- Comp 3: Table Booking UI -->
  <g transform="translate(760, 100)">
    <rect width="250" height="85" class="comp-box" />
    <rect x="-10" y="15" width="20" height="12" class="comp-tab" />
    <rect x="-10" y="45" width="20" height="12" class="comp-tab" />
    <text x="25" y="35" class="comp-stereotype">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="55" class="comp-header">Reservation Modal UI</text>
    <text x="25" y="72" font-family="'Segoe UI', Arial, sans-serif" font-size="11" fill="#64748b">Slot Picker, Guest Count, Zone</text>
  </g>

  <!-- Layer 2: Business Logic / Application Core Services -->
  <rect x="50" y="260" width="1000" height="230" class="subsystem-boundary" />
  <text x="70" y="285" font-family="'Segoe UI', Arial, sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a">&lt;&lt;Subsystem&gt;&gt; Business Logic &amp; Controller Services</text>

  <!-- Comp 4: Cart & Order Engine -->
  <g transform="translate(80, 310)">
    <rect width="260" height="90" class="comp-box" />
    <rect x="-10" y="15" width="20" height="12" class="comp-tab" />
    <rect x="-10" y="45" width="20" height="12" class="comp-tab" />
    <text x="25" y="35" class="comp-stereotype">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="55" class="comp-header">Order Processing Engine</text>
    <text x="25" y="72" font-family="'Segoe UI', Arial, sans-serif" font-size="11" fill="#64748b">Tax calculation, State Transitions</text>
  </g>

  <!-- Comp 5: Menu Catalog Service -->
  <g transform="translate(420, 310)">
    <rect width="270" height="90" class="comp-box" />
    <rect x="-10" y="15" width="20" height="12" class="comp-tab" />
    <rect x="-10" y="45" width="20" height="12" class="comp-tab" />
    <text x="25" y="35" class="comp-stereotype">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="55" class="comp-header">Catalog &amp; Category Service</text>
    <text x="25" y="72" font-family="'Segoe UI', Arial, sans-serif" font-size="11" fill="#64748b">Filter, Search, Price Update, CRUD</text>
  </g>

  <!-- Comp 6: Reservation Service -->
  <g transform="translate(760, 310)">
    <rect width="250" height="90" class="comp-box" />
    <rect x="-10" y="15" width="20" height="12" class="comp-tab" />
    <rect x="-10" y="45" width="20" height="12" class="comp-tab" />
    <text x="25" y="35" class="comp-stereotype">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="55" class="comp-header">Table Allocation Service</text>
    <text x="25" y="72" font-family="'Segoe UI', Arial, sans-serif" font-size="11" fill="#64748b">Capacity check, Confirmation</text>
  </g>

  <!-- Comp 7: Payment Engine Component -->
  <g transform="translate(250, 420)">
    <rect width="260" height="55" class="comp-box" />
    <text x="20" y="25" class="comp-stereotype">&lt;&lt;component&gt;&gt;</text>
    <text x="20" y="42" class="comp-header">Payment Strategy Gateway</text>
  </g>

  <!-- Comp 8: Analytics Engine -->
  <g transform="translate(580, 420)">
    <rect width="280" height="55" class="comp-box" />
    <text x="20" y="25" class="comp-stereotype">&lt;&lt;component&gt;&gt;</text>
    <text x="20" y="42" class="comp-header">Excel Exporter &amp; Telemetry Engine</text>
  </g>

  <!-- Layer 3: Persistence Tier -->
  <rect x="50" y="520" width="1000" height="150" class="subsystem-boundary" />
  <text x="70" y="545" font-family="'Segoe UI', Arial, sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a">&lt;&lt;Subsystem&gt;&gt; Persistence &amp; Storage Tier</text>

  <g transform="translate(200, 565)">
    <rect width="320" height="80" class="comp-box" />
    <rect x="-10" y="15" width="20" height="12" class="comp-tab" />
    <rect x="-10" y="45" width="20" height="12" class="comp-tab" />
    <text x="25" y="35" class="comp-stereotype">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="55" class="comp-header">LocalStorage Persistent Adapter</text>
    <text x="25" y="70" font-family="'Segoe UI', Arial, sans-serif" font-size="11" fill="#64748b">JSON Serialization, Cross-tab Sync</text>
  </g>

  <g transform="translate(620, 565)">
    <rect width="280" height="80" class="comp-box" />
    <rect x="-10" y="15" width="20" height="12" class="comp-tab" />
    <rect x="-10" y="45" width="20" height="12" class="comp-tab" />
    <text x="25" y="35" class="comp-stereotype">&lt;&lt;component&gt;&gt;</text>
    <text x="25" y="55" class="comp-header">Mock Demo Seeder</text>
    <text x="25" y="70" font-family="'Segoe UI', Arial, sans-serif" font-size="11" fill="#64748b">Initial menu dishes &amp; sample orders</text>
  </g>

  <!-- Wiring Lines -->
  <line x1="210" y1="185" x2="210" y2="310" class="dep-arrow" />
  <line x1="550" y1="185" x2="550" y2="310" class="dep-arrow" />
  <line x1="880" y1="185" x2="880" y2="310" class="dep-arrow" />
  <line x1="210" y1="400" x2="330" y2="420" class="dep-arrow" />
  <line x1="550" y1="400" x2="650" y2="420" class="dep-arrow" />
  <line x1="210" y1="400" x2="360" y2="565" class="dep-arrow" />
  <line x1="550" y1="400" x2="360" y2="565" class="dep-arrow" />
  <line x1="880" y1="400" x2="360" y2="565" class="dep-arrow" />
</svg>`;

saveSvg('10_component_diagram.svg', componentSvg);

// ---------------------------------------------------------------------------
// 11. DEPLOYMENT DIAGRAM
// ---------------------------------------------------------------------------
const deploySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 680" width="1000" height="680">
  <defs>
    <style>
      .bg { fill: #f8fafc; }
      .node-3d { fill: #ffffff; stroke: #1e293b; stroke-width: 1.8; }
      .node-side { fill: #cbd5e1; stroke: #1e293b; stroke-width: 1.8; }
      .node-top { fill: #e2e8f0; stroke: #1e293b; stroke-width: 1.8; }
      .node-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 15px; font-weight: bold; fill: #0f172a; text-anchor: middle; }
      .node-stereo { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-style: italic; fill: #475569; text-anchor: middle; }
      .artifact-box { fill: #f1f5f9; stroke: #0284c7; stroke-width: 1.4; rx: 4; }
      .artifact-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; font-weight: 600; fill: #0369a1; text-anchor: middle; dominant-baseline: central; }
      .comm-path { stroke: #0f172a; stroke-width: 2; }
      .comm-label { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; font-weight: bold; fill: #1e3a8a; text-anchor: middle; }
    </style>
  </defs>

  <rect width="100%" height="100%" class="bg" />

  <text x="500" y="32" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">Deployment Diagram: Physical / Execution Node Architecture</text>

  <!-- NODE 1: Client Machine / Mobile Device -->
  <g transform="translate(80, 100)">
    <!-- 3D Box for Client Node -->
    <polygon points="0,20 20,0 340,0 320,20" class="node-top" />
    <polygon points="320,20 340,0 340,460 320,480" class="node-side" />
    <rect x="0" y="20" width="320" height="460" class="node-3d" />

    <text x="160" y="48" class="node-stereo">&lt;&lt;device&gt;&gt;</text>
    <text x="160" y="68" class="node-title">Client Workstation / Smartphone</text>

    <!-- Execution Environment inside Client -->
    <rect x="20" y="90" width="280" height="370" fill="#f8fafc" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,4" rx: 6 />
    <text x="160" y="112" class="node-stereo">&lt;&lt;execution environment&gt;&gt;</text>
    <text x="160" y="128" font-family="'Segoe UI', Arial, sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Modern Web Browser (Chrome/Edge/Safari)</text>

    <!-- Artifacts -->
    <g transform="translate(40, 145)">
      <rect width="240" height="40" class="artifact-box" />
      <text x="120" y="20" class="artifact-title">&lt;&lt;artifact&gt;&gt; index.html (Customer GUI)</text>
    </g>
    <g transform="translate(40, 195)">
      <rect width="240" height="40" class="artifact-box" />
      <text x="120" y="20" class="artifact-title">&lt;&lt;artifact&gt;&gt; admin.html (Admin Portal)</text>
    </g>
    <g transform="translate(40, 245)">
      <rect width="240" height="40" class="artifact-box" />
      <text x="120" y="20" class="artifact-title">&lt;&lt;artifact&gt;&gt; style.css &amp; admin.css (Styles)</text>
    </g>
    <g transform="translate(40, 295)">
      <rect width="240" height="40" class="artifact-box" />
      <text x="120" y="20" class="artifact-title">&lt;&lt;artifact&gt;&gt; app.js (Full Business Engine)</text>
    </g>
    <g transform="translate(40, 345)">
      <rect width="240" height="50" class="artifact-box" fill="#eff6ff" stroke="#2563eb" />
      <text x="120" y="18" class="artifact-title">&lt;&lt;database / storage&gt;&gt;</text>
      <text x="120" y="34" class="artifact-title" font-weight="normal">HTML5 LocalStorage (Key: "WL_DATA")</text>
    </g>
    <g transform="translate(40, 405)">
      <rect width="240" height="35" class="artifact-box" />
      <text x="120" y="17" class="artifact-title">&lt;&lt;media assets&gt;&gt; /img/* (Food &amp; Gallery)</text>
    </g>
  </g>

  <!-- Communication Link -->
  <line x1="420" y1="320" x2="580" y2="320" class="comm-path" />
  <text x="500" y="305" class="comm-label">HTTP / HTTPS</text>
  <text x="500" y="340" font-family="'Segoe UI', Arial, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Port 80 / 443 / LiveServer</text>

  <!-- NODE 2: Web Server / Host -->
  <g transform="translate(580, 100)">
    <!-- 3D Box for Server Node -->
    <polygon points="0,20 20,0 340,0 320,20" class="node-top" />
    <polygon points="320,20 340,0 340,460 320,480" class="node-side" />
    <rect x="0" y="20" width="320" height="460" class="node-3d" />

    <text x="160" y="48" class="node-stereo">&lt;&lt;device&gt;&gt;</text>
    <text x="160" y="68" class="node-title">Web Server / Cloud Host</text>

    <!-- Execution Environment inside Server -->
    <rect x="20" y="90" width="280" height="370" fill="#f8fafc" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,4" rx: 6 />
    <text x="160" y="112" class="node-stereo">&lt;&lt;execution environment&gt;&gt;</text>
    <text x="160" y="128" font-family="'Segoe UI', Arial, sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Static Web Host / Node.js Server</text>

    <!-- Artifacts on Server -->
    <g transform="translate(40, 150)">
      <rect width="240" height="50" class="artifact-box" fill="#f0fdf4" stroke="#16a34a" />
      <text x="120" y="20" class="artifact-title">&lt;&lt;service&gt;&gt;</text>
      <text x="120" y="36" class="artifact-title" fill="#15803d">Static File Serving Engine</text>
    </g>
    <g transform="translate(40, 220)">
      <rect width="240" height="50" class="artifact-box" fill="#f0fdf4" stroke="#16a34a" />
      <text x="120" y="20" class="artifact-title">&lt;&lt;service&gt;&gt;</text>
      <text x="120" y="36" class="artifact-title" fill="#15803d">SSL / TLS Termination (HTTPS)</text>
    </g>
    <g transform="translate(40, 290)">
      <rect width="240" height="50" class="artifact-box" fill="#f0fdf4" stroke="#16a34a" />
      <text x="120" y="20" class="artifact-title">&lt;&lt;service&gt;&gt;</text>
      <text x="120" y="36" class="artifact-title" fill="#15803d">CDN Asset Caching (FontAwesome / Fonts)</text>
    </g>
    <g transform="translate(40, 360)">
      <rect width="240" height="60" class="artifact-box" fill="#fff7ed" stroke="#ea580c" />
      <text x="120" y="20" class="artifact-title">&lt;&lt;future deployment&gt;&gt;</text>
      <text x="120" y="36" class="artifact-title" fill="#c2410c">RESTful API Backend</text>
      <text x="120" y="50" font-family="'Segoe UI', Arial, sans-serif" font-size="10" fill="#9a3412" text-anchor="middle">(Node.js Express / MongoDB)</text>
    </g>
  </g>
</svg>`;

saveSvg('11_deployment_diagram.svg', deploySvg);

// ---------------------------------------------------------------------------
// 12. PACKAGE DIAGRAM
// ---------------------------------------------------------------------------
const packageSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
  <defs>
    <style>
      .bg { fill: #f8fafc; }
      .pkg-tab { fill: #cbd5e1; stroke: #334155; stroke-width: 1.6; }
      .pkg-body { fill: #ffffff; stroke: #334155; stroke-width: 1.6; rx: 4; }
      .pkg-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; font-weight: bold; fill: #0f172a; }
      .pkg-tab-title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: 600; fill: #334155; }
      .class-pill { fill: #f1f5f9; stroke: #64748b; stroke-width: 1; rx: 4; }
      .class-pill-text { font-family: 'Consolas', monospace; font-size: 11px; fill: #1e293b; text-anchor: middle; dominant-baseline: central; }
      .import-line { stroke: #0284c7; stroke-width: 1.6; stroke-dasharray: 5,4; marker-end: url(#pkgArrow); }
      .import-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #0284c7; }
    </style>
    <marker id="pkgArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
    </marker>
  </defs>

  <rect width="100%" height="100%" class="bg" />

  <text x="500" y="32" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">Package Diagram: Architectural Layering &amp; Dependencies</text>

  <!-- Package 1: Presentation Layer -->
  <g transform="translate(60, 60)">
    <path d="M 0 0 L 140 0 L 155 18 L 0 18 Z" class="pkg-tab" />
    <text x="10" y="13" class="pkg-tab-title">Presentation</text>
    <rect x="0" y="18" width="400" height="160" class="pkg-body" />
    <text x="15" y="42" class="pkg-title">com.wonderland.presentation</text>

    <g transform="translate(20, 55)"><rect width="160" height="26" class="class-pill" /><text x="80" y="13" class="class-pill-text">CustomerPortalView</text></g>
    <g transform="translate(200, 55)"><rect width="180" height="26" class="class-pill" /><text x="90" y="13" class="class-pill-text">CartDrawerComponent</text></g>
    <g transform="translate(20, 90)"><rect width="160" height="26" class="class-pill" /><text x="80" y="13" class="class-pill-text">AdminDashboardView</text></g>
    <g transform="translate(200, 90)"><rect width="180" height="26" class="class-pill" /><text x="90" y="13" class="class-pill-text">OrderTrackerComponent</text></g>
    <g transform="translate(20, 125)"><rect width="160" height="26" class="class-pill" /><text x="80" y="13" class="class-pill-text">ReservationModalView</text></g>
    <g transform="translate(200, 125)"><rect width="180" height="26" class="class-pill" /><text x="90" y="13" class="class-pill-text">MenuFilterComponent</text></g>
  </g>

  <!-- Package 2: Business Logic / Controllers -->
  <g transform="translate(60, 290)">
    <path d="M 0 0 L 150 0 L 165 18 L 0 18 Z" class="pkg-tab" fill="#bae6fd" />
    <text x="10" y="13" class="pkg-tab-title">Business Logic</text>
    <rect x="0" y="18" width="400" height="160" class="pkg-body" stroke="#0284c7" />
    <text x="15" y="42" class="pkg-title" fill="#0369a1">com.wonderland.business</text>

    <g transform="translate(20, 55)"><rect width="160" height="26" class="class-pill" /><text x="80" y="13" class="class-pill-text">OrderManager</text></g>
    <g transform="translate(200, 55)"><rect width="180" height="26" class="class-pill" /><text x="90" y="13" class="class-pill-text">CartService</text></g>
    <g transform="translate(20, 90)"><rect width="160" height="26" class="class-pill" /><text x="80" y="13" class="class-pill-text">ReservationManager</text></g>
    <g transform="translate(200, 90)"><rect width="180" height="26" class="class-pill" /><text x="90" y="13" class="class-pill-text">MenuCatalogService</text></g>
    <g transform="translate(20, 125)"><rect width="160" height="26" class="class-pill" /><text x="80" y="13" class="class-pill-text">PaymentStrategyService</text></g>
    <g transform="translate(200, 125)"><rect width="180" height="26" class="class-pill" /><text x="90" y="13" class="class-pill-text">AnalyticsCalculator</text></g>
  </g>

  <!-- Presentation imports Business Logic -->
  <line x1="260" y1="238" x2="260" y2="290" class="import-line" />
  <text x="270" y="268" class="import-text">&lt;&lt;import&gt;&gt;</text>

  <!-- Package 3: Domain Models -->
  <g transform="translate(540, 170)">
    <path d="M 0 0 L 140 0 L 155 18 L 0 18 Z" class="pkg-tab" fill="#bbf7d0" />
    <text x="10" y="13" class="pkg-tab-title">Domain Models</text>
    <rect x="0" y="18" width="400" height="170" class="pkg-body" stroke="#16a34a" />
    <text x="15" y="42" class="pkg-title" fill="#15803d">com.wonderland.model</text>

    <g transform="translate(20, 55)"><rect width="160" height="26" class="class-pill" /><text x="80" y="13" class="class-pill-text">Order &amp; OrderItem</text></g>
    <g transform="translate(200, 55)"><rect width="180" height="26" class="class-pill" /><text x="90" y="13" class="class-pill-text">MenuItem &amp; Category</text></g>
    <g transform="translate(20, 90)"><rect width="160" height="26" class="class-pill" /><text x="80" y="13" class="class-pill-text">TableReservation</text></g>
    <g transform="translate(200, 90)"><rect width="180" height="26" class="class-pill" /><text x="90" y="13" class="class-pill-text">Payment (Hierarchy)</text></g>
    <g transform="translate(20, 125)"><rect width="160" height="26" class="class-pill" /><text x="80" y="13" class="class-pill-text">Customer &amp; Admin</text></g>
    <g transform="translate(200, 125)"><rect width="180" height="26" class="class-pill" /><text x="90" y="13" class="class-pill-text">Review</text></g>
  </g>

  <!-- Business Logic imports Models -->
  <line x1="460" y1="330" x2="540" y2="280" class="import-line" />
  <text x="500" y="300" class="import-text">&lt;&lt;import&gt;&gt;</text>

  <!-- Presentation imports Models -->
  <line x1="460" y1="150" x2="540" y2="190" class="import-line" />
  <text x="500" y="165" class="import-text">&lt;&lt;import&gt;&gt;</text>

  <!-- Package 4: Data Access / Storage Layer -->
  <g transform="translate(60, 510)">
    <path d="M 0 0 L 140 0 L 155 18 L 0 18 Z" class="pkg-tab" fill="#fed7aa" />
    <text x="10" y="13" class="pkg-tab-title">Data Access</text>
    <rect x="0" y="18" width="400" height="150" class="pkg-body" stroke="#ea580c" />
    <text x="15" y="42" class="pkg-title" fill="#c2410c">com.wonderland.data</text>

    <g transform="translate(20, 55)"><rect width="170" height="26" class="class-pill" /><text x="85" y="13" class="class-pill-text">RestaurantDataStore</text></g>
    <g transform="translate(210, 55)"><rect width="170" height="26" class="class-pill" /><text x="85" y="13" class="class-pill-text">LocalStorageAdapter</text></g>
    <g transform="translate(20, 95)"><rect width="170" height="26" class="class-pill" /><text x="85" y="13" class="class-pill-text">SeedDataLoader</text></g>
    <g transform="translate(210, 95)"><rect width="170" height="26" class="class-pill" /><text x="85" y="13" class="class-pill-text">StorageEventNotifier</text></g>
  </g>

  <!-- Business Logic imports Data Access -->
  <line x1="260" y1="468" x2="260" y2="510" class="import-line" />
  <text x="270" y="490" class="import-text">&lt;&lt;import&gt;&gt;</text>

  <!-- Data Access imports Models -->
  <line x1="460" y1="560" x2="680" y2="358" class="import-line" />
  <text x="590" y="480" class="import-text">&lt;&lt;import&gt;&gt;</text>
</svg>`;

saveSvg('12_package_diagram.svg', packageSvg);

// ---------------------------------------------------------------------------
// 13. COMMUNICATION (COLLABORATION) DIAGRAM
// ---------------------------------------------------------------------------
const commSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 680" width="1000" height="680">
  <defs>
    <style>
      .bg { fill: #f8fafc; }
      .obj-box { fill: #ffffff; stroke: #1e293b; stroke-width: 1.8; rx: 6; }
      .obj-header { fill: #1e3a8a; rx: 4; }
      .obj-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13.5px; font-weight: bold; fill: #ffffff; text-anchor: middle; dominant-baseline: central; }
      .comm-link { stroke: #334155; stroke-width: 1.8; }
      .msg-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #0369a1; }
      .arrow-msg { fill: #0369a1; }
    </style>
  </defs>

  <rect width="100%" height="100%" class="bg" />

  <text x="500" y="32" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">Communication Diagram: Order Processing Collaboration</text>

  <!-- Objects -->
  <!-- 1. Customer Actor Object -->
  <g transform="translate(60, 280)">
    <rect width="160" height="60" class="obj-box" />
    <rect width="160" height="24" class="obj-header" fill="#0284c7" />
    <text x="80" y="12" class="obj-text">:Customer</text>
  </g>

  <!-- 2. CartController -->
  <g transform="translate(360, 100)">
    <rect width="180" height="60" class="obj-box" />
    <rect width="180" height="24" class="obj-header" fill="#2563eb" />
    <text x="90" y="12" class="obj-text">:CartController</text>
  </g>

  <!-- 3. OrderManager -->
  <g transform="translate(360, 460)">
    <rect width="180" height="60" class="obj-box" />
    <rect width="180" height="24" class="obj-header" fill="#15803d" />
    <text x="90" y="12" class="obj-text">:OrderManager</text>
  </g>

  <!-- 4. PaymentStrategy -->
  <g transform="translate(720, 100)">
    <rect width="190" height="60" class="obj-box" />
    <rect width="190" height="24" class="obj-header" fill="#059669" />
    <text x="95" y="12" class="obj-text">:PaymentGateway</text>
  </g>

  <!-- 5. RestaurantDataStore -->
  <g transform="translate(720, 460)">
    <rect width="200" height="60" class="obj-box" />
    <rect width="200" height="24" class="obj-header" fill="#7c3aed" />
    <text x="100" y="12" class="obj-text">:RestaurantDataStore</text>
  </g>

  <!-- Links -->
  <!-- Link 1: Customer <-> CartController -->
  <line x1="180" y1="280" x2="380" y2="160" class="comm-link" />
  <text x="190" y="200" class="msg-text">1: addItem(id, qty) ➔</text>
  <text x="210" y="215" class="msg-text">2: viewCart() ➔</text>

  <!-- Link 2: Customer <-> OrderManager -->
  <line x1="180" y1="340" x2="380" y2="460" class="comm-link" />
  <text x="180" y="400" class="msg-text">3: submitOrder(info, payMethod) ➔</text>
  <text x="200" y="420" class="msg-text">7: return orderConfirmation(id) ⬅</text>

  <!-- Link 3: OrderManager <-> CartController -->
  <line x1="450" y1="460" x2="450" y2="160" class="comm-link" />
  <text x="460" y="300" class="msg-text">4: fetchCartItems() ➔</text>
  <text x="460" y="320" class="msg-text">8: clearCart() ➔</text>

  <!-- Link 4: OrderManager <-> PaymentGateway -->
  <line x1="520" y1="460" x2="740" y2="160" class="comm-link" />
  <text x="640" y="300" class="msg-text">5: processPayment(amount, details) ➔</text>

  <!-- Link 5: OrderManager <-> RestaurantDataStore -->
  <line x1="540" y1="490" x2="720" y2="490" class="comm-link" />
  <text x="560" y="475" class="msg-text">6: persistOrder(newOrder) ➔</text>
</svg>`;

saveSvg('13_communication_diagram.svg', commSvg);

// ---------------------------------------------------------------------------
// 14. ENTITY RELATIONSHIP DIAGRAM (ERD)
// ---------------------------------------------------------------------------
const erdSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <style>
      .bg { fill: #f8fafc; }
      .entity-box { fill: #ffffff; stroke: #334155; stroke-width: 1.8; rx: 4; }
      .entity-header { fill: #1e3a8a; }
      .entity-name { font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; font-weight: bold; fill: #ffffff; text-anchor: middle; dominant-baseline: central; }
      .field-text { font-family: 'Consolas', monospace; font-size: 11.5px; fill: #0f172a; }
      .pk-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10px; font-weight: bold; fill: #d97706; }
      .fk-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10px; font-weight: bold; fill: #2563eb; }
      .erd-line { stroke: #475569; stroke-width: 1.8; }
      .crow-foot { stroke: #475569; stroke-width: 1.8; fill: none; }
      .cardinality { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #64748b; }
    </style>
  </defs>

  <rect width="100%" height="100%" class="bg" />

  <text x="600" y="32" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">Entity Relationship Diagram (ERD): Database &amp; Storage Schema</text>

  <!-- ENTITY 1: CUSTOMERS -->
  <g transform="translate(50, 70)">
    <rect width="220" height="180" class="entity-box" />
    <rect width="220" height="28" class="entity-header" fill="#0369a1" />
    <text x="110" y="14" class="entity-name">CUSTOMERS</text>
    <text x="12" y="48" class="pk-text">PK</text><text x="36" y="48" class="field-text">customer_id (VARCHAR)</text>
    <text x="36" y="68" class="field-text">full_name (VARCHAR)</text>
    <text x="36" y="88" class="field-text">phone (VARCHAR)</text>
    <text x="36" y="108" class="field-text">email (VARCHAR)</text>
    <text x="36" y="128" class="field-text">address (TEXT)</text>
    <text x="36" y="148" class="field-text">created_at (TIMESTAMP)</text>
    <text x="36" y="168" class="field-text">loyalty_points (INT)</text>
  </g>

  <!-- ENTITY 2: ORDERS -->
  <g transform="translate(370, 70)">
    <rect width="230" height="210" class="entity-box" />
    <rect width="230" height="28" class="entity-header" fill="#15803d" />
    <text x="115" y="14" class="entity-name">ORDERS</text>
    <text x="12" y="48" class="pk-text">PK</text><text x="36" y="48" class="field-text">order_id (VARCHAR)</text>
    <text x="12" y="68" class="fk-text">FK</text><text x="36" y="68" class="field-text">customer_id (VARCHAR)</text>
    <text x="36" y="88" class="field-text">order_date (TIMESTAMP)</text>
    <text x="36" y="108" class="field-text">status (VARCHAR)</text>
    <text x="36" y="128" class="field-text">subtotal (DECIMAL)</text>
    <text x="36" y="148" class="field-text">tax (DECIMAL)</text>
    <text x="36" y="168" class="field-text">delivery_fee (DECIMAL)</text>
    <text x="36" y="188" class="field-text">total_amount (DECIMAL)</text>
    <text x="36" y="204" class="field-text">special_notes (TEXT)</text>
  </g>

  <!-- Relation: Customers -> Orders (1 to N) -->
  <line x1="270" y1="160" x2="370" y2="160" class="erd-line" />
  <text x="280" y="152" class="cardinality">1</text>
  <!-- Crow foot at Orders -->
  <path d="M 370 160 L 355 150 M 370 160 L 355 170" class="crow-foot" />
  <text x="345" y="152" class="cardinality">0..*</text>

  <!-- ENTITY 3: ORDER_ITEMS -->
  <g transform="translate(690, 70)">
    <rect width="220" height="170" class="entity-box" />
    <rect width="220" height="28" class="entity-header" fill="#15803d" />
    <text x="110" y="14" class="entity-name">ORDER_ITEMS</text>
    <text x="12" y="48" class="pk-text">PK</text><text x="36" y="48" class="field-text">order_item_id (VARCHAR)</text>
    <text x="12" y="68" class="fk-text">FK</text><text x="36" y="68" class="field-text">order_id (VARCHAR)</text>
    <text x="12" y="88" class="fk-text">FK</text><text x="36" y="88" class="field-text">menu_item_id (VARCHAR)</text>
    <text x="36" y="108" class="field-text">quantity (INT)</text>
    <text x="36" y="128" class="field-text">unit_price (DECIMAL)</text>
    <text x="36" y="148" class="field-text">line_total (DECIMAL)</text>
    <text x="36" y="164" class="field-text">notes (VARCHAR)</text>
  </g>

  <!-- Relation: Orders -> OrderItems (1 to N) -->
  <line x1="600" y1="160" x2="690" y2="160" class="erd-line" />
  <text x="610" y="152" class="cardinality">1</text>
  <path d="M 690 160 L 675 150 M 690 160 L 675 170" class="crow-foot" />
  <text x="665" y="152" class="cardinality">1..*</text>

  <!-- ENTITY 4: MENU_ITEMS -->
  <g transform="translate(980, 70)">
    <rect width="200" height="190" class="entity-box" />
    <rect width="200" height="28" class="entity-header" fill="#7c3aed" />
    <text x="100" y="14" class="entity-name">MENU_ITEMS</text>
    <text x="12" y="48" class="pk-text">PK</text><text x="36" y="48" class="field-text">item_id (VARCHAR)</text>
    <text x="12" y="68" class="fk-text">FK</text><text x="36" y="68" class="field-text">category_id (VARCHAR)</text>
    <text x="36" y="88" class="field-text">title (VARCHAR)</text>
    <text x="36" y="108" class="field-text">price (DECIMAL)</text>
    <text x="36" y="128" class="field-text">description (TEXT)</text>
    <text x="36" y="148" class="field-text">image_url (VARCHAR)</text>
    <text x="36" y="168" class="field-text">is_available (BOOLEAN)</text>
    <text x="36" y="184" class="field-text">rating (DECIMAL)</text>
  </g>

  <!-- Relation: MenuItems -> OrderItems (1 to N) -->
  <line x1="980" y1="160" x2="910" y2="160" class="erd-line" />
  <text x="965" y="152" class="cardinality">1</text>
  <path d="M 910 160 L 925 150 M 910 160 L 925 170" class="crow-foot" />
  <text x="920" y="152" class="cardinality">0..*</text>

  <!-- ENTITY 5: CATEGORIES -->
  <g transform="translate(980, 360)">
    <rect width="200" height="120" class="entity-box" />
    <rect width="200" height="28" class="entity-header" fill="#6d28d9" />
    <text x="100" y="14" class="entity-name">CATEGORIES</text>
    <text x="12" y="48" class="pk-text">PK</text><text x="36" y="48" class="field-text">category_id (VARCHAR)</text>
    <text x="36" y="68" class="field-text">name (VARCHAR)</text>
    <text x="36" y="88" class="field-text">slug (VARCHAR)</text>
    <text x="36" y="108" class="field-text">display_order (INT)</text>
  </g>
  <!-- Relation Categories -> MenuItems (1 to N) -->
  <line x1="1080" y1="360" x2="1080" y2="260" class="erd-line" />
  <text x="1090" y="340" class="cardinality">1</text>
  <path d="M 1080 260 L 1070 275 M 1080 260 L 1090 275" class="crow-foot" />
  <text x="1090" y="280" class="cardinality">1..*</text>

  <!-- ENTITY 6: PAYMENTS -->
  <g transform="translate(370, 360)">
    <rect width="230" height="180" class="entity-box" />
    <rect width="230" height="28" class="entity-header" fill="#047857" />
    <text x="115" y="14" class="entity-name">PAYMENTS</text>
    <text x="12" y="48" class="pk-text">PK</text><text x="36" y="48" class="field-text">payment_id (VARCHAR)</text>
    <text x="12" y="68" class="fk-text">FK</text><text x="36" y="68" class="field-text">order_id (VARCHAR)</text>
    <text x="36" y="88" class="field-text">method (VARCHAR)</text>
    <text x="36" y="108" class="field-text">amount (DECIMAL)</text>
    <text x="36" y="128" class="field-text">status (VARCHAR)</text>
    <text x="36" y="148" class="field-text">transaction_ref (VARCHAR)</text>
    <text x="36" y="168" class="field-text">paid_at (TIMESTAMP)</text>
  </g>
  <!-- Relation Orders -> Payments (1 to 1) -->
  <line x1="485" y1="280" x2="485" y2="360" class="erd-line" />
  <text x="495" y="295" class="cardinality">1</text>
  <text x="495" y="345" class="cardinality">1</text>

  <!-- ENTITY 7: TABLE_RESERVATIONS -->
  <g transform="translate(50, 360)">
    <rect width="230" height="190" class="entity-box" />
    <rect width="230" height="28" class="entity-header" fill="#c026d3" />
    <text x="115" y="14" class="entity-name">TABLE_RESERVATIONS</text>
    <text x="12" y="48" class="pk-text">PK</text><text x="36" y="48" class="field-text">reservation_id (VARCHAR)</text>
    <text x="12" y="68" class="fk-text">FK</text><text x="36" y="68" class="field-text">customer_id (VARCHAR)</text>
    <text x="36" y="88" class="field-text">guest_name (VARCHAR)</text>
    <text x="36" y="108" class="field-text">guest_phone (VARCHAR)</text>
    <text x="36" y="128" class="field-text">reserve_date (DATE)</text>
    <text x="36" y="148" class="field-text">time_slot (VARCHAR)</text>
    <text x="36" y="168" class="field-text">party_size (INT)</text>
    <text x="36" y="184" class="field-text">seating_zone (VARCHAR)</text>
  </g>
  <!-- Relation Customers -> Reservations (1 to N) -->
  <line x1="160" y1="250" x2="160" y2="360" class="erd-line" />
  <text x="170" y="270" class="cardinality">1</text>
  <path d="M 160 360 L 150 345 M 160 360 L 170 345" class="crow-foot" />
  <text x="170" y="340" class="cardinality">0..*</text>

  <!-- ENTITY 8: REVIEWS -->
  <g transform="translate(690, 360)">
    <rect width="220" height="150" class="entity-box" />
    <rect width="220" height="28" class="entity-header" fill="#e11d48" />
    <text x="110" y="14" class="entity-name">REVIEWS</text>
    <text x="12" y="48" class="pk-text">PK</text><text x="36" y="48" class="field-text">review_id (VARCHAR)</text>
    <text x="12" y="68" class="fk-text">FK</text><text x="36" y="68" class="field-text">customer_id (VARCHAR)</text>
    <text x="36" y="88" class="field-text">rating_stars (INT)</text>
    <text x="36" y="108" class="field-text">comment (TEXT)</text>
    <text x="36" y="128" class="field-text">created_at (TIMESTAMP)</text>
    <text x="36" y="144" class="field-text">is_verified (BOOLEAN)</text>
  </g>

  <!-- ENTITY 9: ADMIN_USERS -->
  <g transform="translate(50, 600)">
    <rect width="230" height="140" class="entity-box" />
    <rect width="230" height="28" class="entity-header" fill="#b45309" />
    <text x="115" y="14" class="entity-name">ADMIN_USERS</text>
    <text x="12" y="48" class="pk-text">PK</text><text x="36" y="48" class="field-text">admin_id (VARCHAR)</text>
    <text x="36" y="68" class="field-text">username (VARCHAR)</text>
    <text x="36" y="88" class="field-text">pin_hash (VARCHAR)</text>
    <text x="36" y="108" class="field-text">role (VARCHAR)</text>
    <text x="36" y="128" class="field-text">last_login (TIMESTAMP)</text>
  </g>
</svg>`;

saveSvg('14_entity_relationship_diagram.svg', erdSvg);

console.log("All 14 UML & Architecture diagrams generated successfully in vector SVG format!");
