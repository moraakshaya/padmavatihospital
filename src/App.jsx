import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Doctors from "./pages/Doctors/Doctors";
import Departmentsinglepage from "./pages/Departmentsinglepage/Departmentsinglepage";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/BlogDetails";
import Testimonials from "./pages/Testimonials/Testimonials";
import Insurance from "./pages/Insurance/Insurance";
import TermsAndConditions from "./pages/terms-&-conditions/terms-&-conditions";
import PrivacyPolicy from "./pages/privacy-policy/privacy-policy"; 
import Bookappoinment from "./pages/Bookappoinment/Bookappoinment";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/departments/:slug" element={<Departmentsinglepage />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Bookappoinment" element={<Bookappoinment />} />
        <Route path="/Insurance" element={<Insurance/>} />
        <Route path="/Terms-&-Conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
