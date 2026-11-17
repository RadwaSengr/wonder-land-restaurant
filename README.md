# 🍽️ Wonder Land Restaurant & Food Ordering Management System
### Software Engineering & Object-Oriented Analysis and Design (OOAD) Project

> **A Complete End-to-End Academic & Engineering Solution:** Featuring 14 Comprehensive UML Diagrams, Fully Implemented Interactive GUI (Customer Portal + Staff Admin Hub), Native Microsoft Word & HTML Documentation, and Native PowerPoint Presentation (.pptx).

---

## 🚀 Quick Access Links & Project Deliverables

| Deliverable | File Path | Format / Description |
|---|---|---|
| **Customer Web GUI** | [`index.html`](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/index.html) | Menu, Cart Drawer, Checkout, Live Order Stepper Tracker, Table Reservation, Reviews |
| **Admin & Staff Hub** | [`admin.html`](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/admin.html) | PIN Gate (`admin123`), Real-time KPIs, Order Status Mutation, Menu CRUD, Table Seating |
| **PowerPoint Presentation** | [`presentation/Wonder_Land_Restaurant_Project_Presentation.pptx`](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/presentation/Wonder_Land_Restaurant_Project_Presentation.pptx) | Native 17-slide PPTX with dark/gold theme, UML diagrams, GUI walkthrough |
| **Full Design Document (Word)** | [`docs/Wonder_Land_Restaurant_UML_Software_Design_Document.docx`](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/docs/Wonder_Land_Restaurant_UML_Software_Design_Document.docx) | Native Word (.docx) document with specifications, use case scenarios, and traceability |
| **Interactive Design Document** | [`docs/UML_Design_Document.html`](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/docs/UML_Design_Document.html) | Web document with all 14 SVG diagrams embedded + Print-to-PDF ready |
| **Markdown Design Document** | [`docs/UML_Design_Document.md`](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/docs/UML_Design_Document.md) | Standard GitHub-flavored Markdown specification |

---

## 📊 Complete Directory of 14 UML Diagrams

All diagrams are available in crisp vector SVG format under `docs/diagrams/`:

1. **[01. Use Case Diagram](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/docs/diagrams/01_use_case_diagram.svg):** Actors (Customer, Admin, Chef), system boundary, `<<include>>` to Payment, `<<extend>>` to Filters.
2. **[02. Domain Class Diagram](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/docs/diagrams/02_class_diagram.svg):** Detailed domain classes, inheritance (`User` ➔ `Customer`, `Admin`), composition (`Order` ➔ `OrderItem`), aggregation (`Category` ➔ `MenuItem`), polymorphic `Payment` hierarchy, and `RestaurantDataStore` singleton.
3. **[03. Sequence Diagram - Food Ordering & Checkout](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/docs/diagrams/03_sequence_order_food.svg):** Customer dish selection, cart computation, checkout submission, payment approval, receipt generation, and tracker stepper initialization.
4. **[04. Sequence Diagram - Dining Table Reservation](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/docs/diagrams/04_sequence_table_reservation.svg):** Table booking criteria, slot capacity verification against DataStore, confirmation toast, and host blocking.
5. **[05. Sequence Diagram - Admin Management & Menu CRUD](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/docs/diagrams/05_sequence_admin_management.svg):** PIN authentication, order lifecycle status advancement, dish addition, and real-time customer menu sync.
6. **[06. Activity Diagram - Order Processing](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/docs/diagrams/06_activity_order_processing.svg):** 4 Swimlanes (Customer, Web GUI, Payment Engine, Kitchen) with validation decisions, payment branching, parallel fork/join, and end node.
7. **[07. Activity Diagram - Table Reservation](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/docs/diagrams/07_activity_table_reservation.svg):** Guest reservation criteria, availability check, alternative slot handling, host greeting, and table turnover.
8. **[08. State Machine Diagram - Food Order Lifecycle](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/docs/diagrams/08_state_order_lifecycle.svg):** Order progression: `Pending` ➔ `Confirmed` ➔ `In Kitchen (Cooking)` ➔ `Out for Delivery` ➔ `Delivered` + cancellation guard condition.
9. **[09. State Machine Diagram - Table Reservation Lifecycle](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/docs/diagrams/09_state_reservation_lifecycle.svg):** Booking progression: `Requested` ➔ `Confirmed` ➔ `Seated (Active)` ➔ `Completed` / `Cancelled`.
10. **[10. Component Diagram](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/docs/diagrams/10_component_diagram.svg):** Presentation Components, Order Engine, Menu Catalog Service, Payment Strategy Gateway, LocalStorage Persistence Adapter.
11. **[11. Deployment Diagram](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/docs/diagrams/11_deployment_diagram.svg):** Client Device Node (Browser Runtime), HTML5 LocalStorage Node, and Web Server Host Node over HTTPS.
12. **[12. Package Diagram](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/docs/diagrams/12_package_diagram.svg):** Architectural layers (`presentation`, `business`, `model`, `data`) with strict `<<import>>` dependencies.
13. **[13. Communication Diagram](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/docs/diagrams/13_communication_diagram.svg):** Numbered object collaborations between Customer, Cart, OrderManager, Payment, and DataStore.
14. **[14. Entity Relationship Diagram (ERD)](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/docs/diagrams/14_entity_relationship_diagram.svg):** Relational schema: `CUSTOMERS`, `ORDERS`, `ORDER_ITEMS`, `MENU_ITEMS`, `CATEGORIES`, `PAYMENTS`, `TABLE_RESERVATIONS`, `REVIEWS`.

