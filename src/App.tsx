// import { lazy, Suspense, useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Layout from "./components/layouts/Layout";
// import ScrollToHashElement from "./components/scroll";
// import Loader from "./components/layouts/Loader";

// const Home = lazy(() => import("./pages/Home"));
// const Services = lazy(() => import("./pages/Services"));
// const BookingPage = lazy(() => import("./pages/BookingsPage"));

// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Cap loader at 1500ms — don't block on window.load (which waits for all
//     // images and can take 6–10 s, massively hurting Speed Index & LCP).
//     const timer = setTimeout(() => setLoading(false), 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <Loader visible={loading} />

//       <BrowserRouter>
//         <ScrollToHashElement />

//         <Layout>
//           <Suspense fallback={null}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/services" element={<Services />} />
//               <Route path="/booking" element={<BookingPage />} />
//             </Routes>
//           </Suspense>
//         </Layout>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;
import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layouts/Layout";
import ScrollToHashElement from "./components/scroll";
import Loader from "./components/layouts/Loader";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const BookingPage = lazy(() => import("./pages/BookingsPage"));

const HERO_IMAGE_SRC = "/heroSlideImageOne.webp";

const App = () => {
  // Lazy initializer: check at render time whether the preloaded image is
  // already in the browser cache. If it is, loading starts as false and the
  // effect below never needs to call setState at all.
  const [loading, setLoading] = useState(() => {
    const img = new Image();
    img.src = HERO_IMAGE_SRC;
    return !img.complete;
  });

  useEffect(() => {
    // Image was already cached — nothing to do
    if (!loading) return;

    const img = new Image();
    img.src = HERO_IMAGE_SRC;

    // These are async callbacks, so setState is never called synchronously
    img.onload = () => setLoading(false);
    img.onerror = () => setLoading(false);

    // Safety net: never block longer than 3s on slow connections
    const safety = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(safety);
  }, []);

  return (
    <>
      <Loader visible={loading} />

      <BrowserRouter>
        <ScrollToHashElement />

        <Layout>
          <Suspense fallback={null}>
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
