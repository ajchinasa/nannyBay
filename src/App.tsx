import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import ScrollToHashElement from "./components/scroll";

import Home from "./pages/Home";
import Services from "./pages/Services";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToHashElement />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
