import React from "react";
import { useNavigate } from "react-router-dom";
import Header_img from "../../assets/Images/Header.jpg";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Button clicked");
    navigate("/BookingPage");
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img src={Header_img} alt="" className="w-96 rounded-lg" />
        <h1 className="font-TheBocone text-2xl my-6 text-orange-700 tracking-widest">
          LIFE IS TOO SHORT TO MISS OUT ON PIZZA. <br /> EAT, LAUGH, REPEAT!
        </h1>
        <br />
        <button
          onClick={handleClick}
          className="text-1xl bg-gray-800 rounded-lg p-3 text-white shadow-wider animate-bounce"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};
export default Header;
