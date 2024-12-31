"use client";

import { AnimatedText } from "@/components/shared/animatedText/AnimatedText";

const phrases = [
  "It is a long established fact",
  "that a reader will be distracted",
  "by the readable content of a page",
  "when looking at its layout.",
];
import React from "react";

const TestAnimationText = () => {
  return (
    <div className="flex flex-col items-center gap-[20vw]">
      <AnimatedText text={phrases} />
      <AnimatedText text="This is a single line of animated text" />
      <AnimatedText text={["You can also", "pass an array", "of strings"]} />
      <AnimatedText text={phrases} className="text-blue-500" />
    </div>
  );
};
export default TestAnimationText;
