import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import BookingPage from "./Components/BookingPage.jsx/BookingPage.jsx";
import NavBar from "./Components/Home/NavBar.jsx";
import PaymentPage from "./Components/PaymentPage/PaymentPage.jsx";
import FoodForm from "./Components/BookingPage.jsx/FoodForm.jsx";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookingpage" element={<BookingPage />} />
          <Route path="/paymentpage" element={<PaymentPage />} />
          <Route path="/foodform" element={<FoodForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
