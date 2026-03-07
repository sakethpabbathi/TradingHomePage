import { Route, Routes } from "react-router-dom";

import About from "./About";
import HomePage from "./HomePage";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;