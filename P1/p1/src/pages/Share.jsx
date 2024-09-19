import React from "react";

function Share() {
  return (

    <div className="relative flex bg-black h-[100vh] w-[100vw]">
      <div className="text-center flex flex-wrap justify-center translate-x-1/2 p-2 w-[50vw]">
        <h3 className="text-white text-[45px] tracking-widest font-bold mt-[100px]">
          Lorem ipsum dolor sit amet consectetur{" "}
          <span className="text-blue-600">adipisicing</span> elit. Possimus
          voluptatum corporis placeat non?
        </h3>
        <h1 className="text-white/50 text-lg -mt-[60px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          voluptatum corporis placeat non?
        </h1>
        <div>
        <button className="bg-blue-600 text-white py-2 w-[200px] px-4 rounded-md -ml-[500px]">Share</button>
    </div>
      </div>
     
    </div>
  );
}

export default Share;
