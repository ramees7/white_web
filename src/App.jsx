import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react"; // Import Suspense and lazy for lazy loading
import "./App.css";
import Loading from "./Components/Loading";
import { ThemeProvider } from "./Context/ThemeContextApi";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Lazy load the Home component
const Home = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense
          fallback={
            <div>
              <Loading />
            </div>
          }
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
