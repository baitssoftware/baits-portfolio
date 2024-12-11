"use client";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="px-16 py-6 border-b">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-lg tracking-tight">
            Bangladesh Associate of IT Solution
          </h1>
        </div>
        <div className="">
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="button z-30 "
          >
            <div
              className={`${"burger"} ${isActive ? "burgerActive" : ""}`}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
