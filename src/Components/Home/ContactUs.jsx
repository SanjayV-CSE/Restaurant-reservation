import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="max-w-lg mx-auto bg-white rounded-lg overflow-hidden shadow-md p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-2">Location</h2>
            <p className="text-gray-700 mb-4">1/3 Nehru nagar<br />Coimbatore - Olamybus - 641001</p>
            <h2 className="text-xl font-bold mb-2">1234567890</h2>
            <h2 className="text-xl font-bold mb-2">Email</h2>
            <p className="text-gray-700 mb-4">thehot@gmail.com</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message" rows="5"></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button className="text-1xl bg-gray-800 rounded-lg p-3 text-white shadow-wider" type="button">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
