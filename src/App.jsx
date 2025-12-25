import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./pages/ScrollToTop";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Doctors from "./pages/Doctors/Doctors";
import DepartmentSinglePage from "./pages/Departmentsinglepage/Departmentsinglepage";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/BlogDetails";
import Testimonials from "./pages/Testimonials/Testimonials";
import BookAppointment from "./pages/Bookappoinment/Bookappoinment";
import Insurance from "./pages/Insurance/Insurance";
import Terms from "./pages/terms-&-conditions/terms-&-conditions";
import Privacy from "./pages/privacy-policy/privacy-policy";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/departments/:slug" element={<DepartmentSinglePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/bookappoinment" element={<BookAppointment />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/terms-&-conditions" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
