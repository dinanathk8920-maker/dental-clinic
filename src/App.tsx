import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Department from './pages/Department';
import Team from './pages/Team';
import Blog from './pages/Blog';
import AppointmentPage from './pages/Appointment';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/departments" element={<Layout><Department /></Layout>} />
        <Route path="/team" element={<Layout><Team /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/appointment" element={<Layout><AppointmentPage /></Layout>} />
      </Routes>
    </Router>
  );
}
