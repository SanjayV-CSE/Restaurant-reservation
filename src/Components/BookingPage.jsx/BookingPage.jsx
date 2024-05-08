import React from "react";
import Header_img from "../../assets/Images/Header.jpg";
import DistinctTable from "./DistinctTable";

const BookingPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src={Header_img} alt="" className="w-96 rounded-lg" />
      </div>
      <br />
      <DistinctTable />
    </div>
  );
};

export default BookingPage;
