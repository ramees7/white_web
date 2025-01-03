import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react"; // Import Suspense and lazy for lazy loading
import "./App.css";
import Loading from "./Components/Loading";
import { ThemeProvider } from "./Context/ThemeContextApi";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { HelmetProvider } from "react-helmet-async";
import RightSideFixed from "./Components/RightSideFixed";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import ResetPassword from "./Pages/Authentication/ResetPassword";
import PageNotFound from "./Pages/PageNotFound";
// import VerifyOtp from "./Pages/Authentication/VerifyOtp";

// Lazy load the Home component
const Home = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <HelmetProvider>
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
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* <Route path="/verify-otp" element={<VerifyOtp />} /> */}
              <Route path="/forget-password" element={<ResetPassword />} />
              <Route path="/page-not-found" element={<PageNotFound />} />
              <Route
                path="*"
                element={<Navigate to="/page-not-found" replace />}
              />
            </Routes>
            <Footer />
            <RightSideFixed />
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
