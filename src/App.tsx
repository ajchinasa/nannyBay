import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layouts/Layout";
import ScrollToHashElement from "./components/scroll";
import Loader from "./components/layouts/Loader";

// Home is eagerly imported no lazy loading
import Home from "./pages/Home";

// Only defer pages the user won't see on first load
const Services = lazy(() => import("./pages/Services"));
const BookingPage = lazy(() => import("./pages/BookingsPage"));

const HERO_IMAGE_SRC = "/heroSlideImageOne.webp";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE_SRC;

    let rafId: number;
    let safetyTimer: ReturnType<typeof setTimeout>;

    const done = () => setLoading(false);

    if (img.complete) {
      rafId = requestAnimationFrame(done);
    } else {
      img.onload = done;
      img.onerror = done;
      // Safety net: never block longer than 3s on very slow connections
      safetyTimer = setTimeout(done, 3000);
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <>
      <Loader visible={loading} />

      <BrowserRouter>
        <ScrollToHashElement />

        <Layout>
          <Suspense fallback={<div className="min-h-screen bg-[#06111f]" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/booking" element={<BookingPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
