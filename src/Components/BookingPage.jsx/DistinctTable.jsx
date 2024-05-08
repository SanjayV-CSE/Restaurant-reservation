import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DistinctTable = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(event.target.value);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Button clicked!");
    navigate("/PaymentPage");
  };

  return (
    <div>
      <div className="flex space-x-8 justify-center items-center">
        <div className="p-3 rounded bg-gray-500 font-bold text-lg text-white">
          <label htmlFor="datePicker">Date - </label>
          <input
            className="cursor-pointer"
            type="date"
            id="datePicker"
            color="black"
            value={selectedDate}
            onChange={handleDateChange}
            style={{ color: "black" }}
          />
        </div>
        <div className="p-3 rounded bg-gray-500 font-bold text-lg text-white">
          <label htmlFor="timePicker">Time - </label>
          <input
            type="time"
            id="timePicker"
            value={selectedTime}
            onChange={handleTimeChange}
            style={{ color: "black" }}
          />
        </div>
        <div className="p-3 rounded bg-red-400 font-bold text-lg text-white">
          <label htmlFor="peopleNumber">Number of People - </label>
          <input
            type="number"
            id="peopleNumber"
            value={numberOfPeople}
            onChange={handleNumberOfPeopleChange}
            style={{ color: "black" }}
          />
        </div>
      </div>
      <br />
      <div className="flex space-x-8 justify-center items-center">
        <div className="w-2 p-3 rounded border-black bg-red-400 cursor-pointer mr-2"></div>
        BOOKED
        <div className="w-2 p-3 rounded border-black bg-gray-400 cursor-pointer mr-2"></div>
        NOT BOOKED
      </div>
      <br />
      <br />
      
      {/* first row */}
      <div className="flex space-x-5 justify-center items-center">
        {[1].map((index) => (
          <div
            key={index}
            className={`font-bold w-13 p-2 rounded border-black ${
              selectedDate === "2024-05-10" && selectedTime === "19:40" && numberOfPeople === '4' ? "bg-red-400" : "bg-gray-400"
            } cursor-pointer`}
          >FOUR</div>
        ))}
        <div onClick={handleClick}  className="font-bold w-12 p-2 rounded border-black bg-gray-400 cursor-pointer">ONE</div>
        {[1].map((index) => (
          <div
            key={index}
            className={`font-bold w-16 p-2 rounded border-black ${
              selectedDate === "2024-05-10" && selectedTime === "19:40" && numberOfPeople === '3' ? "bg-red-400" : "bg-gray-400"
            } cursor-pointer`}
          >THREE</div>
        ))}
        
        <div onClick={handleClick} className="font-bold w-13 p-2 rounded border-black bg-gray-400 cursor-pointer">TWO</div>
        {[1].map((index) => (
          <div
            key={index}
            className={`font-bold w-13 p-2 rounded border-black ${
              selectedDate === "2024-06-12" && selectedTime === "10:00" && numberOfPeople === '2' ? "bg-red-400" : "bg-gray-400"
            } cursor-pointer`}
          >TWO</div>
        ))}
        <div onClick={handleClick} className="font-bold w-13 p-2 rounded border-black bg-gray-400 cursor-pointer">FOUR</div>
        <div onClick={handleClick} className="font-bold w-16 p-2 rounded border-black bg-gray-400 cursor-pointer">THREE</div>
        <div onClick={handleClick} className="font-bold w-12 p-2 rounded border-black bg-gray-400 cursor-pointer">ONE</div>
        {[1].map((index) => (
          <div
            key={index}
            className={`font-bold w-13 p-2 rounded border-black ${
              selectedDate === "2024-05-10" && selectedTime === "19:40" && numberOfPeople === '4' ? "bg-red-400" : "bg-gray-400"
            } cursor-pointer`}
          >FOUR</div>
        ))}
        <div className="font-bold w-16 p-2 rounded border-black bg-gray-400 cursor-pointer">THREE</div>
        {[1].map((index) => (
          <div
            key={index}
            className={`font-bold w-13 p-2 rounded border-black ${
              selectedDate === "2024-05-10" && selectedTime === "19:40" && numberOfPeople === '2' ?  "bg-red-400" : "bg-gray-400"
            } cursor-pointer`}
          >TWO</div>
        ))}
        <div onClick={handleClick} className="font-bold w-12 p-2 rounded border-black bg-gray-400 cursor-pointer">ONE</div>
      </div>
      <br />

      {/* second row */}
      <div className="flex space-x-5 justify-center items-center">
        
        <div onClick={handleClick} className="font-bold w-12 p-2 rounded border-black bg-gray-400 cursor-pointer">ONE</div>
        {[1].map((index) => (
          <div
            key={index}
            className={`font-bold w-16 p-2 rounded border-black ${
              selectedDate === "2024-05-10" && selectedTime === "19:40" && numberOfPeople === '3' ? "bg-red-400" : "bg-gray-400"
            } cursor-pointer`}
          >THREE</div>
        ))}
        <div onClick={handleClick} className="font-bold w-13 p-2 rounded border-black bg-gray-400 cursor-pointer">FOUR</div>
        <div onClick={handleClick} className="font-bold w-13 p-2 rounded border-black bg-gray-400 cursor-pointer">TWO</div>
        <div onClick={handleClick} className="font-bold w-16 p-2 rounded border-black bg-gray-400 cursor-pointer">THREE</div>
        {[1].map((index) => (
          <div
            key={index}
            className={`font-bold w-12 p-2 rounded border-black ${
              selectedDate === "2024-05-10" && selectedTime === "19:40" && numberOfPeople === '1' ? "bg-red-400" : "bg-gray-400"
            } cursor-pointer`}
          >ONE</div>
        ))}
        <div className="font-bold w-12 p-2 rounded border-black bg-gray-400 cursor-pointer">ONE</div>
        {[1].map((index) => (
          <div
            key={index}
            className={`font-bold w-12 p-2 rounded border-black ${
              selectedDate === "2024-05-10" && selectedTime === "19:40" && numberOfPeople === '2' ? "bg-red-400" : "bg-gray-400"
            } cursor-pointer`}
          >TWO</div>
        ))}
        <div onClick={handleClick} className="font-bold w-13 p-2 rounded border-black bg-gray-400 cursor-pointer">FOUR</div>
        {[1].map((index) => (
          <div
            key={index}
            className={`font-bold w-16 p-2 rounded border-black ${
              selectedDate === "2024-05-10" && selectedTime === "19:40" && numberOfPeople === '3' ? "bg-red-400" : "bg-gray-400"
            } cursor-pointer`}
          >THREE</div>
        ))}
        
        <div onClick={handleClick} className="font-bold w-12 p-2 rounded border-black bg-gray-400 cursor-pointer">ONE</div>
        {[1].map((index) => (
          <div
            key={index}
            className={`font-bold w-13 p-2 rounded border-black ${
              selectedDate === "2024-05-10" && selectedTime === "19:40" && numberOfPeople === '4' ? "bg-red-400" : "bg-gray-400"
            } cursor-pointer`}
          >FOUR</div>
        ))}
        <div onClick={handleClick} className="font-bold w-12 p-2 rounded border-black bg-gray-400 cursor-pointer">TWO</div>
      </div>
      <br />

      {/* Third row */}
      <div className="flex space-x-5 justify-center items-center">
      <div className="font-bold w-16 p-2 rounded border-black bg-gray-400 cursor-pointer">THREE</div>
        <div className="font-bold w-13 p-2 rounded border-black bg-gray-400 cursor-pointer">FOUR</div>
        {[1].map((index) => (
          <div
            key={index}
            className={`font-bold w-12 p-2 rounded border-black ${
              selectedDate === "2024-05-10" && selectedTime === "19:40" && numberOfPeople === '2' ? "bg-red-400" : "bg-gray-400"
            } cursor-pointer`}
          >TWO</div>
        ))}
        <div onClick={handleClick} className="font-bold w-12 p-2 rounded border-black bg-gray-400 cursor-pointer">ONE</div>
        <div onClick={handleClick} className="font-bold w-16 p-2 rounded border-black bg-gray-400 cursor-pointer">THREE</div>
        <div onClick={handleClick} className="font-bold w-13 p-2 rounded border-black bg-gray-400 cursor-pointer">FOUR</div>
        {[1].map((index) => (
          <div
            key={index}
            className={`font-bold w-16 p-2 rounded border-black ${
              selectedDate === "2024-05-10" && selectedTime === "19:40" && numberOfPeople === '3' ? "bg-red-400" : "bg-gray-400"
            } cursor-pointer`}
          >THREE</div>
        ))}     
        <div onClick={handleClick} className="font-bold w-12 p-2 rounded border-black bg-gray-400 cursor-pointer">ONE</div>
        <div onClick={handleClick} className="font-bold w-16 p-2 rounded border-black bg-gray-400 cursor-pointer">THREE</div>
        {[1].map((index) => (
          <div
            key={index}
            className={`font-bold w-13 p-2 rounded border-black ${
              selectedDate === "2024-05-10" && selectedTime === "19:40" && numberOfPeople === '4' ? "bg-red-400" : "bg-gray-400"
            } cursor-pointer`}
          >FOUR</div>
        ))}
        <div onClick={handleClick} className="font-bold w-13 p-2 rounded border-black bg-gray-400 cursor-pointer">TWO</div>
        {[1].map((index) => (
          <div
            key={index}
            className={`font-bold w-12 p-2 rounded border-black ${
              selectedDate === "2024-05-10" && selectedTime === "19:40" && numberOfPeople === '1' ? "bg-red-400" : "bg-gray-400"
            } cursor-pointer`}
          >ONE</div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
}

export default DistinctTable;
