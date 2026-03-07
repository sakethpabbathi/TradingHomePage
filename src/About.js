import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>About UPIN Trading Corporation</h1>

        <p style={styles.text}>
          UPIN Trading Corporation is a leading seafood export company based in Hyderabad, India.
          We specialize in exporting fresh fish, prawns, and premium seafood products
          to national and international markets.
        </p>

        <p style={styles.text}>
          Our mission is to deliver high-quality seafood while maintaining
          strict hygiene standards, freshness, and timely delivery.
          We are committed to customer satisfaction and long-term business relationships.
        </p>

        <div style={styles.section}>
          <h2>Why Choose Us?</h2>
          <ul style={styles.list}>
            <li>✔ Premium Quality Seafood</li>
            <li>✔ Hygienic Processing</li>
            <li>✔ Cold Storage Facility</li>
            <li>✔ Fast & Reliable Export</li>
            <li>✔ 24/7 Customer Support</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundImage: "url('/import.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
  },
  overlay: {
    background: "rgba(0,0,0,0.7)",
    padding: "40px",
    borderRadius: "10px",
    maxWidth: "900px",
    color: "#fff",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  text: {
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  section: {
    marginTop: "20px",
  },
  list: {
    marginTop: "10px",
    lineHeight: "1.8",
  },
};

export default About;