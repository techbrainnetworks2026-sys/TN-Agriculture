import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Industries from "./components/Industries/Industries";
import Services from "./components/Services/Services";
import Careers from "./components/Careers/Careers";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// Legal Pages
import Privacy from "./components/Legal/Privacy";
import Terms from "./components/Legal/Terms";

// Product Detail Pages
import Product1 from "./components/Products/products_info/product1";
import Product2 from "./components/Products/products_info/product2";
import Product3 from "./components/Products/products_info/product3";
import Product4 from "./components/Products/products_info/product4";
import Product5 from "./components/Products/products_info/product5";
import Product6 from "./components/Products/products_info/product6";
import Product7 from "./components/Products/products_info/product7";
import Product8 from "./components/Products/products_info/product8";
import Product9 from "./components/Products/products_info/product9";
import Product10 from "./components/Products/products_info/product10";
import Product11 from "./components/Products/products_info/product11";
import Product12 from "./components/Products/products_info/product12";
import Product13 from "./components/Products/products_info/product13";
import Product14 from "./components/Products/products_info/product14";
import Product15 from "./components/Products/products_info/product15";
import Product16 from "./components/Products/products_info/product16";
import Product17 from "./components/Products/products_info/product17";
import Product18 from "./components/Products/products_info/product18";
import Product19 from "./components/Products/products_info/product19";
import Product20 from "./components/Products/products_info/product20";

// Service Detail Pages
import SoftwareDevelopment from "./components/Services/services_info/SoftwareDevelopment";
import HardwareEngineering from "./components/Services/services_info/HardwareEngineering";
import ProductDesign from "./components/Services/services_info/ProductDesign";
import ResearchDevelopment from "./components/Services/services_info/ResearchDevelopment";

// Home Page Layout
function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Industries />
      <Services onSelectService={(title) => {
        const slug = title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
        navigate(`/services/${slug}`);
      }} />
      <Careers />
      <Contact />
    </>
  );
}

function ServicesWrapper() {
  const navigate = useNavigate();
  return (
    <Services onSelectService={(title) => {
      const slug = title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
      navigate(`/services/${slug}`);
    }} />
  );
}

function App() {
  const location = useLocation();
  const isDetailPage = location.pathname.includes('/products/product') || location.pathname.includes('/services/');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      {!isDetailPage && <Navbar />}

      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Individual Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/services" element={<ServicesWrapper />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />

        {/* Product Routes */}
        <Route path="/products/product1" element={<Product1 />} />
        <Route path="/products/product2" element={<Product2 />} />
        <Route path="/products/product3" element={<Product3 />} />
        <Route path="/products/product4" element={<Product4 />} />
        <Route path="/products/product5" element={<Product5 />} />
        <Route path="/products/product6" element={<Product6 />} />
        <Route path="/products/product7" element={<Product7 />} />
        <Route path="/products/product8" element={<Product8 />} />
        <Route path="/products/product9" element={<Product9 />} />
        <Route path="/products/product10" element={<Product10 />} />
        <Route path="/products/product11" element={<Product11 />} />
        <Route path="/products/product12" element={<Product12 />} />
        <Route path="/products/product13" element={<Product13 />} />
        <Route path="/products/product14" element={<Product14 />} />
        <Route path="/products/product15" element={<Product15 />} />
        <Route path="/products/product16" element={<Product16 />} />
        <Route path="/products/product17" element={<Product17 />} />
        <Route path="/products/product18" element={<Product18 />} />
        <Route path="/products/product19" element={<Product19 />} />
        <Route path="/products/product20" element={<Product20 />} />

        {/* Service Routes */}
        <Route
          path="/services/software-development"
          element={<SoftwareDevelopment />}
        />
        <Route
          path="/services/hardware-engineering"
          element={<HardwareEngineering />}
        />
        <Route
          path="/services/product-design"
          element={<ProductDesign />}
        />
        <Route
          path="/services/research-development"
          element={<ResearchDevelopment />}
        />
      </Routes>

      {!isDetailPage && <Footer />}
    </>
  );
}

export default App;