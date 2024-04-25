import Image from "next/image";
import React from "react";
import Crown from "../../images/crown.svg";
import Rating from "../../images/rating.svg";
import Group from "../../images/Group.svg";
const PersonCard = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="flex flex-col justify-between items-end  bg-white shadow-sm  w-[709px] h-[409px] p-3 rounded-lg">
        <div className="text-main_title text-main font-bold">المعلومات الشخصية</div>
        <div className="flex flex-row justify-center items-center gap-3">
          <div className="flex flex-col items-end gap-4">
            <div className="font-bold text-xl text-main">{data.data.lawyer.name}</div>
            <p className="group-hover:text-white text-header  flex flex-row justify-center items-center gap-3 font-normal text-xl  text-second">
              <Image src={Crown} width={16} height={16} alt="alt" />{" "}
              {data.data.lawyer.about}
            </p>
            <div className="flex flex-row justify-center items-center gap-3 font-normal text-lg  text-second">
              <span className="text-black"> اظهر التقييمات</span>
              <span> التقييم العام من 154 من العملاء</span>
              <span>5.00</span>
              <Image src={Rating} width={120} height={24} alt="person" />
            </div>
          </div>
          <Image
            src={data.data.lawyer.logo}
            width={121}
            height={121}
            alt="person"
            className="rounded-full"
          />
        </div>
        <div className="bg-[#F9F9F9] w-[405px ] h-[100px] p-5 rounded-tl-3xl flex flex-col gap-5  rounded-br-3xl self-center font-normal text-lg  text-second">
          <div className="flex flex-row justify-center items-center gap-5">
            <div>
              تميز الاستشاري بالاحترافية والخبرة العالية في المسائل القانونية
            </div>
            <Image src={Group} width={24} height={24} alt="person" />
          </div>
          <div className="flex flex-row justify-between items-center gap-3 ">
            <div>الخميس 3 فبراير 2024</div>
            <div>Abdullah Faleh</div>
            <Image src={Rating} width={120} height={24} alt="person" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonCard;
