import Image from "next/image";
import React from "react";
import Data from "../../images/data.svg";
import Right from "../../images/right.svg";
import Left from "../../images/light.svg";
import Data2 from "../../images/data2.svg";
import Data3 from "../../images/data3.svg";
import Data4 from "../../images/data4.svg";



const InfoCard = () => {
  return (
    <div className="w-[575px] bg-white flex flex-col items-end gap-3  p-5 rounded-xl">
      <div className="text-main_title text-main font-bold">معلومات الحجز</div>
      <div className="flex flex-row justify-center items-center w-full border-b border-[#ECECEC]">
        <ul className="flex flex-row justify-center items-center gap-5">
          <li>
            <a href="">أوقات العمل</a>
          </li>
          <li>
            <a href="">أسعار الخدمات</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <Image src={Left} width={32} height={32} alt="data" />
        <Image src={Data} width={424} height={272} alt="data" />
        <Image src={Right} width={32} height={32} alt="data" />
      </div>
      <div className="flex flex-col justify-between items-center w-full">
        <Image src={Data2} width={328} height={150} alt="data" />
        <Image src={Data4} width={328} height={150} alt="data" />
      </div>
    </div>
  );
};

export default InfoCard;
