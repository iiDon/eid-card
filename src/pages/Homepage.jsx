import React from "react";
import { useState } from "react";
import Card from "../assets/Card.jpg";
import CardwithName from "../CardwithName";
const Homepage = ({ arabic, english, isArabic }) => {
  const [isSubmit, setIsSubmit] = useState(true);
  const [name, setName] = useState("");
  const generateImage = (e) => {
    e.preventDefault();
    setIsSubmit(false);
  };
  return (
    <div >
      {isSubmit ? (
        <div className="text-right p-6 sm:w-3/5 w-full m-auto mt-6">
          <h2 className={`mb-5 text-2xl ${isArabic? '' : 'text-left'}`}>{isArabic? arabic.title : english.title}</h2>
          <form>
            <h3 className={`${isArabic? '' : 'text-left'}`}>{isArabic? arabic.design : english.design}</h3>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className={`w-full mt-4 rounded bg-slate-100 ${isArabic? 'text-right' : ''} p-2 border`}
              placeholder={isArabic? arabic.placeholder : english.placeholder}
              type="text"
            />
            <button
              onClick={generateImage}
              className="mt-4 text-white p-2 rounded-lg bg-blue-700 "
            >
              {isArabic? arabic.button : english.button}
            </button>
          </form>
        </div>
      ) : (
        <CardwithName name={name} />
      )}
    </div>
  );
};

export default Homepage;
