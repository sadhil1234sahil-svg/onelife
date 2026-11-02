import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { initialData } from './data/initialData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const DB_FILE = path.join(__dirname, 'data', 'database.json');

// Middleware
app.use(cors());
app.use(express.json());

// Initialize / load database
let db = null;

function loadDatabase() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const content = fs.readFileSync(DB_FILE, 'utf-8');
      db = JSON.parse(content);
      // Ensure all top-level keys exist
      if (!db.settings) db.settings = initialData.settings;
      if (!db.packages) db.packages = initialData.packages;
      if (!db.visas) db.visas = initialData.visas;
      if (!db.testimonials) db.testimonials = initialData.testimonials;
      if (!db.enquiries) db.enquiries = initialData.enquiries;
      console.log('✓ Database loaded from file');
    } else {
      db = JSON.parse(JSON.stringify(initialData));
      saveDatabase();
      console.log('✓ Database initialized with seed data');
    }
  } catch (err) {
    console.error('Error reading database, using initial data:', err);
    db = JSON.parse(JSON.stringify(initialData));
  }
}

function saveDatabase() {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to save database:', err);
  }
}

loadDatabase();

// --- Auth Routes ---
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  // Standard demo admin credentials
  if (email === 'admin@onelife.com' && password === 'admin123') {
    res.json({
      success: true,
      token: 'onelife-admin-demo-token-' + Date.now(),
      user: {
        name: 'Super Admin',
        email: 'admin@onelife.com',
        role: 'admin'
      }
    });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials. Use admin@onelife.com / admin123' });
  }
});

// --- Settings Routes ---
app.get('/api/settings', (req, res) => {
  res.json(db.settings);
});

app.put('/api/settings', (req, res) => {
  db.settings = { ...db.settings, ...req.body };
  saveDatabase();
  res.json({ success: true, settings: db.settings });
});

// --- Packages Routes ---
app.get('/api/packages', (req, res) => {
  const { category, featured } = req.query;
  let result = db.packages;
  if (category && category !== 'All') {
    result = result.filter(p => p.category?.toLowerCase() === category.toLowerCase());
  }
  if (featured === 'true') {
    result = result.filter(p => p.featured);
  }
  res.json(result);
});

app.get('/api/packages/:id', (req, res) => {
  const pkg = db.packages.find(p => p.id === req.params.id || p.slug === req.params.id);
  if (!pkg) return res.status(404).json({ error: 'Package not found' });
  res.json(pkg);
});

app.post('/api/packages', (req, res) => {
  const newPkg = {
    id: 'pkg-' + Date.now(),
    slug: (req.body.title || 'package').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    ...req.body
  };
  db.packages.unshift(newPkg);
  saveDatabase();
  res.status(201).json(newPkg);
});

app.put('/api/packages/:id', (req, res) => {
  const index = db.packages.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Package not found' });
  db.packages[index] = { ...db.packages[index], ...req.body };
  saveDatabase();
  res.json(db.packages[index]);
});

app.delete('/api/packages/:id', (req, res) => {
  const initialLen = db.packages.length;
  db.packages = db.packages.filter(p => p.id !== req.params.id);
  if (db.packages.length === initialLen) return res.status(404).json({ error: 'Package not found' });
  saveDatabase();
  res.json({ success: true, message: 'Package removed' });
});

// --- Visas Routes ---
app.get('/api/visas', (req, res) => {
  const { region, search } = req.query;
  let result = db.visas;
  if (region && region !== 'All') {
    result = result.filter(v => v.region?.toLowerCase() === region.toLowerCase());
  }
  if (search) {
    const s = search.toLowerCase();
    result = result.filter(v => v.country.toLowerCase().includes(s) || v.type.toLowerCase().includes(s));
  }
  res.json(result);
});

app.get('/api/visas/:id', (req, res) => {
  const visa = db.visas.find(v => v.id === req.params.id);
  if (!visa) return res.status(404).json({ error: 'Visa service not found' });
  res.json(visa);
});

app.post('/api/visas', (req, res) => {
  const newVisa = {
    id: 'visa-' + Date.now(),
    ...req.body
  };
  db.visas.unshift(newVisa);
  saveDatabase();
  res.status(201).json(newVisa);
});

app.put('/api/visas/:id', (req, res) => {
  const index = db.visas.findIndex(v => v.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Visa service not found' });
  db.visas[index] = { ...db.visas[index], ...req.body };
  saveDatabase();
  res.json(db.visas[index]);
});

app.delete('/api/visas/:id', (req, res) => {
  const initialLen = db.visas.length;
  db.visas = db.visas.filter(v => v.id !== req.params.id);
  if (db.visas.length === initialLen) return res.status(404).json({ error: 'Visa not found' });
  saveDatabase();
  res.json({ success: true, message: 'Visa service removed' });
});

// --- Enquiries Routes ---
app.get('/api/enquiries', (req, res) => {
  res.json(db.enquiries);
});

app.post('/api/enquiries', (req, res) => {
  const { fullName, phone } = req.body;
  if (!fullName || !phone) {
    return res.status(400).json({ error: 'Name and Phone are required' });
  }
  const enquiry = {
    id: 'enq-' + Date.now(),
    fullName,
    phone,
    email: req.body.email || '',
    interest: req.body.interest || 'Both',
    destination: req.body.destination || '',
    travelDate: req.body.travelDate || '',
    travelers: req.body.travelers || '1',
    notes: req.body.notes || '',
    status: 'New',
    createdAt: new Date().toISOString()
  };
  db.enquiries.unshift(enquiry);
  saveDatabase();
  res.status(201).json({ success: true, message: 'Enquiry received successfully!', enquiry });
});

app.patch('/api/enquiries/:id', (req, res) => {
  const enq = db.enquiries.find(e => e.id === req.params.id);
  if (!enq) return res.status(404).json({ error: 'Enquiry not found' });
  if (req.body.status) enq.status = req.body.status;
  if (req.body.adminNotes !== undefined) enq.adminNotes = req.body.adminNotes;
  saveDatabase();
  res.json(enq);
});

app.delete('/api/enquiries/:id', (req, res) => {
  db.enquiries = db.enquiries.filter(e => e.id !== req.params.id);
  saveDatabase();
  res.json({ success: true, message: 'Enquiry deleted' });
});

// --- Testimonials Routes ---
app.get('/api/testimonials', (req, res) => {
  res.json(db.testimonials);
});

app.post('/api/testimonials', (req, res) => {
  const newTestimonial = {
    id: 'test-' + Date.now(),
    ...req.body
  };
  db.testimonials.unshift(newTestimonial);
  saveDatabase();
  res.status(201).json(newTestimonial);
});

app.put('/api/testimonials/:id', (req, res) => {
  const index = db.testimonials.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Testimonial not found' });
  db.testimonials[index] = { ...db.testimonials[index], ...req.body };
  saveDatabase();
  res.json(db.testimonials[index]);
});

app.delete('/api/testimonials/:id', (req, res) => {
  db.testimonials = db.testimonials.filter(t => t.id !== req.params.id);
  saveDatabase();
  res.json({ success: true });
});

// Reset database to initial state
app.post('/api/reset', (req, res) => {
  db = JSON.parse(JSON.stringify(initialData));
  saveDatabase();
  res.json({ success: true, message: 'Database reset to default template' });
});

// Serve frontend if built
const frontendDist = path.join(__dirname, '..', 'frontend', 'dist');
if (fs.existsSync(frontendDist)) {
  app.use(express.static(frontendDist));
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 OneLife Tourism Backend API running on http://localhost:${PORT}`);
});

