import React, { useState } from 'react';
import Loader from '../Loader/Loader.jsx'; // Import the Loader component

const PaymentPage = () => {
  // Sample food items data
  const [foodItems] = useState([
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 5 },
    { id: 3, name: 'FINISH', price: 7 },
  ]);

  // State variables for selected food items, payment method, payment status, and loading state
  const [selectedFoodItems, setSelectedFoodItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('Please select an option');
  const [loading, setLoading] = useState(false);

  // Function to handle food selection
  const handleFoodSelection = (e) => {
    const selectedFood = e.target.value;
    setSelectedFoodItems([...selectedFoodItems, selectedFood]);

    // Calculate total amount when the third food item is selected
    if (selectedFoodItems.length === 2) {
      const total = selectedFoodItems.reduce((acc, cur) => {
        const selectedFoodItem = foodItems.find((item) => item.name === cur);
        return acc + selectedFoodItem.price;
      }, 0);
      setPaymentStatus(`Total Amount: $${total}`);
    }
  };

  // Function to handle payment
  const handlePayment = (method) => {
    setLoading(true); // Set loading state to true when payment processing starts

    // Simulate payment processing delay
    setTimeout(() => {
      console.log(`Processing payment via ${method}`);
      setLoading(false); // Set loading state to false when payment processing is completed
      setPaymentStatus(
        <div className="text-center">
          <p className="text-2xl font-bold text-red-600 mb-4">PAYMENT SUCCESS</p>
          <p className="text-lg text-red-700">Hope you had a great time dining with us!</p>
          <p className="text-lg text-red-700">Thanks for choosing our pizza spot!</p>
        </div>
      );
      
    }, 2000); // Simulating 2 seconds delay, adjust as needed
  };

  return (
    <div className="relative">
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <Loader /> {/* Render Loader when loading is true */}
        </div>
      )}
      <div className="flex justify-center items-center min-h-screen ">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6 text-center text-black">🍕 Food Items Eaten 🍕</h1>
          <form className="mb-6">
            <label htmlFor="food" className="block text-lg text-black mb-2">Select Food Item:</label>
            <select id="food" name="food" className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500" onChange={handleFoodSelection}>
              <option value="">Please select an option</option>
              {foodItems.map((item) => (
                <option key={item.id} value={item.name}>{item.name}</option>
              ))}
            </select>
          </form>

          <h2 className="text-2xl font-bold mt-8 mb-6 text-center text-black">Select Payment Method</h2>
          <div className="flex flex-col space-y-4">
            <button className="bg-orange-400 text-white font-bold py-3 rounded-md shadow-md transition duration-300" onClick={() => handlePayment('Google Pay')}>Google Pay</button>
            <button className="bg-orange-400 text-white font-bold py-3 rounded-md shadow-md transition duration-300" onClick={() => handlePayment('Paytm')}>Paytm</button>
            {/* Add more payment options as needed */}
          </div>

          {/* Render payment status */}
          {paymentStatus && <p className="text-lg font-bold mt-8 text-center">{paymentStatus} </p>}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
