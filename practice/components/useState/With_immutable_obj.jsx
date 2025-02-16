import React, { useState } from "react";

export default function With_immutable_obj() {
  const [myObj, setMyObj] = useState({
    key1: "Click the button to show you full name",
    key2: "Click for full Cast",
    key3: "constand Data",
  });

  // const handleUpdateStage = () => {
  //   setMyObj({
  //     key1: "Your full name is Bhoraj Malla",
  //     key2: "Your Cast is Malla",
  //   });
  // };

  const handleUpdateStage = () => {
    setMyObj((prevObj) => ({
      ...prevObj,
      key1: "Your full name is Bhoraj Malla",
      key2: "Your full cast is malla",
    }));
  };
  return (
    <div className="flex gap-7 flex-col justify-center items-center">
      <h1 className="text-4xl  font-bold ">{myObj.key1}</h1>
      <h1 className="text-4xl  font-bold ">{myObj.key2}</h1>
      <h1 className="text-4xl  font-bold ">{myObj.key3}</h1>
      <button className="border-2 font-bold" onClick={handleUpdateStage}>
        update object
      </button>
    </div>
  );
}
