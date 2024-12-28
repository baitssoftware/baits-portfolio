import RoundedButton from "@/components/shared/button/RoundedButton";
import React from "react";
import TestAnimationText from "./TestAnimationText";

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="">
        {/* button  */}
        <div className="inline-block mx-auto">
          <RoundedButton className="py-4 px-10">
            <span>Hello</span>
          </RoundedButton>
        </div>
        <TestAnimationText />
      </div>
    </div>
  );
};

export default page;
