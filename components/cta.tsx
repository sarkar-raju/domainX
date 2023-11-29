import React from "react";

const Cta = () => {
  return (
    <div className="mother-div bg-slate-200 h-[100vh] w-[100vw] mt-[230px]">
      <div className="child1 flex gap-[180px]">
        <div className="child2">
          <div className="sm:w-[350px] sm:h-[500px] w-[150px] h-[300px] bg-white mt-[-30px] sm:ml-[500px] ml-[10px] shadow-xl sm:pt-[100px] pt-0 mb-14">
            <h1 className="text-center pt-10 sm:text-[40px] text-[25px] text-red-400 font-bold">
              Buy
            </h1>
            <h2 className="text-center pt-4 font-bold sm:text-[18px] text-[15px]">
              Buy domains in seconds
            </h2>

            <p className="text-center px-8 sm:pt-9 pt-0 text-slate-500 sm:text-[15px]">
              Choose from hundreds of domains, easy peasy with Nuage.
            </p>
          </div>
          <div className="sm:w-[350px] sm:h-[500px] w-[150px] h-[300px] bg-white mt-[-30px] sm:ml-[500px] ml-[10px] shadow-xl sm:pt-[100px] pt-0">
            <h1 className="text-center pt-10 text-[40px] text-green-400 font-bold">
              Day-30
            </h1>
            <h2 className="text-center pt-4 font-bold text-[18px]">
              Never lose your domain again
            </h2>
            <p className="text-center px-8 pt-9 text-slate-500">
              Your domain will be automatically renewed on time - except those
              you do not want anymore
            </p>
          </div>
        </div>
        <div className="child3 mt-[15%]">
          <div className="w-[350px] h-[500px] bg-white shadow-xl pt-[100px]">
            <h1 className="text-center pt-10 text-[40px] text-yellow-400 font-bold">
              A to Z
            </h1>
            <h2 className="text-center pt-4 font-bold text-[18px]">
              Import all your domains instantly
            </h2>
            <p className="text-center px-8 pt-9 text-slate-500">
              Manage domains from different registrars in a single app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
