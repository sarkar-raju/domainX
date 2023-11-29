import React from "react";
import { Button } from "@nextui-org/button";

const Hero = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className="sm:text-[250px] text-[130px] font-bold">
            <span
            className="text-green-400"
            >H</span>
            <span
            className="text-red-400"
            >e</span>
            <span
            className="text-indigo-300"
            >ll</span>
            <span
            className="text-rose-400"
            >o</span>
            <span
            className="text-orange-400"
            >.</span>
          </h1>
        </div>

        <div className="text-center">
          <p className="text-[20px] text-slate-500">
            Managing Domains <br />
            has never been so cool.
          </p>
        </div>

        <div className="text-center mt-5">
          <Button className="rounded-full bg-blue-500 text-white font-bold w-[160px]">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
