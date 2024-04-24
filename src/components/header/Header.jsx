import React from "react";
import Image from "next/image";
// svg
import BurgerIcon from "../../images/Burger.svg";
import Logo from "../../images/logopng 2.svg";
// links
const Links = [];
const Header = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center p-5">
        {/* burgerIcon */}
        <Image src={BurgerIcon} width={48} height={48} alt="burgerIcon" />
        {/* links */}

        <ul className="flex gap-5 flex-row-reverse text-header font-bold">
          <li>
            <a href="">الرئيسية</a>
          </li>
          <li>
            <a href="">من نحن</a>
          </li>
          <li>
            <a href="">اتصل بنا</a>
          </li>
          <li>
            <a href="">الدعم الفني </a>
          </li>
          <li>
            <a href="">أرقام التشغيل</a>
          </li>
          <li>
            <a href="">سياسة الخصوصية</a>
          </li>
        </ul>
        <Image src={Logo} width={138} height={67} alt="logo" />
        {/* logo */}
      </div>
    </div>
  );
};

export default Header;
