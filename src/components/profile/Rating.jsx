import Image from "next/image";
import React from "react";
import Ratingg from "../../images/rating.svg";
import FRame from "../../images/frame.svg";

const Rating = () => {
  return (
    <div className="w-[709px]  bg-white  flex flex-col items-end justify-center gap-4 p-3 rounded-lg">
      <div dir="rtl">تقييم العملاء:</div>
      <div className="flex flex-row justify-around items-start gap-5 w-full     ">
        <div className="flex flex-col justify-center items-center gap-4">
          <Image src={FRame} width={58} height={40} alt="person" />
          <span>تقييم المنصة </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <Image src={Ratingg} width={120} height={24} alt="person" />
          <span>تقييم المنصة </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <Image src={Ratingg} width={120} height={24} alt="person" />
          <span>التقييم العام</span>
          <span>من 154 من العملاء </span>
        </div>
      </div>
    </div>
  );
};

export default Rating;