# OneLife Tourism — Full-Stack React & Node.js Application

A full-stack web application for **OneLife Tourism** ("Two crafts, one team: Visa consultancy + Handpicked holiday packages"), matching the base design.

---

## 🌟 Key Highlights & Features

### 1. Multi-Page Client Website (React 18 + Vite + Tailwind CSS)
- **Home Page (`/`)**:
  - **Hero Section**: High-resolution coastal sunset background, *"One life. See it all."* headline, *"VISA CONSULTANCY + HOLIDAY PACKAGES"* pill badge, CTA buttons (*"Explore packages"* and *"Get visa help"*), and trust markers (*"End-to-end planning"*, *"Honest, upfront pricing"*, *"24/7 on-trip support"*).
  - **Stats Strip**: `40+ destinations curated`, `15,000+ visas processed`, `10 yrs of happy travelers`, `4.9/5 traveler rating`.
  - **What We Do ("Two crafts, one team")**: Split cards for *Visa Consultancy* (40+ countries) and *Holiday Packages* (handpicked boutique stays).
  - **Traveler Favourites ("This season's most-loved trips")**: Dark aesthetic theme featuring the Maldives Escape (₹1,09,999), Dubai City & Desert (₹64,999), and Bali Bliss (₹74,999) with badges and pricing.
  - **How It Works ("Four steps from idea to boarding pass")**: Numbered step cards (Tell us your plan, Get a free assessment, Lock it in, Bon voyage).
  - **Ready When You Are**: Soft lime green section with instant phone/WhatsApp contact actions and an interactive *"Plan my trip"* lead form.
  - **Verified Traveler Testimonials**: Star ratings, trip names, and customer feedback.
- **Visa Services Page (`/visa`)**:
  - Filter by region (Europe/Schengen, Middle East, Asia, Americas, Oceania).
  - Real-time search by country or visa type.
  - Interactive document checklist viewer.
  - Processing times, validity periods, government fees, and consultancy charges.
  - 1-click *"Apply Now"* opening pre-filled consultation modal.
- **Holiday Packages Page (`/tourism`)**:
  - Filter by category (Honeymoon, Family, Adventure, Luxury, Culture).
  - Day-by-day itinerary & inclusions popover drawer.
  - Direct booking and quote request.
- **About Us Page (`/about`)**:
  - The OneLife story: Why we combined visa consultancy with holiday planning.
  - The 3 pillars of OneLife quality.
  - Specialists & team profiles.
- **Contact Page (`/contact`)**:
  - Direct telephone, WhatsApp, and email channels.
  - Office location: Suite 402, Signature Tower, Link Road, Andheri West, Mumbai.
  - Interactive consultation booking form with validation.

---

### 2. Private Backend CMS & Admin Portal (`/admin`)
The backend is completely hidden from public users:
- **How Admin Accesses the Portal**:
  1. Visit the private route: **`http://localhost:3000/admin`** (or `http://localhost:5000/admin`).
  2. Or press the keyboard shortcut **`Ctrl + Shift + A`** (or `Cmd + Shift + A`) from any page.
  3. Or click the subtle `©` symbol in the footer copyright line.
- **Default Admin Credentials**:
  - **Email**: `admin@onelife.com`
  - **Password**: `admin123`
  - *(Convenient 1-click demo login button available on the private login screen)*
- **Customer Enquiries & Leads Manager**:
  - View all leads submitted from the homepage form, contact page, or modal drawers.
  - Change status (`New`, `In Progress`, `Contacted`, `Converted`, `Closed`).
  - Search by client name, phone number, email, or destination.
  - Add internal staff notes to each enquiry.
  - 1-click direct call and WhatsApp messaging links for leads.
- **Holiday Packages Editor**:
  - Add new holiday packages.
  - Edit title, destination, duration, price, badge tag, category, image URL, description, inclusions, and highlights.
  - Toggle featured status to pin packages to the homepage.
  - Delete packages.
- **Visa Consultancy Editor**:
  - Add new countries with flag emojis, regional classification, and visa type.
  - Edit processing times, validity, government fees, and service fees.
  - Manage document checklists (e.g., passports, bank statements, ITR, tickets).
  - Toggle "Popular" badge.
- **Site Content & Hero Editor**:
  - Edit Hero banner headline, subtitle, badge tag, and hero image URL.
  - Edit key statistics (destinations, visas processed, years of experience, rating).
  - Edit contact phone number, WhatsApp number, email desk, and office operating hours.
  - 1-click "Reset to Defaults" button.
- **Client Reviews & Testimonials Editor**:
  - Add, edit, and delete customer testimonials and star ratings.

---

### 3. Backend Architecture (Node.js + Express)
- **Persistent JSON Store**: `backend/data/database.json` automatically stores all edits and inquiries.
- **Zero-setup requirement**: No external database service required; runs out-of-the-box on any OS.
- **Unified production mode**: The Express backend is configured to serve both the REST API and the optimized Vite React build from a single port (`5000`).

---

## 🚀 Running the Project

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Option A: Run Full-Stack with One Command
From the project root (`onelife-tourism`):
```bash
npm run dev
```
This runs both:
- **Backend API**: `http://localhost:5000`
- **Frontend Vite Dev**: `http://localhost:3000`

### Option B: Run in Production Mode
```bash
# 1. Build the React frontend
npm run build

# 2. Start the Express server (serves both API + Frontend)
npm start
```
Visit `http://localhost:5000` in your web browser.

---

## 📁 Project Structure

```text
onelife-tourism/
├── backend/
│   ├── data/
│   │   ├── initialData.js       # Seed data matching design
│   │   └── database.json        # Auto-created persisted store
│   ├── package.json
│   └── server.js                # Express REST API & static server
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx       # Header with logo & nav links
│   │   │   ├── Footer.jsx       # Dark aesthetic footer
│   │   │   └── EnquiryModal.jsx # Quick lead submission modal
│   │   ├── context/
│   │   │   └── SiteContext.jsx  # Central reactive data store & API client
│   │   ├── data/
│   │   │   └── initialData.js   # Fast fallback data
│   │   ├── pages/
│   │   │   ├── Home.jsx         # Exact replica of design
│   │   │   ├── Visas.jsx        # Visa consultancy catalog
│   │   │   ├── Tourism.jsx      # Holiday packages catalog
│   │   │   ├── About.jsx        # Story, team, mission
│   │   │   ├── Contact.jsx      # Contact info, map, form
│   │   │   └── Admin/
│   │   │       ├── AdminLogin.jsx
│   │   │       ├── AdminDashboard.jsx
│   │   │       ├── EnquiriesTab.jsx
│   │   │       ├── PackagesTab.jsx
│   │   │       ├── VisasTab.jsx
│   │   │       ├── SiteSettingsTab.jsx
│   │   │       └── TestimonialsTab.jsx
│   │   ├── App.jsx              # React Router configuration
│   │   ├── index.css            # Tailwind directives & smooth styling
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
├── package.json                 # Root runner scripts
└── README.md
```