---

## 🎯 Traceability Matrix: Diagrams vs. Physical GUI Implementation

| UML Diagram Concept | Physical Code Implementation | Executable GUI Verification |
|---|---|---|
| **UC01 & UC02 Browse & Filter** | `app.js: renderDynamicMenu()` | Live search input (`#menuSearchInput`) and category filter tabs |
| **UC03 Manage Cart Items** | `app.js: addToCart(), updateCartQuantity()` | Slide-out cart drawer (`#cartDrawer`) with live quantity (+/-) and badge |
| **UC04 & UC05 Checkout & Pay** | `app.js: placeOrder(), calculateTotals()` | Checkout modal (`#checkoutModal`) with Cash on Delivery, Card, Digital Wallet |
| **UC06 Live Order Tracking** | `app.js: renderOrderTracker(order)` | Visual 5-stage animated stepper (`#trackerModal`) showing real-time stage |
| **UC07 Table Reservation** | `app.js: bookTable(resData)` | Reservation modal (`#reservationModal`) with zone, time slot, and guest count |
| **UC08 Verified Guest Reviews** | `app.js: addReview()` | Review form (`#submitReviewForm`) with immediate testimonial publication |
| **UC09 Admin Authentication** | `admin.js: checkAuth()` | Security PIN gate in `admin.html` (PIN: `admin123`) with session locking |
| **UC10 Menu Catalog CRUD** | `admin.js: openDishModal(), deleteDish()` | Menu table with Add New Dish modal, edit price/details, and availability toggle |
| **UC11 Order Status Mutation** | `admin.js: handleOrderStatusChange()` | Status selector in `admin.html` instantly updates customer tracker in real-time |
| **UC12 Table Host Controls** | `admin.js: updateReservationStatus()` | Admin table reservations table with Seat guests and Cancel/Free table actions |
| **Order State Machine** | States: `Pending` ➔ `Confirmed` ➔ `Cooking` ➔ `Delivery` ➔ `Done` | Animated glowing stepper nodes (`.step-circle`, `.step-connector`) |
| **Singleton DataStore** | `app.js: RestaurantDataStore` | HTML5 LocalStorage (Key: `WONDERLAND_SYSTEM_DB_V1`) persisting across sessions |

---

## 💻 How to Run and Test

1. **Open Customer Front-End:** Double-click [`index.html`](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/index.html) in your browser.
2. **Order Food:** Search for dishes, add them to cart, open the cart drawer, proceed to checkout, and place your order.
3. **Track Order:** Note your Order ID (e.g. `#WL-101`) and click "Track Live Order" to inspect the visual stepper.
4. **Open Staff Hub:** Open [`admin.html`](file:///C:/Users/DELL/Downloads/wonder-land-restaurant-main/wonder-land-restaurant-main/admin.html) in another tab. Enter PIN `admin123`.
5. **Observe Real-Time Sync:** Change the order status to "In Kitchen" or "Out for Delivery" in `admin.html`. Switch back to `index.html` to see the customer stepper update automatically!

---

*Wonder Land Restaurant System • Software Engineering & OOAD Deliverable © 2026*
