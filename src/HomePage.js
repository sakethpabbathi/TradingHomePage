import "./App.css";

import React, { useEffect, useState } from "react";

import ScrollToTop from "./ScrollToTop";
import { useNavigate } from "react-router-dom";

// import prawn1 from "../assets/prawn1.jpg";


const TradingHome = () => {
  return (
    <div style={styles.app}>

 <ScrollToTop /> 
        
      <Header />
      <Hero />
      <Markets />
      <Services />
      <Footer />
    </div>
  );
};



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header style={styles.header}>
      <div style={styles.headerInner}>

        {/* LOGO */}
        <img
          src="tradeinglogo.jpeg"
          alt="Logo"
          style={styles.logoImg}
          onClick={() => (window.location.href = "#home")}
        />

        {/* HAMBURGER (ONLY MOBILE) */}
        {isMobile && (
          <div
            style={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </div>
        )}

        {/* NAV */}
        {(!isMobile || menuOpen) && (
          <nav
            style={{
              ...styles.nav,
              ...(isMobile ? styles.navOpen : {}),
            }}
          >
            <a onClick={() => setMenuOpen(false)} href="#home" style={styles.navLink}>Home</a>
            <a onClick={() => setMenuOpen(false)} href="#" style={styles.navLink}>Markets</a>
            <a onClick={() => setMenuOpen(false)} href="#" style={styles.navLink}>Services</a>
            <a onClick={() => setMenuOpen(false)} href="#" style={styles.navLink}>Contact</a>
          </nav>
        )}

      </div>
    </header>
  );
};


const Hero = () => {
  const [index, setIndex] = useState(0);

  // const images = [
  //   "https://images.unsplash.com/photo-1642790106117-e829e14a795f",
  //   "https://images.unsplash.com/photo-1633158829875-e5316a358c6f",
  //   "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
  //   "https://images.unsplash.com/photo-1621768216002-5ac171876625",
  // ];

// const images = [
//    // Fresh fish on ice
//   "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62", // Prawns / shrimp
//   "https://media.istockphoto.com/id/157678695/photo/pallet-with-fresh-fish-at-a-wholesale-market.jpg?s=612x612&w=0&k=20&c=eKOFXnoQmXKs4D9O-SldgLoYZ6ABCtwyBWYtBgK2Ubo= ",
//   " https://content.jdmagicbox.com/comp/def_content/seafood-retailers/seafood-retailers-2-seafood-retailers-3-khswi.jpg ",
//   " https://media.istockphoto.com/id/520490716/photo/seafood-on-ice.jpg?s=612x612&w=0&k=20&c=snyxGY26viNQ6BWqW-ez4U7tAO65Z_tmAFPMobiZ9Q4= ",
//   "https://img.freepik.com/premium-photo/fishes-water-nature-background-hd-8k-wallpaper-stock-photographic-image_890746-32810.jpg ",
// ];

const images = [
  "/fishone.jpg",
  "/import.jpg",
  "/fishesfour.png"
];



  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" style={styles.hero}>
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Trading"
          style={{
            ...styles.heroImg,
            opacity: i === index ? 1 : 0,
          }}
        />
      ))}

      <div style={styles.heroContent}>
        <h1>Trade Smarter. Grow Faster.</h1>
        <p>Stocks • Crypto • Forex • Commodities</p>

        <button style={styles.heroBtn}>
          Start Trading
        </button>
      </div>
    </section>
  );
};



const marketImages = [
  "https://5.imimg.com/data5/GF/CU/MY-2050439/white-prawn-shrimp-500x500.jpg",
  "https://zubairrabbani.com/wp-content/uploads/2024/05/Seafood-Captions-For-Instagram-1024x1024.webp",
  "https://static01.nyt.com/images/2018/01/16/science/00TB-FOODWEB-promo/00TB-FOODWEB2-superJumbo.jpg",
  "https://www.tradeimex.in/blogs/uploads/images/202507/img_w860_687e23f818b0e6-94738744.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarLmFVTdMHCT4XjXYzUOQfLv9fosWTu59iQ&s",
  "https://5.imimg.com/data5/LH/HV/WC/SELLER-9549927/seafood-500x500.jpg",
  "https://www.foodandwine.com/thmb/ClPnka2WSnl5PtrMYOjlmXsXw1k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/escovitch-fish-FT-RECIPE0920-8a733638c2ba4b72b48737782fa616c2.jpg",
];


