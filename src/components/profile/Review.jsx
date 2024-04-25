import Image from "next/image";
import React from "react";
import Ratingg from "../../images/rating.svg";
import Num from "../../images/num.svg";

const Review = () => {
  return (
    <div className="w-[709px]  bg-white flex flex-col    gap-4 rounded-lg">
      <div className="flex flex-row items-center justify-around p-3">
        <div>
          <Image src={Num} width={42} height={40} alt="person" />
        </div>
        <div
          dir="rtl"
          className="flex flex-col justify-between  gap-4"
        >
          <Image src={Ratingg} width={120} height={24} alt="person" />
          <span>التقييم العام</span>
          <span>
            “ استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا القانونية
            والفقهية
          </span>
          <span>الخميس 3 فبراير 2024</span>
        </div>
      </div>
      <hr />
      <div className="flex flex-row items-center justify-around p-3">
        <div>
          <Image src={Num} width={42} height={40} alt="person" />
        </div>
        <div
          dir="rtl"
          className="flex flex-col justify-between items-start gap-4"
        >
          <Image src={Ratingg} width={120} height={24} alt="person" />
          <span>التقييم العام</span>
          <span>
            “ استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا القانونية
            والفقهية
          </span>
          <span>الخميس 3 فبراير 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Review;
