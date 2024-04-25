import React from "react";
import CustomCard from "./sharedComponent/customCard/CustomCard";

const CustmomId = ({ data }) => {
  return (
    <>
      <div className="p-3 grid grid-cols-3 gap-4 px-40">
        {data.data.lawyers.map((person) => (
          <CustomCard
            key={person.id}
            src={person.logo}
            title={person.name}
            header={person.birthday}
            href={`lawyers/${person.id}`}
          />
        ))}
      </div>
    </>
  );
};

export default CustmomId;
