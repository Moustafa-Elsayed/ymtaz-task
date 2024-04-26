import Image from "next/image";
import React, { useState } from "react";
import Search from "../../../images/Search.svg";
import Filter from "../../../images/bars.svg";

const SearchBar = ({ title, data }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = data.data.categories.filter((user) =>
      user.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div>
        <div className="text-main_title font-bold">{title}</div>
      </div>
      <div className="relative ">
        <div className="w-[723px] h-[64px] rounded-[6px] border border-[#DADADA] flex justify-around items-center">
          <Image src={Filter} width={32} height={32} alt="filter" />
          <input
            type="text"
            value={searchItem}
            onChange={handleInputChange}
            placeholder="Type to search"
            className="w-1/2 h-1/2 border-none outline-none bg-transparent"
          />
          <Image src={Search} width={32} height={32} alt="search" />
        </div>
        {searchItem && ( // Only render the list if searchItem is not empty
          <div className="bg-white shadow-md w-full rounded-md absolute top-20">
            <ul className="flex flex-col gap-4 p-5">
              {filteredUsers.map((user) => (
                <li key={user.id}>
                  <a href={`lawyers`} className="hover:text-[#DDB761]">{user.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
