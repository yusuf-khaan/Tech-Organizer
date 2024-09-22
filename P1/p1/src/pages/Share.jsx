import React from "react";
import Cards from "../components/Cards";
import { useNavigate } from "react-router-dom";

function Share() {
  const navigate = useNavigate();

  const list = [
    {
      text: "Bruv! Let's Create An Assignment",
      color: "bg-[#F3FF90]",
      blur: false,
    },
    {
      text: "We Appreciate A Feedback",
      color: "bg-[#F3FF90]",
      blur: false,
      url: '/feed',
    },
    {
      text: "Bruv! Want To Quiz",
      color: "bg-[#F3FF90]",
      blur: false,
      url: '/home',
    },
  ];

  const mover = (page) => {
    navigate(page);
  };

  return (
    <div className="absolute flex bg-black min-h-screen w-full overflow-hidden">
      <div className="text-center flex flex-col items-center w-full md:w-[80vw] mx-auto mt-10">
        <h3 className="text-white text-2xl md:text-[42px] tracking-widest py-5 font-bold leading-relaxed">
          Refine Your Expertise Through Bespoke Quizzes, Immediate Performance{" "}
          <span className="text-blue-600">Analytics</span>, and Detailed Progress Insights for an Elevated Learning Journey
        </h3>
        <h1 className="text-white/50 text-base md:text-lg py-5 px-4 leading-relaxed">
          Seeking an effective way to assess your knowledge? Our advanced quiz platform enables custom quiz creation, with tailored topic selection, question limits, and instantaneous feedback. Monitor your progress and enhance your learning with each carefully curated assessment.
        </h1>

        <div className="flex flex-wrap justify-center mt-8 space-x-4 space-y-4">
          {list.map((items, index) => (
            <button
              key={index}
              className="px-6 py-4 m-2 hover:bg-transparent hover:scale-125 transition-all duration-300"
              onClick={() => mover(items.url)}
            >
              <Cards item={items} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Share;
