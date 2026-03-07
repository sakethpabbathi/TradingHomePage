import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./About";
import HomePage from "./HomePage";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter basename="/TradingHomePage">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;