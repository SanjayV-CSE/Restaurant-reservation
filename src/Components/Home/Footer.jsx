import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm">Get yummy Italian pizzas with lots of toppings in our cozy place. Fresh, tasty, and perfect for your pizza cravings!</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <p className="text-sm">Monday - Friday: 9:00 AM - 10:00 PM</p>
            <p className="text-sm">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm">123 Main Street, City</p>
            <p className="text-sm">(123) 456-7890</p>
            <p className="text-sm">info@example.com</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
