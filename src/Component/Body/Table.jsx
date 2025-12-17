import React from "react";

const Table = (props) => {
  const { list } = props;
  return (
    <div className="w-full">
      <div className="grid grid-cols-[1fr_5%_1fr] ">
        <h2 className="border px-2 py-1" >
          Mouse Click Number
        </h2>
        <h2 className="border px-2 py-1"></h2>
        <h2 className="border px-2 py-1 ">Reaction Time</h2>
      </div>
      {list &&
        list.map((item, index) => (
          <div key={index} className="grid grid-cols-[1fr_5%_1fr] ">
            <p className="border px-2 py-1 ">{index + 1}</p>
            <p className="border px-2 py-1 "></p>
            <p className="border px-2 py-1 ">{item}</p>
          </div>
        ))}
    </div>
  );
};

export default Table;
