import React from "react";
import TradingViewWidget from "../components/TradingViewWidget"
import { useNavigate } from "react-router-dom";
import Navert from "../components/Navert";

function Quiz() {

    const total = 140;

    const thoughts = "Mental pain is less dramatic than physical pain, but it is more common and also more hard to bear. The frequent attempt to conceal mental pain increases the burden: It is easier to say ‘My tooth is aching’ than to say ‘My heart is broken.’”  C.S. Lewis , The Problem of Pain"
    
    const list = [
        {
            company_name: "Google India",
            salary: "30,00,000",
            career_website: "https://careers.google.com/"
        },
        {
            company_name: "Microsoft India",
            salary: "25,00,000",
            career_website: "https://careers.microsoft.com/"
        },
        {
            company_name: "Amazon India",
            salary: "20,00,000",
            career_website: "https://www.amazon.jobs/en/"
        },
        {
            company_name: "Facebook (Meta) India",
            salary: "30,00,000",
            career_website: "https://www.metacareers.com/"
        },
        {
            company_name: "Salesforce",
            salary: "22,00,000",
            career_website: "https://www.salesforce.com/company/careers/"
        },
        {
            company_name: "Adobe Systems India",
            salary: "20,00,000",
            career_website: "https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced"
        },
        {
            company_name: "Apple India",
            salary: "25,00,000",
            career_website: "https://www.apple.com/careers/in/"
        },
        {
            company_name: "Intel India",
            salary: "20,00,000",
            career_website: "https://jobs.intel.com/"
        },
        {
            company_name: "Qualcomm",
            salary: "18,00,000",
            career_website: "https://www.qualcomm.com/company/careers"
        },
        {
            company_name: "Deloitte",
            salary: "15,00,000",
            career_website: "https://www2.deloitte.com/global/en/careers.html"
        }
    ];

    const navigate = useNavigate();



    const text = "Question of the day!";
    const QOTD = "Given an unsorted array of integers, sort the array into a wave array. An array arr[0..n-1] is sorted in wave form if: arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= . . .";
    return (
        <div className="bg-black h-screen w-screen relative container">
            <h1 className="text-white flex justify-center text-[50px] ml-[11.5%] tracking-[.40em] pt-[5px]">Puzzler</h1>
            <Navert />

            <div className="w-[88vw] h-[85vh] bg-slate-900/25 rounded-[50px] overflow-hidden flex flex-col ml-[11vw] container">

                <div className="flex grow flex-col  justify-center items-center">
                    <div className="w-[79vw] flex flex-col shadow-black shadow-lg items-center h-[100px] hover:bg-transparent hover:scale-110 transition-all duration-1000 mt-5 bg-[#F7F7F7]/10 rounded-[50px] text-white p-4">
                        <pre>{text}</pre>
                        <p className="mt-2 px-3"> {QOTD}</p>
                    </div>
                </div>

                <div className="m-5 h-full flex-wrap flex">
                    <TradingViewWidget />

                    

                    <div className="ml-10 shadow-black shadow-lg hover:scale-105 transition-all duration-1000 hover:bg-transparent rounded-[20px] bg-[#F7F7F7]/10 w-[25vw] overflow-hidden">
                        <div className="text-white items-center flex justify-center h-[50px] bg-black w-full">Top 10 With Highest Average!</div>
                        <div className="px-8 py-3">
                            {list.map((items, index) => {
                                return (
                                    <div className="hover:scale-105 font-semibold text-white bg-transparent flex p-2 justify-between items-center">
                                        {/* <button onClick={(e) => {window.location.href = items.career_website}}>{items.company_name}</button>
                                    <h1>{"| INR "}{items.salary}</h1> this opens the url in the same window*/}
                                        <button onClick={(e) => { window.open(items.career_website, "_blank", "noopener,noreferrer") }}>{items.company_name}</button>
                                        <h1>{"| INR "}{items.salary}</h1>
                                    </div>
                                )
                            })}
                        </div>
                    </div>


                    <div className="bg-[#F7F7F7]/10 shadow-black shadow-lg font-semibold text-white tracking-widest hover:scale-105 duration-1000 transition-all hover:bg-transparent h-[42vh] p-5 w-[29vw] ml-5 rounded-[20px]">
                        <button><h1>
                            Worried About MAANG or FANG Tech Rounds?<br /> No Worries! Check Out Our Catalogue of 100+ Questions to Ace Your Interviews!
                        </h1>
                            <h1 className="text-[140px] -mt-6">
                                {total}{"+"}
                            </h1>
                            <h1 className="-mt-9">
                                Tech Round Stories
                            </h1>
                            <h1 className="mt-1 font-thin">
                                and still growing Indefinitely
                            </h1>
                        </button>
                    </div>


                    <div className="bg-[#F7F7F7]/10 -translate-y-[290px] tracking-widest shadow-black shadow-lg font-semibold text-white tracking-widest hover:scale-105 duration-1000 transition-all hover:bg-transparent h-[39vh] overflow-hidden w-[25vw] ml-2 rounded-[20px]">
                        <img src="PixelScenery.gif" alt="bg" className="w-full h-full" />
                        <h1 className="absolute text-white tracking-widest px-6 -mt-[220px] flex flex-grow">
                        {thoughts}
                        </h1>
                    </div>



                    
                </div>
            </div>
        </div>
    );
};

export default Quiz;