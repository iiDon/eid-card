import React from "react";
import Card from "./assets/Card.jpg";
const CardwithName = ({ name }) => {
  return (
    <div>
      {/* <h1 className="text-center text-2xl">اضغط على البطاقة لتحميل الاسم</h1>
      <h1 className="text-center text-2xl text-blue-700 cursor-pointer mt-4">
        انقر لإدخال الاسم
      </h1> */}

      {/*  */}
      <div className="">
        <h1 className="text-center text-2xl mt-4 cursor-pointer text-blue-700">اضغط هنا لتحميل الصورة</h1>
        <img
          className="w-1/2 m-auto mt-8"
          src={`https://eid.sr.edu.sa/img?cardId=3&text=${name}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default CardwithName;
