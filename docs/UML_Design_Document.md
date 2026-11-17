# 🍽️ Wonder Land Restaurant Management System
## Software Requirements Specification & UML Software Design Document

**Course:** Software Engineering & Object-Oriented Analysis and Design (OOAD)  
**Deliverable:** Complete UML Modeling (14 Diagrams) + GUI Implementation + Traceability Matrix  
**Status:** 100% Implemented & Verified in Application GUI

---

## 📖 Table of Contents
1. [Executive Summary & Problem Statement](#1-executive-summary--problem-statement)
2. [Stakeholders & System Actors](#2-stakeholders--system-actors)
3. [Software Requirements Specification (Functional & Non-Functional)](#3-software-requirements-specification)
4. [Layered System Architecture & Technology Stack](#4-layered-system-architecture--technology-stack)
5. [Complete UML Diagrams Specification (14 Models)](#5-complete-uml-diagrams-specification)
   - [01. Use Case Diagram](#01-use-case-diagram)
   - [02. Domain Class Diagram](#02-domain-class-diagram)
   - [03. Sequence Diagram: Food Ordering & Checkout](#03-sequence-diagram-food-ordering--checkout)
   - [04. Sequence Diagram: Dining Table Reservation](#04-sequence-diagram-dining-table-reservation)
   - [05. Sequence Diagram: Admin Order Mutation & Menu CRUD](#05-sequence-diagram-admin-management)
   - [06. Activity Diagram: Order Processing with Swimlanes](#06-activity-diagram-order-processing)
   - [07. Activity Diagram: Table Reservation Workflow](#07-activity-diagram-table-reservation)
   - [08. State Machine Diagram: Order Lifecycle](#08-state-machine-diagram-order-lifecycle)
   - [09. State Machine Diagram: Reservation Lifecycle](#09-state-machine-diagram-reservation-lifecycle)
   - [10. Component Diagram](#10-component-diagram)
   - [11. Deployment Diagram](#11-deployment-diagram)
   - [12. Package Diagram](#12-package-diagram)
   - [13. Communication (Collaboration) Diagram](#13-communication-diagram)
   - [14. Entity Relationship Diagram (ERD)](#14-entity-relationship-diagram-erd)
6. [GUI Implementation & Traceability Matrix](#6-gui-implementation--traceability-matrix)
7. [User Manual & Verification Testing](#7-user-manual--verification-testing)

---

## 1. Executive Summary & Problem Statement

The **Wonder Land Restaurant Management System** is an end-to-end software engineering solution designed to streamline the operations of a premier fine-dining establishment. It bridges the gap between customer-facing interactions (menu browsing, online ordering, live order tracking, and table reservations) and back-office management (kitchen queue dispatch, order status mutations, menu catalog CRUD, and revenue analytics).

### Traditional Industry Problems Addressed:
1. **Unrecorded Table Reservations:** Phone bookings lead to lost requests, double-booking, and high no-show rates.
2. **Disconnected Kitchen & Delivery Pipeline:** Customers are unaware whether their food order is still in the queue, cooking, or with the courier.
3. **Static Menus:** Inability to immediately reflect sold-out ingredients or update seasonal pricing.
4. **Lack of Operational Visibility:** Managers lack real-time counters for daily sales, kitchen workload, and table turnover.

---

## 2. Stakeholders & System Actors

- **Customer / Guest:** Explores the menu, searches dishes live, adds items to cart, checks out with Cash on Delivery / Card / Digital Wallet, tracks live status via the visual stepper, books dining tables, and submits reviews.
- **Restaurant Admin / Manager:** Authenticates with PIN (`admin123`), manages menu catalog (CRUD), mutates live order states, inspects receipts, and monitors sales analytics.
- **Kitchen Staff / Chef:** Receives live tickets and advances the cooking status from "Confirmed" to "In Kitchen" and "Out for Delivery".
- **Host / Floor Staff:** Reviews incoming table bookings, seats dining parties, and manages hall seating zones.

---

## 3. Software Requirements Specification

### Functional Requirements (FR)
- **FR-01:** Filter dishes dynamically by category (Starters, Mains, Pizzas, Desserts).
- **FR-02:** Live keyword search filtering dishes by title, description, or ingredients.
- **FR-03:** Shopping cart drawer with live quantity adjustments (+ / -) and item removal.
- **FR-04:** Automatic financial computation of Subtotal, 14% VAT, $3.00 Delivery Fee, and Grand Total.
- **FR-05:** Checkout capturing Name, Phone, Delivery Address, and Special Chef Notes.
- **FR-06:** Payment selection: Cash on Delivery, Credit/Debit Card, Vodafone Cash/Fawry.
- **FR-07:** Unique Order ID generation (`#WL-xxxx`) and digital itemized receipt.
- **FR-08:** Live Order Tracking with 5-stage animated stepper.
- **FR-09:** Order cancellation allowed only in `Pending` or `Confirmed` states.
- **FR-10:** Table booking modal with Date, Time Slot, Party Size, and Seating Zone.
- **FR-11:** Admin authentication protected by security PIN (`admin123`).
- **FR-12:** Menu catalog CRUD (Add, Edit, Delete, Toggle Available/Sold-Out).
- **FR-13:** Order status update by admin with real-time cross-tab synchronization.
- **FR-14:** Table reservation management (Seat guests, cancel table).
- **FR-15:** Customer review submission with instantaneous rendering.

---

## 4. Layered System Architecture & Technology Stack

```
+-------------------------------------------------------------+
|               PRESENTATION TIER (Client Web GUI)            |
|   index.html (Customer Portal) • admin.html (Staff Hub)     |
|   style.css & admin.css • FontAwesome 6 • Quicksand Fonts   |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|             APPLICATION / CONTROLLER LOGIC TIER             |
|   app.js (Cart Engine, State Machine, Tracking Controller)  |
|   admin.js (Menu CRUD Controller, Status Mutator, Auth)     |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|                PERSISTENCE & STORAGE TIER                   |
|   HTML5 LocalStorage (Key: WONDERLAND_SYSTEM_DB_V1)         |
|   JSON Object Serialization • Cross-Tab Event Notifier      |
+-------------------------------------------------------------+
```

---

## 5. Complete UML Diagrams Specification

All 14 diagrams are stored in vector SVG format under `docs/diagrams/`:

### 01. Use Case Diagram
- **File:** `docs/diagrams/01_use_case_diagram.svg`
- **Key Constructs:** Actors (Customer, Admin, Chef), System Boundary, Associations, `<<include>>` (Checkout includes Payment), `<<extend>>` (Browse extends Filter).

### 02. Domain Class Diagram
- **File:** `docs/diagrams/02_class_diagram.svg`
- **Key Constructs:** Abstract `User` ➔ `Customer`, `Admin`; Composition `Order` 1 ➔ 1..* `OrderItem`; Aggregation `Category` 1 ➔ * `MenuItem`; Polymorphic `Payment` ➔ `CashPayment`, `CreditCardPayment`, `DigitalWalletPayment`; Singleton `RestaurantDataStore`.

### 03. Sequence Diagram: Food Ordering & Checkout
- **File:** `docs/diagrams/03_sequence_order_food.svg`
- **Flow:** Customer ➔ WebGUI ➔ CartController ➔ CheckoutModal ➔ PaymentGateway ➔ DataStore ➔ Receipt & Live Stepper.

### 04. Sequence Diagram: Dining Table Reservation
- **File:** `docs/diagrams/04_sequence_table_reservation.svg`
- **Flow:** Customer ➔ ReservationModal ➔ ReservationController ➔ TableCapacityCheck ➔ DataStore ➔ Confirmation Toast.

### 05. Sequence Diagram: Admin Management
- **File:** `docs/diagrams/05_sequence_admin_management.svg`
- **Flow:** Admin ➔ PIN Verification ➔ Fetch KPIs ➔ Mutate Order Status ➔ Append New Menu Dish ➔ Live Client Sync.

### 06. Activity Diagram: Order Processing
- **File:** `docs/diagrams/06_activity_order_processing.svg`
- **Flow:** 4 Swimlanes (Customer, Web GUI, Payment Engine, Kitchen) with validation decisions, payment branching, parallel fork/join, and final node.

### 07. Activity Diagram: Table Reservation
- **File:** `docs/diagrams/07_activity_table_reservation.svg`
- **Flow:** Criteria input ➔ Slot availability decision ➔ Rejection alternate path ➔ Booking confirmation ➔ Floor greeting & table clearance.

### 08. State Machine Diagram: Order Lifecycle
- **File:** `docs/diagrams/08_state_order_lifecycle.svg`
- **States:** `Pending` ➔ `Confirmed` ➔ `In Kitchen (Cooking)` ➔ `Out for Delivery` ➔ `Delivered`. Cancellation branch with guard condition `[Within Pending or Confirmed]`.

### 09. State Machine Diagram: Reservation Lifecycle
- **File:** `docs/diagrams/09_state_reservation_lifecycle.svg`
- **States:** `Requested` ➔ `Confirmed` ➔ `Seated (Active)` ➔ `Completed` / `Cancelled`.

### 10. Component Diagram
- **File:** `docs/diagrams/10_component_diagram.svg`
- **Components:** Presentation Components, Order Engine, Catalog Service, Payment Strategy Gateway, LocalStorage Adapter.

### 11. Deployment Diagram
- **File:** `docs/diagrams/11_deployment_diagram.svg`
- **Nodes:** Client Device (Browser Runtime), HTML5 LocalStorage Node, Web Server Host Node.

### 12. Package Diagram
- **File:** `docs/diagrams/12_package_diagram.svg`
- **Packages:** `com.wonderland.presentation`, `com.wonderland.business`, `com.wonderland.model`, `com.wonderland.data`.

### 13. Communication Diagram
- **File:** `docs/diagrams/13_communication_diagram.svg`
- **Interactions:** Numbered collaboration messages connecting Customer, Cart, OrderManager, Payment, and DataStore.

### 14. Entity Relationship Diagram (ERD)
- **File:** `docs/diagrams/14_entity_relationship_diagram.svg`
- **Entities:** `CUSTOMERS`, `ORDERS`, `ORDER_ITEMS`, `MENU_ITEMS`, `CATEGORIES`, `PAYMENTS`, `TABLE_RESERVATIONS`, `REVIEWS`.

---

## 6. GUI Implementation & Traceability Matrix

| UML Diagram Element | Physical Code Implementation | Live GUI Verification in Application |
|---|---|---|
| **UC01 / UC02 Browse & Filter** | `app.js: renderDynamicMenu()` | Live search input (`#menuSearchInput`) & category buttons |
| **UC03 Manage Cart Items** | `app.js: addToCart(), updateCartQuantity()` | Slide-out cart drawer (`#cartDrawer`) with +/- and badge |
| **UC04 / UC05 Checkout & Pay** | `app.js: placeOrder(), Order.calculateTotals()` | Checkout modal (`#checkoutModal`) with COD, Card, Wallet |
| **UC06 Track Order Status** | `app.js: renderOrderTracker(order)` | Visual stepper (`#trackerModal`) showing 5 stages live |
| **UC07 Table Reservation** | `app.js: bookTable(resData)` | Reservation modal (`#reservationModal`) with zone & date |
| **UC08 Submit Guest Review** | `app.js: addReview(name, rating, text)` | Review form (`#submitReviewForm`) with instant publishing |
| **UC09 Admin Authentication** | `admin.js: checkAuth()` | PIN gate in `admin.html` (`admin123`) with session lock |
| **UC10 Menu Catalog CRUD** | `admin.js: openDishModal(), deleteDish()` | Menu table with Add/Edit dish modal and Sold-Out toggle |
| **UC11 Order Status Update** | `admin.js: handleOrderStatusChange()` | Inline status dropdown in `admin.html` updates tracker |
| **UC12 Manage Reservations** | `admin.js: updateReservationStatus()` | Reservations table with Seat guests and Cancel actions |
| **Order State Machine** | States: Pending ➔ Confirmed ➔ Cooking ➔ Delivery ➔ Done | Animated CSS stepper with glowing nodes & connectors |
| **Data Persistence** | `app.js: RestaurantDataStore` | LocalStorage key `WONDERLAND_SYSTEM_DB_V1` |

---

## 7. User Manual & Verification Testing

### How to Run:
1. **Customer Website:** Double-click `index.html` to open in any web browser.
2. **Order Food:** Search for dishes, add them to cart, click the Cart icon, proceed to checkout, and submit your order.
3. **Track Order:** View the Order ID on the receipt and click "Track Live Order" to inspect the visual stepper.
4. **Staff Management Hub:** Click "Staff Portal" in the navbar or open `admin.html`. Enter PIN `admin123`.
5. **Real-time Sync:** Change the status of your order in `admin.html` and observe the customer stepper update live!

---

*Wonder Land Restaurant System • Software Engineering & OOAD Project © 2026*
