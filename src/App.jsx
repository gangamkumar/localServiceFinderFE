
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import SearchResults from "./pages/SearchResults";
import ProviderDetails from "./pages/ProviderDetails";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import MyProfile from "./pages/MyProfile";
import ProviderDashboard from "./pages/ProviderDashboard";
import ManageServices from "./pages/ManageServices";
import BookingRequests from "./pages/BookingRequests";
import AdminDashboard from "./pages/AdminDashboard";

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/provider/:id" element={<ProviderDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/provider/dashboard" element={<ProviderDashboard />} />
        <Route path="/provider/manage-services" element={<ManageServices />} />
        <Route path="/provider/booking-requests" element={<BookingRequests />} />
        <Route path="/admin" element={<AdminDashboard />} />

        <Route
          path="*"
          element={
            <main className="page-container py-24 text-center">
              <h1 className="section-title">Page not found</h1>
              <a className="primary-btn mt-6" href="/">Back home</a>
            </main>
          }
        />
      </Routes>

       <Footer />
    </>
  );
}

export default App