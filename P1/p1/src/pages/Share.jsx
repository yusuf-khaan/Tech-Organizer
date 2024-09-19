import React from "react";
import Cards from "../components/Cards";
import { useNavigate } from "react-router-dom";

function Share() {

    const navigate = useNavigate();


    const list = [
        {
            text: "Bruv! Lets Create A Assignment",
            color: "bg-[#F3FF90]",
            blur: false,
        },
        {
            text: "We Appreciate A FeedBack",
            color: "bg-[#F3FF90]",
            blur: false,
            url: '/feed'
        }, {
            text: "Bruv! Want To Quiz",
            color: "bg-[#F3FF90]",
            blur: false,
            url: '/home',
        },
    ];

    const mover = (page) => {
        navigate(page);
    }


    return (

        <div className="absolute flex bg-black h-full w-full overflow-hidden">

            <div className="text-center flex flex-wrap justify-center ml-[140px] -mt-[50px] w-[80vw]">
                <div>
                    <h3 className="text-white text-[45px] tracking-widest py-5 font-bold mt-[100px]">
                    Refine Your Expertise Through Bespoke Quizzes, Immediate Performance{" "}
                        <span className="text-blue-600">Analytics</span> , and Detailed Progress Insights for an Elevated Learning Journey
                    </h3>
                    <h1 className="text-white/50 text-lg py-5">
                    Seeking an effective way to assess your knowledge? Our advanced quiz platform enables custom quiz creation, with tailored topic selection, question limits, and instantaneous feedback. Monitor your progress and enhance your learning with each carefully curated assessment.
                    </h1>
                </div>

                <div className="flex grow justify-between flex-wrap">

                    {
                        list.map((items, index) => {
                            return (
                                <button className='px-[100px] -mt-[100px] hover:bg-transparent hover:scale-125 transition-all duration-300' onClick={() => mover(items.url)}>
                                    <Cards item={items} key={index} />
                                </button>
                            );
                        })
                    }
                </div>

            </div>
        </div>
    );
}

export default Share;
