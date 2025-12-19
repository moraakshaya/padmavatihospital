import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./pages/ScrollToTop";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Route pages render here */}
      <Outlet />

      <Footer />
    </>
  );
}