function Markets() {
  const sliderRef = React.useRef(null);
  const [zoomImg, setZoomImg] = useState(null);

  const handleWheel = (e) => {
    e.preventDefault();
    sliderRef.current.scrollLeft += e.deltaY;
  };

  return (
    <>
      <div className="markets-container" id="markets">
        <h2 className="markets-title">Markets</h2>

        <div
          className="markets-slider"
          ref={sliderRef}
          onWheel={handleWheel}
        >
          {marketImages.map((img, index) => (
            <div
              className="market-card"
              key={index}
              onClick={() => setZoomImg(img)}
            >
              <img src={img} alt="market" />
            </div>
          ))}
        </div>
      </div>

      
      {zoomImg && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "pointer",
          }}
          onClick={() => setZoomImg(null)}
        >
          <img
            src={zoomImg}
            alt="zoom"
            style={{
              maxWidth: "190%",
              maxHeight: "190%",
              borderRadius: "10px",
              boxShadow: "0 0 20px #000",
            }}
          />
        </div>
      )}
    </>
  );
}
const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-overlay">

        <h2 className="services-title">Our Services</h2>

        <div className="services-content">

          <div className="service-box fade-in">
            <h3>Fresh Fish Export</h3>
            <p>Supplying premium quality fresh and frozen fish worldwide.</p>
          </div>

          <div className="service-box slide-up">
            <h3>Prawn Processing & Export</h3>
            <p>Hygienic cleaning, grading, freezing, and national shipping.</p>
          </div>

          <div className="service-box fade-in">
            <h3>Seafood Cold Storage</h3>
            <p>Temperature-controlled storage for long-lasting freshness</p>
          </div>

          <div className="service-box slide-up">
            <h3>24/7 Support</h3>
            <p>Always here for you</p>
          </div>

        </div>

      </div>
    </section>
  );
};




const Service = ({ title, text }) => (
  <div style={styles.serviceCard}>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);



const Footer = () => {
  return (
    <footer id="contact" style={styles.footer}>
      <h3>UPIN TRADING CORPORATION</h3>

      <p>📍 Hyderabad, India</p>
      <p>📧 upintrad@123.com</p>
      <p>📞 +91 93477 19244</p>

      <p style={{ marginTop: "10px" }}>
        © 2026 UPIN Tradeing Corporation. All Rights Reserved.
      </p>
    </footer>
  );
};



const styles = {

nav: {
  display: "flex",
  alignItems: "center",
  gap: "20px",
},


hamburger: {
  fontSize: "32px",
  cursor: "pointer",
  userSelect: "none",
  zIndex: 9999,
//   width: "80%",
},

logoImg: {
  height: "45px",
  maxWidth: "140px",
  objectFit: "contain",
},



navOpen: {
  position: "absolute",
  top: "90px",
  left: 0,
  width: "100%",
  background: "#fff",
  flexDirection: "column",
  alignItems: "center",
  padding: "25px 0",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  animation: "slideDown 0.3s ease",
},

app: {
  fontFamily: "Arial, sans-serif",
  background: "#f9fafc",
  paddingTop: "70px",
},
logoImg:{
    height: "50px",
    width: "185px",
},

  header: {
    background: "#ffffff",
    color: "#180e0e",
    // padding: "30px 30px",
    padding: "15px 20px",

    marginLeft: "-8px",
    // position: "sticky",
    position: "fixed",
width: "100%",

    top: 0,
    zIndex: 100,
  },


headerInner: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80%",
  maxWidth: "1200px",
  margin: "0 auto",
},


  logo: {
    margin: 0,
  },

navLink: {
  margin: "10px 0",
  color: "black",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px",
},


  loginBtn: {
    background: "#00b4d8",
    border: "none",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  },

  hero: {
    height: "80vh",
    position: "relative",
    overflow: "hidden",
  },

  heroImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "1s",
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    color: "#fff",
    textAlign: "center",
    top: "40%",
    transform: "translateY(-40%)",
  },

  heroBtn: {
    background: "#00b4d8",
    border: "none",
    color: "#fff",
    padding: "12px 25px",
    marginTop: "15px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
  },

  section: {
    padding: "60px 30px",
    textAlign: "center",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "25px",
    marginTop: "30px",
  },

  card: {
    background: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  services: {
    background: "#0d1b2a",
    color: "#fff",
    padding: "60px 30px",
    textAlign: "center",
  },

  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "25px",
    marginTop: "30px",
  },

  serviceCard: {
    background: "#1b263b",
    padding: "25px",
    borderRadius: "10px",
  },

  footer: {
    background: "#0d1b2a",
    color: "#fff",
    padding: "30px",
    textAlign: "center",
  },
};

export default TradingHome;
