import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

// Lazy load pages
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Doctors = lazy(() => import("./pages/Doctors/Doctors"));
const DepartmentSinglePage = lazy(() => import("./pages/Departmentsinglepage/Departmentsinglepage"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const BlogDetails = lazy(() => import("./pages/Blog/BlogDetails"));
const Testimonials = lazy(() => import("./pages/Testimonials/Testimonials"));
const BookAppointment = lazy(() => import("./pages/Bookappoinment/Bookappoinment"));
const Insurance = lazy(() => import("./pages/Insurance/Insurance"));
const Terms = lazy(() => import("./pages/terms-&-conditions/terms-&-conditions"));
const Privacy = lazy(() => import("./pages/privacy-policy/privacy-policy"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="departments/:slug" element={<DepartmentSinglePage />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogDetails />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="bookappoinment" element={<BookAppointment />} />
            <Route path="insurance" element={<Insurance />} />
            <Route path="terms-&-conditions" element={<Terms />} />
            <Route path="privacy-policy" element={<Privacy />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
