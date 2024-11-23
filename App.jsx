import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Header Component
const Header = () => {
  return (
    <header style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <div style={{ marginBottom: '5px' }}>
        <h1 style={{ margin: 0, fontSize: '20px' }}>AM Service</h1>
      </div>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-between', padding: 0 }}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/login" style={linkStyle}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

// CSS for the links with hover effect and no underline
const linkStyle = {
  color: '#fff',
  textDecoration: 'none',  // Remove underline
  fontWeight: 'bold',      // Make text bold
  transition: 'color 0.3s', // Smooth color transition on hover
  padding: '6px 10px',     // Adjust padding for smaller buttons
  backgroundColor: '#4CAF50', // Green background
  borderRadius: '5px',
  display: 'inline-block', // Ensure it's displayed as a block element
  margin: '5px',
  fontSize: '12px',  // Reduced font size for smaller buttons
};

// Footer Component
const Footer = () => {
  return (
    <footer style={{ padding: '5px', background: '#333', color: '#fff', textAlign: 'center' }}>
      <p style={{ fontSize: '12px' }}>&copy; 2024 AM Service. All rights reserved.</p>
    </footer>
  );
};

// Home Page
const Home = () => {
  return (
    <div style={{ padding: '15px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '18px' }}>Welcome to AM Service</h2>
      <p style={{ textAlign: 'center', fontSize: '14px' }}>Your trusted partner for on-demand electrical and electronic services.</p>

      <div style={containerStyle}>
        {/* Left Side Navigation (Technicians, Payment, Feedback, Book Technician) */}
        <div style={leftSectionStyle}>
          <div style={sectionStyle}>
            <h3 style={{ fontSize: '14px' }}>View Technicians</h3>
            <p style={{ fontSize: '12px' }}>Browse a list of our expert technicians.</p>
            <Link to="/technicians" style={linkStyle}>View Technicians</Link>
          </div>

          <div style={sectionStyle}>
            <h3 style={{ fontSize: '14px' }}>Payment</h3>
            <p style={{ fontSize: '12px' }}>Manage your payments securely.</p>
            <Link to="/payment" style={linkStyle}>Go to Payment</Link>
          </div>

          <div style={sectionStyle}>
            <h3 style={{ fontSize: '14px' }}>Feedback</h3>
            <p style={{ fontSize: '12px' }}>Give your feedback on our services.</p>
            <Link to="/feedback" style={linkStyle}>Leave Feedback</Link>
          </div>

          <div style={sectionStyle}>
            <h3 style={{ fontSize: '14px' }}>Book Technician</h3>
            <p style={{ fontSize: '12px' }}>Book a technician for your service needs.</p>
            <Link to="/booking" style={linkStyle}>Book Now</Link>
          </div>
        </div>

        {/* Right Side Sections (Electronics, Electric, Vehicles) */}
        <div style={rightSectionStyle}>
          <div style={sectionStyle}>
            <h3 style={{ fontSize: '14px' }}>Electronics</h3>
            <p style={{ fontSize: '12px' }}>We offer a range of electronics services, from repairs to installations.</p>
            <Link to="/electronics" style={linkStyle}>Explore Electronics</Link>
          </div>

          <div style={sectionStyle}>
            <h3 style={{ fontSize: '14px' }}>Electric</h3>
            <p style={{ fontSize: '12px' }}>Our team can assist with electrical troubleshooting, maintenance, and installations.</p>
            <Link to="/electric" style={linkStyle}>Explore Electric</Link>
          </div>

          <div style={sectionStyle}>
            <h3 style={{ fontSize: '14px' }}>Vehicles</h3>
            <p style={{ fontSize: '12px' }}>We specialize in vehicle electrical systems, battery replacements, and more.</p>
            <Link to="/vehicles" style={linkStyle}>Explore Vehicles</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  gap: '15px',  // Reduced space between the left and right sections
};

const leftSectionStyle = {
  flex: 1,  // This takes up the remaining space
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',  // Reduced gap between sections
  overflowY: 'auto', // Allow scrolling in case of overflow
  maxHeight: '70vh', // Limit the height to make space for scrolling
};

const rightSectionStyle = {
  flex: 1, // Right section also takes up the remaining space
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',  // Reduced gap between sections
  justifyContent: 'flex-start',
  alignItems: 'flex-start', // Align left for electronics, electric, vehicles
  overflowY: 'auto', // Allow scrolling
  maxHeight: '70vh', // Limit the height for scrolling
};

const sectionStyle = {
  backgroundColor: '#D3D3D3', // Ash background color
  padding: '5px', // Reduced padding to shrink section size
  width: '100%', // Take full width of the section container
  borderRadius: '5px',
  fontWeight: 'bold',
  textAlign: 'center',
  transition: 'background-color 0.3s ease, transform 0.2s',
  fontSize: '12px', // Reduced font size for compactness
};

// Electronics Page
const Electronics = () => {
  return (
    <div style={{ padding: '15px' }}>
      <h2 style={{ fontSize: '18px' }}>Electronics Services</h2>
      <p style={{ fontSize: '12px' }}>We offer a range of electronics services, from repairs to installations.</p>
    </div>
  );
};

// Electric Page
const Electric = () => {
  return (
    <div style={{ padding: '15px' }}>
      <h2 style={{ fontSize: '18px' }}>Electric Services</h2>
      <p style={{ fontSize: '12px' }}>Our team can assist with electrical troubleshooting, maintenance, and installations.</p>
    </div>
  );
};

// Vehicles Page
const Vehicles = () => {
  return (
    <div style={{ padding: '15px' }}>
      <h2 style={{ fontSize: '18px' }}>Vehicle Services</h2>
      <p style={{ fontSize: '12px' }}>We specialize in vehicle electrical systems, battery replacements, and more.</p>
    </div>
  );
};

// Technician List Page
const TechnicianList = () => {
  return (
    <div style={{ padding: '15px' }}>
      <h2 style={{ fontSize: '18px' }}>List of Technicians</h2>
      <ul>
        <li style={{ fontSize: '12px' }}>John Doe - Electrician</li>
        <li style={{ fontSize: '12px' }}>Jane Smith - Plumber</li>
        <li style={{ fontSize: '12px' }}>Sam Brown - Appliance Repair</li>
      </ul>
    </div>
  );
};

// Booking Page
const Booking = () => {
  return (
    <div style={{ padding: '15px' }}>
      <h2 style={{ fontSize: '18px' }}>Book Technician</h2>
      <button style={{ padding: '8px', background: '#4CAF50', color: '#fff', fontSize: '12px' }}>Confirm Booking</button>
    </div>
  );
};

// Payment Page
const Payment = () => {
  return (
    <div style={{ padding: '15px' }}>
      <h2 style={{ fontSize: '18px' }}>Payment Page</h2>
      <button style={{ padding: '8px', background: '#4CAF50', color: '#fff', fontSize: '12px' }}>Pay Now</button>
    </div>
  );
};

// Feedback Page
const Feedback = () => {
  return (
    <div style={{ padding: '15px' }}>
      <h2 style={{ fontSize: '18px' }}>Leave Feedback</h2>
      <textarea placeholder="Your feedback..." style={{ width: '100%', height: '100px', fontSize: '12px' }} />
      <button style={{ padding: '8px', background: '#4CAF50', color: '#fff', fontSize: '12px' }}>Submit Feedback</button>
    </div>
  );
};

// Login Page
const Login = () => {
  return (
    <div style={{ padding: '15px' }}>
      <h2 style={{ fontSize: '18px' }}>Login</h2>
      <input type="text" placeholder="Username" style={{ padding: '8px', fontSize: '12px' }} />
      <input type="password" placeholder="Password" style={{ padding: '8px', fontSize: '12px', marginTop: '10px' }} />
      <button style={{ padding: '8px', background: '#4CAF50', color: '#fff', fontSize: '12px', marginTop: '10px' }}>Login</button>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ padding: '15px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technicians" element={<TechnicianList />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/electric" element={<Electric />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
